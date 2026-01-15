"use client";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import Image from "next/image";

import Button from "./Button";

const educationDescription = (
  <ul>
    <li className="mb-3">
      <strong>Western Governors University</strong> — Bachelor of Science in
      Computer Science
    </li>
    <li className="mb-3">
      <strong>University of California, Berkeley Extension</strong> — Coding
      Bootcamp
    </li>
    <li className="mb-3">
      <strong>University of Florida</strong> — Master in International Business
      & Bachelor of Science in Finance
    </li>
  </ul>
);

const experienceDescription = (
  <ul>
    <li className="mb-4">
      <strong>4+ years in web development:</strong> Extensive experience in
      creating robust, efficient, and scalable web solutions.
    </li>
    <li>
      <strong>Enterprise and startup experience:</strong> Comfortable working
      with large, long-lived codebases as well as fast-moving, early-stage
      products.
    </li>
  </ul>
);

const contactDescription = (
  <div className="flex flex-col items-center md:mt-2 justify-evenly">
    <p className="mb-2 text-lg">💬 Let's connect.</p>
    <Button label="Contact" />
    <div className="md:text-lg font-semibold mb-1 flex flex-col md:flex-row md:items-center w-full md:justify-evenly mt-10 align-middle md:pl-0 pl-4">
      <p className="mb-3 sm:mb-0">📱 (305) 613-4423</p>
      <p>✉️ david.anuson@gmail.com</p>
    </div>
  </div>
);

const items = [
  {
    header: (
      <div className="w-full h-full md:min-h-0  min-h-[500px] object-cover flex items-center justify-center  rounded-xl relative">
        <Image
          src="/profile.jpeg"
          alt="Profile picture of David"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
      </div>
    ),
  },
  {
    title: "👨‍💻 Experience & Expertise",
    description: experienceDescription,
  },
  {
    title: "🎓 Education",
    description: educationDescription,
  },
  {
    title: (
      <p className="text-custom-bg md:text-3xl">
        Actively seeking my next role
      </p>
    ),
    description: contactDescription,
  },
  {
    header: (
      <div className="w-full h-full md:min-h-[250px]  min-h-[500px] object-cover flex items-center justify-center  rounded-xl relative">
        <Image
          src="/profile-dog.jpg"
          alt="David with dog"
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
      </div>
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
