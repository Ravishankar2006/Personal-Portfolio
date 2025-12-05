// src/components/Terminal.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const commands = [
  { cmd: "whoami", output: "ravi_shankar" },
  { cmd: "cat skills.txt", output: "Java | Spring Boot | React | Python | C/C++" },
  { cmd: "ls projects/", output: "banking-core/  n-queen-viz/  delivery-logger/  ai-agent/" },
  { cmd: "cat status.txt", output: "Status: Building sentient experiences 🚀" },
  { cmd: "echo $PASSION", output: "Code with creativity and main-character energy ✨" }
];

const Terminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentLine >= commands.length) return;

    const command = commands[currentLine];
    const fullText = `$ ${command.cmd}`;
    
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
  }, [displayedText, currentLine]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-800 border-b border-zinc-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-zinc-400 ml-2">ravi@portfolio ~ %</span>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-sm space-y-2 h-64 overflow-auto">
        {commands.slice(0, currentLine).map((item, i) => (
          <div key={i} className="space-y-1">
            <div className="text-cyan-400">$ {item.cmd}</div>
            <div className="text-zinc-300 pl-2">{item.output}</div>
          </div>
        ))}
        {currentLine < commands.length && (
          <div className="text-cyan-400">
            {displayedText}
            {showCursor && <span className="bg-cyan-400 text-transparent">_</span>}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Terminal;
