"use client";

import { useState } from "react";
import Image from "next/image";
import { profile } from "../lib/site";

/**
 * Hero portrait.
 *
 * Renders nothing if the image fails to load, so the path can ship before the
 * file does and the hero degrades to its text-only composition instead of
 * showing a broken image.
 *
 * The treatment is deliberately light: a touch of desaturation and a bottom
 * fade into the page, no colour wash. That works for a dark, already-colourful
 * shot without fighting it, and still settles a bright studio background.
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
          src={profile.photoAvatar}
          alt={profile.name}
          width={240}
          height={240}
          onError={fail}
          className="h-full w-full object-cover"
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
          className="aspect-[4/5] w-full object-cover object-center saturate-[0.95]"
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
