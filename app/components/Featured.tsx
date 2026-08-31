"use client";

import Reveal from "./Reveal";
import { cta, featured } from "../lib/site";

/**
 * Full-bleed showcase for the strongest project, placed high on the page.
 *
 * A recruiter scanning for thirty seconds should hit real working software
 * before they hit a resume timeline, so this leads. Layout family is
 * deliberately unlike anything else here: edge-to-edge dark panel, oversized
 * video, architecture as a numbered spec column.
 */
export default function Featured() {
  return (
    <section
      id="featured"
      className="relative scroll-mt-24 overflow-hidden border-y border-white/[0.07] bg-ink-900/40 px-6 py-24 sm:py-28"
    >
      {/* Accent bloom, anchored behind the video rather than centred. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[30rem] w-[46rem] rounded-full bg-signal-600/12 blur-[130px]"
      />

      <div className="relative mx-auto w-full max-w-content">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="pb-1 text-4xl font-semibold leading-[1.08] tracking-tightest sm:text-5xl md:text-6xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-xl text-lg text-fg-muted">
                {featured.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={featured.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit the live site
                <span aria-hidden>↗</span>
              </a>
              <a href="#contact" className="btn-ghost">
                {cta.contact}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Oversized demo. This is the page's primary visual asset. */}
        <Reveal delay={80}>
          <div className="group relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-ink-950 shadow-2xl shadow-black/60">
            <video
              src={featured.video}
              poster={featured.poster}
              controls
              preload="none"
              playsInline
              className="aspect-video w-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal delay={120}>
            <p className="text-pretty text-lg leading-relaxed text-fg-muted">
              {featured.summary}
            </p>
            <p className="mt-6 text-pretty leading-relaxed text-fg-faint">
              {featured.why}
            </p>

            <ul className="mt-8 space-y-2.5">
              {featured.capabilities.map((cap) => (
                <li key={cap} className="flex items-start gap-3 text-sm text-fg-muted">
                  <span aria-hidden className="mt-2 h-1 w-1 flex-none rounded-full bg-signal-500" />
                  <span className="text-pretty">{cap}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Architecture as a numbered spec column: a different rhythm from
              the bulleted lists everywhere else. */}
          <Reveal delay={180}>
            <ol className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {featured.architecture.map((row, i) => (
                <li key={row.label} className="grid gap-2 py-5 sm:grid-cols-[3rem_7rem_1fr] sm:gap-5">
                  <span className="font-mono text-xs tabular-nums text-signal-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-fg">{row.label}</span>
                  <span className="text-pretty text-sm leading-relaxed text-fg-faint">
                    {row.detail}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex flex-wrap gap-2">
              {featured.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
