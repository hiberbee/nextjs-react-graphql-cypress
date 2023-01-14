/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
  },
  devIndicators: { buildActivity: true, buildActivityPosition: "bottom-right" },
  reactStrictMode: true,
};

module.exports = nextConfig;
