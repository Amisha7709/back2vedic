/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,

  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/',
      },
    ];
  },

}

module.exports = nextConfig
