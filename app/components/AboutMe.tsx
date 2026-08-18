"use client";

import Section from "./Section";
import Reveal from "./Reveal";
import { about, education, skills } from "../lib/site";

export default function AboutMe() {
  return (
    <Section
      id="about"
      index="03"
      eyebrow="About"
      title={
        <>
          Engineer first, <span className="accent-serif">analyst</span> by
          training
        </>
      }
    >
      <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        {/* Bio */}
        <Reveal>
          <div className="space-y-5">
            {about.paragraphs.map((para) => (
              <p
                key={para}
                className="text-pretty text-lg leading-relaxed text-fg-muted"
              >
                {para}
              </p>
            ))}
          </div>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.06] sm:grid-cols-3">
            {about.facts.map((fact) => (
              <div key={fact.label} className="bg-ink-950 p-5">
                <dt className="eyebrow">{fact.label}</dt>
                <dd className="mt-2 text-sm text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Education */}
        <Reveal delay={100}>
          <h3 className="eyebrow">Education</h3>
          <div className="mt-5 space-y-px overflow-hidden rounded-xl border border-white/[0.07]">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="bg-ink-900/50 p-6 transition-colors duration-300 hover:bg-ink-850"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="font-semibold tracking-snug">{edu.school}</h4>
                  <span className="font-mono text-xs tabular-nums text-fg-faint">
                    {edu.period}
                  </span>
                </div>
                <p className="mt-1.5 text-sm text-fg-muted">{edu.degree}</p>
                <p className="mt-1 text-xs text-fg-faint">{edu.location}</p>
              </div>
            ))}
          </div>

          <h3 className="eyebrow mt-12">Toolkit</h3>
          <div className="mt-5 space-y-6">
            {skills.map((group) => (
              <div key={group.group}>
                <h4 className="text-sm font-medium text-fg">{group.group}</h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
