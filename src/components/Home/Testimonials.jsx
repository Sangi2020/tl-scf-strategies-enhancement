'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import useTestimonialStore from '@/store/useTestimonialStore';

const TestimonialSection = () => {
  const { testimonials, loading, error, fetchTestimonials } = useTestimonialStore();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  const handleNext = useCallback(() => {
    if (!isAnimating && testimonials.length > 0) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, testimonials.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  const handlePrev = () => {
    if (!isAnimating && testimonials.length > 0) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section className="relative bg-gray-50 py-20 overflow-hidden" style={{ backgroundImage: "url('/images/LandingPage/fintech.jpg')" }}>
      <div className="absolute inset-0 backdrop-blur-sm bg-black bg-opacity-75" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">What our clients say</h2>
          <svg className="w-16 h-2 mx-auto" viewBox="0 0 60 8">
            <rect width="60" height="8" fill="#2563eb" rx="4" />
          </svg>
        </div>

        {loading ? (
          <p className="text-center text-white">Loading testimonials...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : testimonials.length > 0 ? (
          <div className="relative max-w-4xl mx-auto">
            <Quote className="absolute -top-6 -left-8 w-16 h-16 text-blue-100" />
            <div className="relative bg-primary rounded-2xl shadow-xl p-8 md:p-12 min-h-[300px]">
              <div className={`transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-gray-700 text-center md:text-lg text-base sm:text-sm mb-6">&quot;{testimonials[currentIndex]?.text}&quot;</p>
                <div className="text-center">
                  <p className="text-title font-bold">{testimonials[currentIndex]?.author}</p>
                  <p className="text-gray-600 text-lg">{testimonials[currentIndex]?.position}</p>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
              <button onClick={handlePrev} className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20">
                <ChevronLeft className="w-6 h-6 text-cyan-600" />
              </button>
              <button onClick={handleNext} className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20">
                <ChevronRight className="w-6 h-6 text-cyan-600" />
              </button>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-600 w-6' : 'bg-blue-200'}`} />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No testimonials available.</p>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;