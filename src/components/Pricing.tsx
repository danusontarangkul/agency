import { BackgroundGradient } from "./BackgroundGradient";
import Image from "next/image";
import Button from "./Button";

const Pricing: React.FC = () => {
  return (
    <section className="py-10 md:py-20 flex flex-col items-center justify-center bg-light-bg">
      <h2 className="text-center font-bold text-custom-bg text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-14">
        Project-Based Pricing
      </h2>

      <div className="mb-6 w-[80%] mx-auto max-w-sm">
        <BackgroundGradient className="bg-gray-50 rounded-[22px] p-4 sm:p-10 dark:bg-zinc-900 flex flex-col justify-center">
          <div className="flex flex-col items-center text-bg-custom">
            <div>
              <p className="md:text-2xl text-xl mb-4 font-bold pl-2">
                Every project is scoped and priced around your business goals.
              </p>

              <div className="text-md md:text-lg whitespace-pre-line mb-8 space-y-4 max-w-2xl pl-2">
                {/* What you get */}
                <p className="font-semibold underline">What’s Included</p>
                <div className="flex">
                  <Image
                    src="/square-check-regular.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <p className="pl-1.5">Discovery & clear scope of work</p>
                </div>
                <div className="flex">
                  <Image
                    src="/square-check-regular.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <p className="pl-1.5">Design, development & testing</p>
                </div>
                <div className="flex">
                  <Image
                    src="/square-check-regular.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <p className="pl-1.5">Integrations (payments, CRM, APIs)</p>
                </div>
                <div className="flex">
                  <Image
                    src="/square-check-regular.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <p className="pl-1.5">Deployment & handoff documentation</p>
                </div>

                {/* How we price */}
                <p className="font-semibold underline pt-2">
                  How Pricing Works
                </p>
                <div className="flex">
                  <Image
                    src="/circle-check-solid.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <p className="pl-1.5">
                    Fixed price based on scope (no hourly surprises)
                  </p>
                </div>
                <div className="flex">
                  <Image
                    src="/circle-check-solid.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <p className="pl-1.5">Milestone-based payments</p>
                </div>
                <div className="flex">
                  <Image
                    src="/circle-check-solid.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <p className="pl-1.5">Estimated timelines and updates</p>
                </div>
                <div className="flex">
                  <Image
                    src="/circle-check-solid.svg"
                    width={20}
                    height={20}
                    alt="check"
                  />
                  <p className="pl-1.5">Support & Maintenance Packages</p>
                </div>
              </div>
            </div>

            <div>
              <Button label="Get a Project Quote" />
            </div>
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default Pricing;
