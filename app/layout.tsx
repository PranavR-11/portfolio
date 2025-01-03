"use client";

import React from "react";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Main content */}
        <div className="main-content relative">{children}</div>
      </body>
    </html>
  );
}