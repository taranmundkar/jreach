import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'J-Reach - Your Ultimate Lead Generation Partner',
  description: 'J-Reach specializes in cold outbound strategies that deliver consistent results, protect your reputation, and stay ahead of the competition.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script src="/removeWeavaAttributes.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen flex-grow pt-16 bg-beige-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}