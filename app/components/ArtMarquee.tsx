import Image from "next/image";
import { artwork } from "../lib/site";

/**
 * Full-bleed band of Pranav's own artwork, drifting horizontally.
 *
 * The only marquee on the page, and it earns the slot: it breaks a long run of
 * text sections with real imagery, and it previews the gallery further down
 * without pulling that section forward. Pure CSS translate on a duplicated
 * track, so there is no scroll listener and nothing to clean up.
 */
export default function ArtMarquee() {
  // Duplicated so the -50% translate loops seamlessly.
  const track = [...artwork, ...artwork];

  return (
    <section
      aria-label="Artwork by Pranav Rebala"
      className="relative overflow-hidden border-y border-white/[0.07] py-6"
    >
      {/* Edges fade into the page so the band has no hard cut. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent sm:w-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent sm:w-40"
      />

      <div className="marquee-track flex w-max gap-4">
        {track.map((art, i) => (
          <a
            key={`${art.src}-${i}`}
            href="#gallery"
            aria-hidden={i >= artwork.length}
            tabIndex={i >= artwork.length ? -1 : 0}
            className="group relative block h-32 w-48 flex-none overflow-hidden rounded-lg border border-white/[0.07] sm:h-40 sm:w-60"
          >
            <Image
              src={art.thumb}
              alt={i >= artwork.length ? "" : art.title}
              width={480}
              height={320}
              sizes="240px"
              className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
