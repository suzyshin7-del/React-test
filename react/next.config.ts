import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/React-test",
  assetPrefix: "/React-test/",
  images: { unoptimized: true },
};

export default nextConfig;