'use client';
import { useEffect, useState } from 'react';

const Loading = () => {
  // Instead of returning null, we'll render with opacity-0 initially
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Immediately set mounted to avoid any delay
    requestAnimationFrame(() => {
      setIsMounted(true);
    });
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-primary z-50 transition-opacity duration-300 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150" width="200" height="150">
          <rect width="200" height="150" fill="#eeeeee" />
          <g transform="translate(30, 30)">
            {/* First Rectangle - S */}
            <rect x="0" y="0" width="35" height="40" fill="black">
              <animate
                attributeName="height"
                values="0;40;40;0;0"
                keyTimes="0;0.15;0.65;0.8;1"
                dur="3s"
                begin="0s"
                repeatCount="indefinite"
                key="rect1"
              />
            </rect>
            <text x="17.5" y="30" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">
              S
              <animate
                attributeName="opacity"
                values="0;1;1;0;0"
                keyTimes="0;0.15;0.65;0.8;1"
                dur="3s"
                begin="0s"
                repeatCount="indefinite"
                key="text1"
              />
            </text>

            {/* Second Rectangle - C */}
            <rect x="45" y="0" width="35" height="40" fill="black">
              <animate
                attributeName="height"
                values="0;40;40;0;0"
                keyTimes="0;0.15;0.65;0.8;1"
                dur="3s"
                begin="0.2s"
                repeatCount="indefinite"
                key="rect2"
              />
            </rect>
            <text x="62.5" y="30" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">
              C
              <animate
                attributeName="opacity"
                values="0;1;1;0;0"
                keyTimes="0;0.15;0.65;0.8;1"
                dur="3s"
                begin="0.2s"
                repeatCount="indefinite"
                key="text2"
              />
            </text>

            {/* Third Rectangle - F */}
            <rect x="90" y="0" width="35" height="40" fill="black">
              <animate
                attributeName="height"
                values="0;40;40;0;0"
                keyTimes="0;0.15;0.65;0.8;1"
                dur="3s"
                begin="0.4s"
                repeatCount="indefinite"
                key="rect3"
              />
            </rect>
            <text x="107.5" y="30" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">
              F
              <animate
                attributeName="opacity"
                values="0;1;1;0;0"
                keyTimes="0;0.15;0.65;0.8;1"
                dur="3s"
                begin="0.4s"
                repeatCount="indefinite"
                key="text3"
              />
            </text>
          </g>
        </svg>

        <div className="text-gray-300 text-4xl font-bold mt-8 tracking-wider">
          SCF STRATEGIES
        </div>
      </div>
    </div>
  );
};

export default Loading;