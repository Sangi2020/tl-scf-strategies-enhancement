import React, { useEffect } from 'react';
import { Building2, BookOpen, BarChart3, Users, Search } from 'lucide-react';

const WhatWeDo = () => {
  const offerings = [
    {
      Icon: BookOpen,
      title: "Advisory Services",
      description: "Define your SCF strategy through market assessments, go-to-market strategies, detailed sales plans, and performance tracking."
    },
    {
      Icon: Building2,
      title: "Enablement Services",
      description: "Prepare your teams for SCF success with comprehensive training, working capital analysis, and operational support for world-class execution."
    },
    {
      Icon: BarChart3,
      title: "Working Capital Analytics",
      description: "Leverage our proprietary analytics application to identify opportunities for working capital improvement through optimized payment terms."
    },
    {
      Icon: Users,
      title: "Supplier Onboarding",
      description: "Comprehensive management of vendor outreach and seamless onboarding process for your SCF program, with ongoing support."
    },
    {
      Icon: Search,
      title: "Solution Audits & Partner Selection",
      description: "Expert review of SCF platforms and assistance in selecting the right technology, origination, and funding partners."
    }
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach((element) => {
      observer.observe(element);
    });

    document.querySelectorAll('.fade-in').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative  bg-[#eeeeee] mt-20 overflow-hidden ">
      {/* Enhanced Background SVG Patterns */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Original circles */}
        <svg className="absolute right-0 top-0 opacity-10 animate-spin-slow" width="400" height="400" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="#2563eb" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="35" stroke="#2563eb" strokeWidth="0.5" fill="none" />
          <circle cx="50" cy="50" r="30" stroke="#2563eb" strokeWidth="0.5" fill="none" />
        </svg>
        
        {/* New floating dots pattern */}
        <svg className="absolute left-1/4 top-1/4 opacity-10" width="200" height="200" viewBox="0 0 100 100">
          <g className="animate-float">
            <circle cx="20" cy="20" r="2" fill="#2563eb" />
            <circle cx="40" cy="40" r="2" fill="#2563eb" />
            <circle cx="60" cy="60" r="2" fill="#2563eb" />
            <circle cx="80" cy="80" r="2" fill="#2563eb" />
          </g>
        </svg>
        
        {/* New hexagon pattern */}
        {/* <svg className="absolute right-1/4 bottom-1/4 opacity-10" width="300" height="300" viewBox="0 0 100 100">
          <path d="M50 10L90 30L90 70L50 90L10 70L10 30Z" stroke="#2563eb" strokeWidth="0.5" fill="none" 
                className="animate-pulse-slow" />
        </svg> */}
        
        {/* Original rectangles */}
        <svg className="absolute left-0 bottom-0 opacity-10" width="400" height="400" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" stroke="#2563eb" strokeWidth="0.5" fill="none" />
          <rect x="20" y="20" width="60" height="60" stroke="#2563eb" strokeWidth="0.5" fill="none" />
          <rect x="30" y="30" width="40" height="40" stroke="#2563eb" strokeWidth="0.5" fill="none" />
        </svg>

        {/* New wave pattern */}
        {/* <svg className="absolute right-0 top-1/2 opacity-5" width="100%" height="120" preserveAspectRatio="none">
          <path d="M0,40 C300,100 400,0 500,40 C600,80 700,0 800,40 L800,120 L0,120 Z" fill="#2563eb" />
        </svg> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section with animation */}
        <div className=" mb-10 fade-up text-start opacity-0 translate-y-4 transition-all duration-1000">
         
          <h2 className="subheading w-fit">
            What We Do at SCF Strategies
        <hr className="" />
          </h2>
          <p className="max-w-6xl paragraph">
  We specialize in closing the <strong>services gap</strong> required for the success of <strong>Supply Chain Finance (SCF)</strong> programs. Our approach encompasses the entire <strong>SCF ecosystem</strong>, including <strong>origination</strong>, <strong>design</strong>, <strong>implementation</strong>, and <strong>management</strong>.
</p>

        </div>

        {/* Offerings Grid with stagger animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-8">

          {offerings.map(({ Icon, title, description }, index) => (
            <div 
              key={index}
              className={` p-8 rounded-xl shadow-lg relative hover:shadow-xl transition-all bg-title duration-300 transform hover:-translate-y-1 border border-gray-100 fade-in opacity-0 translate-y-4`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
             
              <div className="mb-6 relative overflow-hidden group">
                <div className="absolute inset-0 bg-blue-100 rounded-lg opacity-20 group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative p-3 w-fit">
                  <Icon className="w-8 h-8 text-blue-100 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {title}
              </h3>
              <p className="text-gray-200">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Experience Banner with parallax effect */}
        <div className="mt-20 relative fade-up opacity-0 translate-y-4 transition-all duration-1000">
  <div
    className="relative bg-gradient-to-r rounded-2xl p-12 text-center overflow-hidden"
    style={{ backgroundImage: "url('/images/boxbig2.jpg')" }}
  >
    {/* Background blur with lower z-index */}
    <div className="absolute inset-0 rounded-2xl backdrop-blur-sm z-0"></div>

    {/* Abstract background pattern */}
    <svg
      className="absolute inset-0 w-full h-full opacity-10 z-0"
      viewBox="0 0 100 100"
    >
      <defs>
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="5" cy="5" r="1" fill="#2563eb" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#grid)" />
    </svg>

    {/* Rotating circle */}
   

    {/* Main text content with higher z-index */}
    <p className="paragraph relative font-bold z-10">
  Our team brings <span className="font-extrabold bg-stone-100 text-cyan-700 rounded px-2">a combined 60 years</span> of hands-on experience with{' '}
  <span className="font-extrabold text-cyan-700 bg-stone-100 rounded px-2">100+ SCF programs</span> implemented worldwide.
</p>
  </div>
</div>

      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.1; }
          50% { opacity: 0.2; }
          100% { opacity: 0.1; }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;