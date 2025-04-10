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
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20 to-white">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Our Spring Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover our comprehensive range of high-quality springs designed for various industrial applications. Each product is manufactured with precision and reliability in mind.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:max-w-none lg:grid-cols-3 mx-auto">
          {products.map((product) => (
            <motion.article
              key={product.id}
              className="flex flex-col items-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900">
                    {product.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">{product.description}</p>
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-gray-900">Key Features:</h4>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-900">Applications:</h4>
                  <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
                    {product.applications.map((application, index) => (
                      <li key={index}>{application}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
} 