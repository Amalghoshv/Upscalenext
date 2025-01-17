
import type { Metadata } from 'next'
import About from "@/app/components/about"

export const metadata: Metadata = {
  title: 'About Us | Upscalenext',
  description: 'Learn about our young, dynamic team of ERPNext experts',
  openGraph: {
    title: 'About Us | Upscalenext',
    description: 'Learn about our young, dynamic team of ERPNext experts',
    images: ['/images/about-og.jpg'],
  },
}

export default function AboutPage() {
  return <About />
}