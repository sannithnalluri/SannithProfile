'use client'
import Image from "next/image";
import HeroSection from "./HomeCompoent/HeroSection";
import About from "./HomeCompoent/About";
import Featues from "./HomeCompoent/Features";
import Education from "./HomeCompoent/Education";
import Work from "./HomeCompoent/Work";
import Services from "./HomeCompoent/Services";
import Testiomonals from "./HomeCompoent/Testiomonals";
import Articles from "./HomeCompoent/Articles";
import Contact from "./HomeCompoent/Contact";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <About/>
      <Featues/>
      <Education/>
      <Work/>
      <Services/>
      <Testiomonals/>
      <Articles/>
      <Contact/>
    </div>
  );
}
