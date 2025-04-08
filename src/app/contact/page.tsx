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
    <div className="section-padding bg-gray-50">
      <div className="mx-auto max-w-7xl container-padding">
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="section-title">Contact Us</h1>
          <p className="body-text mt-4">
            Get in touch with us for custom spring solutions. Our team is ready to assist you
            with any inquiries about our products and services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
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
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
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

            {/* Map */}
            <motion.div
              className="card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
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
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus-ring"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus-ring"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus-ring"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus-ring"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus-ring"
                  required
                />
              </div>

              <div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 