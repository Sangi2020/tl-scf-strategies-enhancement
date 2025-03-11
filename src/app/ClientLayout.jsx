'use client';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import ChatbotPreview from '@/components/chat/ChatBot';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import CookieConsent from '@/components/CookieConsent';
import Loading from '@/components/Loading';
import WaveSeparator from '@/components/ui/WaveSeparator';
import useCompanyStore from '@/store/useCompanyStore'; // Zustand store

const LOADING_DURATION = 1000;

export default function ClientLayout({ children }) {
  const pageRef = useRef();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const { fetchCompanyDetails } = useCompanyStore(); // Zustand fetch function

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isFirstLoad) {
      const timer = setTimeout(() => {
        setLoading(false);
        setIsFirstLoad(false);
      }, LOADING_DURATION);
      return () => clearTimeout(timer);
    }
  }, [isFirstLoad]);

  useEffect(() => {
    if (!isFirstLoad) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, LOADING_DURATION);
      return () => clearTimeout(timer);
    }
  }, [pathname, isFirstLoad]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!loading && pageRef.current) {
        gsap.fromTo(
          pageRef.current,
          { y: 10 },
          { 
            y: 0, 
            duration: 0.8, 
            ease: 'power4.out',
            delay: 0.1
          }
        );
      }
    });

    return () => ctx.revert();
  }, [loading]);

  // Fetch company details on component mount
  useEffect(() => {
    fetchCompanyDetails();
  },[]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {loading && <Loading />}
      <div className={`transition-opacity duration-300 relative ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <ChatbotPreview />
        <main ref={pageRef} className="transition-opacity ease-in-out">
          {children}
        </main>
        {pathname !== '/' && <WaveSeparator />}
        <Toaster position="bottom-center" duration={500} />
        <CookieConsent />
        <Footer />
      </div>
    </>
  );
}
