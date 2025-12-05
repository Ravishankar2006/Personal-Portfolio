// src/components/SocialProof.jsx
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Projects Built", value: 5, suffix: "+", icon: "🚀", color: "from-cyan-400 to-white-500" },
  { label: "Technologies", value: 10, suffix: "+", icon: "⚡", color: "from-yellow-400 to-white-500" },
  { label: "Lines of Code", value: 10, suffix: "K+", icon: "💻", color: "from-purple-400 to-white-500" },
  { label: "Coffee Consumed", value: 99, suffix: "", icon: "☕", color: "from-amber-400 to-white-500", special: "∞" }
];

const interests = [
  "Ethical Hacking",
  "Linux",
  "System Design",
  "Algorithm Optimization",
  "AI & Machine Learning"
];

// Animated Counter Component
const AnimatedCounter = ({ value, suffix, special }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView && !special) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value, special]);

  return (
    <span ref={ref}>
      {special || count}{suffix}
    </span>
  );
};

const SocialProof = () => {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6 overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Stats Grid with enhanced cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              {/* Card with gradient border effect */}
              <div className="relative bg-zinc-900/80 backdrop-blur-sm rounded-2xl p-6 h-full border border-zinc-800 hover:border-transparent transition-all duration-300 overflow-hidden">
                {/* Animated gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10`} />
                
                {/* Glowing icon */}
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2
                  }}
                  className="text-4xl md:text-5xl mb-3 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                >
                  {stat.icon}
                </motion.div>

                {/* Animated number */}
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} special={stat.special} />
                </div>

                {/* Label */}
                <div className="text-xs md:text-sm text-zinc-400 uppercase tracking-wider">
                  {stat.label}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Exploring - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-fuchsia-500/5 to-purple-500/5 rounded-3xl blur-xl" />
          
          <div className="relative bg-zinc-900/60 backdrop-blur-md border border-zinc-800 rounded-3xl p-8 md:p-10 shadow-2xl">
            {/* Animated gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-500 rounded-t-3xl" />
            
            {/* Header with icon */}
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3"
            >
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="text-3xl"
              >
                🧠
              </motion.span>
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Currently Exploring
              </span>
            </motion.h3>

            {/* Interest tags with staggered animation */}
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.5 + i * 0.08,
                    type: "spring",
                    stiffness: 200
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -4,
                    boxShadow: "0 0 20px rgba(6,182,212,0.4)",
                    transition: { duration: 0.2 }
                  }}
                  className="group relative px-5 py-2.5 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-500/20 rounded-full text-sm md:text-base text-zinc-200 font-medium cursor-default overflow-hidden"
                >
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  <span className="relative z-10">{interest}</span>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-fuchsia-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                </motion.span>
              ))}
            </div>

            {/* Decorative corner elements */}
            <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-cyan-500/20 rounded-br-2xl" />
            <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-fuchsia-500/20 rounded-tl-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
