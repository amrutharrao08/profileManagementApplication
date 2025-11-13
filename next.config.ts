import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // or 'http' if needed
        hostname: '**',    // This wildcard allows all hostnames
      },
    ],
  },
};

export default nextConfig;
