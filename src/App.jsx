// src/App.jsx
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingNav from './components/layout/FloatingNav';
// Sections
import Timeline from "./components/sections/Timeline";
import Projects from "./components/sections/Projects";
import SocialProof from "./components/sections/SocialProof";
import TechWorkflow from "./components/sections/TechWorkflow";
import Terminal from "./components/sections/Terminal";
import Contact from "./components/sections/Contact";
import ProfileIntro from './components/sections/ProfileIntro';
import Achievements from './components/sections/Achievements';

// Layout
import MobileMenu from "./components/layout/MobileMenu";

// UI Components
import SkipLink from "./components/ui/SkipLink";

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

  const [loading, setLoading] = useState(true);



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
          <FloatingNav />
          <MobileMenu />
          <PageTransition />

          {/* Content Sections */}
          <section id="profile">
            <ProfileIntro />
          </section>

          <section id="timeline">
            <Timeline />
          </section>

          <section id="workflow">
            <TechWorkflow />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="terminal">
            <div className="py-16 px-6">
              <Terminal />
            </div>
          </section>

          <section id="stats">
            <SocialProof />
          </section>

          <section id="achievements">
            <Achievements />
          </section>

          <section id="contact">
            <Contact />
          </section>
        </div>
      )}
    </>
  );
}

export default App;
