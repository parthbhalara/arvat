'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    name: 'Compression Springs',
    description: 'High-quality compression springs designed for optimal load-bearing and reliability.',
    image: '/images/products/compression-spring.jpg',
    href: '/products#compression'
  },
  {
    name: 'Extension Springs',
    description: 'Precision-engineered extension springs for controlled tension and durability.',
    image: '/images/products/extension-spring.jpg',
    href: '/products#extension'
  },
  {
    name: 'Torsion Springs',
    description: 'Custom torsion springs delivering precise rotational force and stability.',
    image: '/images/products/torsion-spring.jpg',
    href: '/products#torsion'
  },
  {
    name: 'Double Torsion Springs',
    description: 'Specialized double torsion springs for complex mechanical applications.',
    image: '/images/products/double-torsion-spring.jpg',
    href: '/products#double-torsion'
  },
  {
    name: 'Conical Springs',
    description: 'Space-efficient conical springs with progressive compression rates.',
    image: '/images/products/conical-spring.jpg',
    href: '/products#conical'
  },
  {
    name: 'Custom Springs',
    description: 'Tailored spring solutions designed to your exact specifications.',
    image: '/images/products/custom-spring.jpg',
    href: '/products#custom'
  }
];

export default function ProductsShowcase() {
  return (
    <div className="section-padding bg-gray-50">
      <div className="mx-auto max-w-7xl container-padding">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-subtitle">Our Products</h2>
          <p className="section-title">
            Comprehensive Spring Solutions
          </p>
          <p className="body-text max-w-2xl mx-auto">
            Discover our wide range of precision-engineered springs, each designed to meet
            specific industry requirements with unmatched quality and reliability.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={product.href} className="group">
                <div className="card hover-scale overflow-hidden">
                  <div className="relative h-64 w-full mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="mt-2 body-text">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center text-secondary">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link href="/products" className="btn-primary">
            View All Products
            <svg
              className="ml-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 