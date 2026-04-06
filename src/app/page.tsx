import Hero from "@/components/Hero";
import IntroVideo from "@/components/IntroVideo";
import Border from "@/components/Border";
import dynamic from "next/dynamic";
import Projects from "@/components/Projects";

const About = dynamic(() => import("@/components/About") as any);
const Showcase = dynamic(() => import("../components/Showcase") as any);
const Footer = dynamic(() => import("@/components/Footer")) as any;
const Skills = dynamic(() => import("@/components/Skills") as any);
const FAQ = dynamic(() => import("@/components/FAQ") as any);
const Reading = dynamic(() => import("@/components/Reading") as any);

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroVideo />
      <Border />
      <Projects />
      <Border />
      <Showcase />
      <Border />
      <Skills />
      <Border />
      <About />
      <Border />
      <FAQ />
      <Border />
      <Reading />
    </main>
  );
}
