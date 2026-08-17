// src/components/sections/ProfileIntro.jsx - COMPLETE VERSION
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import profileImg from "../../assets/me3.png";

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = parseFloat(value);
          const duration = 2000;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={nodeRef}>
      {count.toFixed(1)}
      {suffix}
    </span>
  );
};

// Typing Animation Component
const TypewriterText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{displayText}</span>;
};

// Floating Particles Component
const FloatingParticles = () => {
  // Lazy initialization - function runs only once on mount
  const [particles] = useState(() =>
    Array.from({ length: 15 }, () => ({
      startX: Math.random() * 300,
      midX: Math.random() * 300,
      endX: Math.random() * 300,
      startY: Math.random() * 300,
      midY: Math.random() * 300,
      endY: Math.random() * 300,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }))
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          initial={{
            x: particle.startX,
            y: particle.startY,
            opacity: 0,
          }}
          animate={{
            x: [particle.startX, particle.midX, particle.endX],
            y: [particle.startY, particle.midY, particle.endY],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

// Code Snippet Decoration
const codeSnippets = [
  'const dev = "Ravi";',
  'skills.push("React");',
  "while(learning) { code(); }",
  "const passion = Infinity;",
];

const CodeSnippet = () => {
  const [currentSnippet, setCurrentSnippet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute top-20 right-10 hidden lg:block"
    >
      <motion.div
        key={currentSnippet}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        className="bg-black/40 backdrop-blur-sm border border-zinc-800 rounded-lg px-4 py-2 font-mono text-sm text-zinc-300"
      >
        <span className="text-zinc-500">{"> "}</span>
        {codeSnippets[currentSnippet]}
      </motion.div>
    </motion.div>
  );
};

// Main ProfileIntro Component
const ProfileIntro = () => {

  // 3D Tilt Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]));
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]));

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="min-h-screen py-20 px-6 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/10 via-transparent to-zinc-900/10" />

      {/* Code Snippet Decoration */}
      <CodeSnippet />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full relative"
      >
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative group">
              {/* Floating Particles */}
              <FloatingParticles />

              {/* Glowing rings - multiple speeds */}
              <div className="absolute inset-0 rounded-full bg-white blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />

              {/* Rotating orbital rings */}
              <div className="absolute -inset-2 rounded-full border border-zinc-800/50 animate-spin-slow" />
              <div className="absolute -inset-4 rounded-full border border-zinc-900/50 animate-spin-reverse" />

              {/* Profile image container with 3D tilt */}
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                }}
                className="relative w-64 h-64 rounded-full overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-all duration-500"
              >
                {/* Hologram scan lines */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-40 animate-scan" />
                </div>

                {/* Profile Image */}
                <img
                  src={profileImg}
                  alt="Ravi Shankar"
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:col-span-3 space-y-6"
          >
            <div>
              {/* Typewriter + Glitch Effect Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-6xl font-bold mb-2 relative"
              >
                <span className="text-white glitch">
                  <TypewriterText text="Ravi Shankar" />
                </span>

                {/* Constant Glitch effect layers */}
                <span className="absolute inset-0 text-zinc-500 opacity-30 glitch-layer-1">
                  Ravi Shankar
                </span>
                <span className="absolute inset-0 text-zinc-300 opacity-20 glitch-layer-2">
                  Ravi Shankar
                </span>
              </motion.h1>

              {/* Enhanced Status Indicator with Ripple */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6 }}
                className="text-xl text-zinc-400 flex items-center gap-2"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                Available for opportunities
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.7 }}
              className="text-lg text-zinc-300 leading-relaxed"
            >
              Computer Science Engineering student at{" "}
              <span className="text-white font-semibold">
                Sri Eshwar College of Engineering
              </span>
              , passionate about building full-stack applications, exploring
              ethical hacking, and diving deep into algorithms and AI/ML.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { label: "CGPA", value: "7.0", suffix: "+" },
                { label: "PROJECTS", value: "5", suffix: "+" },
                { label: "SKILLS", value: "10", suffix: "+" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:border-white/30 transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    <div className="text-2xl font-bold text-white">
                      <AnimatedCounter
                        value={stat.value}
                        suffix={stat.suffix}
                      />
                    </div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfileIntro;
