import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-bold mb-12">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side */}
          <div>
            <p className="text-slate-300 text-lg leading-8">
            I'm an AI/ML Engineer and Full Stack Developer passionate
            about building intelligent systems, AI-powered applications,
            and scalable web solutions. My expertise spans artificial
            intelligence, machine learning, modern frontend development,
            backend systems, and cloud deployment.
            </p>

            <p className="text-slate-400 mt-6 text-lg leading-8">
            I enjoy transforming ideas into real-world products,
            whether through personal projects, freelance work,
            or collaborative development. My focus is on creating
            impactful software that solves meaningful problems.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
                <span className="skill-pill">
                Artificial Intelligence
                </span>

                <span className="skill-pill">
                Machine Learning
                </span>

                <span className="skill-pill">
                Full Stack Development
                </span>

                <span className="skill-pill">
                Freelancing
                </span>

                <span className="skill-pill">
                AI Agents
                </span>
            </div>
            </div>

          {/* Right Side */}
            <div className="grid grid-cols-2 gap-6">

            <StatCard
                number="5+"
                label="Projects Built"
            />

            <StatCard
                number="AI/ML"
                label="Specialization"
            />

            <StatCard
                number="Freelance"
                label="Client Work"
            />

            <StatCard
                number="Full Stack"
                label="Development"
            />

            </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatCard({ number, label }) {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-8
      transition-all
      duration-300
      hover:border-purple-500/50
      hover:-translate-y-2
      "
    >
      <h3 className="text-3xl font-bold text-purple-400">
        {number}
      </h3>

      <p className="mt-3 text-slate-400">
        {label}
      </p>
    </div>
  );
}