// src/components/sections/SocialProof.jsx
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Projects Built", value: 5, suffix: "+", icon: "🚀", color: "from-cyan-400 to-blue-500" },
  { label: "Technologies", value: 10, suffix: "+", icon: "⚡", color: "from-yellow-400 to-orange-500" },
  { label: "Lines of Code", value: 10, suffix: "K+", icon: "💻", color: "from-purple-400 to-pink-500" },
  { label: "Coffee Consumed", value: "∞", suffix: "", icon: "☕", color: "from-amber-400 to-red-500" }
];

// Animated counter with glitch effect
const GlitchCounter = ({ value, suffix, color }) => {
  const [count, setCount] = useState(() => typeof value === 'string' ? value : 0);
  const [isGlitching, setIsGlitching] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (typeof value === 'string') {
      return;
    }

    if (!isInView) {
      return;
    }

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    let animationFrame = 0;

    const timer = setInterval(() => {
      start += increment;
      animationFrame++;
      
      if (animationFrame % 5 === 0 && Math.random() > 0.7 && start < end) {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 100);
      }
      
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => {
      clearInterval(timer);
    };
  }, [isInView, value]);

  return (
    <span ref={ref} className="relative inline-block">
      <span className={`relative z-10 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
        {count}{suffix}
      </span>
      
      {isGlitching && (
        <>
          <span 
            className="absolute top-0 left-0 text-red-500 z-0"
            style={{ transform: 'translate(-2px, 0)' }}
            aria-hidden="true"
          >
            {count}{suffix}
          </span>
          <span 
            className="absolute top-0 left-0 text-cyan-400 z-0"
            style={{ transform: 'translate(0px, 0)' }}
            aria-hidden="true"
          >
            {count}{suffix}
          </span>
          <span 
            className="absolute top-0 left-0 text-green-400 z-0"
            style={{ transform: 'translate(2px, 0)' }}
            aria-hidden="true"
          >
            {count}{suffix}
          </span>
        </>
      )}
    </span>
  );
};

const SocialProof = () => {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false }}
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
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 h-full border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                
                <motion.div
                  className="absolute left-0 right-0 h-[2px] pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${stat.color.includes('cyan') ? '#06b6d4' : stat.color.includes('yellow') ? '#facc15' : stat.color.includes('purple') ? '#a855f7' : '#f59e0b'}, transparent)`
                  }}
                  animate={{ 
                    top: ['-2px', '100%', '-2px']
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                />
                
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  className="relative z-10 text-4xl md:text-5xl mb-3 filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                >
                  {stat.icon}
                </motion.div>

                <div className="relative z-10 text-3xl md:text-4xl font-bold mb-2">
                  <GlitchCounter value={stat.value} suffix={stat.suffix} color={stat.color} />
                </div>

                <div className="relative z-10 text-xs md:text-sm text-zinc-300 uppercase tracking-wider">
                  {stat.label}
                </div>

                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-bl-full transition-opacity duration-300 blur-2xl`} />
                
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
