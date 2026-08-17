// src/components/sections/TechWorkflow.jsx - LIGHT ENHANCEMENTS
import { motion } from "framer-motion";
import { useState } from "react";

const workflowData = [
  {
    category: "Languages",
    tools: [
      { name: "C++", description: "Programming language" },
      { name: "Java", description: "Programming language" },
      { name: "Python", description: "Programming language" },
      { name: "JavaScript", description: "Programming language" },
      { name: "Dart", description: "Programming language" },
      { name: "HTML/CSS", description: "Markup & styling" }
    ]
  },
  {
    category: "Frameworks",
    tools: [
      { name: "ReactJS", description: "Frontend library" },
      { name: "Flutter", description: "Cross-platform mobile" },
      { name: "Tailwind CSS", description: "Styling framework" },
      { name: "Framer Motion", description: "Animations" }
    ]
  },
  {
    category: "Tools",
    tools: [
      { name: "VS Code", description: "Primary code editor" },
      { name: "GitHub", description: "Version control" },
      { name: "Postman", description: "API testing" },
      { name: "Android Studio", description: "Mobile development" },
      { name: "AWS", description: "Cloud platform" },
      { name: "Vercel / Render", description: "Deployment" },
      { name: "Google Colab", description: "ML notebooks" }
    ]
  },
  {
    category: "Databases",
    tools: [
      { name: "MongoDB", description: "NoSQL database" },
      { name: "MySQL", description: "Relational database" },
      { name: "PostgreSQL", description: "Relational database" },
      { name: "Firestore", description: "Firebase NoSQL database" }
    ]
  }
];

const TechWorkflow = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/1 to-transparent" />

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
            className="text-zinc-500 text-sm uppercase tracking-widest mb-4"
          >
            DEVELOPMENT SETUP
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="text-white">
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
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === idx
                  ? "bg-white text-black border border-white shadow-md shadow-white/10"
                  : "bg-zinc-900/40 border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
              }`}
            >
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
            <div className="absolute inset-0 bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 group-hover/tool:scale-150 group-hover/tool:bg-white transition-all duration-300" />
                    
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1 group-hover/tool:text-white transition-colors">
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
            Tools I use daily to build amazing projects.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechWorkflow;
