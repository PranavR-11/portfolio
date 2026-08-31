"use client";

import Section from "./Section";
import Reveal from "./Reveal";
import { certifications, publications } from "../lib/site";

export default function Research() {
  return (
    <Section
      id="research"
      title={
        <>
          Peer-reviewed <span className="italic text-signal-400">work</span>
        </>
      }
      lede="Two IEEE conference papers, plus the certifications worth listing."
    >
      <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
        <div>
          <h3 className="eyebrow">Publications</h3>
          <ol className="mt-5">
            {publications.map((pub, i) => (
              <Reveal as="li" key={pub.href} delay={i * 70}>
                <a
                  href={pub.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-3 border-t border-white/[0.07] py-7 transition-colors last:border-b hover:bg-white/[0.02]"
                >
                  <div className="flex items-start justify-between gap-6">
                    <h4 className="text-pretty text-lg font-medium leading-snug transition-colors group-hover:text-signal-300">
                      {pub.title}
                    </h4>
                    <span
                      aria-hidden
                      className="mt-1 flex-none text-fg-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-400"
                    >
                      ↗
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-sm text-fg-muted">{pub.venue}</span>
                    <span className="font-mono text-xs tabular-nums text-fg-faint">
                      {pub.year}
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </ol>
        </div>

        <div>
          <h3 className="eyebrow">Certifications</h3>
          <ul className="mt-5 space-y-3">
            {certifications.map((cert, i) => (
              <Reveal as="li" key={cert.href} delay={i * 70}>
                <a
                  href={cert.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="surface surface-hover group flex items-start justify-between gap-4 p-5"
                >
                  <div>
                    <h4 className="text-pretty text-sm font-medium leading-snug transition-colors group-hover:text-signal-300">
                      {cert.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-fg-faint">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                  <span
                    aria-hidden
                    className="flex-none text-fg-faint transition-colors group-hover:text-signal-400"
                  >
                    ↗
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
