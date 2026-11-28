import type { NextConfig } from "next";
import { DEVICE_SIZES, IMAGE_SIZES } from "./image-widths.mjs";

// GITHUB_PAGES=true builds a static export served from
// https://<owner>.github.io/etiquetasdecanarias/ (see .github/workflows/pages.yml).
const pages = process.env.GITHUB_PAGES === "true";
const basePath = pages ? "/etiquetasdecanarias" : "";

const nextConfig: NextConfig = {
  output: pages ? "export" : "standalone",
  basePath,
  // WordPress URLs on the source all end with "/".
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  // Static hosting has no image optimizer: WebP sizes are pre-rendered at build time.
  images: {
    deviceSizes: DEVICE_SIZES,
    imageSizes: IMAGE_SIZES,
    ...(pages ? { loader: "custom" as const, loaderFile: "./src/lib/image-loader.ts" } : {}),
  },
};

export default nextConfig;
