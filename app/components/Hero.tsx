"use client";

import ParticleField from "./ParticleField";
import { cta, headline, profile } from "../lib/site";

/**
 * Hero stack is capped at four text elements: availability pill, headline,
 * subtext, CTAs. Credibility numbers live in their own section below, not
 * stuffed in here.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-24 pt-24"
    >
      <ParticleField />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#08080A_0%,rgba(8,8,10,0.9)_30%,rgba(8,8,10,0.45)_58%,rgba(8,8,10,0.35)_74%,#08080A_96%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_75%_at_50%_30%,transparent_38%,rgba(8,8,10,0.62)_78%,#08080A_100%)]"
      />

      <div className="relative mx-auto w-full max-w-content">
        {/* Availability: a real state, so the dot earns its place. Static,
            because a pulse would not communicate anything the dot does not. */}
        <div className="animate-fade-up opacity-0 [animation-delay:100ms]">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-signal-500" />
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted">
              {profile.availability}
            </span>
          </span>
        </div>

        <h1 className="mt-8 max-w-4xl text-balance pb-1 text-5xl font-semibold leading-[1.12] tracking-tightest opacity-0 animate-fade-up [animation-delay:200ms] sm:text-6xl md:text-7xl">
          {headline.lead}{" "}
          <span className="italic text-signal-400">{headline.emphasis}</span>
        </h1>

        <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-fg-muted opacity-0 animate-fade-up [animation-delay:320ms]">
          {headline.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 opacity-0 animate-fade-up [animation-delay:440ms]">
          <a href="#work" className="btn-primary">
            {cta.work}
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            {cta.resume}
          </a>
        </div>
      </div>
    </section>
  );
}
