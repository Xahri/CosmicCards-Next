/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
        port: '',
        pathname: '/account123/**',
      },
    ],
    domains: ['apod.nasa.gov'],
  },
}

module.exports = nextConfig
