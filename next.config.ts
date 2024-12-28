import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio', // Replace 'portfolio' with your repository name
  assetPrefix: '/portfolio', // Replace 'portfolio' with your repository name
};

export default nextConfig;
