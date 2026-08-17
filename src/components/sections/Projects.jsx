// src/components/Projects.jsx
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "DevHub",
    description: "A developer productivity hub that unifies tasks, habits, notes, calendar, goals, and projects with GitHub/LeetCode activity tracking and an AI agent that can act on your data via chat.",
    tech: ["Spring Boot", "PostgreSQL", "React", "TypeScript", "Gemini API"],
    github: "https://github.com/Ravishankar2006/DevHub"
  },
  {
    title: "Ascend",
    description: "A productivity app where users can add tasks, complete them, and track focused minutes using a built-in timer.",
    tech: ["Flutter", "Firebase"],
    github: "https://github.com/Ravishankar2006/Ascend"
  },
  {
    title: "ConflictFree",
    description: "A timetable management web app with teacher, student, and admin roles. Admins create and modify timetables while the app automatically detects scheduling conflicts, displaying results to the respective students and teachers.",
    tech: ["React", "MySQL"],
    github: "https://github.com/Ravishankar2006/ConflictFree"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all cursor-pointer overflow-hidden card-border-trace flex flex-col"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 relative z-10 text-white group-hover:text-white transition-colors">{project.title}</h3>
              <p className="text-zinc-400 text-sm mb-4 relative z-10 flex-1">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 relative z-10 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-zinc-900/50 border border-zinc-800 rounded-md text-[11px] font-mono text-zinc-400 group-hover:border-zinc-700 group-hover:text-zinc-200 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <div className="relative z-10 text-xs font-mono text-zinc-500 group-hover:text-white transition-colors flex items-center gap-1">
                View on GitHub <span>→</span>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
