import React from "react";
import { BackgroundGradient } from "../components/BackgroundGradient";
import Image from "next/image";
import Button from "./Button";
import { AuroraBackground } from "@/components/AuroraBackground"; //

const Benefits: React.FC = () => {
  return (
    <section className="bg-light-bg flex flex-col items-center justify-center">
      <h2 className="text-center text-4xl font-bold mt-8">Pricing</h2>
      <div className="mt-6  mb-6 w-[80%] mx-auto">
        <BackgroundGradient className="  rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col justify-center ">
          <div className="px-16 ">
            <p className="text-3xl mb-4 font-bold">
              $99<span className="text-lg"> Per Month</span>
            </p>
            <div className="text-md text-neutral-600 dark:text-neutral-400 whitespace-pre-line mb-8 space-y-4 max-w-2xl pl-2">
              <p>✅ Custom Website</p>
              <p>✅ Unlimited Updates</p>
              <p>✅ Hosting</p>
              <p>✅ Maintenance</p>
              <p>✅ SEO Optimized</p>
              <p>✅ Analytics</p>
            </div>
            <Button />
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default Benefits;
