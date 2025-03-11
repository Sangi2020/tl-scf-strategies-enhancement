import React from 'react';
import { FaCheck, FaTrophy, FaLaptopCode } from 'react-icons/fa';

const InfoCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8" >
      {/* Independent Expertise Card */}
      <div className="group relative cursor-pointer overflow-hidden border border-gray-200  bg-white shadow-lg hover:shadow-xl  px-6 pt-10 pb-8 transition-all duration-300 hover:-translate-y-2 rounded-xl sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-yellow-500 transition-all duration-1000 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-yellow-500 transition-all duration-300 group-hover:bg-yellow-400">
            <FaCheck className="h-10 w-10 text-white" />
          </span>
          <div className="space-y-6 pt-5 text-base leading-7 transition-all duration-300 group-hover:text-white/90">
            <h4 className="text-xl font-semibold">Independent Expertise</h4>
            <p className='text-lg '>Benefit from our unbiased, industry-leading insights that focus solely on optimizing your SCF programs.</p>
          </div>
        </div>
      </div>

      {/* Proven Track Record Card */}
      <div  className="group relative cursor-pointer overflow-hidden border border-gray-200  bg-white shadow-lg hover:shadow-xl  px-6 pt-10 pb-8 transition-all duration-300 hover:-translate-y-2 rounded-xl sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-green-500 transition-all duration-1000 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-green-500 transition-all duration-300 group-hover:bg-green-400">
            <FaTrophy className="h-10 w-10 text-white" />
          </span>
          <div className="space-y-6 pt-5 text-base leading-7  transition-all duration-300 group-hover:text-white/90">
            <h4 className="text-xl  font-semibold">Proven Track Record</h4>
            <p className='text-lg  hover:text-white '>Our successful implementation of over 100 programs highlights our ability to deliver transformative results for businesses worldwide.</p>
          </div>
        </div>
      </div>

      {/* Advanced Technology Card */}
      <div className="group relative cursor-pointer overflow-hidden border border-gray-200  bg-white shadow-lg hover:shadow-xl px-6 pt-10 pb-8 transition-all duration-300 hover:-translate-y-2 rounded-xl sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-500 transition-all duration-1000 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto max-w-md">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-blue-500 transition-all duration-300 group-hover:bg-blue-400">
            <FaLaptopCode className="h-10 w-10 text-white " />
          </span>
          <div className="space-y-6 pt-5 text-base leading-7  transition-all duration-300 group-hover:text-white/90">
            <h4 className="text-xl font-semibold">Advanced Technology</h4>
            <p className='text-lg  '>Leverage cutting-edge analytics and benchmarking tools to drive efficiency and effectiveness in your SCF initiatives.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;