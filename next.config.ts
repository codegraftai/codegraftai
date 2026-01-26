import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import path from 'path';

const withNextIntl = createNextIntlPlugin(path.resolve('./src/i18n/request.ts'));
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  ...(isProd && {
    basePath: '/codegraftai',
    assetPrefix: '/codegraftai',
  }),
};

export default withNextIntl(nextConfig);
