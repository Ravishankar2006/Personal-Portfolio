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

// Custom Cursor
export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A' || e.target.closest('button') || e.target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed w-4 h-4 rounded-full pointer-events-none z-[999] mix-blend-screen hidden md:block"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          background: isHovering 
            ? 'radial-gradient(circle, rgba(6,182,212,0.8) 0%, rgba(217,70,239,0.6) 100%)'
            : 'radial-gradient(circle, rgba(6,182,212,0.6) 0%, rgba(217,70,239,0.4) 100%)',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      {/* Trail cursor */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border border-cyan-400/30 pointer-events-none z-[998] hidden md:block"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      />
    </>
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
