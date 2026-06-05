import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border border-white/10
      rounded-3xl
      overflow-hidden
      transition-all
      duration-300
      hover:border-purple-500/40
      hover:-translate-y-2
      "
    >
      <div className="p-6">
        {project.type === "mobile" ? (
          <div
            className="
            mx-auto
            w-[300px]
            h-[620px]
            bg-black
            rounded-[40px]
            p-2
            border-4
            border-slate-700
            overflow-hidden
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="
              w-full
              h-full
              object-cover
              rounded-[30px]
              "
            />
          </div>
        ) : (
          <div
            className="
            w-full
            h-[350px]
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            "
          >
            <img
              src={project.image}
              alt={project.title}
              className="
              w-full
              h-full
              object-cover
              "
            />
          </div>
        )}
      </div>

      <div className="px-6 pb-6">
        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-slate-400 mt-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
              px-3
              py-1
              rounded-full
              text-sm
              bg-slate-800
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-6">
          {project.github && project.github !== "#" && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
              flex
              items-center
              gap-2
              px-5
              py-2
              rounded-xl
              bg-slate-800
              "
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
              flex
              items-center
              gap-2
              px-5
              py-2
              rounded-xl
              bg-purple-600
              "
            >
              <FiExternalLink />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}