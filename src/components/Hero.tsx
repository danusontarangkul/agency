// import React from "react";
// import Image from "next/image";
// import Button from "./Button";
// import { AuroraBackground } from "@/components/AuroraBackground"; //

// const Hero = () => {
//   return (
//     <AuroraBackground
//       isHomePage={true}
//       className="flex flex-col md:flex-row items-center bg-custom-bg text-white text-center relative "
//     >
//       {/* Portrait image for mobile */}
//       <div className="md:hidden -mt-16 rounded-lg overflow-hidden">
//         <Image
//           src="/HeroImg.png"
//           alt="Neon Color Computers"
//           width={550}
//           height={550}
//         />
//       </div>
//       {/* Content section */}
//       <div className="md:w-1/2 p-4 md:p-8 lg:p-10">
//         <h1 className="md:text-5xl lg:text-6xl text-4xl font-bold mb-4 text-gray-50">
//           Next-Generation Websites Designed to{" "}
//           <span className="bg-gradient-to-r from-customColor1 to-customColor2 text-transparent bg-clip-text">
//             Capture Leads
//           </span>
//         </h1>
//         <div className="flex justify-center">
//           <Button />
//         </div>
//       </div>
//       <div className="hidden md:flex md:w-1/2 justify-center  md:p-12">
//         <div className="">
//           <Image
//             src="/HeroImg.png"
//             alt="Neon Color Computers"
//             width={800}
//             height={600}
//             layout="responsive"
//             className="rounded-lg overflow-hidden"
//           />
//         </div>
//       </div>
//     </AuroraBackground>
//   );
// };

// export default Hero;
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { AuroraBackground } from "@/components/AuroraBackground";

const Hero = () => {
  return (
    <AuroraBackground
      isHomePage={true}
      className="flex flex-col lg:flex-row items-center bg-custom-bg text-white text-center relative"
    >
      {/* Portrait image for mobile */}
      <div className="lg:hidden -mt-16 rounded-lg overflow-hidden">
        <Image
          src="/HeroImg.png"
          alt="Neon Color Computers"
          width={550}
          height={550}
        />
      </div>
      {/* Content section */}
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
            src="/HeroImg.png"
            alt="Neon Color Computers"
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
