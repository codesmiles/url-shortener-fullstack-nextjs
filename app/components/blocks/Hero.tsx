import React from 'react';
import Image from 'next/image';
import illustrationWorking from "../../images/illustration-working.svg" 
const Hero = () => {
  return (
    <section className="md:pb-20">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-around">
        {/* Text Content */}
        <div className="md:w-1/2 flex justify-center px-5 xl:px-24">
          <div className="text-center md:text-left mt-8 md:mt-0">
            <h1 className="hero_heading font-bold text-gray-800 leading-tight">
              More than just shorter links
            </h1>
            <p className="text-gray-500 text-lg md:text-xl mt-4 mb-8 max-w-md mx-auto md:mx-0">
              Build your brand&apos;s recognition and get detailed insights on
              how your links are performing.
            </p>
            <button className="bg-[#2BD0D0] text-white px-8 py-3 rounded-full hover:bg-opacity-70 transition-colors font-bold">
              Get Started
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 md:pl-8">
          <div className="relative w-full h-64 md:h-[450px]">
            <Image
              src={illustrationWorking}
              alt="Person working at desk illustration"
              fill
              className='object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
