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
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  output: "export",
};

module.exports = nextConfig;
