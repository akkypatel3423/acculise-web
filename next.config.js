/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.easemytrip.com",
      },
      {
        protocol: "https",
        hostname: "taxfix.com",
      },
      {
        protocol: "https",
        hostname: "www.noupe.com",
      },
      {
        protocol: "https",
        hostname: "hyno.co",
      },
    ],
  },
};

module.exports = nextConfig;
