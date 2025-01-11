import React from "react";
import Lists from "../Lists";
import SocialIcons from "./SocialIcons"

type FooterContent = {
  Features: string[];
  Resources: string[];
  Company: string[];
};

const Footer = () => {
  const footerContent: FooterContent = {
    Features: ["Link Shortening", "Branded Links", "Analytics"],
    Resources: ["Blog", "Developers", "Support"],
    Company: ["About", "Our Team", "Careers", "Contact"],
  };
  const footerTitle = Object.keys(footerContent) as (keyof FooterContent)[];
  return (
    <footer className="bg-[hsl(257,27%,26%)] text-white text-center md:text-left px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="md:flex md:justify-between md:items-start">
          <h1
            style={{ fontSize: "2rem" }}
            className="font-bold text-capitalized font-sans py-5 md:py-0"
          >
            shortly
          </h1>
          <div className="md:flex md:gap-16">
            <Lists header={footerTitle[0]} items={footerContent[footerTitle[0]]} />
            <Lists header={footerTitle[1]} items={footerContent[footerTitle[1]]} />
            <Lists header={footerTitle[2]} items={footerContent[footerTitle[2]]} />
          </div>
          <div className="mt-8 md:mt-0">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
