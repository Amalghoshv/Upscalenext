// src/app/about/page.tsx
import type { Metadata } from 'next'
import About from '@/components/about'

export const metadata: Metadata = {
  title: 'About Us | TechForge',
  description: 'Learn about our young, dynamic team of ERPNext experts',
  openGraph: {
    title: 'About Us | TechForge',
    description: 'Learn about our young, dynamic team of ERPNext experts',
    images: ['/images/about-og.jpg'],
  },
}

export default function AboutPage() {
  return <About />
}