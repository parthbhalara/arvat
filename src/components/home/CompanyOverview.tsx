'use client';

import { motion } from 'framer-motion';
import { FaIndustry, FaCheckCircle, FaUsers } from 'react-icons/fa';

const features = [
  {
    name: 'Quality Manufacturing',
    description:
      'State-of-the-art facilities and rigorous quality control processes ensure the highest standard of spring manufacturing.',
    icon: FaIndustry,
  },
  {
    name: 'Customer Satisfaction',
    description:
      'We work closely with our clients to understand their needs and deliver springs that exceed expectations.',
    icon: FaCheckCircle,
  },
  {
    name: 'Expert Team',
    description:
      'Our experienced engineers and technicians bring decades of expertise to every project.',
    icon: FaUsers,
  },
];

export default function CompanyOverview() {
  return (
    <div className="py-24 sm:py-32 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-secondary">Our Company</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Excellence in Spring Manufacturing
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            At Arvat Springtech, we combine innovative technology with traditional craftsmanship
            to deliver springs that power industries worldwide.
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                className="flex flex-col bg-white p-6 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary">
                  <feature.icon
                    className="h-5 w-5 flex-none text-secondary"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-700">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>

        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-2xl font-bold tracking-tight text-primary">
              Our Mission
            </h3>
            <p className="mt-4 text-lg text-gray-700">
              To provide innovative spring solutions that empower industries and advance technological progress,
              while maintaining the highest standards of quality and customer service.
            </p>

            <h3 className="mt-12 text-2xl font-bold tracking-tight text-primary">
              Our Vision
            </h3>
            <p className="mt-4 text-lg text-gray-700">
              To be the global leader in precision spring manufacturing, recognized for our innovation,
              quality, and commitment to customer success.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 