"use client";

import { useState, useEffect } from "react";

export default function Hero() {
  const [name, setName] = useState("");

  useEffect(() => {
    typeText("Prranav Rebala");
  }, []);

  const typeText = (textToType: string) => {
    let index = 0;
    setName(""); // Reset name before typing
    const interval = setInterval(() => {
      if (index < textToType.length) {
        setName((prevText) => prevText + textToType.charAt(index)); // Append one character
        index++;
      } else {
        clearInterval(interval); // Stop interval once done
      }
    }, 200); // 200ms per character
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-center px-4">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
        {name}
        <span className="text-blue-400 blinking">|</span>
      </h1>
      <h2 className="text-base sm:text-lg md:text-xl font-semibold">Aspiring Analyst | Machine Learning & Data Science Enthusiast</h2>
      <p className="text-sm sm:text-base md:text-lg text-blue-400 mb-6 max-w-2xl">
        A passionate coder and creator, leveraging data to solve real-world
        problems through Machine Learning, Data Science, and Analytics.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
        <a
          href="/portfolio/cv.pdf"
          className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-400 rounded text-sm sm:text-base text-white hover:bg-blue-500 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          Download CV
        </a>
      </div>
      <div className="flex gap-6 text-blue-400">
        <a
          href="https://github.com/PranavR-11"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-white transition duration-300"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/pranavrebala/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-white transition duration-300"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="mailto:prebala1@babson.edu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:text-white transition duration-300"
          aria-label="Email"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
}