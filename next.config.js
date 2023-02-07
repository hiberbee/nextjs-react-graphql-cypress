/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    {
      source: "/graphql",
      destination: process.env.API_URL,
    },
  ],
  env: {
    API_URL: process.env.API_URL,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
