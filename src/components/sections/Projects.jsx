// src/components/Projects.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const projectsData = [
  {
    title: "Banking Core System",
    description: "Full-stack banking application with Spring Boot backend and secure transaction management",
    tech: ["Spring Boot", "MySQL", "REST API", "JWT"],
    icon: "🏦"
  },
  {
    title: "N-Queen Visualizer",
    description: "Interactive algorithm visualization tool for the N-Queen problem with step-by-step solution",
    tech: ["Python", "Algorithm", "Visualization"],
    icon: "♟️"
  },
  {
    title: "Delivery Logger",
    description: "Logistics tracking system with real-time updates and route optimization",
    tech: ["Java", "Spring Boot", "Database"],
    icon: "📦"
  },
  {
    title: "AI Agent System",
    description: "Intelligent agent exploring machine learning and automation capabilities",
    tech: ["Python", "AI/ML", "Automation"],
    icon: "🤖"
  }
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative w-full bg-black text-white py-20 px-6">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-xs uppercase tracking-[0.3em] mb-3">
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
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -10 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all cursor-pointer overflow-hidden"
            >
              {/* Gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <motion.div
                animate={{
                  scale: hoveredIndex === index ? 1.2 : 1,
                  rotate: hoveredIndex === index ? [0, -10, 10, 0] : 0,
                }}
                transition={{ duration: 0.3 }}
                className="text-5xl mb-4 relative z-10"
              >
                {project.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 relative z-10">{project.title}</h3>
              <p className="text-zinc-300 text-sm mb-4 relative z-10">{project.description}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 relative z-10">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
