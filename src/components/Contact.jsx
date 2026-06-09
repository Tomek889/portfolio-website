import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const getSocialValue = (label) => {
  switch (label) {
    case "Email":
      return "tomasz_styczen@wp.pl";
    case "GitHub":
      return "Tomek889";
    case "LinkedIn":
      return "Tomasz Styczeń";
    default:
      return "";
  }
};

export default function Contact() {
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

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      url: "mailto:your.email@example.com",
    },
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/yourusername",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
    },
  ];

  return (
    <section
      id="contact"
      className="flex items-center justify-center px-4 py-20"
    >
      <motion.div
        className="max-w-3xl mx-auto w-full lg:mb-[6rem] flex flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Let's Connect</h2>
          <div className="line-accent mx-auto w-16 h-1"></div>
          <p className="text-zinc-400 mt-4">
            Interested in collaborating? Reach out to me!
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={social.label}
                variants={itemVariants}
                className="group flex flex-col items-center justify-center p-8 border border-zinc-800 rounded-lg bg-zinc-900/50 hover:border-accent hover:bg-zinc-900 transition-all duration-300 transform hover:scale-105 select-text"
              >
                <a
                  href={social.url}
                  target={social.url.startsWith("mailto") ? "_self" : "_blank"}
                  rel={
                    social.url.startsWith("mailto") ? "" : "noopener noreferrer"
                  }
                  className="flex flex-col items-center justify-center"
                >
                  <Icon
                    size={48}
                    className="mb-4 text-accent group-hover:text-white transition-colors duration-300"
                  />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {social.label}
                  </h3>
                </a>
                <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors select-all cursor-text mt-2 block">
                  {getSocialValue(social.label)}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
