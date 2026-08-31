"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "../lib/site";

/**
 * Hero portrait.
 *
 * Renders nothing if the image fails to load, so the path can ship before the
 * file does and the hero degrades to its text-only composition instead of
 * showing a broken image. The headshot is on a light grey studio background,
 * so it gets a slight desaturation, an accent-tinted wash and a bottom fade to
 * sit on the near-black page rather than punching a bright rectangle in it.
 */
export default function Portrait({
  variant,
  onFail,
}: {
  /** "panel" is the desktop split column; "chip" is the small mobile circle. */
  variant: "panel" | "chip";
  /** Told to the hero so it can collapse the split to a single column. */
  onFail?: () => void;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  const fail = () => {
    setFailed(true);
    onFail?.();
  };

  if (variant === "chip") {
    return (
      <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/10 md:hidden">
        <Image
          src={profile.photo}
          alt={profile.name}
          width={160}
          height={160}
          onError={fail}
          className="h-full w-full object-cover object-top saturate-[0.85]"
        />
      </span>
    );
  }

  return (
    <div className="relative hidden md:block">
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08]">
        <Image
          src={profile.photo}
          alt={profile.name}
          width={900}
          height={1100}
          priority
          onError={fail}
          className="aspect-[4/5] w-full object-cover object-top saturate-[0.8] contrast-[1.05]"
        />

        {/* Tie the studio grey to the page palette. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-signal-600/10 mix-blend-overlay"
        />
        {/* Fade the bottom edge into the section. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent"
        />
      </div>
    </div>
  );
}
