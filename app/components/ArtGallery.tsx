"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Section from "./Section";
import Reveal from "./Reveal";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { artwork } from "../lib/site";

export default function ArtGallery() {
  const [index, setIndex] = useState<number | null>(null);
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setIndex((i) => (i === null ? i : (i + delta + artwork.length) % artwork.length)),
    []
  );

  // Keyboard control while the lightbox is open.
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, step]);

  const current = index === null ? null : artwork[index];

  return (
    <Section
      id="gallery"
      title={
        <>
          I also <span className="italic text-signal-400">draw</span>
        </>
      }
      lede="Pencil and digital work, mostly done at hours I should have been asleep."
    >
      {/* Masonry via CSS columns, so each piece keeps its natural ratio. */}
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4 [&>*]:mb-4">
        {artwork.map((art, i) => (
          <Reveal key={art.src} delay={Math.min(i, 8) * 45}>
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden rounded-xl border border-white/[0.07] bg-ink-900"
              aria-label={`View ${art.title} full size`}
            >
              <Image
                src={art.thumb}
                alt={art.title}
                width={600}
                height={800}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 translate-y-2 p-4 text-left text-sm text-fg opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {art.title}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Lightbox */}
      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          onClick={close}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-md sm:p-10"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 rounded-full border border-white/15 p-2.5 text-fg transition-colors hover:bg-white/10"
          >
            <X size={18} strokeWidth={1.8} aria-hidden />
          </button>

          {[-1, 1].map((dir) => (
            <button
              key={dir}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(dir);
              }}
              aria-label={dir === 1 ? "Next piece" : "Previous piece"}
              className={`absolute top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/15 p-3 text-fg transition-colors hover:bg-white/10 ${
                dir === 1 ? "right-4 sm:right-8" : "left-4 sm:left-8"
              }`}
            >
              {dir === 1 ? (
                <ArrowRight size={18} strokeWidth={1.8} aria-hidden />
              ) : (
                <ArrowLeft size={18} strokeWidth={1.8} aria-hidden />
              )}
            </button>
          ))}

          <figure
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-4xl"
          >
            <Image
              src={current.src}
              alt={current.title}
              width={1400}
              height={1400}
              className="max-h-[80vh] w-auto rounded-lg object-contain"
            />
            <figcaption className="mt-4 text-center font-mono text-xs uppercase tracking-[0.18em] text-fg-faint">
              {current.title}
            </figcaption>
          </figure>
        </div>
      )}
    </Section>
  );
}
