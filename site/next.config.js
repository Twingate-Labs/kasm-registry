/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Twingate Inc.',
    description: 'Repository for Kasm Workspace images for Twingate.',
    icon: 'https://kasm.tg-labs.net/1.0/logo.svg',
    listUrl: 'https://kasm.tg-labs.net/',
    contactUrl: 'https://github.com/Twingate-Labs/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
