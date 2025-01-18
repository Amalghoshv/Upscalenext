import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/app/components/nav'
import Footer from '@/app/components/footer'

const inter = Inter({ subsets: ['latin'] ,display: 'swap'})

export const metadata: Metadata = {
  title: {
    template: '%s | UpscaleNext',
    default: 'UpscaleNext - ERPNext Solutions',
  },
  icons: {
    icon: '/favicon.png',
  },
  description: 'Professional ERPNext implementation and customization services',
  openGraph: {
    title: 'UpscaleNext - ERPNext Solutions',
    description: 'Professional ERPNext implementation and customization services',
    url: 'https://www.upscalenext.cloud',
    siteName: 'UpscaleNext',
    images: [
      {
        url: 'https://www.upscalenext.cloud/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
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
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}