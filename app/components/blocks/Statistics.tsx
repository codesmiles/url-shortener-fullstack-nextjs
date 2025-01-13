"use client";
import React, { useState, useEffect } from "react";
import StatCard from "../StatCard";
import Shortener from "./Shortener";
import brandRecognition from "../../images/icon-brand-recognition.svg";
import detailedRecords from "../../images/icon-detailed-records.svg";
import fullyCustomizable from "../../images/icon-fully-customizable.svg";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

interface ShortenedLink {
  original: string;
  shortened: string;
}

const Statistics = () => {
  const { toast } = useToast();
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([]);
  const [copyText, setCopyText] = useState("Copy");

  useEffect(() => {
    const savedLinks = localStorage.getItem('shortenedLinks');
    if (savedLinks) {
      setShortenedLinks(JSON.parse(savedLinks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("shortenedLinks", JSON.stringify(shortenedLinks));
  }, [shortenedLinks]);

  const handleNewLink = (original: string, shortened: string) => {
    setShortenedLinks(prev => [{ original, shortened }, ...prev]);
  };

  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopyText("Copied");
    setTimeout(() => setCopyText("Copy"), 2000);

    toast({
      description: `Copied "${link}" to clipboard`,
    });
  };

  return (
    <section className="bg-gray-100 pb-20 pt-32 mt-24 md:mt-0 relative">
      <div className="absolute top-0 md:top-5 left-0 right-0 px-4">
        <Shortener onLinkShortened={handleNewLink} />
      </div>

      <div className="max-w-6xl mx-auto px-4 mb-16">
        {shortenedLinks.map((link, index) => (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            key={index}
            className="bg-white rounded-lg p-4 mb-4 flex flex-col md:flex-row items-center justify-between"
          >
            <span className="text-gray-700 mb-2 md:mb-0 truncate max-w-xs md:max-w-md">
              {link.original}
            </span>
            <div className="flex flex-col md:flex-row items-center gap-2 w-full md:w-auto">
              <span className="text-[#2BD0D0]">{link.shortened}</span>
              <button
                onClick={() => handleCopyLink(link.shortened)}
                className={`${
                  copyText == "Copied" && "bg-[hsl(255,11%,22%)]"
                } bg-[#2BD0D0] text-white px-6 py-2 rounded-lg hover:bg-opacity-70 transition-all w-full md:w-auto`}
              >
                {copyText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-bold text-gray-800 mb-4 statistic_header">
          Advanced Statistics
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto mb-16">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
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
            delay={0}
          />
          <StatCard
            icon={detailedRecords}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            className="flex-1 z-10 md:mt-8"
            delay={1}
          />
          <StatCard
            icon={fullyCustomizable}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            className="flex-1 z-10 md:mt-16"
            delay={2}
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
