/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Enables static export (for GitHub Pages)
  basePath: isProd ? '/ModularLive' : '',
  assetPrefix: isProd ? '/ModularLive/' : '',
};

export default nextConfig;
