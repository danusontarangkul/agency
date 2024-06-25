import Hero from "@/components/Hero";
// import Benefits from "@/components/Pricing";
// import About from "@/components/About";
// import Footer from "@/components/Footer";
// import { OurAdvantage } from "@/components/OurAdvantage";
// import { Problem } from "@/components/Problem";
import Border from "@/components/Border";
import dynamic from "next/dynamic";

const Problem = dynamic(() => import("@/components/Problem") as any);
const About = dynamic(() => import("@/components/About") as any);
const OurAdvantage = dynamic(() => import("@/components/OurAdvantage") as any);
const Pricing = dynamic(() => import("@/components/Pricing") as any);
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
      <Pricing />
      <Footer />
    </main>
  );
}
