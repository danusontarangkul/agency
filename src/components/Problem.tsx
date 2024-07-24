"use client";
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
  return (
    <div className="px-10 md:py-20 py-10 bg-custom-bg ">
      <h2 className="text-gray-50 text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-20">
        <span className="text-customColor2">Attention</span> Personal Brands!
      </h2>
      <BentoGrid className="max-w-2xl mx-auto" rowHeight="">
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
  );
}
