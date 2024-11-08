/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'dist',
  env: { LOCALES: process.env.LOCALES },
  images: { unoptimized: true },
  output: 'export',
  reactStrictMode: true,
};

export default nextConfig;
