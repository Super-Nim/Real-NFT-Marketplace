/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding", "fs");
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "explorer.reservoir.tools",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
