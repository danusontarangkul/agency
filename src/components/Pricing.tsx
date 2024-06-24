import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";
import Image from "next/image";
import Button from "./Button";

const Pricing: React.FC = () => {
  return (
    <section className="py-20 flex flex-col items-center justify-center bg-light-bg">
      <h2 className="text-center text-4xl font-bold  text-custom-bg  ">
        Pricing
      </h2>
      <div className="mt-6  mb-6 w-[80%] mx-auto max-w-sm ">
        <BackgroundGradient className=" bg-gray-50 rounded-[22px] p-4 sm:p-10  dark:bg-zinc-900 flex flex-col justify-center ">
          <div className="flex flex-col items-center text-bg-custom ">
            <div className="">
              <p className=" text-3xl mb-4 font-bold pl-2">
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
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm pb-1 text-center">
                30-Day Money-Back Guarantee
              </p>
              <p className="text-[.6rem] pb-4 text-center">
                If you're not completely satisfied within the first 30 days,
                we'll give you a full refund.
              </p>
            </div>
            <div>
              <Button />
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
};
export default Pricing;
