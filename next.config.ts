import type { NextConfig } from "next";

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
  // Static hosting has no image optimizer: serve the files as they are, under basePath.
  images: pages ? { loader: "custom", loaderFile: "./src/lib/image-loader.ts" } : undefined,
};

export default nextConfig;
