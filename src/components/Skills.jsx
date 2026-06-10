"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Network, List } from "lucide-react";

import SkillGraph from "./SkillGraph";
import { nodes, links, techIcons } from "../data/skills";

export default function Skills() {
  const [viewMode, setViewMode] = useState("graph");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setViewMode("list");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const skillsByCategory = links.reduce((acc, link) => {
    const sourceId =
      typeof link.source === "object" ? link.source.id : link.source;
    const targetId =
      typeof link.target === "object" ? link.target.id : link.target;

    if (sourceId !== "Me" && sourceId !== "root") {
      if (!acc[sourceId]) acc[sourceId] = [];
      acc[sourceId].push(targetId);
    }
    return acc;
  }, {});

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
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

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <motion.div
        className="max-w-5xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">Skills</h2>
            <div className="line-accent w-16 h-1"></div>
          </div>

          {!isMobile && (
            <div className="relative inline-flex bg-zinc-900/80 p-1.5 rounded-full border border-zinc-800 shadow-sm overflow-hidden">
              <button
                onClick={() => setViewMode("graph")}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 z-10 ${
                  viewMode === "graph"
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {viewMode === "graph" && (
                  <motion.div
                    layoutId="skillsTabBubble"
                    className="absolute inset-0 bg-zinc-800 rounded-full border border-zinc-700 shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20 flex items-center gap-2">
                  <Network size={16} />
                  Interactive Graph
                </span>
              </button>

              <button
                onClick={() => setViewMode("list")}
                className={`relative px-5 py-2 text-sm font-medium transition-colors duration-300 z-10 ${
                  viewMode === "list"
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {viewMode === "list" && (
                  <motion.div
                    layoutId="skillsTabBubble"
                    className="absolute inset-0 bg-zinc-800 rounded-full border border-zinc-700 shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20 flex items-center gap-2">
                  <List size={16} />
                  Categorized List
                </span>
              </button>
            </div>
          )}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 min-h-[600px] flex items-start justify-center overflow-hidden transition-all duration-500 hover:border-zinc-700 group"
        >
          {viewMode === "graph" && !isMobile ? (
            <div className="w-full h-[600px] fade-in">
              <SkillGraph nodes={nodes} links={links} />
            </div>
          ) : (
            <div className="w-full h-full flex flex-col gap-6 fade-in py-2">
              {Object.entries(skillsByCategory).map(([category, skills]) => (
                <div
                  key={category}
                  className="border border-zinc-800/60 bg-zinc-800/20 rounded-lg p-5"
                >
                  <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="text-accent font-bold">▸</span>
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => {
                      const Icon = techIcons[skill];
                      return (
                        <div
                          key={skill}
                          className="flex items-center gap-2 px-4 py-2 bg-zinc-900 text-zinc-200 text-sm rounded-md border border-zinc-700/80 hover:border-accent transition-smooth cursor-default shadow-sm"
                        >
                          {Icon && <Icon size={16} className="text-zinc-400" />}
                          <span className="font-medium">{skill}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
