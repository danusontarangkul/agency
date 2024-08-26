import Hero from "@/components/Hero";
import Border from "@/components/Border";
import dynamic from "next/dynamic";

const Problem = dynamic(() => import("@/components/Problem") as any);
const About = dynamic(() => import("@/components/About") as any);
const OurAdvantage = dynamic(() => import("@/components/OurAdvantage") as any);
const Pricing = dynamic(() => import("@/components/Pricing") as any);
const Showcase = dynamic(() => import("../components/Showcase") as any);
const Footer = dynamic(() => import("@/components/Footer")) as any;

export default function Home() {
  return (
    <main>
      <Hero />
      <Border />
      <Problem />
      <Border />
      <About />
      <Border />
      <OurAdvantage />
      <Border />
      <Showcase />
      <Pricing />
      <Footer />
    </main>
  );
}
