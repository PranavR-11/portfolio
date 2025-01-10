"use client";

import React from "react";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1TQN5YR32B"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1TQN5YR32B');
            `,
          }}
        />
      </head>
      <body className="relative">
        {/* Main content */}
        <div className="main-content relative">{children}</div>
      </body>
    </html>
  );
}