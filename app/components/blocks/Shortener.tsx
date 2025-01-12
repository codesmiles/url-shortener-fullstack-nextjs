"use client";
import React, { useState } from "react";
import Image from "next/image";
import bgShortenDesktop from "../../images/bg-shorten-desktop.svg";
import bgShortenMobile from "../../images/bg-shorten-mobile.svg";
import { motion } from "framer-motion";
import shortenerApi from "../ShortenAPI";
import { useToast } from "@/hooks/use-toast";

interface ShortenedLink {
  original: string;
  shortened: string;
}

const Shortener = () => {
  const [url, setUrl] = useState("");
  const [isError, setIsError] = useState(false);
  const [shortenedLinks, setShortenedLinks] = useState<ShortenedLink[]>([]);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      setIsError(true);
      return;
    }
    setIsError(false);

    const shortened: string | null = await shortenerApi({ url: url });
    if (!shortened) {
      setIsError(true);
      return;
    }
    
    setShortenedLinks([{ original: url, shortened }, ...shortenedLinks]);
    setUrl("");
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        description: `Copied "${text}" to clipboard`,
      });
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-6xl mx-auto px-4"
    >
      <div className="relative bg-[hsl(257,27%,26%)] p-6 md:p-10 rounded-lg -mt-20">
        {/* Background Images */}
        <div className="absolute inset-0 w-full h-full overflow-hidden rounded-lg">
          <div className="hidden md:block absolute inset-0">
            <Image
              src={bgShortenDesktop}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="md:hidden absolute inset-0">
            <Image
              src={bgShortenMobile}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 flex flex-col md:flex-row gap-4 md:gap-6"
        >
          <div className="flex-1">
            <input
              type="url"
              placeholder="Shorten a link here..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg ${
                isError ? "border-2 border-red-500 placeholder-red-500" : ""
              }`}
            />
            {isError && (
              <p className="text-red-500 text-sm mt-1 italic">
                Please add a link
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#2BD0D0] text-white px-6 py-3 rounded-lg hover:bg-opacity-70 transition-colors font-bold whitespace-nowrap"
          >
            Shorten It!
          </button>
        </form>
      </div>

      {/* Results */}
      <div className="mt-6 space-y-4">
        {shortenedLinks.map((link, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3"
          >
            <span className="text-gray-700 truncate border-b md:border-0 pb-3 md:pb-0">
              {link.original}
            </span>
            <div className="flex flex-col md:flex-row gap-3 md:items-center">
              <span className="text-[#2BD0D0]">{link.shortened}</span>
              <button
                onClick={() => copyToClipboard(link.shortened)}
                className="bg-[#2BD0D0] text-white px-6 py-2 rounded-lg hover:bg-opacity-70 transition-colors"
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Shortener;
