import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Standard section shell: consistent rhythm, max width, heading.
 *
 * `eyebrow` is deliberately optional and rationed. Putting a small uppercase
 * label above every section header produces a templated rhythm where every
 * section looks like every other one. The page allows two, total. Everywhere
 * else the headline carries the section on its own, and position on the page
 * supplies the rest of the context.
 */
export default function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-6 py-24 sm:py-32 ${className}`}
    >
      <div className="mx-auto w-full max-w-content">
        <Reveal>
          {eyebrow && (
            <div className="mb-5 flex items-center gap-4">
              <span className="eyebrow">{eyebrow}</span>
              <span className="rule w-24" />
            </div>
          )}

          <h2 className="max-w-3xl text-balance pb-1 text-3xl font-semibold leading-[1.12] tracking-snug sm:text-4xl md:text-5xl">
            {title}
          </h2>

          {lede && (
            <p className="mt-4 max-w-prose text-pretty leading-relaxed text-fg-muted">
              {lede}
            </p>
          )}
        </Reveal>

        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
