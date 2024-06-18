import Image from "next/image";
import Hero from "../components/Hero";
import Benefits from "@/components/Benefits";
import { BentoGridDemo } from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="w-full h-2 bg-gradient-to-r from-customColor1 via-customColor2 to-customColor3 "></div>
      <BentoGridDemo />
      <Benefits />

      <Footer />
    </main>
  );
}
