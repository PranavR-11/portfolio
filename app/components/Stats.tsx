import Reveal from "./Reveal";
import { stats } from "../lib/site";

/**
 * Credibility numbers, moved out of the hero into their own strip directly
 * below it. Deliberately not cards: hairline dividers and space do the
 * grouping, so this reads differently from every other section on the page.
 */
export default function Stats() {
  return (
    <section className="relative px-6 pb-4">
      <div className="mx-auto w-full max-w-content">
        <Reveal>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-white/[0.07] pt-10 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-4xl font-semibold tabular-nums tracking-tightest text-fg sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-3 max-w-[15rem] text-sm leading-snug text-fg-faint">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
