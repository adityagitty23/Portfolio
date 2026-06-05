import { motion } from "framer-motion";
import projects from "./projects";
import ProjectCard from "./ProjectCard";

export default function ClientProjects() {
  const clientProjects = projects.filter(
    (project) => project.category === "client"
  );

  return (
    <section
      id="client-projects"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <h2 className="text-5xl font-bold mb-12">
          Client Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {clientProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}