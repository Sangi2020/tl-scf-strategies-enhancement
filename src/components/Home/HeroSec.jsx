"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomeButton from "../ui/CustomeButton";

const slides = [
  {
    bgImage: "/images/LandingPage/hero.jpg",
    heading: "Transforming Supply Chain Finance with Expertise and Innovation",
    tagline: "Integrating Funding, Technology, and Best Practices for Success",
  },
  {
    bgImage: "https://avatars.mds.yandex.net/i?id=465c3e8a4a37a60e92bb3ea62c537e92519dd6a7-11512273-images-thumbs&n=13",
    heading: "Empowering Businesses with Smart Financial Solutions",
    tagline: "Streamlining Transactions, Enhancing Efficiency, and Reducing Risks",
  },
  {
    bgImage: "https://s.yimg.com/ny/api/res/1.2/1PqkmR35cM_P8V2tpbG2Zg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-images/2019-08/833a5b20-c8e0-11e9-b73d-0635258dde38",
    heading: "Innovative Financing for a Resilient Supply Chain",
    tagline: "Driving Growth and Stability through Intelligent Capital Management",
  },
];

function HeroSec() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [blendProgress, setBlendProgress] = useState(0);
  const [currentScale, setCurrentScale] = useState(1);
  const animationRef = useRef(null);
  const zoomRef = useRef(null);

  // Start the continuous zoom effect
  useEffect(() => {
    const startZoom = () => {
      const startScale = 1;
      const endScale = 1.15;
      const duration = 7000; // 7 seconds for the zoom
      const startTime = Date.now();
      
      const animateZoom = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const newScale = startScale + (progress * (endScale - startScale));
        setCurrentScale(newScale);
        
        if (progress < 1 && !isTransitioning) {
          zoomRef.current = requestAnimationFrame(animateZoom);
        } else if (!isTransitioning) {
          // Restart zoom when it finishes
          startZoom();
        }
      };
      
      zoomRef.current = requestAnimationFrame(animateZoom);
    };
    
    startZoom();
    
    return () => {
      if (zoomRef.current) {
        cancelAnimationFrame(zoomRef.current);
      }
    };
  }, [isTransitioning]);

  // Effect for automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        startTransition();
      }
    }, 6000); // Increased to 6 seconds to enjoy the zoom effect

    return () => clearInterval(interval);
  }, [isTransitioning]);

  // Effect for handling transitions
  useEffect(() => {
    if (isTransitioning) {
      // Cancel any ongoing zoom animation
      if (zoomRef.current) {
        cancelAnimationFrame(zoomRef.current);
      }
      
      const duration = 1500; // 1.5 seconds for transition
      const startTime = Date.now();
      const startScale = currentScale;
      
      const animateBlend = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setBlendProgress(progress);
        
        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animateBlend);
        } else {
          setCurrentIndex(nextIndex);
          setNextIndex((nextIndex + 1) % slides.length);
          setBlendProgress(0);
          setCurrentScale(1); // Reset scale for the new slide
          setIsTransitioning(false);
        }
      };
      
      animationRef.current = requestAnimationFrame(animateBlend);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isTransitioning, nextIndex, currentScale]);

  // Function to start transition
  const startTransition = () => {
    setNextIndex((currentIndex + 1) % slides.length);
    setIsTransitioning(true);
  };

  // Function to handle navigation dot clicks
  const handleDotClick = (index) => {
    if (!isTransitioning && index !== currentIndex) {
      setNextIndex(index);
      setIsTransitioning(true);
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7, 
        ease: "easeOut",
        delay: custom * 0.2
      }
    }),
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="relative md:h-screen h-[70vh] bg-[#ede8f5] overflow-hidden">
      {/* Current Background Image with Zoom */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${slides[currentIndex].bgImage})`,
          backgroundPosition: 'center',
          transformOrigin: 'center',
          transform: `scale(${isTransitioning ? currentScale : currentScale})`,
          opacity: isTransitioning ? 1 - blendProgress : 1,
          transition: isTransitioning ? 'opacity 1.5s ease-out' : 'none'
        }}
      />
      
      {/* Next Background Image for Blending */}
      {isTransitioning && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${slides[nextIndex].bgImage})`,
            backgroundPosition: 'center',
            transformOrigin: 'center',
            opacity: blendProgress,
            transform: `scale(1)`, // Start fresh with new image
            transition: 'opacity 1.5s ease-in'
          }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex md:items-center max-w-7xl p-4 mx-auto md:justify-start items-end justify-end h-full">
        <div className="text-white w-full h-fit text-start flex flex-col items-start justify-center mt-40 md:mt-20">
          {/* Animated Text */}
          <AnimatePresence mode="wait">
            <motion.div key={`content-${currentIndex}`} className="w-full">
              <motion.h1 
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={0}
                className="main-heading"
              >
                {slides[currentIndex].heading}
              </motion.h1>

              <motion.p 
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={1}
                className="tagline"
              >
                {slides[currentIndex].tagline}
              </motion.p>

              <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                custom={2}
              >
                <CustomeButton title="Get Started" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSec;