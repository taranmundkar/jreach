/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: '**.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
      {
        source: '/legacy-api/:path*',
        destination: '/api/:path*',
        permanent: false,
      },
      {
        source: '/blog/:slug',
        destination: '/articles/:slug',
        permanent: true,
      },
      {
        source: '/products/:category/:id',
        destination: '/items/:category/:id',
        permanent: false,
      },
      {
        source: '/docs/:path*',
        destination: 'https://new-documentation-site.com/:path*',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig