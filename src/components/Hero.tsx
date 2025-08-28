import Image from "next/image";
import Button from "./Button";
import { AuroraBackground } from "@/components/AuroraBackground";
import SecondaryButton from "./SecondaryButton";

const Hero = () => {
  return (
    <AuroraBackground
      isHomePage={true}
      className="flex flex-col lg:flex-row items-center bg-custom-bg text-white text-center relative"
    >
      {/* mobile image */}
      <div className="lg:hidden mt-4 rounded-full overflow-hidden">
        <Image
          src="/profile.webp"
          alt="Profile Picture"
          width={400}
          height={400}
          loading="eager"
          priority
        />
      </div>
      <div className="lg:w-1/2 p-4 lg:p-14">
        <h1 className="md:text-5xl lg:text-6xl text-4xl font-bold  bg-gradient-to-r from-customColor1 to-customColor2 text-transparent bg-clip-text">
          From Idea to Working Software
        </h1>
        <p className="text-xl my-2">
          Custom Apps for Businesses, Guidance for Aspiring Devs{" "}
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <Button />
          <SecondaryButton />
        </div>
      </div>
      <div className="hidden lg:flex lg:w-1/2 justify-center lg:p-14">
        <div>
          {/* desktop image */}
          <Image
            sizes=""
            src="/profile.webp"
            alt="Profile Picture"
            width={1080}
            height={1080} // Adjust height as needed
            className="rounded-full overflow-hidden"
            loading="eager"
            priority
          />
        </div>
      </div>
    </AuroraBackground>
  );
};

export default Hero;
