// src/App.jsx
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "./components/Hero";
import Timeline from "./components/TimeLine";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import SocialProof from "./components/SocialProof";
import SkillBars from "./components/SkillBars";
import Terminal from "./components/Terminal";
import Contact from "./components/Contact";
import SettingsPanel from "./components/SettingsPanel";
import MobileMenu from "./components/MobileMenu";
import SkipLink from "./components/SkipLink";
import { 
  ScrollProgress, 
  LoadingScreen, 
  CustomCursor,
  BackgroundGrid 
} from "./components/Enhancements";

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
          {/* Accessibility */}
          <SkipLink />

          {/* Enhancements */}
          <ScrollProgress />
          <CustomCursor />
          <BackgroundGrid />
          <SettingsPanel />
          <MobileMenu />

          {/* Sections */}
          <Hero started={started} onStart={handleStart} />

          <section id="timeline">
            <Timeline />
          </section>

          <section id="tech">
            <TechStack />
          </section>

          <SkillBars />

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
