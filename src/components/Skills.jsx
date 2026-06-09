import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import * as d3 from "d3";

const skillsData = [
  { id: "React", category: "Frontend" },
  { id: "Next.js", category: "Frontend" },
  { id: "TypeScript", category: "Frontend" },
  { id: "Tailwind CSS", category: "Frontend" },
  { id: "Node.js", category: "Backend" },
  { id: "Express", category: "Backend" },
  { id: "NestJS", category: "Backend" },
  { id: "Python", category: "Backend" },
  { id: "PostgreSQL", category: "Database" },
  { id: "MongoDB", category: "Database" },
  { id: "Redis", category: "Database" },
  { id: "Docker", category: "DevOps" },
  { id: "AWS", category: "DevOps" },
  { id: "CI/CD", category: "DevOps" },
  { id: "API Design", category: "Backend" },
  { id: "GraphQL", category: "Backend" },
];

const categoryColors = {
  Frontend: "#38bdf8",
  Backend: "#818cf8",
  Database: "#34d399",
  DevOps: "#f87171",
};

function SkillsGraph() {
  const svgRef = useRef();

  useEffect(() => {
    if (!svgRef.current || skillsData.length === 0) return;

    const width = svgRef.current.clientWidth;
    const height = 500;

    // Clear previous content
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Create simulation
    const nodes = skillsData.map((d) => ({
      id: d.id,
      category: d.category,
      x: Math.random() * width,
      y: Math.random() * height,
      vx: 0,
      vy: 0,
    }));

    const simulation = d3
      .forceSimulation(nodes)
      .force("link", d3.forceLink().distance(80).links([]))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(40))
      .alpha(0.8);

    // Create circles
    const circles = svg
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 20)
      .attr("fill", (d) => categoryColors[d.category])
      .attr("opacity", 0.8)
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .style("cursor", "grab")
      .call(
        d3
          .drag()
          .on("start", dragStarted)
          .on("drag", dragged)
          .on("end", dragEnded),
      );

    // Create labels
    const labels = svg
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", ".3em")
      .attr("font-size", "11px")
      .attr("font-weight", "600")
      .attr("fill", "#000")
      .attr("pointer-events", "none")
      .text((d) => d.id);

    function dragStarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragEnded(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    simulation.on("tick", () => {
      circles.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      labels.attr("x", (d) => d.x).attr("y", (d) => d.y);
    });

    return () => simulation.stop();
  }, []);

  return (
    <div className="w-full space-y-4">
      <p className="text-sm text-zinc-400 text-center">
        Drag nodes around to explore skills
      </p>
      <svg
        ref={svgRef}
        className="w-full border border-zinc-800 rounded-lg bg-zinc-900/30"
      />
    </div>
  );
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const categories = [
    { name: "Frontend", color: "#38bdf8" },
    { name: "Backend", color: "#818cf8" },
    { name: "Database", color: "#34d399" },
    { name: "DevOps", color: "#f87171" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <motion.div
        className="max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Skills</h2>
          <div className="line-accent w-16 h-1"></div>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat) => (
              <div key={cat.name} className="flex items-center gap-2">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: cat.color }}
                ></div>
                <span className="text-sm text-zinc-300">{cat.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-zinc-900/30 rounded-lg p-6 border border-zinc-800"
        >
          <SkillsGraph />
        </motion.div>
      </motion.div>
    </section>
  );
}
