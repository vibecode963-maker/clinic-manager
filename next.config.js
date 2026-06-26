/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.jsdelivr.net',
      'vercel.com'
    ],
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    optimizeCss: true,
    scrollRestoration: true
  }
};

module.exports = nextConfig;
