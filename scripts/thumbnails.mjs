/**
 * Regenerates public/art/thumbs/*.webp from the full-size artwork.
 *
 * `next.config.ts` sets `images.unoptimized` (required for static export), so
 * Next will not resize anything at build time. Without these the gallery and
 * marquee ship full-size jpegs for 240px slots. Thumbnails are committed, so
 * this is a one-off you only rerun after adding artwork:
 *
 *   npm i -D sharp && node scripts/thumbnails.mjs
 */
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const src = path.join(process.cwd(), "public/art");
const out = path.join(src, "thumbs");
fs.mkdirSync(out, { recursive: true });

let before = 0;
let after = 0;

for (const file of fs.readdirSync(src).filter((f) => /\.jpe?g$/i.test(f))) {
  const inPath = path.join(src, file);
  const outPath = path.join(out, file.replace(/\.jpe?g$/i, ".webp"));
  before += fs.statSync(inPath).size;
  await sharp(inPath)
    .resize(640, null, { withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(outPath);
  after += fs.statSync(outPath).size;
}

console.log(
  `originals ${(before / 1e6).toFixed(2)} MB -> thumbs ${(after / 1e6).toFixed(2)} MB`
);
