'use client';

import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

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
    icon: FaMapMarkerAlt,
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
    title: 'Email & GST',
    details: [
      'Email: info@arvatspringtech.com',
      'GSTIN: 24ACGFA3396M1Z2'
    ]
  }
];

export default function ContactSection() {
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
          <h2 className="section-subtitle">Contact Us</h2>
          <p className="section-title">
            Let's Discuss Your Requirements
          </p>
          <p className="body-text">
            Get in touch with us for custom spring solutions that meet your exact specifications.
            Our team is ready to help you find the perfect spring for your application.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            className="card"
            initial={{ opacity: 0, x: -20 }}
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
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
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
                />
              </div>

              <div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: 20 }}
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
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29393.795730601338!2d72.454011!3d22.941959!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e91005ffeec93%3A0x645c5f4fe832919e!2sARVAT%20SPRINGTECH%20LLP!5e0!3m2!1sen!2sin!4v1743243188249!5m2!1sen!2sin"
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
        </div>
      </div>
    </div>
  );
} 