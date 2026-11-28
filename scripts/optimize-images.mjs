// Generates responsive WebP copies of every site image for the static export.
// Usage: node scripts/optimize-images.mjs out
// Writes out/_img/<width>/<original path>.webp for each width next/image may request
// (images.deviceSizes + images.imageSizes in next.config.ts); src/lib/image-loader.ts points there.
import { mkdir, readdir, stat } from "node:fs/promises";
import { dirname, join, relative } from "node:path";
import sharp from "sharp";
import { IMAGE_WIDTHS } from "../image-widths.mjs";

const outDir = process.argv[2] ?? "out";
const sourceRoot = join(outDir, "sites");

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (/\.(jpe?g|png)$/i.test(entry.name)) yield path;
  }
}

const files = [];
for await (const file of walk(sourceRoot)) files.push(file);

let before = 0;
let after = 0;
const queue = [...files];
async function worker() {
  for (let file = queue.shift(); file; file = queue.shift()) {
    const rel = relative(outDir, file);
    before += (await stat(file)).size;
    const input = sharp(file);
    for (const width of IMAGE_WIDTHS) {
      const target = join(outDir, "_img", String(width), `${rel}.webp`);
      await mkdir(dirname(target), { recursive: true });
      const info = await input.clone().resize({ width, withoutEnlargement: true }).webp({ quality: 75, effort: 4 }).toFile(target);
      if (width === 828) after += info.size;
    }
  }
}
await Promise.all(Array.from({ length: 4 }, worker));
const mb = (n) => (n / 1024 / 1024).toFixed(1);
console.log(`${files.length} images × ${IMAGE_WIDTHS.length} widths. Originals ${mb(before)} MB → 828px WebP set ${mb(after)} MB`);
