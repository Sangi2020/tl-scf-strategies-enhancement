import React from "react";
import { FaCheckCircle, FaLeaf, FaBoxOpen, FaClipboardList, FaUsers, FaRocket } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <section className="bg-peimary  p-4 max-w-7xl mx-auto rounded-lg flex flex-col md:h-[60vh] md:flex-row sm:flex-col items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 md:mt-20" >
      {/* Black div replacing the image */}
      <div className="w-full sm:w-full  md:w-1/2 h-full  rounded-3xl bg-cover"  style={{ backgroundImage: "url('/images/LandingPage/whychoose.jpg')"} }></div>

      {/* Text and icon grid section */}
      <div className="w-full md:w-1/2 flex flex-col h-full  justify-center">
        <div className="mb-4">
          {/* <span className="bg-pink-200 text-pink-700 px-2 py-1 rounded-lg font-semibold">Why Us</span> */}
          <h2 className="subheading  ">
          Why Choose <br /> Our Services Over the Rest?
          </h2>
        </div>
        
        {/* Icon grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div className="flex items-center p-4 bg-white  rounded-lg">
            <FaCheckCircle className="text-blue-500 text-2xl mr-3" />
            <span className="font-medium text-blue-900">Quality Comes First</span>
          </div>
          <div className="flex items-center p-4 bg-white  rounded-lg">
            <FaLeaf className="text-blue-500 text-2xl mr-3" />
            <span className="font-medium text-blue-900">Flexible Cooperation</span>
          </div>
          <div className="flex items-center p-4 bg-white  rounded-lg">
            <FaBoxOpen className="text-blue-500 text-2xl mr-3" />
            <span className="font-medium text-blue-900">On-time Delivery</span>
          </div>
          <div className="flex items-center p-4 bg-white  rounded-lg">
            <FaClipboardList className="text-blue-500 text-2xl mr-3" />
            <span className="font-medium text-blue-900">Transparent Costs</span>
          </div>
          <div className="flex items-center p-4 bg-white  rounded-lg">
            <FaUsers className="text-blue-500 text-2xl mr-3" />
            <span className="font-medium text-blue-900">Qualified Developers</span>
          </div>
          <div className="flex items-center p-4 bg-white  rounded-lg">
            <FaRocket className="text-blue-500 text-2xl mr-3" />
            <span className="font-medium text-blue-900">Quick Scale-up</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
