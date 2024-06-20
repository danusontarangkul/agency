"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import Image from "next/image";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Button from "./Button";

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
const socialMedia = [
  {
    id: 1,
    img: "/linkedin.svg",
    link: "https://www.linkedin.com/in/anusontarangkul/",
  },
  {
    id: 2,
    img: "/Instagram.svg",
    link: "https://www.instagram.com/david.anuson/",
  },
  {
    id: 3,
    img: "/youtube.svg",
    link: "https://www.youtube.com/channel/UCYBwball06AdVuaHeH7adVw",
  },
];

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

const contactDescription = (
  <div className="flex flex-col items-center md:mt-2 justify-evenly">
    <p className="mb-2 text-lg">Free consultation call to get you started.</p>

    {/* <div className="flex items-center justify-center md:gap-3 gap-6 mt-3 md:mt-4"> */}
    <Button />
    {/* {socialMedia.map((info) => (
        <div
          key={info.id}
          className="w-10 h-10 sm:w-20 sm:h-20 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-gradient-to-r from-customColor3 to-customColor1  rounded-lg border-2 border-black"
        >
          <a href={info.link} target="_blank">
            <img
              src={info.img}
              alt="icons"
              className="w-5 h-5 sm:w-10 sm:h-10 "
            />
          </a>
        </div>
      ))} */}
    {/* </div> */}
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
        src="/strip-profile.png" // Replace with your actual image path
        alt="The Digital Revolution"
        className="w-full h-full object-cover rounded-xl"
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
    title: (
      <p className="text-custom-bg md:text-3xl">
        Let's talk about your website goals 💬
      </p>
    ),
    description: contactDescription,
  },
  {
    header: (
      <img
        src="/dog.JPG" // Replace with your actual image path
        alt="The Digital Revolution"
        className="w-full h-full object-cover rounded-xl"
      />
    ),
  },
];

export function BentoGridDemo() {
  return (
    <div className="px-10 py-20 bg-custom-bg ">
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
