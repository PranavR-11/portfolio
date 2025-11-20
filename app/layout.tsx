"use client";

import React from "react";
import Script from "next/script";
import "./globals.css";
import VantaBackground from "./components/VantaBackground";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1TQN5YR32B"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1TQN5YR32B');
          `}
        </Script>
      </head>
      <body className="relative">
        {/* Vanta.js Background */}
        <VantaBackground />
        {/* Main content */}
        <div className="main-content relative">{children}</div>
      </body>
    </html>
  );
}
