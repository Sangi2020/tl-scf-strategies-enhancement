import React from "react";
import { FaIndustry, FaHospital, FaCar, FaUniversity, FaBuilding,FaMoneyCheckAlt , FaPlane, FaShieldAlt } from "react-icons/fa";
import { HiDatabase } from "react-icons/hi";

const FuturisticBackground = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden opacity-10">
    <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
      {/* Grid Lines */}
      <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
        <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#4A90E2" strokeWidth="0.5"/>
      </pattern>
      <rect width="100%" height="100%" fill="url(#grid)" />
      
      {/* Circular Elements */}
      <circle cx="200" cy="200" r="100" fill="none" stroke="#4A90E2" strokeWidth="0.5" />
      <circle cx="800" cy="800" r="150" fill="none" stroke="#4A90E2" strokeWidth="0.5" />
      
      {/* Tech Lines */}
      <path d="M0 300 Q 400 350, 1000 200" stroke="#4A90E2" strokeWidth="0.5" fill="none" />
      <path d="M0 600 Q 500 550, 1000 700" stroke="#4A90E2" strokeWidth="0.5" fill="none" />
      
      {/* Hexagon Pattern */}
      {[...Array(5)].map((_, i) => (
        <path
          key={i}
          d={`M${150 + i * 200},${100 + i * 100} l60,-35 l60,35 l0,70 l-60,35 l-60,-35 z`}
          fill="none"
          stroke="#4A90E2"
          strokeWidth="0.5"
        />
      ))}
      
      {/* Dots */}
      {[...Array(20)].map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 1000}
          cy={Math.random() * 1000}
          r="2"
          fill="#4A90E2"
        />
      ))}
    </svg>
  </div>
);

const industries = [
  { icon: <FaIndustry className={getRandomColor()} />, title: "Manufacturing" },
  { icon: <FaHospital className={getRandomColor()} />, title: "Healthcare" },
  { icon: <FaCar className={getRandomColor()} />, title: "Automotive" },
  { icon: <FaUniversity className={getRandomColor()} />, title: "Banking" },
  { icon: <FaBuilding className={getRandomColor()} />, title: "Real Estate" },
  { icon: <FaMoneyCheckAlt  className={getRandomColor()} />, title: "Fintech" },
  // { icon: <FaShieldAlt className={getRandomColor()} />, title: "Automotive" },
  { icon: <HiDatabase className={getRandomColor()} />, title: "Retail" },
];

function getRandomColor() {
  const colors = [
    'text-red-500', 
    'text-blue-500', 
    'text-green-500', 
    'text-yellow-500', 
    'text-purple-500', 
    'text-orange-500', 
    'text-pink-500', 
    'text-teal-500',
    'text-gold-500'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}


const IndustriesSection = () => {
  const radius = 300;
  const totalItems = industries.length;
  
  const getPosition = (index) => {
    const angle = (index * (360 / totalItems) - 90) * (Math.PI / 180);
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="bg-primary w-full relative ">
      <FuturisticBackground />
      
      {/* Mobile Layout (display below lg breakpoint) */}
      <section className="lg:hidden py-16 px-4 relative">
        <div className="text-center mb-12">
          <h2 className="subheading">Industries We Serve</h2>
         
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white backdrop-blur-sm p-6 rounded-lg shadow-lg flex items-center space-x-4 transition-transform duration-300 hover:scale-105"
            >
              <div className="text-4xl ">{industry.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{industry.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop Circle Layout (display above lg breakpoint) */}
      <section className="hidden lg:block relative mx-auto max-w-[1550px] text-black h-[900px]">
        {/* Center Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 w-full max-w-md">
          <h2 className="subheading">Industries We Serve</h2>
        </div>

        {/* Industry Cards Container */}
        <div className="absolute top-1/2 left-1/2 w-0 h-0">
          {industries.map((industry, index) => {
            const { x, y } = getPosition(index);
            return (
              <div
                key={index}
                className="absolute transform -translate-x-1/2 z-20 -translate-y-1/2"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                }}
              >
                <div className="bg-white backdrop-blur-sm p-4 rounded-lg shadow-lg w-48 flex flex-col items-center space-y-2 transition-transform duration-300 hover:scale-110">
                  <div className="text-4xl text-blue-500">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 text-center">{industry.title}</h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-dashed z-10 border-gray-300 rounded-full opacity-50" />
      </section>
    </div>
  );
};

export default IndustriesSection;