// next.config.js

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.com'], // Replace with actual image domains used in project
  },
  poweredByHeader: false,
};

module.exports = nextConfig;