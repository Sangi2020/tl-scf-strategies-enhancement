import React from "react";
import { FaChartLine, FaCog, FaChartBar } from "react-icons/fa";

const SolutionsSec = () => {
  const solutions = [
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: "Strategic Planning and Execution",
      description:
        "Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.",
    },
    {
      icon: <FaCog className="text-4xl text-blue-600" />,
      title: "Business Process Optimization",
      description:
        "Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.",
    },
    {
      icon: <FaChartBar className="text-4xl text-blue-600" />,
      title: "Market Analysis and Expansion Strategy",
      description:
        "Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.",
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: "Strategic Planning and Execution",
      description:
        "Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.",
    },
    {
      icon: <FaCog className="text-4xl text-blue-600" />,
      title: "Business Process Optimization",
      description:
        "Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.",
    },
    {
      icon: <FaChartBar className="text-4xl text-blue-600" />,
      title: "Market Analysis and Expansion Strategy",
      description:
        "Our consulting services are customized to suit the unique needs and goals of each client, ensuring precise alignment with their business objectives.",
    },
  ];

  return (
    <section
      style={{ backgroundImage: "url('/images/LandingPage/SolutionsSec.webp')" }}
      className="text-center leading-tight bg-cover md:py-20 p-5 md:m-10 rounded-lg"
    >
      {/* Header Section */}
      <h1 className="text-[42px] text-black font-bold w-full">
        Transformative Solutions Tailored to Your<br />Needs
      </h1>
      <h2 className="text-stone-900 font-thin text-xl mb-10">
        Driving Growth and Innovation Through Customized Strategies
      </h2>

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 p-2 gap-3 mb-10">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm border  p-8 flex flex-col items-start  space-y-6 text-start"
          >
            <div className="bg-gray-100 p-4 rounded-full mb-4">{solution.icon}</div>
            <h3 className="text-2xl font-semibold hover:text-blue-500 text-blue-900 mb-2">{solution.title}</h3>
            <p className="text-gray-600 text-xl">{solution.description}</p>
          </div>
        ))}
      </div>
      <button className="mt-10  bg-blue-700 p-3 rounded-full text-2xl">Get started now</button>
    </section>
  );
};

export default SolutionsSec;
