import { useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function getYear() {
  return new Date().getFullYear();
}

export default function App() {
  const scrollRef = useRef(null);

  return (
    <div className="bg-grid-glow min-h-screen w-full">
      <div ref={scrollRef} className="scroll-smooth flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <footer className="w-full border-t border-zinc-800/80 mt-auto py-8 text-center bg-zinc-950/50 backdrop-blur-sm">
        <p className="text-sm text-zinc-500">
          © {getYear()} Tomasz Styczeń. Made with ❤️
        </p>
      </footer>
    </div>
  );
}
