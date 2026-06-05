import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      "
    >
      {/* Glow 1 */}
      <div
        className="
        absolute
        top-20
        left-20
        w-72
        h-72
        bg-purple-600/20
        blur-[120px]
        rounded-full
        "
      />

      {/* Glow 2 */}
      <div
        className="
        absolute
        bottom-20
        right-20
        w-72
        h-72
        bg-blue-600/20
        blur-[120px]
        rounded-full
        "
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-6 relative z-10"
      >
        <p className="text-purple-400 uppercase tracking-widest mb-4">
          AI Engineer • Full Stack Developer
        </p>

        <h1
          className="
          text-6xl
          md:text-8xl
          font-black
          leading-none
          "
        >
          ADITYA
          <br />

          <span
            className="
            bg-gradient-to-r
            from-purple-400
            to-blue-400
            bg-clip-text
            text-transparent
            "
          >
            KUMAR
          </span>
        </h1>

        <p
          className="
          mt-8
          text-slate-400
          max-w-2xl
          mx-auto
          text-lg
          "
        >
          Building AI Agents, Full Stack Applications,
          and Digital Solutions for businesses and clients.
        </p>

        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <a
            href="#projects"
            className="
            px-8 py-4
            rounded-2xl
            bg-purple-600
            hover:bg-purple-500
            transition
            "
          >
            View Projects
          </a>

          <button
            className="
            px-8 py-4
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            "
          >
            Download Resume
          </button>

        </div>
      </motion.div>
    </section>
  );
}