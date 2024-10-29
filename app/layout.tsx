import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'J-Reach | Revolutionize Your Lead Generation',
    template: '%s | J-Reach'
  },
  description: 'J-Reach specializes in cold outbound strategies that deliver consistent results, protect your reputation, and keep you ahead of the competition.',
  keywords: ['lead generation', 'cold outbound', 'sales', 'marketing', 'B2B'],
  authors: [{ name: 'J-Reach Team' }],
  creator: 'J-Reach',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.j-reach.com',
    siteName: 'J-Reach',
    title: 'J-Reach - Revolutionize Your Lead Generation',
    description: 'Unlock a steady stream of high-quality leads without the risks of paid ads or reputation damage.',
    images: [
      {
        url: 'https://www.j-reach.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'J-Reach - Lead Generation Experts',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'J-Reach - Revolutionize Your Lead Generation',
    description: 'Unlock a steady stream of high-quality leads without the risks of paid ads or reputation damage.',
    images: ['https://www.j-reach.com/twitter-image.jpg'],
    creator: '@j_reach',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFDF5' },
    { media: '(prefers-color-scheme: dark)', color: '#1F2937' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}