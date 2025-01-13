import React from "react";
import Image from "next/image";
import bgBoostDesktop from "../../images/bg-boost-desktop.svg";
import bgBoostMobile from "../../images/bg-boost-mobile.svg";
import Link from "next/link";
const Boost = () => {
  return (
    <section className="relative bg-[hsl(257,27%,26%)] py-16 md:py-20">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Desktop Background */}
        <div className="hidden md:block absolute inset-0">
          <Image
            src={bgBoostDesktop}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        {/* Mobile Background */}
        <div className="md:hidden absolute inset-0">
          <Image
            src={bgBoostMobile}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Boost your links today
        </h2>
        <Link href="#shortener">
          <button className="bg-[#2BD0D0] text-white px-8 py-3 rounded-full hover:bg-opacity-70 transition-colors font-bold">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Boost;
