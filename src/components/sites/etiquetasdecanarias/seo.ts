import type { Metadata } from "next";

/** Plain text of a trusted HTML description. */
export function plainText(html: string) {
  return html
    .replace(/<\/h\d>/g, ". ") // headings inside descriptions end a sentence
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .replace(/\s+\./g, ".")
    .replace(/\.{2,}/g, ".")
    .trim();
}

/** First sentence(s) of a description, kept under `max` characters (meta descriptions, llms.txt). */
export function summarize(html: string, max = 160) {
  const text = plainText(html);
  const sentences = text.match(/[^.!?…]+[.!?…]+/g) ?? [text];
  let out = "";
  for (const s of sentences) {
    if (out && (out + s).length > max) break;
    out += s;
  }
  out = out.trim();
  return out.length > max ? `${out.slice(0, max - 1).replace(/\s+\S*$/, "")}…` : out;
}

/** Per-page title, description, canonical URL and Open Graph data. */
export function pageMetadata({ title, description, path, image }: { title?: string; description: string; path: string; image?: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title: title ? `${title} - Canarias Línea Gráfica` : undefined, description, url: path, ...(image ? { images: [{ url: image }] } : {}) },
  };
}
