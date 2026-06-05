import { motion } from "framer-motion";

import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiFlask,
  SiMongodb,
  SiJavascript,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Flask", icon: <SiFlask /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "JWT" },
    ],
  },

  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQL" },
    ],
  },

  {
    title: "AI / ML",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Machine Learning" },
      { name: "NLP" },
      { name: "BERT" },
      { name: "AI Agents" },
      { name: "Prompt Engineering" },
    ],
  },

  {
    title: "Programming",
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
      { name: "SQL" },
    ],
  },

  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Vercel" },
      { name: "Render" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              rounded-3xl
              p-6
              hover:border-purple-500/40
              transition-all
              "
            >
              <h3 className="text-2xl font-semibold mb-6">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-full
                    bg-slate-800
                    text-slate-200
                    "
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}