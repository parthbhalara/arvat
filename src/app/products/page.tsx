'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    id: 'compression',
    name: 'Compression Springs',
    description: 'Our compression springs are manufactured with precision using high-quality materials, designed for various industrial applications with excellent load-bearing capacity.',
    features: [
      'High load-bearing capacity',
      'Excellent fatigue resistance',
      'Precise dimensions and tolerances',
      'Customizable end configurations',
      'Wide range of materials available'
    ],
    applications: [
      'Automotive suspension systems',
      'Industrial machinery',
      'Electronic devices',
      'Medical equipment',
      'Aerospace components'
    ],
    image: '/images/products/compression-spring.jpg'
  },
  {
    id: 'extension',
    name: 'Extension Springs',
    description: 'Built with superior tensile strength, our extension springs are perfect for applications requiring controlled stretching and retraction.',
    features: [
      'Superior tensile strength',
      'Controlled elongation',
      'Durable construction',
      'Customizable hooks and loops',
      'Consistent performance'
    ],
    applications: [
      'Garage doors',
      'Trampolines',
      'Industrial machinery',
      'Agricultural equipment',
      'Exercise equipment'
    ],
    image: '/images/products/extension-spring.jpg'
  },
  {
    id: 'torsion',
    name: 'Torsion Springs',
    description: 'Engineered for rotational force applications, our torsion springs provide reliable torque and angular movement in various mechanical systems.',
    features: [
      'Precise torque control',
      'Long service life',
      'Customizable leg configurations',
      'High cycle life',
      'Stable performance'
    ],
    applications: [
      'Door hinges',
      'Clothespins',
      'Mouse traps',
      'Medical devices',
      'Industrial machinery'
    ],
    image: '/images/products/torsion-spring.jpg'
  },
  {
    id: 'double-torsion',
    name: 'Double Torsion Springs',
    description: 'Specialized springs designed for applications requiring balanced torque in both directions, ensuring consistent performance.',
    features: [
      'Balanced torque in both directions',
      'Enhanced stability',
      'Customizable design',
      'High precision',
      'Durable construction'
    ],
    applications: [
      'Complex mechanical systems',
      'Precision instruments',
      'Industrial automation',
      'Medical devices',
      'Aerospace components'
    ],
    image: '/images/products/double-torsion-spring.jpg'
  },
  {
    id: 'conical',
    name: 'Conical Springs',
    description: 'Space-efficient springs with tapered design, offering unique compression characteristics for specific industrial needs.',
    features: [
      'Space-efficient design',
      'Progressive spring rate',
      'Customizable taper angles',
      'High load capacity',
      'Stable performance'
    ],
    applications: [
      'Battery contacts',
      'Electrical switches',
      'Industrial machinery',
      'Medical devices',
      'Aerospace components'
    ],
    image: '/images/products/conical-spring.jpg'
  },
  {
    id: 'custom',
    name: 'Custom Springs',
    description: 'Tailored spring solutions designed to meet your specific requirements, ensuring optimal performance for unique applications.',
    features: [
      'Custom specifications',
      'Flexible design options',
      'Material selection',
      'Precision manufacturing',
      'Quality assurance'
    ],
    applications: [
      'Specialized machinery',
      'Unique industrial needs',
      'Prototype development',
      'Research projects',
      'Custom equipment'
    ],
    image: '/images/products/custom-spring.jpg'
  }
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-secondary">Our Products</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Comprehensive Spring Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover our wide range of high-quality springs, each designed and manufactured
            to meet specific industrial requirements with precision and reliability.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="space-y-16">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                id={product.id}
                className="scroll-mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                  <div className="relative h-96 overflow-hidden rounded-xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-primary">{product.name}</h3>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{product.description}</p>
                    
                    <div className="mt-10">
                      <h4 className="text-lg font-semibold text-primary">Key Features</h4>
                      <ul className="mt-4 space-y-2">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center text-gray-600">
                            <svg className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-10">
                      <h4 className="text-lg font-semibold text-primary">Applications</h4>
                      <ul className="mt-4 space-y-2">
                        {product.applications.map((application) => (
                          <li key={application} className="flex items-center text-gray-600">
                            <svg className="h-5 w-5 text-secondary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-10">
                      <a
                        href="/contact"
                        className="btn-primary inline-flex items-center"
                      >
                        Get a Quote
                        <span aria-hidden="true" className="ml-2">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 