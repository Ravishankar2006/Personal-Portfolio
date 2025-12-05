// src/components/Projects.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const projects = [
  {
    title: "Package Delivery Logger",
    type: "Full Stack System",
    desc: "A comprehensive tracking system for logistics with real-time status updates and delivery routing. Production-ready system built for scalability.",
    tech: ["Java", "Spring Boot", "MySQL", "Thymeleaf"],
    status: "Production",
    gradient: "from-cyan-500 to-blue-600",
    features: [
      "Real-time package tracking with live status updates",
      "Route optimization for delivery efficiency",
      "Admin dashboard with analytics and reporting",
      "RESTful API for third-party integrations",
      "Role-based access control for security"
    ],
    challenges: "Implemented WebSocket connections for real-time updates while maintaining database consistency. Optimized query performance for large datasets using indexing and caching strategies.",
    github: "https://github.com/yourusername/package-delivery",
    demo: null
  },
  {
    title: "Secure Banking Core",
    type: "FinTech Security",
    desc: "Digital banking backend focusing on transaction integrity, ACID properties, and role-based access control with encryption.",
    tech: ["Java Security", "SQL Triggers", "Encryption", "React"],
    status: "Prototype",
    gradient: "from-emerald-500 to-teal-600",
    features: [
      "End-to-end encryption for sensitive data",
      "Transaction rollback mechanisms with ACID compliance",
      "Multi-factor authentication system",
      "Audit logging for regulatory compliance",
      "Rate limiting and fraud detection"
    ],
    challenges: "Designed transaction handling to prevent race conditions and ensure atomicity. Implemented AES-256 encryption with secure key management and session handling.",
    github: "https://github.com/yourusername/banking-core",
    demo: null
  },
  {
    title: "N-Queen Visualizer",
    type: "Algorithm Engine",
    desc: "Interactive visual solver for the N-Queen backtracking problem. Visualizes recursive steps in real-time with smooth animations.",
    tech: ["React", "Algorithms", "State Management"],
    status: "Live",
    gradient: "from-fuchsia-500 to-purple-600",
    features: [
      "Step-by-step visualization of backtracking algorithm",
      "Adjustable board size (4×4 to 12×12)",
      "Speed control for animation playback",
      "Solution counter and statistics",
      "Educational mode with explanations"
    ],
    challenges: "Optimized rendering performance for large board sizes using React.memo and efficient state updates. Balanced animation smoothness with algorithm speed.",
    github: "https://github.com/yourusername/nqueen-visualizer",
    demo: "https://nqueen-demo.vercel.app"
  },
  {
    title: "Intelligent Agent 01",
    type: "Artificial Intelligence",
    desc: "Custom knowledge representation system using First-Order Logic to solve navigation puzzles with search algorithms.",
    tech: ["Python", "Logic Programming", "Search Algos"],
    status: "Experimental",
    gradient: "from-orange-500 to-red-600",
    features: [
      "First-Order Logic inference engine",
      "A* and Dijkstra pathfinding implementations",
      "Knowledge base with predicate logic",
      "Heuristic optimization for search efficiency",
      "Visual maze solver with path highlighting"
    ],
    challenges: "Designed a flexible knowledge representation system that supports complex logical queries. Optimized search algorithms with admissible heuristics for guaranteed optimal solutions.",
    github: "https://github.com/yourusername/intelligent-agent",
    demo: null
  },
  {
    title: "Cyclone Prediction System",
    type: "AI/ML Model",
    desc: "Multimodel prediction system with feature reduction and web frontend for cyclone prediction and impact analysis.",
    tech: ["Python", "Machine Learning", "React", "Flask"],
    status: "Research",
    gradient: "from-blue-500 to-indigo-600",
    features: [
      "Ensemble model combining Random Forest and XGBoost",
      "Feature engineering with meteorological data",
      "Interactive map for prediction visualization",
      "Historical data analysis and pattern recognition",
      "Alert system with severity levels"
    ],
    challenges: "Handled imbalanced datasets using SMOTE techniques. Reduced feature dimensionality while maintaining prediction accuracy above 85%.",
    github: "https://github.com/yourusername/cyclone-prediction",
    demo: null
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="relative min-h-screen w-full bg-black text-white py-20 px-6">
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto mb-16 text-center"
      >
        <p className="text-cyan-400 text-xs uppercase tracking-[0.3em] mb-3">
          Portfolio
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Featured Projects
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Systems built with passion, creativity, and a focus on reliability — from secure backends to visual problem solvers.
        </p>
      </motion.div>

      {/* Projects grid */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            onClick={() => handleProjectClick(project)}
            className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Gradient accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`} />

            {/* Status badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">
                {project.type}
              </span>
              <span className={`
                px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold
                ${project.status === 'Production' ? 'bg-emerald-500/20 text-emerald-400' : ''}
                ${project.status === 'Prototype' ? 'bg-cyan-500/20 text-cyan-400' : ''}
                ${project.status === 'Live' ? 'bg-fuchsia-500/20 text-fuchsia-400' : ''}
                ${project.status === 'Experimental' ? 'bg-orange-500/20 text-orange-400' : ''}
                ${project.status === 'Research' ? 'bg-blue-500/20 text-blue-400' : ''}
              `}>
                {project.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-zinc-400 text-sm leading-relaxed mb-4">
              {project.desc}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-xs text-zinc-300"
                >
                  {tech}
                </span>
              ))}
              {project.tech.length > 3 && (
                <span className="px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-full text-xs text-zinc-400">
                  +{project.tech.length - 3}
                </span>
              )}
            </div>

            {/* Click hint */}
            <div className="text-cyan-400 text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Click for details <span>→</span>
            </div>

            {/* Hover glow effect */}
            <div className={`
              absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
              bg-gradient-to-br ${project.gradient}
              blur-3xl -z-10 scale-75
            `} />
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
