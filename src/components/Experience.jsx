import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025",
    title: "AI Intern",
    company: "Codec Technologies",
    description:
      "Worked on Artificial Intelligence concepts and real-world AI solutions while gaining hands-on industry experience.",
  },

  {
    year: "2025 - Present",
    title: "Freelance Developer",
    company: "Self Employed",
    description:
      "Building websites, web applications, and AI-powered solutions for clients using modern technologies.",
  },

  {
    year: "Present",
    title: "Building Personal Products",
    company: "Independent Projects",
    description:
      "Developing AI agents, full-stack applications, and scalable software products to strengthen technical expertise.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold mb-16">
          Professional Journey
        </h2>

        <div className="relative">

          {/* Timeline Line */}
          <div
            className="
            absolute
            left-4
            top-0
            bottom-0
            w-[2px]
            bg-white/10
            "
          />

          {experiences.map((item, index) => (
            <div
              key={index}
              className="
              relative
              pl-16
              mb-12
              "
            >
              {/* Dot */}
              <div
                className="
                absolute
                left-0
                top-3
                w-8
                h-8
                rounded-full
                bg-purple-500
                border-4
                border-slate-950
                "
              />

              <div
                className="
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-8
                hover:border-purple-500/40
                transition-all
                duration-300
                "
              >
                <p className="text-purple-400 font-semibold">
                  {item.year}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 mt-1">
                  {item.company}
                </p>

                <p className="text-slate-300 mt-4 leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}