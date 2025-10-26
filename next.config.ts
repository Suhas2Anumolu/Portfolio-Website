/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This will **skip ESLint during builds**
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
