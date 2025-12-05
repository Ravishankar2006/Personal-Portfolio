// src/components/SettingsPanel.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { soundManager } from "../../utils/sounds";

const SettingsPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(
    localStorage.getItem("soundEnabled") === "true"
  );
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  const toggleSound = () => {
    const newState = soundManager.toggle();
    setSoundEnabled(newState);
    soundManager.playClick();
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light-mode");
    soundManager.playClick();
  };

  return (
    <>
      {/* Settings Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          soundManager.playClick();
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-shadow"
      >
        <span className="text-2xl">⚙️</span>
      </motion.button>

      {/* Settings Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-zinc-900 border-l border-zinc-800 z-50 p-6 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Settings</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                {/* Sound Toggle */}
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 uppercase tracking-wider">
                    Sound Effects
                  </label>
                  <button
                    onClick={toggleSound}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${
                      soundEnabled
                        ? "bg-cyan-500/10 border-cyan-500/50"
                        : "bg-zinc-800 border-zinc-700"
                    }`}
                  >
                    <span className="text-white font-medium">
                      {soundEnabled ? "Enabled" : "Disabled"}
                    </span>
                    <div
                      className={`w-12 h-6 rounded-full relative transition-colors ${
                        soundEnabled ? "bg-cyan-500" : "bg-zinc-700"
                      }`}
                    >
                      <motion.div
                        className="absolute top-1 w-4 h-4 rounded-full bg-white"
                        animate={{ left: soundEnabled ? 26 : 4 }}
                      />
                    </div>
                  </button>
                </div>

                {/* Theme Toggle */}
                <div className="space-y-2">
                  <label className="text-sm text-zinc-400 uppercase tracking-wider">
                    Theme
                  </label>
                  <button
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between p-4 rounded-xl border bg-zinc-800 border-zinc-700 hover:border-zinc-600 transition-colors"
                  >
                    <span className="text-white font-medium">
                      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
                    </span>
                    <span className="text-zinc-400 text-sm">Switch</span>
                  </button>
                </div>

                {/* Info */}
                <div className="pt-6 border-t border-zinc-800">
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Customize your experience with sound effects and theme
                    preferences. Settings are saved locally.
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

export default SettingsPanel;
