/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    jwtSecret: process.env.JWT_SECRET,
  },
};

module.exports = nextConfig;
