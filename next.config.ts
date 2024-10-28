import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  async redirects() {
    return [
      {
        source: '/old-home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/old-about',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/old-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/old-contact',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/blog/:slug',
        destination: '/news/:slug',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/learning-center',
        permanent: false,
      },
      {
        source: '/old-get-started',
        destination: '/get-started',
        permanent: true,
      },
      {
        source: '/webinars',
        destination: '/events',
        permanent: false,
      },
      {
        source: '/old-terms',
        destination: '/terms-of-service',
        permanent: true,
      },
      {
        source: '/old-privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.j-reach.com/:path*',
      },
    ]
  },
}

export default nextConfig