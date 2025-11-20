"use client";
import { Link as ScrollLink, animateScroll } from "react-scroll";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "hero",
        "about",
        "skills",
        "education",
        "workex",
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
    { name: "WORK", id: "workex" },
    { name: "PROJECTS", id: "projects" },
    { name: "PUBLICATIONS", id: "publications" },
    { name: "CERTS", id: "certifications" },
    { name: "GALLERY", id: "artgallery" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-card shadow-lg shadow-cyber-primary/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div
            className="cursor-pointer group"
            onClick={() => animateScroll.scrollToTop()}
          >
            <h1 className="text-xl sm:text-2xl font-bold font-mono">
              <span className="text-cyber-primary group-hover:text-glow transition-all">&lt;</span>
              <span className="text-white group-hover:text-cyber-primary transition-colors">PR</span>
              <span className="text-cyber-primary group-hover:text-glow transition-all">/&gt;</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center justify-center gap-1 flex-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <ScrollLink
                to={link.id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className={`cursor-pointer font-mono text-sm px-4 py-2 rounded-md transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-cyber-primary bg-cyber-primary/10 neon-border"
                    : "text-gray-300 hover:text-cyber-primary hover:bg-cyber-primary/5"
                }`}
              >
                {link.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-cyber-primary hover:text-cyber-secondary focus:outline-none transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="glass-card mx-4 mb-4 rounded-lg p-4">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <ScrollLink
                  to={link.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block cursor-pointer font-mono text-sm px-4 py-3 rounded-md transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-cyber-primary bg-cyber-primary/10 neon-border"
                      : "text-gray-300 hover:text-cyber-primary hover:bg-cyber-primary/5"
                  }`}
                >
                  <span className="text-cyber-secondary mr-2">&gt;</span>
                  {link.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
