"use client";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const navLinks = [
    { name: "HOME", id: "hero" },
    { name: "ABOUT", id: "about" },
    { name: "SKILLS", id: "skills" },
    { name: "EDUCATION", id: "education" },
    { name: "WORK EXPERIENCE", id: "work" },
    { name: "PROJECTS", id: "projects" },
    { name: "PUBLICATIONS", id: "publications" },
    { name: "CERTIFICATIONS", id: "certifications" },
    { name: "ART GALLERY", id: "artgallery" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-transparent backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile Only: "Pranav Rebala" */}
        <h1
          className="text-2xl font-bold text-blue-400 cursor-pointer flex-shrink-0 lg:hidden text-center w-full"
          onClick={() => animateScroll.scrollToTop()}
        >
          Pranav Rebala
        </h1>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="lg:hidden text-blue-400 hover:text-blue-500 focus:outline-none mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex flex-grow justify-evenly items-center text-white">
          {navLinks.map((link) => (
            <li key={link.id}>
              <ScrollLink
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                className={`cursor-pointer font-semibold ${
                  activeSection === link.id
                    ? "text-blue-400 bg-white"
                    : "hover:text-blue-400 hover:bg-white"
                } transition-colors duration-300 px-3 py-2 rounded`}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } mt-4 pb-4 transition-all duration-300 ease-in-out`}
      >
        <ul className="space-y-2">
          {navLinks.map((link) => (
            <li key={link.id}>
              <ScrollLink
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                onClick={() => setIsMenuOpen(false)}
                className={`block cursor-pointer font-semibold ${
                  activeSection === link.id
                    ? "text-blue-400 bg-white"
                    : "text-white hover:text-blue-400 hover:bg-white"
                } transition-colors duration-300 px-3 py-2 rounded`}
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