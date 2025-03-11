import React from "react";

const StatsSection = () => {
  return (
    <section 
      className="relative min-h-screen bg-blue-900 text-white"
      style={{
        backgroundImage: "url('/images/LandingPage/funfacts-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-stone-950 opacity-60 mt-20" />

      {/* Content Container */}
      <div className="relative z-20 container mx-auto px-4 py-12 md:py-16 min-h-screen flex flex-col justify-center">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4">
            We Always Try To Understand Users Expectation
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto px-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 px-4">
          {[
            { value: "180K", label: "Downloaded" },
            { value: "20K", label: "Feedback" },
            { value: "500+", label: "Workers" },
            { value: "70+", label: "Contributors" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="bg-black bg-opacity-50 p-4 md:p-6 rounded-lg transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-green-400">{stat.value}</h3>
              <p className="mt-2 text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mx-4">
          <div className="bg-opacity-10 border border-dashed border-gray-400 p-4 md:p-6 rounded-lg flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 max-w-2xl mx-auto">
            <div className="text-center md:text-left">
              <h3 className="text-lg md:text-xl mb-1">Have any question about us?</h3>
              <p className="text-sm md:text-base text-gray-300">Don&apos;t hesitate to contact us</p>
            </div>
            <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded transition-colors duration-300 w-full md:w-auto">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;