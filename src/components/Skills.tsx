"use client";

import { BentoGrid, BentoGridItem } from "./BentoGrid";

/* =========================
   Skills
========================= */
const frontendSkills = (
  <ul>
    <li>React</li>
    <li>Next.js</li>
    <li>TypeScript</li>
    <li>Progressive Web Apps (PWA)</li>
  </ul>
);

const backendSkills = (
  <ul>
    <li>Node.js</li>
    <li>REST APIs</li>
    <li>GraphQL</li>
    <li>Webhooks</li>
  </ul>
);

const databaseSkills = (
  <ul>
    <li>MySQL</li>
    <li>SQL</li>
    <li>NoSQL</li>
    <li>Convex</li>
  </ul>
);

const integrationSkills = (
  <ul>
    <li>OpenAI</li>
    <li>Google APIs</li>
    <li>Stripe</li>
    <li>Twilio</li>
    <li>Clerk</li>
  </ul>
);

const toolingSkills = (
  <ul>
    <li>Git</li>
    <li>GitHub</li>
    <li>CI/CD</li>
    <li>Vercel</li>
    <li>Google Cloud Platform</li>
    <li>AWS</li>
  </ul>
);

const designSkills = (
  <ul>
    <li>Figma</li>
    <li>Tailwind UI</li>
    <li>Shadcn UI</li>
    <li>CSS</li>
    <li>Bootstrap</li>
  </ul>
);

/* =========================
   Grid Items
========================= */
const items = [
  {
    title: "🎨 Frontend",
    description: frontendSkills,
  },
  {
    title: "⚙️ Backend",
    description: backendSkills,
  },
  {
    title: "🗄️ Databases",
    description: databaseSkills,
  },
  {
    title: "🔌 Integrations",
    description: integrationSkills,
  },
  {
    title: "🧰 Tools & Platforms",
    description: toolingSkills,
  },
  {
    title: "🧩 Design",
    description: designSkills,
  },
];

export default function Skills() {
  return (
    <div className="px-10 py-10 md:py-20 bg-custom-bg">
      <h2 className="text-gray-50 text-center font-bold text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-20">
        Skills
      </h2>
      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, index) => (
          <BentoGridItem
            key={index}
            title={item.title}
            description={item.description}
            className="border border-gray-300 p-4"
          />
        ))}
      </BentoGrid>
    </div>
  );
}
