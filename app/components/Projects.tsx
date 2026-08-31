"use client";

import { useMemo, useState } from "react";
import Section from "./Section";
import Reveal from "./Reveal";
import { profile, projects } from "../lib/site";

/**
 * Asymmetric grid rather than a uniform card wall. The first two entries take
 * wider cells and show their detail lines; the rest run compact. Cell count
 * always matches item count, so the grid never ends on a blank tile.
 */
function spanFor(index: number, total: number) {
  if (index === 0) return "md:col-span-4";
  if (index === 1) return "md:col-span-2";
  // Keep the final row balanced when the remaining count is odd.
  const remaining = total - 2;
  const posInTail = index - 2;
  if (remaining % 2 === 1 && posInTail === remaining - 1) return "md:col-span-6";
  return "md:col-span-3";
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
      title={
        <>
          Things I&apos;ve <span className="italic text-signal-400">built</span>
        </>
      }
      lede="A mix of production systems, research code, and analysis I did because the question would not leave me alone."
    >
      <Reveal>
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all duration-300 ${
                filter === cat
                  ? "border-signal-500/50 bg-signal-500/10 text-signal-300"
                  : "border-white/[0.08] text-fg-faint hover:border-white/20 hover:text-fg"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-6">
        {visible.map((project, i) => {
          const wide = i < 2;
          return (
            <Reveal
              key={project.title}
              delay={i * 55}
              className={spanFor(i, visible.length)}
            >
              <article className="surface surface-hover group relative flex h-full flex-col overflow-hidden p-6 sm:p-7">
                {/* Accent hairline that draws across on hover. */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-signal-500 to-transparent transition-transform duration-500 group-hover:scale-x-100"
                />

                <div className="flex items-center justify-between gap-4">
                  <span className="tag">{project.category}</span>
                  <span className="font-mono text-xs tabular-nums text-fg-faint">
                    {project.year}
                  </span>
                </div>

                <h3
                  className={`mt-5 font-semibold tracking-snug transition-colors group-hover:text-signal-300 ${
                    wide ? "text-2xl sm:text-3xl" : "text-lg"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`mt-3 text-pretty leading-relaxed text-fg-muted ${
                    wide ? "max-w-2xl text-base" : "text-sm"
                  }`}
                >
                  {project.description}
                </p>

                {/* Detail lines only on the lead cells, so the compact cells
                    stay compact instead of every card reading identically. */}
                {wide && (
                  <ul className="mt-5 space-y-2">
                    {project.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-2.5 text-xs leading-relaxed text-fg-faint"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.5rem] h-px w-3 flex-none bg-signal-500/60"
                        />
                        <span className="text-pretty">{point}</span>
                      </li>
                    ))}
                  </ul>
                )}

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
          );
        })}
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
