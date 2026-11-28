"use client";

/**
 * next/image loader for the static GitHub Pages export. Every width listed in
 * image-widths.mjs is pre-rendered as WebP by scripts/optimize-images.mjs.
 */
export default function imageLoader({ src, width }: { src: string; width: number }) {
  if (/^https?:\/\//.test(src)) return src;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/_img/${width}${src}.webp`;
}
