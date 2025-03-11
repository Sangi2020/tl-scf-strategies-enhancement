import React from 'react';
import TeamCarousel from '@/components/TeamCarousal';
import Image from 'next/image';
import { FaKey, FaHandshake, FaTrophy, FaCheck, FaLaptopCode, FaArrowRight } from 'react-icons/fa';
import InfoCard from '@/components/About/InfoCard';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import OurStory from '@/components/About/OurStory';
import { IntroSection } from '@/components/About/IntroSection';
import CustomeButton from '@/components/ui/CustomeButton';


export default function AboutContent() {
  return (
    <>
   


      <AuroraBackgroundDemo title={'About Us'} description={'Know more about our mission, values and team.'} link={'Learn More'} />
      <div className="bg-primary  max-w-7xl mx-auto  py-12">
        <IntroSection />

        {/* Our Story Section */}
        <OurStory />

        {/* Expertise Section */}
        <div className="mt-8  text-black py-8 px-4 md:px-8 rounded-lg ">
          <div className="max-w-7xl mx-auto">
            <div className=" mb-8">
              <h2 className="subheading">Our Expertise</h2>
            </div>
            <p className="paragraph mb-12">
              With over 100 globally recognized SCF and Reverse Factoring programs, SCF Strategies is your trusted partner for unparalleled expertise and results.<br/>
              Our team&apos;s in-depth knowledge and innovative approach set us apart as leaders in the field.
            </p>
            <InfoCard />

            <div className="mt-12 text-center relative z-10">
              <CustomeButton title={'Learn More About Our Journey'} link={'/contact-us'} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
