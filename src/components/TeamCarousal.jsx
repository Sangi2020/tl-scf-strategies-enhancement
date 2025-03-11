// components/TeamCarousel.js
import React from "react";

const teamMembers = [
  { name: "Jason Statham", role: "UX/UI Designer" },
  { name: "Corey Anderson", role: "Project Manager" },
  { name: "Josh Buttler", role: "CEO & Founder" },
  { name: "Alex Maxwel", role: "Marketing Manager" },
  { name: "Janny Cotller", role: "Web Developer" },
];

const TeamCarousel = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-8">Our Awesome Team</h2>
      <p className="text-center mb-12 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex justify-center space-x-8 overflow-x-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circular div for the image placeholder */}
            <div className="h-24 w-24 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center text-white text-xl font-bold">
              {member.name.split(" ")[0][0]}
              {member.name.split(" ")[1][0]}
            </div>
            <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500">{member.role}</p>
            {/* Social icons placeholder */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-purple-500">
                {/* Add any social icons here */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 19.779l-.707-.707A8 8 0 0112 3a8 8 0 018 8 8 8 0 01-8 8v1h-1.586l-.707.707a1 1 0 01-1.414 0z" />
                </svg>
              </a>
              <a href="#" className="text-purple-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 19.779l-.707-.707A8 8 0 0112 3a8 8 0 018 8 8 8 0 01-8 8v1h-1.586l-.707.707a1 1 0 01-1.414 0z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCarousel;
