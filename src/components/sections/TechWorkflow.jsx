// src/components/sections/TechWorkflow.jsx - LIGHT ENHANCEMENTS
import { motion } from "framer-motion";
import { useState } from "react";

const workflowData = [
  {
    category: "Development",
    icon: "💻",
    color: "from-cyan-400 to-blue-500",
    tools: [
      { name: "VS Code", description: "Primary code editor" },
      { name: "Git/GitHub", description: "Version control" },
      { name: "Postman", description: "API testing" },
      { name: "Chrome DevTools", description: "Debugging" }
    ]
  },
  {
    category: "Design",
    icon: "🎨",
    color: "from-purple-400 to-pink-500",
    tools: [
      { name: "Figma", description: "UI/UX design" },
      { name: "Tailwind CSS", description: "Styling framework" },
      { name: "Framer Motion", description: "Animations" },
      { name: "Canva", description: "Graphic design" }
    ]
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-green-400 to-emerald-500",
    tools: [
      { name: "Spring Boot", description: "Java framework" },
      { name: "MySQL", description: "Database" },
      { name: "Postman", description: "API testing" },
      { name: "Docker", description: "Containerization" }
    ]
  },
  {
    category: "Mobile",
    icon: "📱",
    color: "from-yellow-400 to-orange-500",
    tools: [
      { name: "Android Studio", description: "Android development" },
      { name: "React Native", description: "Cross-platform" },
      { name: "Flutter", description: "Cross-platform development" },
      { name: "Firebase", description: "Backend services" }
    ]
  }
];

const TechWorkflow = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/3 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto relative"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-cyan-400 text-sm uppercase tracking-widest mb-4"
          >
            DEVELOPMENT SETUP
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Tech Workflow
            </span>
          </motion.h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {workflowData.map((workflow, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveTab(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === idx
                  ? `bg-gradient-to-r ${workflow.color} text-white shadow-lg`
                  : "bg-white/5 backdrop-blur-xl border border-white/10 text-zinc-400 hover:border-white/30"
              }`}
            >
              <span className="text-xl">{workflow.icon}</span>
              {workflow.category}
            </motion.button>
          ))}
        </div>

        {/* Active Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {/* Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
            {/* Subtle hover effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative">
              {/* Tools Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {workflowData[activeTab].tools.map((tool, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group/tool"
                  >
                    {/* Icon dot */}
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${workflowData[activeTab].color} mt-2 group-hover/tool:scale-150 transition-transform duration-300`} />
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1 group-hover/tool:text-cyan-400 transition-colors">
                        {tool.name}
                      </h4>
                      <p className="text-sm text-zinc-400">
                        {tool.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-zinc-500 text-sm">
            Tools I use daily to build amazing projects ⚡
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechWorkflow;
