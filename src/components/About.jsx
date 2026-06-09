import { motion } from "framer-motion";

export default function About() {
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
      id="about"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-2">About Me</h2>
          <div className="line-accent w-16 h-1"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-accent">
              Development Philosophy
            </h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              I focus on code performance, SQL optimization, and clean React
              component architecture.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              I ensure backend code is secure, scalable, and well-organized
              while maintaining an intuitive, responsive frontend across all
              devices.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-accent">
              Working Methodology
            </h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">▸</span>
                <span>
                  <strong>Git</strong> workflow with Gitflow - clean, semantic
                  history
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">▸</span>
                <span>
                  <strong>CI/CD</strong> approach - automated builds and
                  deployments
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">▸</span>
                <span>Unit and integration tests - code quality first</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">▸</span>
                <span>
                  Application containerization with <strong>Docker</strong> and
                  orchestration
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Tech Stack Preview */}
        <motion.div variants={itemVariants} className="mt-16">
          <h3 className="text-lg font-semibold mb-6 text-zinc-200">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Node.js",
              "Express",
              "PostgreSQL",
              "MongoDB",
              "Docker",
              "AWS",
              "Tailwind CSS",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 border border-zinc-700 rounded-lg text-sm text-zinc-300 bg-zinc-900/50 hover:border-accent transition-smooth"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
