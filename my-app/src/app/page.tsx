import Image from "next/image";
import Hero from "../components/Hero";
import Benefits from "@/components/Benefits";
import { BentoGridDemo } from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <BentoGridDemo />
      <Benefits />
      <Footer />
    </main>
  );
}
