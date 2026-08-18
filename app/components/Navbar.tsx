"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track the section currently occupying the middle of the viewport.
  useEffect(() => {
    const ids = ["hero", ...navLinks.map((l) => l.id), "contact"];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Don't leave the page scrollable behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.07] bg-ink-950/70 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="group flex items-center gap-2.5"
          aria-label="Back to top"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] font-mono text-xs font-medium tracking-tight transition-colors group-hover:border-iris-400/50 group-hover:text-iris-300">
            PR
          </span>
          <span className="hidden text-sm font-medium tracking-snug sm:block">
            {profile.name}
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  active === link.id
                    ? "text-fg"
                    : "text-fg-muted hover:text-fg"
                }`}
              >
                {active === link.id && (
                  <span className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.05]" />
                )}
                <span className="relative">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-fg px-5 py-2 text-sm font-medium text-ink-950 transition-colors hover:bg-white sm:inline-flex"
          >
            Get in touch
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg border border-white/10 p-2 text-fg md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden border-t border-white/[0.07] bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-400 md:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 py-4">
          {[...navLinks, { label: "Contact", id: "contact" }].map((link) => (
            <li key={link.id} className="border-b border-white/[0.05] last:border-0">
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between py-4 text-base text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
                <span aria-hidden className="font-mono text-xs text-fg-faint">
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
