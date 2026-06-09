// src/components/layout/FloatingNav.jsx - BIGGER VERSION
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const sections = [
  { id: "profile", label: "Profile" },
  { id: "timeline", label: "Timeline" },
  { id: "workflow", label: "Workflow" },
  { id: "projects", label: "Projects" },
  { id: "terminal", label: "Terminal" },
  { id: "stats", label: "Stats" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" }
];

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);

      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: isVisible ? 0 : 100, opacity: isVisible ? 1 : 0 }}
      transition={{ type: "spring", damping: 20 }}
      className="fixed right-8 top-1/4 -translate-y-1/2 z-40 hidden lg:block"
    >
      {/* Nav Container - Bigger */}
      <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-3 shadow-2xl">
        <div className="flex flex-col gap-3">
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            
            return (
              <div key={section.id} className="relative group">
                <motion.button
                  onClick={() => scrollToSection(section.id)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  {/* Bigger dots */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.2 : 1,
                    }}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-white shadow-lg shadow-white/50"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  />

                  {/* Ripple effect on active */}
                  {isActive && (
                    <motion.div
                      animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-white"
                    />
                  )}
                </motion.button>

                {/* Tooltip - shows on hover */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute right-10 top-1/4 -translate-y-1/2 px-4 py-2 bg-black/90 backdrop-blur-xl border border-white/20 rounded-lg text-sm font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                >
                  {section.label}
                  {/* Arrow */}
                  <span className="absolute right-0 top-1/4 -translate-y-1/2 translate-x-full w-2 h-2 rotate-45 bg-black/90 border-r border-t border-white/20" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
};

export default FloatingNav;
