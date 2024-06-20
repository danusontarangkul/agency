"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

const items = [
  {
    title: "❌ Struggling to Convert Leads?",
    description: (
      <p>
        Generic websites may be too slow and boring to engage your potential
        customers effectively.
      </p>
    ),
    size: "large",
    header: "",
    icon: "",
  },
  {
    title: "😩 Tired of Set-it-and-Forget-it Websites?",
    description: (
      <p>
        Other web agencies build your site and disappear. When your business
        evolves, making updates can feel impossible.
      </p>
    ),
    size: "large",
    header: "",
    icon: "",
  },
  {
    title: "📉 Lacking Analytics to Drive Innovation?",
    description: (
      <p>
        Without data, you may be missing out on valuable opportunities to grow
        your business effectively.
      </p>
    ),
    size: "large",
    header: "",
    icon: "",
  },
  {
    title: "🤔 No Website Yet?",
    description: (
      <p>
        You're losing out on potential revenue, valuable client engagement, and
        opportunities to grow your business.
      </p>
    ),
    size: "large",
    header: "",
    icon: "",
  },
];

export function Problem() {
  return (
    <div className="px-10 py-20  bg-custom-bg ">
      <h2 className="text-gray-50 text-center font-bold text-3xl mb-6">
        <span className="text-customColor2">Attention</span> Small Business
        Owners!
      </h2>
      <BentoGrid className="max-w-xl mx-auto" rowHeight="">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={`border border-gray-300 p-4 `}
            size={item.size}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
