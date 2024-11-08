/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'dist',
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    // This is not an official implementation of the Airtable PAT!
    AIRTABLE_PAT: 'patHEkE2IqiVC2tyx.e706fb10ca4b111d2d80ce30454c0a47dec55d6aea2a881c46991701d7108170',
  },
};

export default nextConfig;
