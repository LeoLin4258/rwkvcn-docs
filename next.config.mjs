import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.rwkv.cn',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
};

export default withMDX(config);
