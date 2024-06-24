"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

const items = [
  {
    title: "❌ Struggling to Capture Leads?",
    description: (
      <p>
        Generic websites may be too slow and boring to engage your potential
        customers effectively.
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
    title: "📉 Lacking Analytics to Drive Innovation?",
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
            className={`border border-gray-300 p-4 `}
            size={item.size}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
