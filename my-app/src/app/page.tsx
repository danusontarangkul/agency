import Image from "next/image";
import Hero from "../components/Hero";
import Benefits from "@/components/Pricing";
import { BentoGridDemo } from "@/components/About";
import Footer from "@/components/Footer";
import { OurAdvantage } from "@/components/OurAdvantage";
import { Problem } from "@/components/Problem";
import Border from "@/components/Border";

export default function Home() {
  return (
    <main>
      <Hero />
      <Border />
      <Problem />
      <Border />
      <BentoGridDemo />
      <Border />
      <OurAdvantage />
      <Benefits />
      <Footer />
    </main>
  );
}
