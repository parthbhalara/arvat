'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Types of Springs Made', value: '50+' },
  { label: 'Springs Produced', value: '500K+' },
  { label: 'Clients', value: '50+' },
  { label: 'Quality Assured', value: '100%' },
];

export default function VideoSection() {
  return (
    <div className="section-padding gradient-bg">
      <div className="mx-auto max-w-7xl container-padding">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-base font-semibold leading-7 text-secondary">Our Process</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Manufacturing Excellence
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-100">
            Experience our state-of-the-art manufacturing process that ensures
            precision and quality in every spring we produce.
          </p>
        </motion.div>

        <motion.div
          className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/amWcmKQyY38?si=AEtk3mgltSb67UE6"
              title="Manufacturing Process"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-secondary/20 rounded-lg blur" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <dt className="text-sm font-medium text-gray-100">{stat.label}</dt>
                  <dd className="text-4xl font-bold tracking-tight text-secondary mt-2">
                    {stat.value}
                  </dd>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 