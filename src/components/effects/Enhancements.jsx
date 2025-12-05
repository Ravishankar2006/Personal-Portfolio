// src/components/Enhancements.jsx
import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

// Scroll Progress Indicator
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

// Loading Screen
export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const fullText = "System initializing...";

  useEffect(() => {
    // Typing effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);

    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(typingInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      <div className="text-center space-y-6 px-6">
        {/* Logo/Name */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            RS
          </h1>
        </motion.div>

        {/* Typing text */}
        <p className="text-cyan-400 font-mono text-sm md:text-base">
          {displayText}
          <span className="animate-pulse">_</span>
        </p>

        {/* Progress bar */}
        <div className="w-64 md:w-80 mx-auto">
          <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-fuchsia-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-zinc-500 text-xs mt-2 font-mono">{progress}%</p>
        </div>
      </div>
    </motion.div>
  );
};

// Custom Cursor - Enhanced Neon Trail Effect
export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId;
    const targetPosition = { x: 0, y: 0 };

    const updateMousePosition = (e) => {
      targetPosition.x = e.clientX;
      targetPosition.y = e.clientY;
      setIsVisible(true);
      
      // Add to trail - increased to 20 dots for longer trail
      setTrail(prev => [...prev.slice(-20), { x: e.clientX, y: e.clientY, id: Date.now() }]);
    };

    const animate = () => {
      setPosition(prev => ({
        x: prev.x + (targetPosition.x - prev.x) * 0.2,
        y: prev.y + (targetPosition.y - prev.y) * 0.2
      }));
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           target.closest('button') || 
                           target.closest('a');
      setIsHovering(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    animationFrameId = requestAnimationFrame(animate);

    // Hide default cursor
    document.body.style.cursor = 'none';
    const style = document.createElement('style');
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      document.body.style.cursor = '';
      if (style.parentNode) {
        style.remove();
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block">
      {/* Trail dots with varying sizes and colors */}
      {trail.map((point, index) => {
        const progress = (index + 1) / trail.length;
        const size = 8 - (index * 0.35);
        const isCyan = index % 2 === 0;
        
        return (
          <div
            key={point.id}
            className={`fixed pointer-events-none z-[9997] rounded-full mix-blend-screen transition-all duration-100`}
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              transform: 'translate(-50%, -50%)',
              width: `${size}px`,
              height: `${size}px`,
              opacity: progress * 0.8,
              background: isCyan 
                ? `radial-gradient(circle, rgba(6,182,212,${progress}) 0%, rgba(6,182,212,0) 70%)`
                : `radial-gradient(circle, rgba(217,70,239,${progress}) 0%, rgba(217,70,239,0) 70%)`,
              boxShadow: isCyan
                ? `0 0 ${10 * progress}px rgba(6,182,212,${progress * 0.8})`
                : `0 0 ${10 * progress}px rgba(217,70,239,${progress * 0.8})`
            }}
          />
        );
      })}
      
      {/* Connecting line effect */}
      <svg className="fixed pointer-events-none z-[9996] top-0 left-0 w-full h-full">
        <defs>
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(6,182,212)" stopOpacity="0" />
            <stop offset="50%" stopColor="rgb(217,70,239)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(6,182,212)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {trail.length > 1 && (
          <path
            d={`M ${trail.map(p => `${p.x},${p.y}`).join(' L ')}`}
            stroke="url(#trailGradient)"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
          />
        )}
      </svg>
      
      {/* Main cursor with pulsing effect */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer pulse ring */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30 transition-all duration-200 ${
            isHovering ? 'w-12 h-12 animate-ping' : 'w-8 h-8'
          }`}
        />
        
        {/* Main dot */}
        <div
          className={`rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-200 ${
            isHovering ? 'w-10 h-10' : 'w-5 h-5'
          }`}
          style={{
            boxShadow: '0 0 20px rgba(6,182,212,0.8), 0 0 40px rgba(217,70,239,0.6), 0 0 60px rgba(6,182,212,0.4)'
          }}
        />
        
        {/* Inner bright core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white opacity-80" />
      </div>
    </div>
  );
};

// Animated Background Grid
export const BackgroundGrid = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-20">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(6,182,212,0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(6,182,212,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        animate={{
          top: ['0%', '100%']
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};
