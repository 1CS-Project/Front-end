/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [{
          protocol: 'http',
          hostname: 'localhost',
          port: '',
          pathname: '*'
        }]
      },
};

import createNextIntlPlugin from 'next-intl/plugin';


const withNextIntl = createNextIntlPlugin();


export default withNextIntl(nextConfig);