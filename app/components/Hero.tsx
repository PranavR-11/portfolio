"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const name = "Pranav Rebala";
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Random glitch effect
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 cyber-grid-bg overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-cyber-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyber-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-cyber-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4">
          <span className="text-cyber-primary font-mono text-sm sm:text-base tracking-wider">
            {`> SYSTEM INITIALIZED_`}
          </span>
        </div>

        <h1 className={`text-5xl sm:text-6xl md:text-8xl font-extrabold mb-6 leading-tight ${isGlitching ? 'animate-glitch' : ''}`}>
          <span style={{ color: 'white' }}>
            {name}
          </span>
          <span className="text-cyber-primary blinking">_</span>
        </h1>

        <div className="space-y-2 mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 font-mono">
            <span className="text-cyber-secondary">[</span>
            Data Analyst
            <span className="text-cyber-secondary"> | </span>
            ML Engineer
            <span className="text-cyber-secondary">]</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Transforming data into actionable insights through{" "}
            <span className="text-cyber-primary font-semibold">Machine Learning</span>,{" "}
            <span className="text-cyber-secondary font-semibold">Analytics</span>, and{" "}
            <span className="text-cyber-accent font-semibold">Full-Stack Development</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="/Pranav_Resume.pdf"
            className="group relative px-8 py-3 bg-transparent neon-border rounded-lg text-cyber-primary font-mono font-semibold hover:bg-cyber-primary/10 transition-all duration-300 overflow-hidden"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span className="relative z-10">DOWNLOAD_CV.exe</span>
            <div className="absolute inset-0 bg-cyber-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a
            href="#projects"
            className="group relative px-8 py-3 bg-cyber-primary/10 border border-cyber-primary/30 rounded-lg text-cyber-primary font-mono font-semibold hover:bg-cyber-primary/20 transition-all duration-300"
          >
            <span className="relative z-10">VIEW_PROJECTS</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-16">
          <a
            href="https://github.com/PranavR-11"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 glass-card hover:neon-border transition-all duration-300"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-2xl text-cyber-primary group-hover:scale-110 transition-transform"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/pranavrebala/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 glass-card hover:neon-border transition-all duration-300"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-2xl text-cyber-primary group-hover:scale-110 transition-transform"></i>
          </a>
          <a
            href="mailto:navrebala@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 glass-card hover:neon-border transition-all duration-300"
            aria-label="Email"
          >
            <i className="fas fa-envelope text-2xl text-cyber-primary group-hover:scale-110 transition-transform"></i>
          </a>
        </div>

        {/* Scroll indicator - placed below social links */}
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-cyber-primary/50 text-xs font-mono">SCROLL</span>
          <div className="w-6 h-10 border-2 border-cyber-primary/30 rounded-full p-1">
            <div className="w-1 h-2 bg-cyber-primary rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
