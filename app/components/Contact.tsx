"use client";

import Reveal from "./Reveal";
import { profile } from "../lib/site";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Résumé", href: profile.resume },
];

export default function Contact() {
  return (
    <footer id="contact" className="relative scroll-mt-24 overflow-hidden px-6 pb-12 pt-12 sm:pt-20">
      {/* Soft accent glow anchoring the bottom of the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[52rem] -translate-x-1/2 rounded-full bg-iris-600/20 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-content">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tabular-nums text-iris-400">
              06
            </span>
            <span className="eyebrow">Contact</span>
            <span className="rule flex-1" />
          </div>

          <h2 className="mt-8 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tightest sm:text-5xl md:text-6xl">
            Got something worth <span className="accent-serif">building</span>?
          </h2>

          <p className="mt-6 max-w-prose text-pretty text-lg leading-relaxed text-fg-muted">
            I&apos;m open to ML and data roles, and always happy to talk through
            a problem — especially if it sits where models meet real users.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              LinkedIn
              <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col gap-6 border-t border-white/[0.07] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-fg-faint">
            © {new Date().getFullYear()} {profile.name} · {profile.location}
          </p>

          <nav className="flex flex-wrap gap-6" aria-label="Elsewhere">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-sm text-fg-muted"
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
