"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
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
    <li>
      <strong>4+ years in web development:</strong> Extensive experience in
      creating robust, efficient, and scalable web solutions.
    </li>
    <br />
    <li>
      <strong>3+ years in online marketing:</strong> Knowledgeable in strategies
      that drive traffic and conversions.
    </li>
  </ul>
);

const employerDescription = (
  <ul>
    <li>
      <strong>Software Engineer</strong> @ Twilio.
    </li>
    <br />
    <li>
      <strong>Full Stack Developement Learning Assistant</strong> @ 2U.
    </li>
    <br />
    <li>
      <strong>Night Club Promoter</strong> @ Wynn.
    </li>
    <br />
    <li>Amazon Seller</li>
  </ul>
);
const items = [
  {
    header: (
      <img
        src="/strip-profile.png" // Replace with your actual image path
        alt="The Digital Revolution"
        className="w-full h-full object-cover"
      />
    ),
  },
  {
    // title: "About Me",
    description: aboutDescription,
  },
  {
    title: "👨‍💻 Experience & Expertise",
    description: experienceDescription,
  },
  {
    title: "Our Advantage",
    description: "",
    header: "",
    icon: "",
  },
  {
    title: "⚡️ Fast Loading Times",
    description: (
      <>
        <strong>
          Quick page loads result in higher Google rankings and improved user
          satisfaction.
        </strong>{" "}
        Custom coding, not website builders, is our secret.
      </>
    ),

    header: (
      <img
        src="/HeroImg.png" // Replace with your actual image path
        alt="The Digital Revolution"
        className="w-full h-full object-cover"
      />
    ),
    icon: "",
  },
  {
    title: <p>✏️&nbsp;&nbsp;Modern Design</p>,
    description: (
      <>
        <strong>Say goodbye to outdated websites.</strong> Showcase reliability
        and professionalism with a sleek, custom design tailored to your brand’s
        unique needs.
      </>
    ),
    header: (
      <img
        src="/HeroImg.png" // Replace with your actual image path
        alt="The Digital Revolution"
        className="w-full h-full object-cover"
      />
    ),
    icon: "",
  },
  {
    title: "⭐ Ongoing Support",
    description: (
      <>
        <strong>A website that grows with you.</strong> Enjoy unlimited updates,
        hassle free.
      </>
    ),
    header: (
      <img
        src="/HeroImg.png" // Replace with your actual image path
        alt="The Digital Revolution"
        className="w-full h-full object-cover"
      />
    ),
  },
];

export function BentoGridDemo() {
  return (
    <div className="p-8  bg-custom-bg ">
      <h2 className="text-gray-50 text-center font-bold text-3xl mb-6">
        About Me
      </h2>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={`border border-gray-300 p-4 ${
              i === 3 || i === 6 ? "md:col-span-2" : ""
            }`}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
