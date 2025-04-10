'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaIndustry, FaIdCard } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: 'Office Address',
    details: [
      '514 Zion Z1, Near Avalon Hotel',
      'Bodakdev, Ahmedabad',
      'Gujarat, India'
    ]
  },
  {
    icon: FaIndustry,
    title: 'Manufacturing Unit',
    details: [
      'Godown No.60, Ground Floor',
      'Sunshine Industrial Hub -1, Navapura',
      'Changodar, Ahmedabad',
      'Gujarat 382213'
    ]
  },
  {
    icon: FaPhone,
    title: 'Call Us',
    details: [
      '+91 7600800472'
    ]
  },
  {
    icon: FaEnvelope,
    title: 'Email',
    details: [
      'info@arvatspringtech.com'
    ]
  },
  {
    icon: FaIdCard,
    title: 'GST Information',
    details: [
      'GSTIN: 24ACGFA3396M1Z2'
    ]
  }
];

export default function ContactPage() {
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
                Contact Us
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Get in touch with us for custom spring solutions. Our team is ready to assist you
                with any inquiries about our products and services.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="section-padding bg-white">
        <div className="mx-auto max-w-7xl container-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="card hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 pt-1">
                      <item.icon className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                      <div className="mt-2 space-y-1">
                        {item.details.map((detail, i) => (
                          <p key={i} className="body-text">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Map */}
            <motion.div
              className="card overflow-hidden hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58788.12346618467!2d72.451093!3d22.940734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e91005ffeec93%3A0x645c5f4fe832919e!2sARVAT%20SPRINGTECH%20LLP!5e0!3m2!1sen!2sus!4v1744112288213!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 