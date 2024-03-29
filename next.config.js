/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    unoptimized: false,
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '**',
        }
    ],
    formats: ['image/avif', 'image/webp']
},
}

module.exports = withBundleAnalyzer(nextConfig)