import AboutContent from '@/components/About/AboutContent'
import React from 'react'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: {
    default: 'SCF Strategies | About Us',
    template: '%s | SCF Strategies'
  },
  description: 'SCF Strategies: Unlocking the full potential of Supply Chain Finance with expertise, advanced technology, and a proven track record. Learn about our journey and why industry leaders trust us.',
  keywords: [
    'Supply Chain Finance',
    'SCF Strategies',
    'SCF Consulting',
    'Supply Chain Finance Expertise',
    'SCF Solutions',
    'Industry Leaders',
    'Global Clients',
    'Supply Chain Finance',
    'Financial Consultancy',
    'Strategic Solutions',
  ],
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.scfstrategies.com/about',
    siteName: 'SCF Strategies',
    title: 'About SCF Strategies',
    description: 'Learn about SCF Strategies - Our mission, values, and commitment to excellence in financial solutions and strategic consulting',
    images: [
      {
        url: '/images/ourstory.png',
        width: 630,
        height: 630,
        alt: 'SCF Strategies Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SCF Strategies',
    description: 'Learn about SCF Strategies - Our mission, values, and commitment to excellence in financial solutions and strategic consulting',
    images: ['/images/ourstory.png'],
    creator: '@scfstrategies',
  },
};

function AboutPage() {
  return <AboutContent/>
}

export default AboutPage