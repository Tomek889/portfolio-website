import { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  const scrollRef = useRef(null);

  return (
    <div className="bg-grid-glow min-h-screen w-full">
      <div ref={scrollRef} className="scroll-smooth">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
