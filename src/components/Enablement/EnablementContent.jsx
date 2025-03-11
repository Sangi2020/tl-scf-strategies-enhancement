'use client';
import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import CustomeButton from '@/components/ui/CustomeButton';

// Custom SVG Icons as Components
const ProgramDesignIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0891b2"> {/* Using cyan-600 color */}
    <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
  </svg>
);

const SupplierIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0891b2">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm8-2h-2v-2h2v2zm0-4h-2V6h2v2z"/>
  </svg>
);

const EnablementIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0891b2">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8" fill="#0891b2">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"/>
  </svg>
);

const ServiceItem = ({ icon: Icon, title, description, isEven }) => (
  <div className={`flex flex-col md:flex-row items-center gap-4 ${isEven ? 'md:flex-row-reverse' : ''} py-10`}>
    <div className={`w-full md:w-1/3 flex justify-center ${isEven ? 'md:justify-start' : 'md:justify-end'} mb-6 md:mb-0`}>
      <div className="w-20 h-20 rounded-full bg-black   flex items-center justify-center">
        <Icon className="text-black" />
      </div>
    </div>
    <div className="w-full md:w-2/3 ">
      <h3 className="subheading">{title}</h3>
      <p className=" paragraph">{description}</p>
      <button className="mt-4 text-cyan-600 font-semibold inline-flex items-center group">
        Learn More
        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  </div>
);

const EnablementContent = () => {
  const services = [
    {
      icon: ProgramDesignIcon,
      title: "Program Design",
      description: (
        <>
          Transform your SCF programs with meticulously crafted designs that aim for optimal results. We tailor our approach to address your specific needs, creating robust programs that enhance <strong>efficiency</strong>, <strong>scalability</strong>, and <strong>impact</strong>.
        </>
      )
    },
    {
      icon: SupplierIcon,
      title: "Supplier Onboarding",
      description: (
        <>
          Streamline and simplify your supplier onboarding process through multiple channels. Our comprehensive management solutions ensure that new suppliers are seamlessly integrated into your SCF programs.
        </>
      )
    },
    {
      icon: EnablementIcon,
      title: "Sales & Operations Enablement",
      description: (
        <>
          Equip your teams with the tools and strategies needed to excel in a competitive landscape. Our enablement services focus on boosting team performance and operational <strong>efficiency</strong>.
        </>
      )
    },
    {
      icon: AnalyticsIcon,
      title: "Working Capital Analytics",
      description: (
        <>
          Leverage advanced data and <strong>analytics</strong> to optimize your working capital. Our working capital analytics services provide actionable insights and benchmark comparisons for informed decision-making.
        </>
      )
    }
  ];
  

  return (
    <div className="bg-primary">
      <AuroraBackgroundDemo title={'Solutions & Enablement'} description={'Expert Supply Chain Finance Consulting Services'} link={'Learn More'}/>

      <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="subheading w-fit">
              Empowering Your SCF Programs to Reach New Heights
              <hr/>
            </h2>
            <p className="paragraph">
              At SCF Strategies, we focus on delivering innovative and practical solutions that drive real results, ensuring that your SCF programs not only meet but exceed expectations.
            </p>
        <CustomeButton title={"Learn more"}/>
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <div className="relative h-64 md:h-96">
              <Image
                src="/images/solution.jpg"
                alt="Consulting Services"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="subheading  w-fit">OUR SERVICES <hr/></h2>
          
          <div className="rounded-lg">
            {services.map((service, index) => (
              <ServiceItem key={index} {...service} isEven={index % 2 !== 0} />
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h2 className="subheading text-center">
          Achieve Real Results with Our SCF Solutions
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1  gap-3   w-full">
  <ul className="paragraph-white text-center space-y-3  mb-8">
    <li className="bg-title  p-2 py-3 rounded-lg">Boost Cash Flow for better liquidity</li>
    <li className="bg-title  p-2 py-3 rounded-lg">Optimize Working Capital to unlock growth</li>
    <li className="bg-title  p-2 py-3 rounded-lg">Strengthen Supplier Relationships with  financing</li>
  </ul>
  <ul className="paragraph-white text-center mb-8 space-y-3 ">
    <li className="bg-title  p-2 py-3 rounded-lg">Data-Driven Strategies for targeted success</li>
    <li className="bg-title  p-2 py-3 rounded-lg">Sustainable Growth Edge in the marketplace</li>
    <CustomeButton title={"connect us"}/>
  </ul>
</div>


          
        </div>
      </div>
    </div>
  );
};

export default EnablementContent;