import React from 'react';

const NoiseBackground = ({ children }) => {
  return (
    <div className="noise-container">
      <div className="noise-overlay"></div>
      <div className="content-wrapper">
        {children}
      </div>
      
      <style jsx global>{`
        .noise-container {
          position: relative;
          width: 100%;
          min-height: 100vh;


          z-index:997;
          isolation: isolate;
        }

        .noise-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.05;
          pointer-events: none;
          z-index: 998;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .content-wrapper {
          position: relative;
          z-index: 999;
        }

        @media (prefers-reduced-motion: no-preference) {
          .noise-overlay {
            animation: noise 1s steps(2) infinite;
          }
        }

        @keyframes noise {
          0% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-5%, -5%);
          }
          20% {
            transform: translate(-10%, 5%);
          }
          30% {
            transform: translate(5%, -10%);
          }
          40% {
            transform: translate(-5%, 15%);
          }
          50% {
            transform: translate(-10%, 5%);
          }
          60% {
            transform: translate(15%, 0);
          }
          70% {
            transform: translate(0, 10%);
          }
          80% {
            transform: translate(-15%, 0);
          }
          90% {
            transform: translate(10%, 5%);
          }
          100% {
            transform: translate(5%, 0);
          }
        }
      `}</style>
    </div>
  );
};

export default NoiseBackground;