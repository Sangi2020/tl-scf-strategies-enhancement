import Image from 'next/image';
import React, { useState } from 'react';
import CustomeButton from '../ui/CustomeButton';

const DiscoverSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative min-h-fit grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-w-7xl mt-20 mx-auto w-fit overflow-hidden bg-primary">
      {/* Animated SVG Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" 
                  className={`transform origin-center transition-transform duration-1000 ${isHovered ? 'scale-110' : 'scale-100'}`} />
        </svg>
      </div>

      {/* Image Section */}
      <div className="relative h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden">
        <Image
          src="/images/LandingPage/discover.jpg" // Make sure the path is exactly as in your public folder
          alt="Discover Section Image"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-cover rounded-3xl"
        />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col justify-center items-start text-black  z-10">
        {/* Decorative SVG */}
        <svg className="absolute top-0 right-0 w-24 h-24 text-black opacity-10" viewBox="0 0 100 100">
          <path d="M10,50 Q50,10 90,50 Q50,90 10,50" fill="none" stroke="currentColor" strokeWidth="2"
                className={`transform transition-all duration-700 ${isHovered ? 'scale-110 opacity-50' : 'scale-100 opacity-20'}`} />
        </svg>

        <h2 className="subheading w-fit">
          Engaging New Audiences through Smart Approach
          <hr className="" />
        </h2>
        
        <p className="paragraph">
  <strong>Unlock working capital</strong> and optimize your supply chain with our innovative financing solutions.<br />
  We <strong>bridge the gap</strong> between suppliers and buyers, enabling <strong>faster payments</strong>, <strong>stronger supplier relationships</strong>, and <strong>improved cash flow management</strong>.<br />
  Our platform empowers businesses of all sizes to thrive in today&apos;s <strong>dynamic market</strong>.
</p>

        <CustomeButton title={"Discover more"}/>
      </div>
    </div>
  );
};

export default DiscoverSection;