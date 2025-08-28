"use client";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

const items = [
  {
    title: "🚀 SaaS Apps Built",
    description:
      "Have a software idea but don’t know where to start? I design and build custom SaaS applications from the ground up—scalable, secure, and ready for your first customers.",
    header: "",
    size: "large",
  },
  {
    title: "🌐 Websites & Web Apps",
    description:
      "Whether you need a marketing site or a full web application, I create tailored solutions that reflect your brand and streamline how you do business online.",
    header: "",
    size: "large",
  },
  {
    title: "✨ Adding New Features",
    description:
      "Already have a product but need it to do more? I can design and develop new features that expand your app’s capabilities without breaking what already works.",
    header: "",
    size: "large",
  },
  {
    title: "🛠️ Solving Bugs & Technical Issues",
    description:
      "Technical problems slow your team down and frustrate customers. I debug, fix, and optimize your software so you can focus on growth instead of fighting fires.",
    header: "",
    size: "large",
  },
];

export default function Problem() {
  return (
    <div className="px-10 md:py-20 py-10 bg-custom-bg">
      <h2 className="text-gray-50 text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-20">
        <span className="text-customColor2">Custom Software</span> for
        Businesses
      </h2>
      <div className="flex flex-col md:flex-row-reverse justify-evenly">
        <div className="w-full md:w-1/2">
          <BentoGrid className="" rowHeight="">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                className={`border border-gray-300 p-4`}
                size={item.size}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </div>
  );
}
