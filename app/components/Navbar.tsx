"use client";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "about",
        "skills",
        "education",
        "work",
        "projects",
        "publications",
        "certifications",
        "artgallery",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          element.getBoundingClientRect().top <= 150 &&
          element.getBoundingClientRect().bottom >= 150
        ) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center px-0 py-3">
        {/* <h1
          className="text-2xl font-bold text-blue-400 cursor-pointer flex-shrink-0 mr-auto"
          onClick={() => animateScroll.scrollToTop()}
        >
          Pranav Rebala
        </h1> */}

        {/* Right: Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-evenly items-center text-white space-x-3 md:space-x-6 px-4">
          {[
            { name: "HOME", id: "hero" },
            { name: "ABOUT", id: "about" },
            { name: "SKILLS", id: "skills" },
            { name: "EDUCATION", id: "education" },
            { name: "WORK EXPERIENCE", id: "work" },
            { name: "PROJECTS", id: "projects" },
            { name: "PUBLICATIONS", id: "publications" },
            { name: "CERTIFICATIONS", id: "certifications" },
            { name: "ART GALLERY", id: "artgallery" },
          ].map((link) => (
            <li key={link.id} className="whitespace-nowrap">
              <ScrollLink
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                className={`cursor-pointer font-semibold text-sm md:text-base ${
                  activeSection === link.id
                    ? "text-blue-400"
                    : "hover:text-blue-400 hover:bg-white"
                } transition-colors duration-300`}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
