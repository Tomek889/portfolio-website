import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import studynest from "../assets/projects/studynest.png";
import diaryapp from "../assets/projects/diaryapp.png";
import battleship from "../assets/projects/battleship.png";

const projects = [
  {
    title: "StudyNest App",
    description:
      "An AI-powered study assistant that helps students learn faster and retain more by turning study materials into interactive tools.",
    highlights: [
      "Flashcards generated from PDFs or text with a 3D flip UI",
      "Balanced quizzes with multiple-choice and open-ended questions",
      "Summaries with the most important ideas in a clean format",
      "Feynman-style practice with AI feedback and follow-up questions",
      "Voice recording with Web Audio visualization and transcription",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "OpenAI",
      "Web Audio API",
    ],
    github: "https://github.com/Tomek889/studying-app",
    live: "https://studying-app-smoky.vercel.app/",
    image: studynest,
  },
  {
    title: "Diary App",
    description:
      "A full-stack journaling application for tracking thoughts, tasks, moods, and personal progress.",
    highlights: [
      "Daily journal entries with gratitude and reflections",
      "Task tracking and completion management",
      "Mood, energy, and health logging",
      "Statistics dashboard with progress visualization",
      "Calendar view and PDF export",
    ],
    technologies: [
      "React",
      "React Router",
      "Vite",
      "Express.js",
      "Node.js",
      "PostgreSQL",
      "@react-pdf/renderer",
      "CSS",
    ],
    github: "https://github.com/Tomek889/diary-app",
    live: "https://diaryapp.bieda.it/",
    image: diaryapp,
  },
  {
    title: "Battleship Game",
    description:
      "A browser-based implementation of the classic Battleship game featuring player vs computer gameplay and interactive ship combat.",
    highlights: [
      "10x10 game board with ship placement system",
      "Player versus computer gameplay",
      "Turn-based attack mechanics and win detection",
      "Object-oriented architecture using JavaScript classes",
      "Built without external libraries or frameworks",
    ],
    technologies: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Tomek889/battleship",
    live: "https://tomek889.github.io/battleship/",
    image: battleship,
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
              <div className="relative h-[300px] overflow-hidden bg-zinc-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-[center_20%] transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>

                <p className="text-zinc-300 mb-5 text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-mono text-zinc-400 uppercase tracking-widest mb-3">
                    Highlights
                  </h4>
                  <ul className="space-y-2 text-zinc-300">
                    {project.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="text-accent font-bold">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-zinc-300 hover:text-accent transition-smooth"
                    >
                      <Github size={18} />
                      <span>GitHub</span>
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-zinc-300 hover:text-accent transition-smooth"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
