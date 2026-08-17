// src/components/Terminal.jsx (or sections/Terminal.jsx)
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const commands = [
  { cmd: "about", output: "Ravi Shankar - Computer Science Engineering Student. A curious engineer always ready to learn new things in tech." },
  { cmd: "skills", output: "Languages: C++, Dart, HTML, CSS, JS, Java, Python\nFrameworks: Flutter, ReactJS\nDatabases: MongoDB, MySQL, PostgreSQL, Firestore\nTools: VS Code, GitHub, AWS, Vercel, Render, Firebase" },
  { cmd: "education", output: "Sri Eshwar College of Engineering - B.E. Computer Science Engineering (CGPA: 7.3)" },
  { cmd: "contact", output: "Email: ravishankar08062006@gmail.com\nGitHub: github.com/Ravishankar2006\nLinkedIn: linkedin.com/in/ravishankar-a-g" },
  { cmd: "help", output: "Available commands:\n  about       - Brief intro\n  skills      - Tech stack overview\n  education   - Academic background\n  contact     - Social links\n  clear       - Clear screen\n  help        - Show this menu" }
];

const Terminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  // Reset animation when component comes into view (only once per view)
  useEffect(() => {
    if (isInView && !hasAnimated) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentLine(0);
      setDisplayedText("");
      setHasAnimated(true);
    } else if (!isInView && hasAnimated) {
      // Reset the flag when scrolled away so it can animate again
      setHasAnimated(false);
    }
  }, [isInView, hasAnimated]);

  useEffect(() => {
    if (!isInView) return;
    if (currentLine >= commands.length) return;

    const command = commands[currentLine];
    const fullText = command.cmd;
    
    if (displayedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setDisplayedText("");
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, currentLine, isInView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-zinc-500 text-sm uppercase tracking-widest mb-4 animate-pulse text-center"
      >
        INTERACTIVE SHELL
      </motion.p>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl relative"
      >
        {/* CRT Overlay Effects */}
        <div className="terminal-scanlines" />
        <div className="terminal-crt-glass" />

        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 border-b border-zinc-700 relative z-20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
            <div className="w-3 h-3 rounded-full bg-zinc-700" />
          </div>
          <span className="text-xs text-zinc-400 ml-2">guest@sentient-portfolio:~$</span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 font-mono text-sm space-y-2 min-h-[320px] relative z-20">
          {commands.slice(0, currentLine).map((item, i) => (
            <div key={i} className="space-y-1">
              <div className="text-zinc-400">
                <span className="text-zinc-500 font-bold mr-2">guest@sentient-portfolio:~$</span>
                {item.cmd}
              </div>
              <div className="text-zinc-300 pl-2 whitespace-pre-line">{item.output}</div>
            </div>
          ))}
          {currentLine < commands.length && (
            <div className="text-zinc-300">
              <span className="text-zinc-400 font-bold mr-2">guest@sentient-portfolio:~$</span>
              {displayedText}
              {showCursor && <span className="bg-zinc-500 text-transparent ml-1">_</span>}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Terminal;
