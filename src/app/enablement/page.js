import EnablementContent from '@/components/Enablement/EnablementContent'
import React from 'react'
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: {
    default: 'Expert Supply Chain Finance Consulting Services | SCF Strategies',
    template: '%s | SCF Strategies',
  },
  description:
    'SCF Strategies offers expert supply chain finance consulting services to optimize SCF programs. Our services include go-to-market strategies, solution audits, platform selection, and accounting treatment for optimal supply chain finance performance.',
  keywords: [
    'Supply Chain Finance',
    'SCF Consulting Services',
    'SCF Platform',
    'SCF Strategy',
    'Supply Chain Finance Optimization',
    'Working Capital',
    'Supply Chain Finance Advisory',
    'SCF Market',
    'SCF Platform & Partner Selection',
    'SCF Accounting Treatment',
  ],
  authors: [{ name: 'SCF Strategies' }],
  creator: 'SCF Strategies',
  publisher: 'SCF Strategies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Updated OpenGraph configuration for better social sharing
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.scfstrategies.com/',
    siteName: 'SCF Strategies',
    title: 'SCF Strategies',
    description: 'Expert Financial Solutions and Strategic Consulting',
    images: [
      {
        url: '/images/logo.png',  // Updated path to match your image location
        width: 630,             // Recommended size for social sharing
        height: 630,             // Recommended size for social sharing
        alt: 'SCF Strategies Logo',
      }
    ],
  },
  // Updated Twitter card configuration
  twitter: {
    card: 'summary_large_image',
    title: 'SCF Strategies',
    description: 'Expert Financial Solutions and Strategic Consulting',
    images: ['/images/logo.png'], // Updated path to match your image location
    creator: '@scfstrategies',
  },
};
function EnablementPage() {
  return (
<EnablementContent/>  )
}

export default EnablementPage