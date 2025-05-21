import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@react-pdf/renderer'],
  turbopack: {
    resolveAlias: {
      canvas: './empty-module.ts',
    },
  },
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL
  }
};

export default nextConfig;
