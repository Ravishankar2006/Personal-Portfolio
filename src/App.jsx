// src/App.jsx
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Sections
import Hero from "./components/sections/Hero";
import Timeline from "./components/sections/Timeline";
import TechStack from "./components/sections/TechStack";
import Projects from "./components/sections/Projects";
import SocialProof from "./components/sections/SocialProof";
import TechWorkflow from "./components/sections/TechWorkflow";
import Terminal from "./components/sections/Terminal";
import Contact from "./components/sections/Contact";

// Layout
import SettingsPanel from "./components/layout/SettingsPanel";
import MobileMenu from "./components/layout/MobileMenu";

// UI Components
import SkipLink from "./components/ui/SkipLink";
import BackToTop from "./components/ui/BackToTop";

// Effects
import PageTransition from "./components/effects/PageTransition";
import { SmoothScroll } from "./components/effects/SmoothScroll";
import { 
  ScrollProgress, 
  LoadingScreen, 
  CustomCursor,
  BackgroundGrid 
} from "./components/effects/Enhancements";

function App() {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleStart = () => {
    setStarted(true);
    setTimeout(() => {
      const el = document.getElementById("timeline");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 800);
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main App */}
      {!loading && (
        <div className="bg-black min-h-screen">
          {/* UI Enhancements */}
          <SkipLink />
          <SmoothScroll />
          <ScrollProgress />
          <CustomCursor />
          <BackgroundGrid />
          
          {/* Layout Components */}
          <SettingsPanel />
          <MobileMenu />
          <BackToTop />
          <PageTransition />

          {/* Content Sections */}
          <Hero started={started} onStart={handleStart} />

          <section id="timeline">
            <Timeline />
          </section>

          <section id="tech">
            <TechStack />
          </section>

          <TechWorkflow />

          <section id="projects">
            <Projects />
          </section>

          <div className="py-16 px-6">
            <Terminal />
          </div>

          <SocialProof />

          <section id="contact">
            <Contact />
          </section>
        </div>
      )}
    </>
  );
}

export default App;
