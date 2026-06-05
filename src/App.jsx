import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects.jsx";
import ClientProjects from "./components/ClientProjects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Projects />
      <ClientProjects />

      </main>

    </div>
  );
}

export default App;