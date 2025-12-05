// src/components/SocialProof.jsx - With brain click expansion
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { label: "Projects Built", value: 5, suffix: "+", icon: "🚀", color: "from-cyan-400 to-blue-500" },
  { label: "Technologies", value: 10, suffix: "+", icon: "⚡", color: "from-yellow-400 to-orange-500" },
  { label: "Lines of Code", value: 10, suffix: "K+", icon: "💻", color: "from-purple-400 to-pink-500" },
  { label: "Coffee Consumed", value: "∞", suffix: "", icon: "☕", color: "from-amber-400 to-red-500" }
];

const interests = [
  { 
    name: "Ethical Hacking", 
    icon: "🔐", 
    color: "from-red-500 to-orange-500", 
    angle: 0, 
    radius: 180,
    description: "Exploring cybersecurity, penetration testing, and security-first development practices"
  },
  { 
    name: "System Design", 
    icon: "🏗️", 
    color: "from-purple-500 to-pink-500", 
    angle: 90, 
    radius: 180,
    description: "Building scalable architectures and distributed systems for real-world applications"
  },
  { 
    name: "Algorithm Optimization", 
    icon: "⚡", 
    color: "from-yellow-500 to-orange-500", 
    angle: 180, 
    radius: 180,
    description: "Improving performance and efficiency through advanced algorithms and data structures"
  },
  { 
    name: "AI & Machine Learning", 
    icon: "🤖", 
    color: "from-green-500 to-emerald-500", 
    angle: 270, 
    radius: 180,
    description: "Developing intelligent systems and exploring the future of artificial general intelligence"
  }
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

// Static Orbiting Skill Component
const StaticOrbitSkill = ({ skill, index, activeSkill, setActiveSkill, isExpanded }) => {
  const isActive = activeSkill === index;
  
  // Calculate position based on angle and radius
  const normalRadius = skill.radius;
  const expandedRadius = skill.radius * 1.5; // Move further out when expanded
  const currentRadius = isExpanded ? expandedRadius : normalRadius;
  
  const x = Math.cos((skill.angle * Math.PI) / 180) * currentRadius;
  const y = Math.sin((skill.angle * Math.PI) / 180) * currentRadius;

  // Determine tooltip position based on angle
  const getTooltipPosition = () => {
    if (skill.angle >= 315 || skill.angle < 45) return 'right'; // Right side
    if (skill.angle >= 45 && skill.angle < 135) return 'bottom'; // Bottom
    if (skill.angle >= 135 && skill.angle < 225) return 'left'; // Left side
    return 'top'; // Top
  };

  const tooltipPosition = getTooltipPosition();

  return (
    <motion.div
      className="absolute"
      style={{
        left: '50%',
        top: '50%',
      }}
      animate={{
        x: x - 48,
        y: y - 48,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      onMouseEnter={() => setActiveSkill(index)}
      onMouseLeave={() => setActiveSkill(null)}
    >
      <motion.div
        animate={{
          scale: isActive ? 1.3 : 1,
          y: isActive ? -15 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative group cursor-pointer"
      >
        {/* Orbital path glow when active */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-full blur-2xl`}
          animate={{
            opacity: isActive || isExpanded ? 0.7 : 0,
            scale: isActive ? 1.5 : 1,
          }}
          transition={{ duration: 0.3 }}
          style={{ 
            width: '120px', 
            height: '120px', 
            left: '-12px', 
            top: '-12px' 
          }} 
        />
        
        {/* Skill orb */}
        <motion.div 
          className="relative w-24 h-24 bg-white/10 backdrop-blur-xl border-2 rounded-full flex flex-col items-center justify-center shadow-2xl overflow-hidden"
          animate={{
            borderColor: isActive || isExpanded ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)',
            backgroundColor: isActive || isExpanded ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.1)',
          }}
          transition={{ duration: 0.2 }}
        >
          {/* Gradient overlay when active */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${skill.color}`}
            animate={{
              opacity: isActive || isExpanded ? 0.2 : 0,
            }}
            transition={{ duration: 0.2 }}
          />
          
          {/* Icon */}
          <motion.span 
            className="text-4xl filter drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] relative z-10"
            animate={{
              scale: isActive ? 1.2 : 1,
              rotate: isActive ? [0, -10, 10, -5, 5, 0] : 0,
            }}
            transition={{ 
              scale: { type: "spring", stiffness: 300 },
              rotate: { duration: 0.5 }
            }}
          >
            {skill.icon}
          </motion.span>
          
          {/* Connecting line to center */}
          <motion.div 
            className={`absolute bg-gradient-to-r ${skill.color}`}
            animate={{
              opacity: isActive || isExpanded ? 0.6 : 0.15,
              height: isActive ? '3px' : '2px',
            }}
            transition={{ duration: 0.2 }}
            style={{
              width: `${currentRadius}px`,
              left: x < 0 ? '50%' : 'auto',
              right: x >= 0 ? '50%' : 'auto',
              top: '50%',
            }}
          />

          {/* Particle effect on hover */}
          {isActive && (
            <>
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                  initial={{ 
                    x: 0, 
                    y: 0, 
                    opacity: 1,
                    scale: 0
                  }}
                  animate={{
                    x: Math.cos((i * 60 * Math.PI) / 180) * 40,
                    y: Math.sin((i * 60 * Math.PI) / 180) * 40,
                    opacity: 0,
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                />
              ))}
            </>
          )}
        </motion.div>

        {/* Enhanced Tooltip - Position based on quadrant */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: (isActive && !isExpanded) ? 1 : 0,
            scale: (isActive && !isExpanded) ? 1 : 0.8,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`absolute pointer-events-none z-50 ${
            tooltipPosition === 'right' ? '-right-32 top-1/2 -translate-y-1/2' :
            tooltipPosition === 'left' ? '-left-32 top-1/2 -translate-y-1/2' :
            tooltipPosition === 'bottom' ? 'top-28 left-1/2 -translate-x-1/2' :
            '-bottom-20 left-1/2 -translate-x-1/2'
          }`}
        >
          <div className={`bg-gradient-to-r ${skill.color} p-[2px] rounded-xl shadow-2xl`}>
            <div className="bg-zinc-900 backdrop-blur-xl rounded-xl px-5 py-3">
              <p className="text-white font-semibold text-sm whitespace-nowrap">
                {skill.name}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Description Card (shown when expanded) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            scale: isExpanded ? 1 : 0.8,
            y: isExpanded ? 0 : 20,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: index * 0.1 }}
          className="absolute top-28 left-1/2 -translate-x-1/2 w-64 pointer-events-none z-40"
        >
          <div className={`bg-gradient-to-r ${skill.color} p-[2px] rounded-2xl shadow-2xl`}>
            <div className="bg-zinc-900/95 backdrop-blur-xl rounded-2xl p-4">
              <h4 className={`font-bold text-lg mb-2 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                {skill.name}
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const SocialProof = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="relative w-full bg-black text-white py-20 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
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

        {/* Static Orbital Skills System */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-purple-500/10 rounded-3xl blur-2xl" />
          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-visible">
            {/* Header */}
            <motion.h3 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="relative z-10 text-xl md:text-2xl font-bold mb-12 text-center"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Currently Exploring
              </span>
            </motion.h3>

            {/* Orbital System Container */}
            <div className="relative w-full h-[550px] md:h-[650px] flex items-center justify-center">
              {/* Orbital path (ring) */}
              <motion.div
                className="absolute rounded-full border-2 border-dashed border-white/10"
                animate={{
                  width: isExpanded ? `${180 * 3}px` : `${180 * 2}px`,
                  height: isExpanded ? `${180 * 3}px` : `${180 * 2}px`,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />

              {/* Center - You (Brain) - Clickable */}
              <motion.div
                className="absolute z-20 cursor-pointer"
                style={{
                  left: '50%',
                  top: '50%',
                  x: '-50%',
                  y: '-50%',
                }}
                animate={{
                  scale: activeSkill !== null ? [1, 1.15, 1] : [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 backdrop-blur-xl border-2 border-white/30 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] transition-shadow">
                  <span className="text-5xl md:text-6xl filter drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">🧠</span>
                  
                  {/* Pulsing rings */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-cyan-400/50"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-fuchsia-400/50"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 1
                    }}
                  />
                  
                  {/* Click indicator */}
                  <motion.div
                    className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-xs text-cyan-400 whitespace-nowrap font-medium"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {isExpanded ? '✨ Click to collapse' : '👆 Click to expand'}
                  </motion.div>
                </div>
              </motion.div>

              {/* Static Orbiting Skills */}
              {interests.map((skill, index) => (
                <StaticOrbitSkill
                  key={skill.name}
                  skill={skill}
                  index={index}
                  activeSkill={activeSkill}
                  setActiveSkill={setActiveSkill}
                  isExpanded={isExpanded}
                />
              ))}
            </div>

            {/* Instructions */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-center text-zinc-400 text-sm mt-8"
            >
              <span className="text-cyan-400">💡 Hover</span> skills to preview • <span className="text-fuchsia-400">Click brain</span> to see all descriptions
            </motion.p>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none rounded-3xl" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
