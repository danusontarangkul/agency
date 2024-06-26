import Image from "next/image";
import Button from "./Button";
import { AuroraBackground } from "@/components/AuroraBackground";

const Hero = () => {
  return (
    <AuroraBackground
      isHomePage={true}
      className="flex flex-col lg:flex-row items-center bg-custom-bg text-white text-center relative"
    >
      <div className="lg:hidden -mt-16 rounded-lg overflow-hidden">
        <Image
          src="/HeroImg.webp"
          alt="Neon Color Computers"
          width={550}
          height={550}
          loading="eager"
        />
      </div>
      <div className="lg:w-1/2 p-4 lg:p-14">
        <h1 className="md:text-5xl lg:text-6xl text-4xl font-bold mb-4 text-gray-50">
          Next-Generation Websites Designed to{" "}
          <span className="bg-gradient-to-r from-customColor1 to-customColor2 text-transparent bg-clip-text">
            Capture Leads
          </span>
        </h1>
        <div className="flex justify-center">
          <Button />
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 justify-center lg:p-14">
        <div className="">
          <Image
            src="/HeroImg.webp"
            alt="Neon Color Computers"
            width={1080}
            className="rounded-lg overflow-hidden"
            loading="eager"
          />
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
