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
      className="min-h-[50vh] flex mb-[2rem] items-center justify-center px-4 py-20"
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
            <h3 className="text-xl font-semibold mb-4 text-accent">Who I Am</h3>
            <p className="text-zinc-300 leading-relaxed mb-4">
              I’m a high school student in Poland passionate about technology,
              programming, and mathematics. I enjoy learning how things work and
              using code to solve real-world problems.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              I have a solid foundation in front-end development and experience
              with Python, JavaScript, SQL, and cybersecurity. I’m constantly
              expanding my skills to become a full-stack developer and build my
              own tech venture in the future.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-accent">
              What I’m Focused On
            </h3>
            <ul className="space-y-3 text-zinc-300">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">▸</span>
                <span>
                  Building strong foundations in{" "}
                  <strong>full-stack development</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">▸</span>
                <span>
                  Improving my <strong>problem-solving skills</strong> through
                  programming and mathematics
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">▸</span>
                <span>
                  Learning how to create{" "}
                  <strong>clean, practical, and useful</strong> digital products
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">▸</span>
                <span>
                  Preparing to turn my ideas into a{" "}
                  <strong>real startup</strong> in the future
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
