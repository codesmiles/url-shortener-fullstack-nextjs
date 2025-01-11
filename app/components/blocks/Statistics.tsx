import React from 'react';
import Image from 'next/image';
import Shortener from './Shortener';
import brandRecognition from '../../images/icon-brand-recognition.svg';
import detailedRecords from '../../images/icon-detailed-records.svg';
import fullyCustomizable from '../../images/icon-fully-customizable.svg';

interface StatCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const StatCard = ({ icon, title, description, className = "" }: StatCardProps) => (
  <div className={`bg-white p-6 rounded-lg relative ${className} max-w-lg mx-auto`}>
    <div className="absolute -top-8 left-1/2 md:left-8 transform -translate-x-1/2 md:translate-x-0">
      <div className="bg-[hsl(257,27%,26%)] p-4 rounded-full">
        <Image src={icon} alt="" width={40} height={40} />
      </div>
    </div>
    <h3 className="text-xl font-bold text-gray-800 mt-8 mb-3">{title}</h3>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

const Statistics = () => {
  return (
    <section className="bg-gray-100 pb-20 pt-32 mt-24 md:mt-0 relative">
      <div className="absolute top-0 md:top-5 left-0 right-0 px-4">
        <Shortener />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-bold text-gray-800 mb-4 statistic_header">
          Advanced Statistics
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-16">
          Track how your links are performing across the web with our advanced statistics dashboard.
        </p>

        <div className="relative flex flex-col md:flex-row gap-20 md:gap-8">
          {/* Connecting Line */}
          <div className="absolute left-1/2 md:left-0 top-0 w-2 md:w-full h-full md:h-2 bg-[#2BD0D0] transform -translate-x-1/2 md:translate-x-0 md:top-1/2 md:-translate-y-1/2" />

          {/* Cards */}
          <StatCard
            icon={brandRecognition}
            title="Brand Recognition"
            description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
            className="flex-1 z-10"
          />
          <StatCard
            icon={detailedRecords}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            className="flex-1 z-10 md:mt-8"
          />
          <StatCard
            icon={fullyCustomizable}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            className="flex-1 z-10 md:mt-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
