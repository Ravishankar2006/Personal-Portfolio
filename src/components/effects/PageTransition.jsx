// src/components/PageTransition.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const PageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    const handleClick = () => {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 600);
    };

    links.forEach(link => link.addEventListener('click', handleClick));
    
    return () => {
      links.forEach(link => link.removeEventListener('click', handleClick));
    };
  }, []);

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[80] bg-zinc-900 origin-top"
        />
      )}
    </AnimatePresence>
  );
};

export default PageTransition;
