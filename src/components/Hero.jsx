import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      <motion.div
        className="max-w-4xl mx-auto w-full text-center flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-sm font-mono text-zinc-400 uppercase tracking-widest">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-4 leading-[1.3] md:leading-[1.38] whitespace-normal"
        >
          Hello, I'm <span className="text-accent">Tomasz Styczeń</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          I build scalable web applications with efficient architecture, robust
          backends, and intuitive interfaces.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-accent text-white rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 transition-smooth glow-blue"
          >
            View My Work
            <ArrowRight size={20} />
          </button>

          <button className="px-8 py-3 border border-zinc-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:border-accent transition-smooth hover:text-accent">
            <Download size={20} />
            Download CV
          </button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-[10vh] left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-zinc-400">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-zinc-600 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-accent rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}