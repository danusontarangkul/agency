"use client";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import Image from "next/image";

const items = [
  {
    title: "⚡️ Built for Performance",
    description: (
      <>
        <p>
          <strong>Fast, reliable apps that scale with your business.</strong>{" "}
        </p>
        <br></br>
        <p>
          Every application is custom-coded with efficiency in mind—no bloated
          templates or unnecessary frameworks slowing you down.{" "}
        </p>
        <Image
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
    size: "medium-show",
    title: "Top-Tier Website Optimization",
    description: (
      <div className="mt-8">
        <Image
          src="/lighthouse-100.webp"
          width={2560}
          height={1080}
          alt="Computer showing fast speed"
          className=" object-cover"
        />
      </div>
    ),
  },
  {
    size: "medium",
    header: (
      <Image
        width={2560}
        height={1080}
        src="/support.webp"
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
    title: "💡 Flexible Feature Development",
    description: (
      <>
        <p className="font-bold">Your app evolves with your business.</p>
        <br></br>
        <p>
          {" "}
          Need a new feature? We can add functionality anytime without
          rebuilding from scratch.
        </p>
        <Image
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
    title: "🛠️ Reliable Maintenance & Support",
    description: (
      <>
        <p className="font-bold">No more fighting bugs alone.</p> <br></br>
        <p>
          {" "}
          Get ongoing support and updates so your app stays secure, efficient,
          and problem-free.
        </p>
        <Image
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
    title: "🔒 Security First",
    description: (
      <>
        <p className="font-bold">Protect your data and your users.</p> <br></br>
        <p>
          {" "}
          Every custom app is built with modern security practices, ensuring
          peace of mind as your business grows.
        </p>
        <Image
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

export default function OurAdvantage() {
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
