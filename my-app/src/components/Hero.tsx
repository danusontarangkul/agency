import React from "react";
import Image from "next/image";
import Button from "./Button";
import { AuroraBackground } from "@/components/AuroraBackground"; //

const Hero = () => {
  return (
    <AuroraBackground className="flex flex-col md:flex-row items-center bg-custom-bg text-white text-center relative ">
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
      <div className="md:w-1/2 p-4 md:p-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-50">
          Next-Generation Websites Designed to{" "}
          <span className="bg-gradient-to-r from-customColor1 to-customColor2 text-transparent bg-clip-text">
            Convert Leads
          </span>
        </h1>
        <Button />
      </div>
      <div className="hidden md:flex md:w-1/2 justify-center  md:p-12">
        <div className="">
          <Image
            src="/HeroImg.png"
            alt="Portrait Image"
            width={800}
            height={600}
            layout="responsive"
            className="rounded-lg overflow-hidden"
          />
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
