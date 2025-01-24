"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="flex items-center justify-center pt-20 md:pt-24 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-7/10 text-center md:text-left md:pr-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Next-Gen ERPNext Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
            Empowering businesses with cutting-edge ERPNext implementations
            and expert consulting services
          </p>
          <motion.button 
            onClick={() => {
              window.location.href = '/contact'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-800 text-white px-6 md:px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
          >
            <span>Let's Discuss</span>
            <ArrowRight className="ml-2" />
          </motion.button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full md:w-3/10 flex justify-center md:justify-end mt-8 md:mt-0"
        >
          <Image
            src="/images/header.png"
            alt="ERPNext Solutions Illustration"
            width={400}
            height={300}
            priority
            className="hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </motion.header>
  )
}