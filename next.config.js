/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  future: { webpack5: true },
  webpack: config => {
    config.resolve.fallback = { fs: false, module: false }
    return config
  }
};

module.exports = nextConfig;