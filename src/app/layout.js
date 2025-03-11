import { Inter } from 'next/font/google';
import '../styles/globals.css';
import '../styles/typography.css';
import ClientLayout from './ClientLayout';
import GoogleAnalytics from '@/components/GoogleAnalytics';
const inter = Inter({
  subsets: ['latin', 'cyrillic', 'greek'],
  display: 'swap',
});



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-[#eeeeee] relative ${inter.className}`} suppressHydrationWarning>
  
        <ClientLayout>
          {children}
        </ClientLayout>
       
            <GoogleAnalytics />
        
      </body>
    </html>
  );
}