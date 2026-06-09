// src/components/ProjectModal.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[60]"
          />

          {/* Modal Container - Fixed centering */}
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="relative p-6 md:p-8 bg-zinc-800/80 border-b border-zinc-700">
                  <button
                    onClick={onClose}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-colors text-white text-xl font-light"
                  >
                    ✕
                  </button>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 pr-12">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">{project.type}</p>
                </div>

                {/* Scrollable Content */}
                <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                  {/* Status Badge */}
                  <div>
                    <span className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono text-zinc-300 uppercase tracking-wider">
                      {project.status}
                    </span>
                  </div>

                  {/* Overview */}
                  <div>
                    <h4 className="text-white font-bold text-lg mb-3">Overview</h4>
                    <p className="text-zinc-300 leading-relaxed">{project.desc}</p>
                  </div>

                  {/* Key Features */}
                  {project.features && (
                    <div>
                      <h4 className="text-white font-bold text-lg mb-3">Key Features</h4>
                      <ul className="space-y-2.5">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-zinc-300">
                            <span className="text-zinc-500 mt-0.5 flex-shrink-0">▹</span>
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-white font-bold text-lg mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-zinc-900/50 border border-zinc-800 rounded-md text-[11px] font-mono text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Challenges & Solutions */}
                  {project.challenges && (
                    <div>
                      <h4 className="text-white font-bold text-lg mb-3">Challenges & Solutions</h4>
                      <p className="text-zinc-300 text-sm leading-relaxed">{project.challenges}</p>
                    </div>
                  )}
                </div>

                {/* Footer with Links */}
                <div className="p-6 md:p-8 pt-0">
                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg transition-colors text-sm font-medium"
                      >
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-zinc-200 text-black border border-white rounded-lg transition-all text-sm font-medium"
                      >
                        Live Demo
                      </a>
                    )}
                    {!project.github && !project.demo && (
                      <p className="text-zinc-500 text-sm">Links coming soon...</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
