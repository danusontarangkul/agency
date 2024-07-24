"use client";
import { useEffect, useState } from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

const items = [
  {
    title: "❌ Using Generic Websites?",
    description: (
      <p>
        Your potential customers can spot that a mile away, causing them to be
        disengage in your services. Your website should be authentic to your
        brand.
      </p>
    ),
    header: "",
    size: "large",
  },
  {
    title: "😩 Tired of Set-it-and-Forget-it Websites?",
    description: (
      <p>
        Other web agencies build your site and disappear. When your business
        evolves, making updates can feel impossible.
      </p>
    ),
    header: "",
    size: "large",
  },
  {
    title: "📉 Lacking Analytics to Drive Sales",
    description: (
      <p>
        Leveraging data allows you to make informed decisions and drive business
        growth.
      </p>
    ),
    header: "",
    size: "large",
  },
  {
    title: "🤔 No Website Yet?",
    description: (
      <p>
        A website helps you showcase your products and services while
        streamlining lead generation.
      </p>
    ),
    header: "",
    size: "large",
  },
];

export default function Problem() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="px-10 md:py-20 py-10 bg-custom-bg ">
      <h2 className="text-gray-50 text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-20">
        <span className="text-customColor2">Attention</span> Personal Brands!
      </h2>
      <div className="flex flex-col md:flex-row-reverse justify-evenly">
        <div className="flex justify-center mb-8 md:mb-0">
          {isClient ? (
            <video
              className=" h-[600px]"
              controls
              poster="/videos/intro-thumbnail.webp"
            >
              <source src={"/videos/Intro.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="h-[600px] bg-gray-200"></div> // Placeholder to maintain layout
          )}
        </div>
        <div className="w-full md:w-1/2">
          <BentoGrid className="" rowHeight="">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={`border border-gray-300 p-4 `}
                size={item.size}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}
