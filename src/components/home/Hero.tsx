'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Manufacturing facility"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 gradient-bg opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl container-padding py-32 sm:py-48">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Precision Springs for 
              <span className="text-secondary"> Every Industry</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl">
              Leading manufacturer of custom springs and wire forms, delivering innovative solutions
              with unmatched quality and precision since 2024.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-secondary">
                Explore Products
                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="lg:col-span-5 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold text-secondary">25+</div>
                <div className="text-gray-100">Years of Engineering Excellence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold text-secondary">500K+</div>
                <div className="text-gray-100">Precision Springs Delivered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold text-secondary">10+</div>
                <div className="text-gray-100">Global Clients</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl font-bold text-secondary">100%</div>
                <div className="text-gray-100">Quality Assured</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <svg 
            className="w-6 h-6 text-white animate-bounce" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
} 