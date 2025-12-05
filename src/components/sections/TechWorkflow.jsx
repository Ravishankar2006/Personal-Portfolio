// src/components/TechWorkflow.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const TechWorkflow = () => {
  const [activeTab, setActiveTab] = useState(0);

  const devEnvironment = [
    {
      category: "Development",
      tools: [
        { name: "VS Code", desc: "Primary IDE with custom extensions", icon: "💻" },
        { name: "IntelliJ IDEA", desc: "For Spring Boot development", icon: "🔧" },
        { name: "Android Studio", desc: "Mobile app development", icon: "📱" },
        { name: "Git & GitHub", desc: "Version control & collaboration", icon: "🔀" }
      ]
    },
    {
      category: "Database & Testing",
      tools: [
        { name: "MySQL Workbench", desc: "Database design & management", icon: "🗄️" },
        { name: "Postman", desc: "API testing & documentation", icon: "📮" },
        { name: "JUnit", desc: "Unit testing framework", icon: "✅" },
        { name: "React DevTools", desc: "Frontend debugging", icon: "🔍" }
      ]
    }
  ];

  const methodology = [
    {
      title: "Problem Solving Approach",
      points: [
        "Break complex problems into smaller modules",
        "Research similar solutions and best practices",
        "Prototype rapidly, iterate based on testing",
        "Document code for future maintainability"
      ],
      icon: "🧩"
    },
    {
      title: "Development Workflow",
      points: [
        "Plan architecture before coding",
        "Follow MVC/layered architecture patterns",
        "Write clean, readable code with comments",
        "Test thoroughly before deployment"
      ],
      icon: "⚙️"
    },
    {
      title: "Learning Strategy",
      points: [
        "Hands-on project-based learning",
        "Explore new technologies through implementation",
        "Study discrete math & algorithms deeply",
        "Stay updated with tech trends & security"
      ],
      icon: "📚"
    }
  ];

  const projectMetrics = [
    { label: "Full-Stack Projects", value: "5+", desc: "Production & prototype systems" },
    { label: "GitHub Repos", value: "15+", desc: "Public & private repositories" },
    { label: "Tech Stack", value: "10+", desc: "Languages & frameworks mastered" },
    { label: "Active Learning", value: "Daily", desc: "Ethical hacking & new tech" }
  ];

  return (
    <section className="relative w-full bg-black text-white py-20 px-6">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-cyan-400 text-xs uppercase tracking-[0.3em] mb-3">
            Technical Arsenal
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Development Workflow & Tools
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            My approach to building reliable, scalable systems from concept to deployment
          </p>
        </motion.div>

        {/* Project Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {projectMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-xl p-5 text-center hover:border-cyan-400/50 transition-all"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-white mb-1">{metric.label}</div>
              <div className="text-xs text-zinc-500">{metric.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Development Environment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <span>🛠️</span> Development Environment
          </h3>

          {/* Tab Headers */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {devEnvironment.map((env, index) => (
              <button
                key={env.category}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                    : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700 hover:border-zinc-600'
                }`}
              >
                {env.category}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {devEnvironment[activeTab].tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-zinc-800/30 rounded-xl border border-zinc-700 hover:border-cyan-400/30 transition-all"
              >
                <span className="text-2xl flex-shrink-0">{tool.icon}</span>
                <div>
                  <h4 className="font-medium text-white mb-1">{tool.name}</h4>
                  <p className="text-sm text-zinc-400">{tool.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Methodology Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methodology.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400/30 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{method.icon}</span>
                <h3 className="text-lg font-bold text-white">{method.title}</h3>
              </div>

              <ul className="space-y-3">
                {method.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                    <span className="text-cyan-400 mt-0.5 flex-shrink-0">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechWorkflow;
