// src/components/Hero.jsx
import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";

const Hero = ({ started, onStart }) => {
  return (
    <section
      className={`relative min-h-screen w-full bg-black text-white flex items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        started ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Animated cyberpunk background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-purple-900/40 to-black" />

        {/* Animated glowing orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
          style={{
            animation: "pulse 3s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/30 rounded-full blur-3xl"
          style={{
            animation: "pulse 3s ease-in-out infinite",
            animationDelay: "1.5s",
          }}
        />

        {/* Horizontal laser beams with inline animation */}
        <div
          className="absolute top-1/4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
          style={{
            animation: "slideBeam 8s linear infinite",
          }}
        />
        <div
          className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent"
          style={{
            animation: "slideBeam 6s linear infinite",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute bottom-1/3 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"
          style={{
            animation: "slideBeam 10s linear infinite",
            animationDelay: "4s",
          }}
        />

        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <p className="text-cyan-400 text-sm uppercase tracking-widest mb-4">
            Sentient Portfolio · 2025
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Ravi Shankar</h1>
          <p className="text-xl md:text-2xl text-fuchsia-300 mb-4">
            Cyberpunk-coded experiences, secure systems, and visual
            problem-solvers.
          </p>
          <p className="text-zinc-400 mb-8 max-w-2xl mx-auto">
            Full-stack Java + React builds, security-focused backends, and
            algorithm visualizers.
          </p>
          
          <MagneticButton
            onClick={onStart}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-400 text-black px-7 py-2 text-sm font-semibold shadow-[0_0_40px_rgba(56,189,248,0.25)] hover:shadow-[0_0_60px_rgba(56,189,248,0.5)] transition-shadow"
          >
            <span className="relative">
              {started ? "Resume the run" : "Enter Portfolio"}
            </span>
            <span className="relative h-[2px] w-8 rounded-full bg-black/70" />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
