import BlogContent from "@/components/blog/BlogsContent";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: {
    default: ' Success Factors for Effective Supply Chain Finance | SCF Strategies',
    template: '%s | SCF Strategies',
  },
  description:
    'Discover the four essential success factors for a successful Supply Chain Finance (SCF) program. Learn how to set clear targets, analyze opportunities, engage stakeholders, and select the right structure to maximize your SCF program’s effectiveness and drive impactful results.',
  keywords: [
    'Supply Chain Finance Success Factors',
    'Effective SCF Programs',
    'Reverse Factoring Strategies',
    'SCF Program Implementation',
    'Key Elements of SCF',
    'SCF Program Success',
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
        width: 1200,             // Recommended size for social sharing
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

export default function  BlogPage() {
  return < BlogContent/>;
}