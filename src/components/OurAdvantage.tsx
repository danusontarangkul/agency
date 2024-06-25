"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

const items = [
  {
    title: "⚡️ Fast Loading Times",
    description: (
      <>
        <p>
          <strong>
            Quick page loads result in higher Google rankings and improved user
            satisfaction.
          </strong>{" "}
        </p>
        <br></br>
        <p>
          Our secret? Each site is custom-coded for peak performance, avoiding
          the sluggishness of typical website builder frameworks.
        </p>
        <img
          src="/gauge-simple-high-solid.svg"
          alt="Guage"
          width={100}
          height={100}
          className="md:hidden block m-auto mt-4"
        />
      </>
    ),
    size: "small",
    header: "",
    icon: "",
  },
  {
    size: "medium",
    header: (
      <img
        src="/speed.jpeg"
        alt="Computer showing fast speed"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    size: "medium",
    header: (
      <img
        src="/support.jpeg"
        alt="Customer Support"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    title: <p>✏️ Modern Design</p>,
    description: (
      <>
        <p className="font-bold">Say goodbye to outdated websites.</p>
        <br></br>
        <p>
          Showcase reliability and professionalism with a sleek, custom design
          tailored to your brand’s unique needs.
        </p>
        <img
          src="/palette-solid.svg"
          alt="paint icon to showcase design"
          width={100}
          height={100}
          className="md:hidden block m-auto mt-4"
        />
      </>
    ),
  },
  {
    title: "💡 Ongoing Support",
    description: (
      <>
        <p className="font-bold">A website that grows with you.</p>
        <br></br>
        <p>Need changes? Enjoy unlimited updates, hassle free.</p>
        <img
          src="/handshake-angle-solid.svg"
          alt="Handshake icon"
          width={100}
          height={100}
          className="m-auto mt-4"
        />
      </>
    ),
  },
  {
    title: "📊  Monthly Analytics",
    description: (
      <>
        <p className="font-bold">Insights that matter.</p> <br></br>
        <p>Regular performance reports to help you make informed decisions.</p>
        <img
          src="/chart-line-solid.svg"
          alt="Chart Icon"
          width={95}
          height={100}
          className="m-auto mt-4"
        />
      </>
    ),
  },
  {
    title: "🌐 SEO Optimized",
    description: (
      <>
        <p className="font-bold">Engineered using SEO principles.</p> <br></br>
        <p>Making it easier for users to find your content online.</p>
        <img
          src="/magnifying-glass-solid.svg" // Replace with your actual image path
          alt="Magnifying Glass Icon"
          width={95}
          height={100}
          className="m-auto mt-4"
        />
      </>
    ),
  },
];

export function OurAdvantage() {
  return (
    <div className="px-10 py-10 md:py-20  bg-custom-bg ">
      <h2 className="text-gray-50 text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-20">
        Our Advantage
      </h2>
      <BentoGrid className="max-w-4xl mx-auto">
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
