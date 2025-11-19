"use client";

import { useEffect, useRef } from "react";

export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {
      // Dynamically load scripts
      const loadVanta = async () => {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const VANTA: any = await import("vanta/dist/vanta.net.min.js");
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const THREE: any = await import("three");

          vantaEffect.current = VANTA.default({
            el: vantaRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x00f0ff,
            backgroundColor: 0x050508,
            points: 8.0,
            maxDistance: 20.0,
            spacing: 15.0,
          });
        } catch (error) {
          console.error("Error loading Vanta:", error);
        }
      };

      loadVanta();
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="vanta-bg fixed top-0 left-0 w-full h-full"
      style={{ zIndex: -10 }}
    />
  );
}
