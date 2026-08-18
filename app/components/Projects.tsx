"use client";

import { useMemo, useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { featured, profile, projects } from "../lib/site";

function FeaturedProject() {
  return (
    <Reveal>
      <article className="surface grain relative overflow-hidden">
        {/* Accent wash across the top edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-iris-400/60 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/4 h-64 w-[36rem] rounded-full bg-iris-600/15 blur-[100px]"
        />

        <div className="relative grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="eyebrow text-iris-300">{featured.eyebrow}</span>
              <span className="rule w-12" />
            </div>

            <h3 className="mt-5 text-3xl font-semibold tracking-snug sm:text-4xl">
              {featured.title}
            </h3>
            <p className="mt-2 text-lg text-fg-muted">{featured.subtitle}</p>

            <p className="mt-6 max-w-prose text-pretty leading-relaxed text-fg-muted">
              {featured.summary}
            </p>

            <div className="mt-8">
              <h4 className="eyebrow">Why I built it</h4>
              <p className="mt-3 max-w-prose text-pretty text-sm leading-relaxed text-fg-faint">
                {featured.why}
              </p>
            </div>

            <div className="mt-8">
              <h4 className="eyebrow">How it works</h4>
              <dl className="mt-4 space-y-3">
                {featured.architecture.map((row) => (
                  <div
                    key={row.label}
                    className="grid gap-1 border-l border-white/10 pl-4 sm:grid-cols-[7rem_1fr] sm:gap-4 sm:border-0 sm:pl-0"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-iris-300 sm:pt-0.5">
                      {row.label}
                    </dt>
                    <dd className="text-pretty text-sm leading-relaxed text-fg-faint">
                      {row.detail}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={featured.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit the live site
                <span aria-hidden>↗</span>
              </a>
              <a href={`mailto:${profile.email}`} className="btn-ghost">
                Talk to me about it
              </a>
            </div>
          </div>

          {/* Demo + capabilities */}
          <div className="lg:pt-2">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl shadow-black/50">
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
            <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-fg-faint">
              Walkthrough demo
            </p>

            <ul className="mt-8 space-y-3">
              {featured.capabilities.map((cap) => (
                <li
                  key={cap}
                  className="flex items-start gap-3 text-sm text-fg-muted"
                >
                  <span aria-hidden className="mt-0.5 text-iris-400">
                    ▸
                  </span>
                  <span className="text-pretty">{cap}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {featured.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [filter, setFilter] = useState("All");

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      index="02"
      eyebrow="Selected projects"
      title={
        <>
          Things I&apos;ve <span className="accent-serif">built</span>
        </>
      }
      lede="A mix of production systems, research code and analysis I did because the question wouldn't leave me alone."
    >
      <FeaturedProject />

      {/* Filter */}
      <Reveal className="mt-20">
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all duration-300 ${
                filter === cat
                  ? "border-white/25 bg-white/[0.08] text-fg"
                  : "border-white/[0.08] text-fg-faint hover:border-white/20 hover:text-fg"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {visible.map((project, i) => (
          <Reveal key={project.title} delay={i * 60}>
            <article className="surface surface-hover group flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="tag">{project.category}</span>
                <span className="font-mono text-xs tabular-nums text-fg-faint">
                  {project.year}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-snug transition-colors group-hover:text-iris-200">
                {project.title}
              </h3>

              <p className="mt-3 text-pretty text-sm leading-relaxed text-fg-muted">
                {project.description}
              </p>

              <ul className="mt-5 space-y-2">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-xs leading-relaxed text-fg-faint"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.5rem] h-px w-3 flex-none bg-white/20"
                    />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Pushed to the bottom so cards in a row line up */}
              <div className="mt-auto pt-7">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline mt-6 text-sm"
                >
                  {project.linkLabel}
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          Everything else on GitHub
          <span aria-hidden>↗</span>
        </a>
      </Reveal>
    </Section>
  );
}
