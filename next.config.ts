import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "imljzgcuelzzzncfzlnc.supabase.co",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    config.ignoreWarnings = [
      {
        module: /@supabase\/realtime-js/,
        message: /the request of a dependency is an expression/,
      },
    ];
    return config;
  },
};

export default nextConfig;
