"use client";

import type { ReactNode } from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

const faqItems: { title: string; description: ReactNode }[] = [
  {
    title: "What is your proudest build?",
    description: (
      <div>
        <p className=" leading-relaxed mb-4">
          My proudest achievement is developing{" "}
          <a
            href="https://apps.apple.com/us/app/nexus-auto/id6760922713"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-bold hover:underline"
          >
            Nexus Auto
          </a>
          , a mobile-first car maintenance platform built with React Native and
          Convex. I took the initiative to create this app to solve a real-world
          problem I faced personally, taking it from a blank text editor to a
          fully functional tool that I continue to use daily.
        </p>

        <p className=" leading-relaxed">
          Transitioning from a background primarily in web development, I pushed
          myself to master the nuances of the mobile ecosystem. This project
          allowed me to gain deep expertise in <strong>React Native</strong> and{" "}
          <strong>Expo</strong>, specifically handling complex challenges like
          stack routing, asynchronous device storage, and the end-to-end
          deployment process for the App Store.
        </p>
      </div>
    ),
  },
  {
    title: "What are your long-term goals?",
    description: (
      <div>
        <p className="leading-relaxed mb-4">
          My long-term ambition is to lead products from <strong>0 to 1</strong>{" "}
          and through successful scaling phases. I am driven by the challenge of
          building impactful applications, utilizing everything I’ve learned
          about <strong>scalable architecture</strong>
          to ensure they are as efficient as they are innovative.
        </p>

        <p className="leading-relaxed">
          I thrive in environments where I can express my{" "}
          <strong>entrepreneurial creativity through code</strong>, treating
          every feature with the same level of ownership as my own projects.
          Ultimately, I aim to be a thought leader in the tech space, leading
          teams of engineers who are genuinely excited by the mission and
          building a culture where technical excellence drives meaningful
          growth.
        </p>
      </div>
    ),
  },
  {
    title: "How are you using AI in your development?",
    description: (
      <div>
        <p className="leading-relaxed mb-4">
          I view AI as a powerful force multiplier, a tool that significantly
          accelerates my development velocity without compromising my role as
          the final architect. I utilize{" "}
          <strong>AI agents within Cursor</strong> to generate boilerplate and
          iterative code rapidly, allowing me to focus on high-level system
          design and complex logic.
        </p>

        <p className="leading-relaxed">
          However, I am acutely aware that AI can make mistakes. I{" "}
          <strong>review every line of code</strong> generated to ensure it
          meets my standards for security and performance. Beyond just writing
          code, I use a rotating stack of models, including{" "}
          <strong>Gemini, ChatGPT, and Grok</strong> to talk through
          architectural questions and explore nuanced technical contexts that
          aren't easily found in documentation. This multi-model approach
          ensures I'm always leveraging the best tool for the specific task at
          hand.
        </p>
      </div>
    ),
  },
  {
    title: "What drives you?",
    description: (
      <div>
        <p className="leading-relaxed mb-4">
          I am driven by the <strong>intellectual challenge</strong> of
          engineering. To me, encountering a complex bug or an architectural
          roadblock isn's a setback, it's a motivator. I find immense
          satisfaction in the process of overcoming those challenges and finding
          creative, elegant solutions that provide real-world impact.
        </p>

        <p className="leading-relaxed">
          My commitment to constant improvement is evidenced by my
          unconventional path: I went back to earn a{" "}
          <strong>second Bachelor's degree in Computer Science</strong>
          while already working in the field, simply because I wanted a deeper
          understanding of the fundamentals. Whether I'm at the library studying
          distributed systems or experimenting with the latest tech innovations,
          I am always pushing to be a more effective engineer who can build
          better, more scalable software.
        </p>
      </div>
    ),
  },
];

export default function FAQ() {
  return (
    <section className="px-10 py-10 md:py-20 bg-custom-bg">
      <h2 className="text-gray-50 text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-20">
        Engineering Philosophy
      </h2>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-min">
        {faqItems.map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            size="large"
            className="border border-gray-300 p-4"
          />
        ))}
      </BentoGrid>
    </section>
  );
}
