'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import illustrationWorking from "../../images/illustration-working.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="shortener" className="md:pb-20">
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-around">
        {/* Text Content */}
        <div className="md:w-1/2 flex justify-center px-5 xl:px-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center md:text-left mt-8 md:mt-0"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="hero_heading font-bold text-gray-800 leading-tight"
            >
              More than just shorter links
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-500 text-lg md:text-xl mt-4 mb-8 max-w-md mx-auto md:mx-0"
            >
              Build your brand&apos;s recognition and get detailed insights on
              how your links are performing.
            </motion.p>
            <Link href="#enterUrl">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#2BD0D0] text-white px-8 py-3 rounded-full hover:bg-opacity-70 transition-colors font-bold"
            >
              Get Started
            </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:w-1/2 md:pl-8"
        >
          <div className="relative w-full h-64 md:h-[450px]">
            <Image
              src={illustrationWorking}
              alt="Person working at desk illustration"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
