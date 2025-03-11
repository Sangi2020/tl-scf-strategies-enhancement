"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative md:h-screen h-[70vh] bg-[#ede8f5] overflow-hidden">
      {/* Background Crossfade */}
      <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex md:items-center max-w-7xl p-4 mx-auto md:justify-start items-end justify-end h-full">
        <div className="text-white w-full h-fit text-start flex flex-col items-start justify-center mt-40 md:mt-20">
          {/* Stats Boxes */}
          {/* <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 mb-2">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="p-2 sm:p-6 rounded-lg sm:rounded-xl bg-primary shadow-md sm:shadow-lg"
            >
              <h4 className="text-2xl sm:text-4xl font-bold text-title mb-1 sm:mb-2">$150B+</h4>
              <p className="text-gray-800 text-xs sm:text-base">Trading Volume</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-title p-2 sm:p-6 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg"
            >
              <h4 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-100 mb-1 sm:mb-2">100+</h4>
              <p className="text-gray-100 text-xs sm:text-base">Global Programs</p>
            </motion.div>
          </div> */}

          {/* Animated Text */}
          <motion.h1 
            key={currentIndex} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="main-heading"
          >
            {slides[currentIndex].heading}
          </motion.h1>

          <motion.p 
            key={`tagline-${currentIndex}`} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="tagline"
          >
            {slides[currentIndex].tagline}
          </motion.p>

          <CustomeButton title="Get Start" />
        </div>
      </div>
    </div>
  );
}

export default HeroSec;
