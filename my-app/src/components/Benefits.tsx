// "use client";
import React from "react";
import { BackgroundGradient } from "../components/BackgroundGradient";
import Image from "next/image";
import { AuroraBackground } from "@/components/AuroraBackground"; //
import Button from "./Button";

const Benefits: React.FC = () => {
  return (
    <section className=" flex flex-col items-center justify-center bg-light-bg">
      <h2 className="text-center text-4xl font-bold mt-8 text-custom-bg text-transparent bg-clip-text">
        Pricing
      </h2>
      <div className="mt-6  mb-6 w-[80%] mx-auto ">
        <BackgroundGradient className=" bg-gray-50 rounded-[22px] p-4 sm:p-10  dark:bg-zinc-900 flex flex-col justify-center ">
          <div className="px-16 text-bg-custom ">
            <p className="text-3xl mb-4 font-bold pl-2">
              $99<span className="text-lg "> Per Month</span>
            </p>
            <div className="text-md text-bg-customwhitespace-pre-line mb-8 space-y-4 max-w-2xl pl-2">
              <div className="flex">
                <Image
                  src="/square-check-regular.svg"
                  width={20}
                  height={20}
                  alt="check"
                />
                <p className="pl-1.5">Custom Website</p>
              </div>
              <div className="flex">
                <Image
                  src="/square-check-regular.svg"
                  width={20}
                  height={20}
                  alt="check"
                />
                <p className="pl-1.5">Unlimited Updates</p>
              </div>
              <div className="flex">
                <Image
                  src="/square-check-regular.svg"
                  width={20}
                  height={20}
                  alt="check"
                />
                <p className="pl-1.5">Hosting</p>
              </div>
              <div className="flex">
                <Image
                  src="/square-check-regular.svg"
                  width={20}
                  height={20}
                  alt="check"
                />
                <p className="pl-1.5">Maintenance</p>
              </div>
              <div className="flex">
                <Image
                  src="/square-check-regular.svg"
                  width={20}
                  height={20}
                  alt="check"
                />
                <p className="pl-1.5">SEO Optimized</p>
              </div>
              <div className="flex">
                <Image
                  src="/square-check-regular.svg"
                  width={20}
                  height={20}
                  alt="check"
                />
                <p className="pl-1.5">Analytics</p>
              </div>
            </div>
            <Button />
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
};
export default Benefits;
