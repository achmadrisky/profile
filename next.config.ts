import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // <-- tambahkan ini
  },
  output: "export",
};

export default nextConfig;
