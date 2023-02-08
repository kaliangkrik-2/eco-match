/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "raw.githubusercontent.com",
      "cdn.discordapp.com",
    ]
  }
}

module.exports = nextConfig
