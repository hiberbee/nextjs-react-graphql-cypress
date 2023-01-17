/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/graphql",
      destination: "http://localhost:4000",
    },
  ],
  env: {
    API_URL: process.env.API_URL,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
