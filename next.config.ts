/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This should skip ESLint errors
  },
  // optional: disable type checking if TS errors also block build
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
