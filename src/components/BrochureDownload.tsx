'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface BrochureDownloadProps {
  title?: string;
  description?: string;
}

export default function BrochureDownload({ 
  title = "Download Our Complete Applications Brochure",
  description = "Get detailed information about our spring solutions across all industries. Learn about our capabilities, specifications, and success stories."
}: BrochureDownloadProps) {
  return (
    <motion.div
      className="mt-24 sm:mt-32 relative isolate overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-100">
        {description}
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/brochures/applications-brochure.pdf"
          className="btn-secondary inline-flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Brochure
          <svg
            className="ml-2 h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
        <Link
          href="/contact"
          className="btn-outline border-white text-white hover:bg-white hover:text-primary"
        >
          Contact Sales
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
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
    </motion.div>
  );
} 