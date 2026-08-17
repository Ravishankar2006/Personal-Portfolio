// src/components/Projects.jsx
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Music Visualizer",
    description: "Interactive music visualization tool with real-time audio processing and dynamic graphics",
    tech: ["React", "WebGL", "Audio API"]
  },
  {
    title: "Feastly",
    description: "Modern food e-commerce platform with seamless shopping experience and robust backend infrastructure",
    tech: ["React", "Node.js", "MongoDB", "Stripe API"]
  },
  {
    title: "EMI Calculator",
    description: "Financial tool for calculating Equated Monthly Installments with dynamic interest rate calculations",
    tech: ["JavaScript", "HTML", "CSS"]
  },
  {
    title: "ConfliceFree",
    description: "Automated timetable collision detection system for educational institutions",
    tech: ["React", "Vite", "CSS"]
  }
];

const Projects = () => {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all cursor-pointer overflow-hidden card-border-trace"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <h3 className="text-xl font-bold mb-3 relative z-10 text-white group-hover:text-white transition-colors">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-4 relative z-10">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-zinc-900/50 border border-zinc-800 rounded-md text-[11px] font-mono text-zinc-400 group-hover:border-zinc-700 group-hover:text-zinc-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
