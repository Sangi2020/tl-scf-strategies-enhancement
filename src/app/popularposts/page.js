import React from 'react';
import { Sparkles } from 'lucide-react';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import Link from 'next/link';

const PopularPosts = () => {
  return (
    <div className=" bg-primary relative overflow-hidden">
      {/* Aurora background component */}
      <AuroraBackgroundDemo
        title="Popular Posts"
        description="Your gateway to knowledge and tools"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center p-4 sm:p-6 md:p-8 lg:p-16">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl shadow-xl border border-white/20">
          <div className="flex items-center justify-center mb-4 md:mb-6 relative">
            {/* Responsive sparkle sizes */}
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-purple-600 mr-2 md:mr-3 animate-pulse" />
            <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  text-title ">
              Coming Soon!
            </h1>
            <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-blue-600 ml-2 md:ml-3 animate-pulse" />
            
            {/* Decorative sparkles with responsive positioning */}
            <Sparkles className="hidden md:block absolute -top-8 left-1/4 w-4 h-4 md:w-6 md:h-6 text-purple-400 animate-bounce" />
            <Sparkles className="hidden md:block absolute -bottom-8 right-1/4 w-4 h-4 md:w-6 md:h-6 text-blue-400 animate-bounce" />
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 leading-relaxed px-2 sm:px-4">
            We&apos;re diligently working to bring you our new posts. 
            Stay tuned for updates and sneak peeks!
          </p>

          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-2">
              <button className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm md:text-base rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
                Notify Me
              </button>
              <Link href={'/'} className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-white hover:bg-gray-50 text-purple-600 text-sm md:text-base rounded-lg shadow-lg border border-purple-200 transition-all duration-300 transform hover:scale-105">
                Explore Other Sections
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 mt-6 md:mt-8 px-2">
              Want to be the first to know? Sign up for our newsletter below!
            </p>
          </div>
        </div>

        {/* Responsive decorative elements */}
        <div className="absolute bottom-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-purple-500 rounded-full filter blur-3xl opacity-10 transform -translate-x-1/2" />
        <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-500 rounded-full filter blur-3xl opacity-10 transform translate-x-1/2" />
      </div>
    </div>
  );
};

export default PopularPosts;