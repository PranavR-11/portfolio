"use client";

import { useEffect, useRef } from "react";

/**
 * A GPU-driven point-grid surface: ~15k points on a tilted plane, displaced by a
 * sum of travelling sine waves in the vertex shader. Reads as a slowly breathing
 * topography rather than a generic starfield.
 *
 * Cheap on purpose: one draw call, no per-frame CPU work on the geometry, and
 * the loop parks itself whenever the canvas is off-screen or the tab is hidden.
 */
export default function ParticleField() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;

    (async () => {
      const THREE = await import("three");
      if (disposed || !hostRef.current) return;

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        55,
        host.clientWidth / host.clientHeight,
        0.1,
        100
      );
      camera.position.set(0, 4.2, 11);
      camera.lookAt(0, -0.4, 0);

      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
      });
      renderer.setSize(host.clientWidth, host.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      host.appendChild(renderer.domElement);

      // ---- geometry: a flat lattice, displaced entirely on the GPU ----
      const COLS = 190;
      const ROWS = 110;
      const SPAN_X = 34;
      const SPAN_Z = 22;

      const count = COLS * ROWS;
      const positions = new Float32Array(count * 3);
      const seeds = new Float32Array(count);

      let i = 0;
      for (let c = 0; c < COLS; c++) {
        for (let r = 0; r < ROWS; r++) {
          positions[i * 3] = (c / (COLS - 1) - 0.5) * SPAN_X;
          positions[i * 3 + 1] = 0;
          positions[i * 3 + 2] = (r / (ROWS - 1) - 0.5) * SPAN_Z;
          seeds[i] = Math.random();
          i++;
        }
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));

      const uniforms = {
        uTime: { value: 0 },
        uPointer: { value: new THREE.Vector2(0, 0) },
        uSize: { value: renderer.getPixelRatio() * 2.0 },
        uColorLow: { value: new THREE.Color("#4A3520") },
        uColorHigh: { value: new THREE.Color("#FFB273") },
      };

      const material = new THREE.ShaderMaterial({
        uniforms,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexShader: /* glsl */ `
          uniform float uTime;
          uniform float uSize;
          uniform vec2  uPointer;

          attribute float aSeed;

          varying float vHeight;
          varying float vFade;

          void main() {
            vec3 pos = position;

            // Three travelling waves at different angles/rates keep the surface
            // from ever looking like it loops.
            float w =
                sin(pos.x * 0.26 + uTime * 0.45) * 0.55
              + sin(pos.z * 0.34 - uTime * 0.32) * 0.42
              + sin((pos.x + pos.z) * 0.17 + uTime * 0.22) * 0.5;

            // A soft swell that follows the cursor across the surface.
            float d = distance(pos.xz, uPointer * vec2(9.0, 5.5));
            w += exp(-d * d * 0.02) * 1.15;

            pos.y = w;

            vHeight = smoothstep(-1.2, 1.6, w);

            vec4 mv = modelViewMatrix * vec4(pos, 1.0);

            // Fade points out toward the horizon so the grid dissolves into the
            // page background instead of ending on a hard edge.
            vFade = 1.0 - smoothstep(9.0, 27.0, -mv.z);
            // Also fade the near field, so foreground points do not read as
            // out-of-focus blobs sitting on top of the copy.
            vFade *= smoothstep(3.0, 8.5, -mv.z);
            vFade *= 0.35 + aSeed * 0.65;

            gl_Position = projectionMatrix * mv;
            gl_PointSize = min(uSize * (1.0 + vHeight * 1.1) * (11.0 / -mv.z), uSize * 3.2);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform vec3 uColorLow;
          uniform vec3 uColorHigh;

          varying float vHeight;
          varying float vFade;

          void main() {
            // Round, soft-edged points.
            vec2 uv = gl_PointCoord - 0.5;
            float r = dot(uv, uv);
            if (r > 0.25) discard;

            float alpha = smoothstep(0.25, 0.0, r) * vFade;
            vec3 color = mix(uColorLow, uColorHigh, vHeight);

            gl_FragColor = vec4(color, alpha * 0.85);
          }
        `,
      });

      const points = new THREE.Points(geometry, material);
      points.rotation.x = -0.12;
      scene.add(points);

      // ---- interaction ----
      const pointer = new THREE.Vector2(0, 0);
      const target = new THREE.Vector2(0, 0);

      const onPointerMove = (e: PointerEvent) => {
        target.set(
          (e.clientX / window.innerWidth) * 2 - 1,
          -((e.clientY / window.innerHeight) * 2 - 1)
        );
      };
      window.addEventListener("pointermove", onPointerMove, { passive: true });

      const onResize = () => {
        if (!hostRef.current) return;
        const w = hostRef.current.clientWidth;
        const h = hostRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        uniforms.uSize.value = renderer.getPixelRatio() * 2.0;
      };
      window.addEventListener("resize", onResize);

      // ---- render loop, parked when not visible ----
      let raf = 0;
      let running = false;
      const clock = new THREE.Clock();

      const frame = () => {
        raf = requestAnimationFrame(frame);

        pointer.lerp(target, 0.04);
        uniforms.uPointer.value.copy(pointer);
        uniforms.uTime.value = clock.getElapsedTime();

        // Very slight counter-drift of the camera adds parallax depth.
        camera.position.x = pointer.x * 0.9;
        camera.position.y = 4.2 + pointer.y * 0.45;
        camera.lookAt(0, -0.4, 0);

        renderer.render(scene, camera);
      };

      const start = () => {
        if (running || reduceMotion) return;
        running = true;
        clock.start();
        frame();
      };

      const stop = () => {
        if (!running) return;
        running = false;
        cancelAnimationFrame(raf);
        clock.stop();
      };

      if (reduceMotion) {
        // Honour the preference: draw one static frame and leave it be.
        renderer.render(scene, camera);
      } else {
        start();
      }

      const io = new IntersectionObserver(
        ([entry]) => (entry.isIntersecting ? start() : stop()),
        { threshold: 0 }
      );
      io.observe(host);

      const onVisibility = () =>
        document.hidden ? stop() : io.takeRecords().length === 0 && start();
      document.addEventListener("visibilitychange", onVisibility);

      cleanup = () => {
        stop();
        io.disconnect();
        document.removeEventListener("visibilitychange", onVisibility);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("resize", onResize);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    />
  );
}
