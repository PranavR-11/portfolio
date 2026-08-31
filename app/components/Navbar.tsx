"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { cta, navLinks, profile } from "../lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);

  /**
   * Condensed-nav state comes from a sentinel crossing the top of the
   * viewport, not a scroll listener. A scroll handler fires on every frame
   * and re-renders the tree with it.
   */
  useEffect(() => {
    const node = sentinel.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "-24px 0px 0px 0px", threshold: 0 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Track the section occupying the middle of the viewport.
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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div ref={sentinel} aria-hidden className="absolute top-0 h-px w-full" />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-white/[0.07] bg-ink-950/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-6">
          <a href="#hero" className="group flex items-center gap-2.5" aria-label="Back to top">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] font-mono text-xs font-medium transition-colors group-hover:border-signal-500/50 group-hover:text-signal-400">
              PR
            </span>
            <span className="hidden text-sm font-medium tracking-snug sm:block">
              {profile.name}
            </span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    active === link.id ? "text-fg" : "text-fg-muted hover:text-fg"
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
              className="hidden whitespace-nowrap rounded-full bg-fg px-5 py-2 text-sm font-medium text-ink-950 transition-colors hover:bg-white sm:inline-flex"
            >
              {cta.contact}
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-full border border-white/10 p-2 text-fg md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <div
          className={`overflow-hidden border-t border-white/[0.07] bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 md:hidden ${
            open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="px-6 py-2">
            {[...navLinks, { label: cta.contact, id: "contact" }].map((link) => (
              <li key={link.id} className="border-b border-white/[0.05] last:border-0">
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-base text-fg-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
}
