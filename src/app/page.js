'use client'
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skill/Skill";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}
