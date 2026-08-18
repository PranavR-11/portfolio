import type { ReactNode } from "react";
import Reveal from "./Reveal";

/**
 * Standard section shell: consistent vertical rhythm, max width, and the
 * numbered eyebrow + heading pair that opens every section on the page.
 */
export default function Section({
  id,
  index,
  eyebrow,
  title,
  lede,
  children,
  className = "",
}: {
  id: string;
  /** Two-digit marker shown before the eyebrow, e.g. "02". */
  index: string;
  eyebrow: string;
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
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tabular-nums text-iris-400">
              {index}
            </span>
            <span className="eyebrow">{eyebrow}</span>
            <span className="rule flex-1" />
          </div>

          <h2 className="mt-6 max-w-3xl text-balance text-3xl font-semibold tracking-snug sm:text-4xl md:text-5xl">
            {title}
          </h2>

          {lede && (
            <p className="mt-4 max-w-prose text-pretty text-base leading-relaxed text-fg-muted">
              {lede}
            </p>
          )}
        </Reveal>

        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
