import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "smhutson.github.io",
      },
    ],
  },
};

export default nextConfig;
