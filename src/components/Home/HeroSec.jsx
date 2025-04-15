"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomeButton from "../ui/CustomeButton";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    bgImage: "/images/LandingPage/hero1.jpg",
    heading: "Transforming Supply Chain Finance with Expertise and Innovation",
    tagline: "Integrating Funding, Technology, and Best Practices for Success",
  },
  {
    bgImage: "/images/LandingPage/hero1.jpg",
    heading: "Empowering Businesses with Smart Financial Solutions",
    tagline: "Streamlining Transactions, Enhancing Efficiency, and Reducing Risks",
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

  useEffect(() => {
    const startZoom = () => {
      const startScale = 1;
      const endScale = 1;
      const duration = 7000;
      const startTime = Date.now();

      const animateZoom = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const newScale = startScale + progress * (endScale - startScale);
        setCurrentScale(newScale);

        if (progress < 1 && !isTransitioning) {
          zoomRef.current = requestAnimationFrame(animateZoom);
        } else if (!isTransitioning) {
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        startTransition();
      }
    }, 6000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  useEffect(() => {
    if (isTransitioning) {
      if (zoomRef.current) {
        cancelAnimationFrame(zoomRef.current);
      }

      const duration = 1500;
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
          setCurrentScale(1);
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

  const startTransition = () => {
    setNextIndex((currentIndex + 1) % slides.length);
    setIsTransitioning(true);
  };

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
        delay: custom * 0.2,
      },
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative md:h-screen h-[100vh] bg-[#ede8f5] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[currentIndex].bgImage})`,
          backgroundPosition: "center",
          transformOrigin: "center",
          transform: `scale(${isTransitioning ? currentScale : currentScale})`,
          opacity: isTransitioning ? 1 - blendProgress : 1,
          transition: isTransitioning ? "opacity 1.5s ease-out" : "none",
        }}
      />
      {isTransitioning && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[nextIndex].bgImage})`,
            backgroundPosition: "center",
            transformOrigin: "center",
            opacity: blendProgress,
            transform: `scale(1)`,
            transition: "opacity 1.5s ease-in",
          }}
        />
      )}

      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 max-w-8xl opacity-30">
        <div className="absolute bottom-0 right-0 ">
          <div className="text-[150px] font-bold text-opacity-20 text-white">
            <span>SCF</span>{" "}
            <span className="text-[150px] font-bold ">STRATEGIES</span>
          </div>
        </div>
      </div>

      {currentIndex === 0 ? (
        <div className="relative z-10 flex md:items-center max-w-7xl p-4 mx-auto md:justify-start items-end justify-end h-full">
          <div className="text-white w-full h-fit text-start flex flex-col items-start justify-center mt-40 md:mt-20">
            <AnimatePresence mode="wait">
              <motion.div key={`content-text-${currentIndex}`} className="w-full">
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

              <motion.div
                key={`content-bg-${currentIndex}`}
                className="w-full h-full bg-black"
              />
            </AnimatePresence>
          </div>
        </div>
      ) : (
        <div className="relative z-10 flex md:items-center flex-col w-full  mx-auto md:justify-start bg-black items-end justify-end h-full">
          <div
            className="relative bg-pink-100 h-1/2 w-full bg-cover bg-top"
            style={{
              backgroundImage:
                "url('/images/LandingPage/topbgcompany.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/80"></div>

            <div className="relative  flex flex-col space-y-4 items-start mb-10 md:items-start justify-end md:justify-end max-w-7xl mx-auto p-4 h-full">
            <div className="z-50 space-y-4 bg-black/40  rounded-lg">
            <h1
  className="md:text-4xl text-2xl font-bold"
  style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)' }}
>
  I will be Speaking at the Working Capital Forum - Americas 2025
</h1>

<h1
  className="md:text-3xl text-xl"
  style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6)' }}
>
  I am excited to share that I will be attending the Working
  Capital Forum – Americas on May 1st, 2025, at the iconic Lotte
  New York Palace in New York City
</h1>

              </div>
              <div className="absolute -bottom-10 right-0 h-full w-auto">
                <Image
                  src="/images/LandingPage/erci.png"
                  alt="Company Logo"
                  width={300}
                  height={300}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
          <div
            className=" h-1/2 w-full bg-cover bg-gray-200 bg-bottom relative"
            style={{
              backgroundImage: "url('/images/LandingPage/bgpattern.png')",
            }}
          >
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 flex flex-col space-y-4 items-start mb-10 md:items-start justify-start md:justify-start max-w-7xl mx-auto p-4 h-full">
              <h1 className="md:text-2xl text-sm  text-black">
                As the forum makes its U.S. debut after more than a decade in
                Europe, it will bring together over 100 senior leaders from
                treasury, procurement, supply chain, and payments. I look
                forward to joining conversations around payables, receivables,
                inventory finance, supply chain innovation, and cash
                forecasting—key levers shaping the future of working capital.
              </h1>

              <div className="flex gap-4 flex-wrap items-center">
      <div className="flex items-center gap-2 bg-cyan-600 p-2 py-2 rounded-lg hover:bg-cyan-700 transition-all duration-300 text-white">
        <FaCalendarAlt />
        <span>Date: May 1, 2025</span>
      </div>

      <div className="flex items-center gap-2 bg-cyan-600 p-2 py-2 rounded-lg hover:bg-cyan-700 transition-all duration-300 text-white">
        <FaMapMarkerAlt />
        <span>Location: Lotte New York Palace, NYC</span>
      </div>
      <CustomeButton title="Learn more about event" />
      
    </div>
              <h1 className="text-title">Stay tuned , I will be sharing insights and takeaways from the event right here</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSec;
