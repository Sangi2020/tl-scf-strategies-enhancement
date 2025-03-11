import React from 'react';
import { FileText, BookOpen, PieChart,} from 'lucide-react';
import AuroraBackgroundDemo from '@/components/auroraBackground/AuroraDemo';
import Link from 'next/link';
import WaveComponent from '@/components/ui/WaveComponent';
import CustomeButton from '@/components/ui/CustomeButton';

const ResourceCard = ({ icon: Icon, title, description, iconColor, buttonText, linkPath }) => (
  <div className="bg-white shadow-lg rounded-lg p-8 text-left hover:shadow-xl transition-shadow flex flex-col h-full min-h-[300px]">
    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${iconColor}`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
    <p className="text-gray-600  text-lg mb-6 flex-grow">{description}</p>
    <div className="flex justify-center mt-auto">
     
      <CustomeButton title={buttonText} link={linkPath} />
    </div>
  </div>
);

const ResourceCenterContent = () => {
  return (
    <div className=" bg-primary">
      <AuroraBackgroundDemo
        title="Resource Center"
        description="Find the best resources for your SCF programs"
        link="Learn More"
      />

      <div className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-800">
        Explore SCF Insights at SCF Strategies Resource Center
        </h2>
        <p className="text-xl md:text-xl mb-16 text-start md:text-center text-gray-600 max-w-6xl mx-auto">
  Discover the essentials of <strong>Supply Chain Finance</strong> with our expertly curated resources!<br />
  From <strong>whitepapers</strong> to <strong>case studies</strong>, <strong>SCF Strategies</strong> offers everything you need to stay competitive and informed.<br />
  Dive in and elevate your <strong>SCF strategy</strong>!
</p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          <ResourceCard
            icon={FileText}
            title="Whitepapers & Reports"
            description="Access our collection of detailed whitepapers and industry reports. These documents offer thorough analyses and strategic insights into the latest trends and developments in Supply Chain Finance, helping you make informed decisions and stay ahead of the curve."
            iconColor="bg-blue-500"
            buttonText="Explore"
            linkPath='/catalogues'
          />
          <ResourceCard
            icon={BookOpen}
            title="Blog & Articles"
            description="Explore our blog for regular updates, expert opinions, and practical advice on SCF. Our articles cover a wide range of topics, from emerging trends and best practices to practical tips for optimizing your SCF programs."
            iconColor="bg-green-500"
            buttonText="Explore"
            linkPath='/blog'
          />
          <ResourceCard
            icon={PieChart}
            title="Case Studies"
            description="Learn from real-world examples of successful SCF implementations. Our case studies showcase how leading companies have transformed their supply chain finance strategies, offering valuable lessons and inspiration for your own initiatives."
            iconColor="bg-purple-500"
            buttonText="Explore"
            linkPath='/catalogues'
          />
        </div>

       
      </div>
    </div>
  );
};

export default ResourceCenterContent; 