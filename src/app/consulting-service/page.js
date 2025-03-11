import ConsultingServices from '@/components/Cunsolting/CunsultingContent'
import React from 'react'

// Define schema for the page
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
  metadataBase: new URL('https://www.scfstrategies.com'),
  alternates: {
    canonical: '/consulting-services'
  },
  openGraph: {
    title: 'Consulting Services | SCF Strategies',
    description: 'Partner with SCF Strategies for comprehensive Supply Chain Finance consulting services. From implementation to optimization, our experts deliver tailored solutions for your business success.',
    url: 'https://www.scfstrategies.com/consulting-services',
    siteName: 'SCF Strategies',
    images: [{
      url: '/images/logo.png',
      width: 630,
      height: 630,
      alt: 'SCF Strategies Consulting Services'
    }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulting Services | SCF Strategies',
    description: 'Maximize your Supply Chain Finance potential with our expert consulting services. From implementation to optimization, we help businesses achieve their SCF goals.',
    images: ['/images/logo.png']
  },
  other: {
    'social:facebook': 'https://www.facebook.com/SCFStrategies',
    'social:instagram': 'https://www.instagram.com/SCFStrategies',
    'social:linkedin': 'https://www.linkedin.com/company/scfstrategies',
    'social:youtube': 'https://www.youtube.com/user/SCFStrategies',
    'social:googlemybusiness': 'https://www.google.com/business/SCFStrategies'
  }
}

// Add schema.org JSON-LD script


function CunsoltingPage() {
  return (
    <ConsultingServices/>
  )
}

export default CunsoltingPage