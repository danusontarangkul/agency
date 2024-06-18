import React from "react";
import Image from "next/image";
import Button from "./Button";
import { AuroraBackground } from "@/components/AuroraBackground"; //

const Hero = () => {
  return (
    <AuroraBackground className="flex flex-col md:flex-row items-center bg-custom-bg text-white text-center relative">
      {/* Portrait image for mobile */}
      <div className="md:hidden -mt-16 rounded-lg overflow-hidden">
        <Image
          src="/HeroImg.png"
          alt="Portrait Image"
          width={550}
          height={550}
        />
      </div>

      {/* Content section */}
      <div className="md:w-1/2 p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Next-Generation Websites Designed to Convert Leads
        </h1>
        <Button />
      </div>

      {/* Image section for desktop */}
      <div className="hidden md:flex md:w-1/2 justify-center">
        <div className="max-w-[50%]">
          <Image
            src="/HeroImg.png"
            alt="Portrait Image"
            width={800}
            height={550}
            layout="responsive"
            className="rounded-lg overflow-hidden"
          />
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
