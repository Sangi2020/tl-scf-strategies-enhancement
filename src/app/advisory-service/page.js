import AdvisoryServices from '@/components/AdvaisarySection/AdvisoryContent'
import React from 'react'


// Define schema for the page

export const metadata = {
  title: {
    default: 'Advisory Services | SCF Strategies',
    template: '%s | SCF Strategies',
  },
  description:
    'Elevate your Supply Chain Finance strategy with our expert Advisory Services. We offer strategic go-to-market planning, in-depth solution audits, platform and partner selection, and guidance on accounting treatment to help you succeed.',
  keywords: [
    'Supply Chain Finance Advisory Services',
    'SCF Strategy Consulting',
    'Go-to-Market Strategy',
    'Solution Audit',
    'Platform Selection',
    'Accounting Treatment',
    'Supply Chain Finance Optimization',
  ],
  metadataBase: new URL('https://www.scfstrategies.com'),
  alternates: {
    canonical: '/advisory-services'
  },
  openGraph: {
    title: 'Advisory Services | SCF Strategies',
    description: 'Transform your Supply Chain Finance strategy with our comprehensive Advisory Services. From strategic planning to solution audits and partner selection, our experts are here to guide you.',
    url: 'https://www.scfstrategies.com/advisory-services',
    siteName: 'SCF Strategies',
    images: [{
      url: '/images/advisory-services-banner.jpg',
      width: 630,
      height: 630,
      alt: 'SCF Strategies Advisory Services'
    }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advisory Services | SCF Strategies',
    description: 'Enhance your SCF strategy with our expert Advisory Services. We provide go-to-market strategy, solution audits, platform selection, and accounting guidance. Contact us today!',
    images: ['/images/advisory-services-banner.jpg']
  },
  other: {
    'social:facebook': 'https://www.facebook.com/SCFStrategies',
    'social:instagram': 'https://www.instagram.com/SCFStrategies',
    'social:linkedin': 'https://www.linkedin.com/company/scfstrategies',
    'social:youtube': 'https://www.youtube.com/user/SCFStrategies',
    'social:googlemybusiness': 'https://www.google.com/business/SCFStrategies'
  }
}


function AdvisoryPage() {
  return (
    <AdvisoryServices/>
  )
}

export default AdvisoryPage