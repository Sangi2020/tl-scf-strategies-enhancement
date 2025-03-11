import HomeContent from "@/components/Home/HomeContent";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
};

export const metadata = {
  // Basic Metadata
  title: {
    default: 'SCF Strategies | Leading Supply Chain Finance Consulting & Solutions',
    template: '%s | SCF Strategies',
  },
  description: 'SCF Strategies - Leading experts in Supply Chain Finance. Unlock the full potential of your SCF programs with our consulting services, advanced analytics, and tailored enablement solutions.',
  keywords: [
    'Supply Chain Finance',
    'SCF Consulting',
    'Working Capital',
    'Financial Advisory',
    'Supply Chain Optimization',
    'Reverse Factoring',
    'SCF Programs',
    'SCF Solutions'
  ],
  authors: [{ name: 'SCF Strategies' }],
  creator: 'SCF Strategies',
  publisher: 'SCF Strategies',
  
  // Format Detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple.ico',
  },

  // Robots
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

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.scfstrategies.com',
    siteName: 'SCF Strategies',
    title: 'SCF Strategies | Leading Supply Chain Finance Consulting & Solutions',
    description: 'Optimize your supply chain finance programs with SCF Strategies. We offer expert consulting, advanced analytics, and tailored enablement services to transform your SCF initiatives.',
    images: [
      {
        url: '/images/logo.png',
        width: 1000,
        height: 1000,
        alt: 'SCF Strategies Logo',
      }
    ],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'SCF Strategies | Leading Supply Chain Finance Consulting & Solutions',
    description: 'Unlock the full potential of your Supply Chain Finance programs with SCF Strategies\' expert consulting and analytics services.',
    images: ['/images/logo.png'],
    creator: '@scfstrategies',
  },

  // Alternate Pages
  alternates: {
    canonical: 'https://www.scfstrategies.com',
  },

  // Verification
  verification: {
    google: 'your-google-verification-code', // Add your verification code
  },

  // Other metadata
  category: 'business',
  classification: 'Financial Services',
};

// Schema.org JSON-LD

 // <======================================== NOTES START ==============================================>

  // Libraries used :   "tailwind-css" for css
  // Read the documentaion in their respective sites for the above mentioned libraries before making changes in the code.
  // To run the code: npm start
  // First install all dependencies :- npm intsall
  // Then run the code :- npm start

  // created date : 06-oct-2024 || created by : Murthasa Ali  || module : 1 ||
  // modified date : 05/10/2024 || modified by : Murthasa ALi || module : 1 ||
  // modified date : 24/10/2024 || modified by : Murthasa Ali ck  || module : 1 ||

  // Technical summary(Pre-setups) created date/by :  Murthasa Ali ||
  // Domain :   || 
  // Hosting :   ||
  // SSL :   ||
  // Database :  ||

  // Phase summary :   || created date/by :  Ali  ||
  // Phase 1 :  SetUps ||
  // Phase 2 :  Development/Lanfing page creation ||
  // Phase 2 :  Development/Blog page creation ||
  // Phase 2 :  Development/Clients page creation ||
  // Phase 2 :  Development/Solutions and Enablement page creation ||
  // Phase 2 :  Development/Service creation ||


  // <======================================== NOTES END ==============================================>
// For social media profile links, you can add them to your layout component
export const socialProfiles = {
  facebook: 'https://www.facebook.com/your-facebook-page',
  instagram: 'https://www.instagram.com/your-instagram-handle',
  linkedin: 'https://www.linkedin.com/company/your-linkedin-page',
  youtube: 'https://www.youtube.com/channel/your-youtube-channel',
  googleMyBusiness: 'https://g.page/your-googlemybusiness-page',
};

export default function HomePage() {
  return <HomeContent />;
}