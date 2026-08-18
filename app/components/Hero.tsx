"use client";

import ParticleField from "./ParticleField";
import { headline, profile, stats } from "../lib/site";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-20 pt-32"
    >
      {/* WebGL surface, then two scrims: a vertical one that keeps the type on
          darker ground, and a vignette that closes the edges of the frame. */}
      <ParticleField />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#08080B_0%,rgba(8,8,11,0.9)_32%,rgba(8,8,11,0.5)_56%,rgba(8,8,11,0.28)_74%,rgba(8,8,11,0.85)_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_75%_at_50%_35%,transparent_35%,rgba(8,8,11,0.6)_75%,#08080B_100%)]"
      />
      <div aria-hidden className="grain pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-content">
        {/* Availability pill */}
        <div className="animate-fade-up opacity-0 [animation-delay:100ms]">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-iris-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-iris-300" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-muted">
              {profile.availability}
            </span>
          </span>
        </div>

        <h1 className="mt-8 max-w-5xl text-balance text-[2.75rem] font-semibold leading-[1.03] tracking-tightest opacity-0 animate-fade-up [animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          {headline.lead}{" "}
          <span className="accent-serif pr-1">{headline.accent}</span>{" "}
          {headline.trail}
        </h1>

        <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-fg-muted opacity-0 animate-fade-up [animation-delay:320ms] sm:text-lg">
          {headline.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 opacity-0 animate-fade-up [animation-delay:440ms]">
          <a href="#work" className="btn-primary">
            See my work
            <span aria-hidden>↓</span>
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Résumé
            <span aria-hidden>↗</span>
          </a>
          <span className="ml-1 hidden font-mono text-xs text-fg-faint sm:inline">
            {profile.location}
          </span>
        </div>

        {/* Credibility numbers, pulled from the work below. */}
        <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/[0.07] pt-10 opacity-0 animate-fade-up [animation-delay:560ms] md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-3xl font-semibold tracking-snug text-fg sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-2 max-w-[16rem] text-sm leading-snug text-fg-faint">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
