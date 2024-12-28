"use client";

import React, { useEffect, useRef } from "react";
import VANTA_WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: any;
    if (vantaRef.current) {
      vantaEffect = VANTA_WAVES({
        el: vantaRef.current,
        THREE, // Ensures Vanta.js has access to THREE.js
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x1d3557, // Set wave color
        shininess: 50,   // Adjust shininess for clarity
        waveSpeed: 1.0,  // Control wave speed
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <html lang="en">
      <body className="relative">
        {/* Attach Vanta.js to this div */}
        <div ref={vantaRef} className="vanta-bg fixed inset-0 -z-10"></div>
        <div className="main-content relative">{children}</div>
      </body>
    </html>
  );
}