'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const milestones = [
  {
    year: '2024',
    title: 'Company Founded',
    description: 'Arvat Springtech was established with a vision to provide high-quality spring solutions to industries.'
  },
  {
    year: '2024',
    title: 'Expansion',
    description: 'Expanded manufacturing facility and increased production capacity.'
  },
  {
    year: '2025',
    title: 'Global Reach',
    description: 'Started exporting to international markets and established global partnerships.'
  },
  {
    year: '2025',
    title: 'Technology Upgrade',
    description: 'Invested in state-of-the-art manufacturing equipment and automation.'
  }
];

const values = [
  {
    title: 'Quality',
    description: 'We maintain the highest standards of quality in every product we manufacture.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Innovation',
    description: 'We continuously innovate to provide cutting-edge spring solutions.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Customer Focus',
    description: 'Our customers are at the heart of everything we do.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Sustainability',
    description: 'We are committed to sustainable manufacturing practices.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-secondary">About Us</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Leading Spring Manufacturer Since 2024
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Arvat Springtech is a leading manufacturer of precision springs, serving industries
            worldwide with high-quality, reliable spring solutions.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-primary">Our Story</h3>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Founded in 2024, Arvat Springtech has grown from a small workshop to a state-of-the-art
                manufacturing facility. Our journey has been marked by continuous innovation, quality
                improvement, and customer satisfaction.
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Today, we are proud to serve customers across various industries, from automotive to
                aerospace, with our high-quality spring solutions.
              </p>
            </div>
            <div className="relative h-96 overflow-hidden rounded-xl">
              <Image
                src="/images/about/factory.jpg"
                alt="Our Manufacturing Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-primary text-center mb-12">Our Values</h3>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white p-6 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="text-secondary mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold text-primary">{value.title}</h4>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h3 className="text-2xl font-bold tracking-tight text-primary text-center mb-12">Our Journey</h3>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="relative pl-8 border-l-2 border-secondary"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="absolute left-0 top-0 -translate-x-2">
                  <div className="h-4 w-4 rounded-full bg-secondary" />
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-secondary">{milestone.year}</span>
                  <h4 className="text-lg font-semibold text-primary">{milestone.title}</h4>
                </div>
                <p className="mt-2 text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 