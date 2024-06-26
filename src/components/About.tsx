"use client";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

import Button from "./Button";

const aboutDescription = (
  <>
    🔥 <strong>Passionate Web Developer</strong>: Focused on the business
    aspects of websites.
    <br />
    <br />
    🚀 <strong>Mission-Driven</strong>: Delivering enterprise-level coding to
    small businesses.
    <br />
    <br />
    🎯 <strong>Goal-Oriented</strong>: Convert your leads with high-performing,
    custom-built websites.
  </>
);

const experienceDescription = (
  <ul>
    <li className="mb-4">
      <strong>4+ years in web development:</strong> Extensive experience in
      creating robust, efficient, and scalable web solutions.
    </li>
    <li>
      <strong>3+ years in online marketing:</strong> Knowledgeable in strategies
      that drive traffic and conversions.
    </li>
  </ul>
);

const contactDescription = (
  <div className="flex flex-col items-center md:mt-2 justify-evenly">
    <p className="mb-2 text-lg">
      💬 Free consultation call to get you started.
    </p>
    <Button />
    <div className="md:text-lg font-semibold mb-1 flex flex-col md:flex-row md:items-center w-full md:justify-evenly mt-10 align-middle md:pl-0 pl-4">
      <p className="mb-3 sm:mb-0">📱 (305) 613-4423</p>
      <p>✉️ david.anuson@gmail.com</p>
    </div>
  </div>
);

const items = [
  {
    header: (
      <img
        src="/square.jpg"
        alt="Profile picture of David"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
  },
  {
    description: aboutDescription,
  },
  {
    title: "👨‍💻 Experience & Expertise",
    description: experienceDescription,
  },
  {
    title: (
      <p className="text-custom-bg md:text-3xl">
        Let's talk about your website goals
      </p>
    ),
    description: contactDescription,
  },
  {
    header: (
      <img
        src="/profile-dog.jpg"
        alt="David with dog"
        className="w-50 h-full object-cover rounded-xl"
      />
    ),
  },
];

export default function About() {
  return (
    <div className="px-10 py-10 md:py-20 bg-custom-bg ">
      <h2 className="text-gray-50 text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-20">
        About Me
      </h2>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={`border border-gray-300 p-4 ${
              i === 3 || i === 6 ? "md:col-span-2" : ""
            }`}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
