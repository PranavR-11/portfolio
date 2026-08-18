"use client";

import Section from "./Section";
import Reveal from "./Reveal";
import { experience } from "../lib/site";

export default function Experience() {
  return (
    <Section
      id="work"
      index="01"
      eyebrow="Experience"
      title={
        <>
          Where I&apos;ve <span className="accent-serif">shipped</span> things
        </>
      }
      lede="Four roles across automotive tech, enterprise consulting and industrial IoT — most of it spent getting models out of notebooks and into something people use daily."
    >
      <ol className="relative">
        {/* Timeline spine */}
        <div
          aria-hidden
          className="absolute left-0 top-2 hidden h-full w-px bg-gradient-to-b from-white/15 via-white/[0.07] to-transparent md:block"
        />

        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 70}>
            <article className="group relative border-b border-white/[0.07] py-10 md:pl-10">
              {/* Node on the spine */}
              <span
                aria-hidden
                className="absolute -left-[3.5px] top-[3.25rem] hidden h-[7px] w-[7px] rounded-full bg-ink-600 transition-colors duration-300 group-hover:bg-iris-400 md:block"
              />

              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-snug sm:text-2xl">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-iris-300">{job.company}</p>
                </div>
                <div className="mt-2 flex items-center gap-3 md:mt-0">
                  <span className="tag">{job.kind}</span>
                  <span className="font-mono text-xs tabular-nums text-fg-faint">
                    {job.period}
                  </span>
                </div>
              </div>

              <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-fg-muted">
                {job.summary}
              </p>

              <ul className="mt-5 max-w-3xl space-y-3">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-fg-faint"
                  >
                    <span
                      aria-hidden
                      className="mt-[0.55rem] h-px w-4 flex-none bg-white/20"
                    />
                    <span className="text-pretty">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {job.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
