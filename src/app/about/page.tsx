import About from '@/app/components/About'
import { Metadata } from 'next'
export const generateMetadata = (): Metadata => {
  return {
    title: 'About Us',
    description: 'Learn about UpscaleNext and our ERPNext expertise',
    openGraph: {
      title: 'About UpscaleNext - ERPNext Solutions',
      description: 'Learn about UpscaleNext and our ERPNext expertise',
    }
  }
}

export default function AboutPage() {
  return <About />
}