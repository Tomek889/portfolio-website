import { 
  FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPython, 
  FaWindows, FaLinux, FaHtml5, FaCss3Alt 
} from "react-icons/fa";
import { 
  SiExpress, SiPostgresql, SiSqlite, SiPrisma, 
  SiVite, SiTailwindcss, SiSelenium 
} from "react-icons/si";
import { MdJavascript } from "react-icons/md";

export const nodes = [
  { id: "Me", group: "root" },
  
  { id: "Frontend", group: "category" },
  { id: "HTML", group: "tech" },
  { id: "CSS", group: "tech" },
  { id: "JavaScript", group: "tech" },
  { id: "React", group: "tech" },
  { id: "Tailwind", group: "tech" },
  { id: "Vite", group: "tech" },
  
  { id: "Backend", group: "category" },
  { id: "Node.js", group: "tech" },
  { id: "Express", group: "tech" },
  { id: "Python", group: "tech" },
  
  { id: "Database", group: "category" },
  { id: "PostgreSQL", group: "tech" },
  { id: "SQLite", group: "tech" },
  { id: "Prisma", group: "tech" },
  
  { id: "Tools", group: "category" },
  { id: "Git", group: "tech" },
  { id: "GitHub", group: "tech" },
  { id: "Selenium", group: "tech" },
  
  { id: "OS & Env", group: "category" },
  { id: "Linux", group: "tech" },
  { id: "Windows", group: "tech" }
];

export const links = [
  { source: "Me", target: "Frontend" },
  { source: "Me", target: "Backend" },
  { source: "Me", target: "Database" },
  { source: "Me", target: "Tools" },
  { source: "Me", target: "OS & Env" },
  
  { source: "Frontend", target: "HTML" },
  { source: "Frontend", target: "CSS" },
  { source: "Frontend", target: "JavaScript" },
  { source: "Frontend", target: "React" },
  { source: "Frontend", target: "Tailwind" },
  { source: "Frontend", target: "Vite" },
  
  { source: "Backend", target: "Node.js" },
  { source: "Backend", target: "Express" },
  { source: "Backend", target: "Python" },
  
  { source: "Database", target: "PostgreSQL" },
  { source: "Database", target: "SQLite" },
  { source: "Database", target: "Prisma" },
  
  { source: "Tools", target: "Git" },
  { source: "Tools", target: "GitHub" },
  { source: "Tools", target: "Selenium" },
  
  { source: "OS & Env", target: "Linux" },
  { source: "OS & Env", target: "Windows" }
];

export const techIcons = {
  "HTML": FaHtml5,
  "CSS": FaCss3Alt,
  "JavaScript": MdJavascript,
  "React": FaReact,
  "Tailwind": SiTailwindcss,
  "Vite": SiVite,
  "Node.js": FaNodeJs,
  "Express": SiExpress,
  "Python": FaPython,
  "PostgreSQL": SiPostgresql,
  "SQLite": SiSqlite,
  "Prisma": SiPrisma,
  "Git": FaGitAlt,
  "GitHub": FaGithub,
  "Selenium": SiSelenium,
  "Linux": FaLinux,
  "Windows": FaWindows
};