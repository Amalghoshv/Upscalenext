// src/components/header.tsx
import Image from 'next/image'

export default function Home() {
  return (
    <header className="flex items-center justify-center pt-20 md:pt-24 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-7/10 text-center md:text-left md:pr-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Next-Gen ERPNext Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
            Empowering businesses with cutting-edge ERPNext implementations
            and expert consulting services
          </p>
          <button className="bg-blue-800 text-white px-6 md:px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
        <div className="w-full md:w-3/10 flex justify-center md:justify-end">
          <Image
            src="/images/header.png"
            alt="ERPNext Solutions Illustration"
            width={400}
            height={300}
            priority
          />
        </div>
      </div>
    </header>
  )
}