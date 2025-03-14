"use client";

const WaveComponent = () => (
  <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-0">
    <svg className="w-full h-24 md:h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
      <path 
        fill="#dbeafe" 
        fillOpacity="0.3"
        d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,165.3C672,160,768,96,864,90.7C960,85,1056,139,1152,154.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      />
    </svg>
  </div>
);

export default WaveComponent;