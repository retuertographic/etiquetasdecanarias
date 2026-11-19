import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // WordPress URLs on the source all end with "/".
  trailingSlash: true,
};

export default nextConfig;
