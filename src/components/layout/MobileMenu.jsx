// src/components/MobileMenu.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { soundManager } from "../../utils/sounds";

const navItems = [
  { label: "Home", id: "hero", icon: "🏠" },
  { label: "Journey", id: "timeline", icon: "📍" },
  { label: "Skills", id: "tech", icon: "⚡" },
  { label: "Projects", id: "projects", icon: "🚀" },
  { label: "Contact", id: "contact", icon: "💬" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    soundManager.playClick();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          soundManager.playClick();
        }}
        whileTap={{ scale: 0.95 }}
        className="fixed top-6 right-6 z-[60] w-12 h-12 md:hidden flex flex-col items-center justify-center gap-1.5 bg-zinc-900 border border-zinc-800 rounded-xl shadow-lg"
      >
        <motion.span
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 7 : 0,
          }}
          className="w-6 h-0.5 bg-cyan-400 transition-all"
        />
        <motion.span
          animate={{
            opacity: isOpen ? 0 : 1,
          }}
          className="w-6 h-0.5 bg-cyan-400 transition-all"
        />
        <motion.span
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -7 : 0,
          }}
          className="w-6 h-0.5 bg-cyan-400 transition-all"
        />
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-3/4 max-w-sm bg-zinc-900 border-l border-zinc-800 z-[56] md:hidden"
            >
              <div className="p-6 pt-20">
                <h3 className="text-lg font-bold text-white mb-2">
                  Navigation
                </h3>
                <p className="text-xs text-zinc-500 mb-8">Jump to section</p>

                <nav className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(item.id)}
                      onMouseEnter={() => soundManager.playHover()}
                      className="w-full flex items-center gap-3 p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700 hover:border-cyan-400/50 transition-all text-left"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-white font-medium">
                        {item.label}
                      </span>
                    </motion.button>
                  ))}
                </nav>

                <div className="mt-8 pt-8 border-t border-zinc-800">
                  <p className="text-xs text-zinc-500 text-center">
                    © 2025 Ravi Shankar
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
