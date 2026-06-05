import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      bg-white/5
      backdrop-blur-xl
      border-b
      border-white/10
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
        "
      >
        {/* Logo */}
        <h1 className="font-bold text-xl">
          Aditya.
        </h1>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-slate-300">
          <a
            href="#about"
            className="hover:text-white transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-white transition"
          >
            Skills
          </a>

          <a
            href="#experience"
            className="hover:text-white transition"
          >
            Journey
          </a>

          <a
            href="#projects"
            className="hover:text-white transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/adityagitty23"
            target="_blank"
            rel="noopener noreferrer"
            className="
            text-white
            hover:text-purple-400
            hover:scale-110
            transition-all
            duration-300
            "
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-kumar-3290482b3"
            target="_blank"
            rel="noopener noreferrer"
            className="
            text-white
            hover:text-blue-400
            hover:scale-110
            transition-all
            duration-300
            "
          >
            <FaLinkedin size={22} />
          </a>
        </div>
      </div>
    </nav>
  );
}