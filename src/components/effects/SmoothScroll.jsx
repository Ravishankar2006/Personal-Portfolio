// src/components/SmoothScroll.jsx
import { useEffect } from "react";

export const SmoothScroll = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return null;
};
export default SmoothScroll;