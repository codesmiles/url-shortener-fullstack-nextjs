'use client'
import React,{ useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface StatCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const StatCard = ({ icon, title, description, className = "", delay = 0 }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: delay * 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className={`bg-white p-6 rounded-lg relative ${className} max-w-lg mx-auto md:h-80 lg:h-60`}
    >
      <motion.div 
        className="absolute -top-8 left-1/2 md:left-8 transform -translate-x-1/2 md:translate-x-0"
        whileHover={{ 
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 }
        }}
      >
        <div className="bg-[hsl(257,27%,26%)] p-4 rounded-full">
          <Image src={icon} alt="" width={40} height={40} />
        </div>
      </motion.div>
      
      <motion.h3 
        className="text-xl font-bold text-gray-800 mt-8 mb-3"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: delay * 0.2 + 0.3 }}
      >
        {title}
      </motion.h3>
      
      <motion.p 
        className="text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: delay * 0.2 + 0.5 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default StatCard;
