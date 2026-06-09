import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce platform with secure payment processing and inventory management.",
    architecture:
      "REST API built with Node.js/Express using JWT authentication, PostgreSQL database with Prisma ORM, responsive Next.js frontend with Tailwind CSS styling.",
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Stripe",
      "Docker",
      "AWS",
    ],
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time synchronization and team features.",
    architecture:
      "Real-time data sync using WebSockets, OAuth authentication, Redis caching for performance optimization, MongoDB for flexible data storage.",
    technologies: ["React", "Socket.io", "MongoDB", "Redis", "Express", "JWT"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Advanced data visualization dashboard with real-time analytics and comprehensive reporting.",
    architecture:
      "Microservices architecture with dedicated data processing service, D3.js for interactive visualizations, GraphQL API for efficient data fetching and aggregation.",
    technologies: [
      "React",
      "D3.js",
      "PostgreSQL",
      "Node.js",
      "GraphQL",
      "Docker",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
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

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <motion.div
        className="max-w-5xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Projects</h2>
          <div className="line-accent w-16 h-1"></div>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-zinc-800 rounded-lg overflow-hidden bg-zinc-900/50 hover:border-zinc-700 transition-smooth group"
            >
              <div className="relative h-64 overflow-hidden bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-zinc-300 mb-4 text-base">
                  {project.description}
                </p>

                <div className="mb-6 p-4 border-l-2 border-accent bg-zinc-800/30 rounded">
                  <p className="text-sm text-zinc-400 font-mono">
                    <span className="text-accent font-semibold">
                      Architecture:{" "}
                    </span>
                    {project.architecture}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700 hover:border-accent transition-smooth"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-zinc-300 hover:text-accent transition-smooth"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-zinc-300 hover:text-accent transition-smooth"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
