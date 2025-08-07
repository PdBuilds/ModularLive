/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // Enables static HTML export
  distDir: 'docs',  // Output directory for build export
  basePath: isProd ? '/ModularLive' : '',
  assetPrefix: isProd ? '/ModularLive/' : '',
};

export default nextConfig;
