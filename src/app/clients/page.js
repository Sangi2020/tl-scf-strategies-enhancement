import ClientContent from '@/components/Client/ClientContent'
import React from 'react'
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: {
    default: 'SCF Strategies || Our Clients',
    template: '%s | SCF Strategies'
  },
  description: 'SCF Strategies - Expert Financial Solutions and Strategic Consulting',
  keywords: ['SCF', 'Strategies', 'Finance', 'Consulting', 'Business Strategy'],
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
function page() {
  return (
    <ClientContent/>
  )
}

export default page