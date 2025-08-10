/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/ModularLive' : '',
  assetPrefix: isProd ? '/ModularLive/' : '',
};

export default nextConfig;
