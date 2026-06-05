import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-32"
    >
      <div
        className="
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-10
        text-center
        "
      >
        <p className="text-purple-400 uppercase tracking-wider">
          Get In Touch
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Let's Work Together
        </h2>

        <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
          Interested in collaborating on AI-powered
          applications, web development projects,
          or freelance opportunities? Let's connect.
        </p>

        <div className="flex justify-center gap-4 flex-wrap mt-10">
          <a
            href="mailto:yourmail@gmail.com"
            className="
            flex items-center gap-2
            px-6 py-3
            rounded-xl
            bg-purple-600
            hover:bg-purple-500
            transition
            "
          >
            <FaEnvelope />
            Email Me
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="
            flex items-center gap-2
            px-6 py-3
            rounded-xl
            bg-slate-800
            hover:bg-slate-700
            transition
            "
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noreferrer"
            className="
            flex items-center gap-2
            px-6 py-3
            rounded-xl
            bg-slate-800
            hover:bg-slate-700
            transition
            "
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}