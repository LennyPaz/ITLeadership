/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes for contact form
  trailingSlash: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/admin',
          destination: '/admin/index.html',
        },
        {
          source: '/admin/',
          destination: '/admin/index.html',
        },
        {
          source: '/admin/:path*',
          destination: '/admin/index.html',
        },
      ],
    }
  },
}

module.exports = nextConfig
