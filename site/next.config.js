/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Twingate Inc.',
    description: 'Repository for Kasm Workspace images for Twingate.',
    icon: '/img/logo.svg',
    listUrl: 'https://twingate-labs.github.io/kasm-registry/',
    contactUrl: 'https://github.com/Twingate-Labs/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
