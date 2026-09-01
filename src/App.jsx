// src/App.jsx
import SkipLink from "./components/ui/SkipLink";
import IndexRail from "./components/layout/IndexRail";
import MobileMenu from "./components/layout/MobileMenu";

import ScrollProgress from "./components/effects/ScrollProgress";
import BootOverlay from "./components/effects/BootOverlay";
import Crosshair from "./components/effects/Crosshair";
import ConstructionGrid from "./components/effects/ConstructionGrid";

import Masthead from "./components/sections/Masthead";
import Work from "./components/sections/Work";
import Proof from "./components/sections/Proof";
import Stack from "./components/sections/Stack";
import Record from "./components/sections/Record";
import Contact from "./components/sections/Contact";

/**
 * Section order and ids are declared in src/data/sections.js, which the
 * nav rail, mobile menu and hero command bar all read. Keep the JSX
 * below in step with that list.
 *
 * The old blocking `{!loading && ...}` gate is gone: content renders
 * immediately and BootOverlay wipes away on top of it, so LCP is no
 * longer pinned to a hardcoded timer.
 */
function App() {
  return (
    <div className="min-h-screen bg-ink-0">
      <SkipLink />
      <BootOverlay />
      <ConstructionGrid />
      <Crosshair />
      <ScrollProgress />

      <IndexRail />
      <MobileMenu />

      <main id="main" className="relative z-10">
        <Masthead />
        <Work />
        <Proof />
        <Stack />
        <Record />
        <Contact />
      </main>
    </div>
  );
}

export default App;
