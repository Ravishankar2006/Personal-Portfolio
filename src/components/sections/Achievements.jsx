// src/components/sections/Achievements.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const achievementsData = [
  {
    category: "Certifications",
    items: [
      {
        title: "Data Structures & Algorithms",
        issuer: "Udemy",
        date: "2025",
        icon: "🎓",
        color: "from-cyan-500 to-blue-500"
      },
      {
        title: "All the beginner and intermediate certifications",
        issuer: "Kaggle",
        date: "2025",
        icon: "🔐",
        color: "from-red-500 to-orange-500"
      },
            {
        title: "Beginner and Intermediate SQL Certifications",
        issuer: "HackerRank",
        date: "2025",
        icon: "📊",
        color: "from-cyan-500 to-blue-500"
      },
      // Add your real certifications here
    ]
  },
  {
    category: "Achievements",
    items: [
      {
        title: "Smart India Hackathon Participant",
        issuer: "Government of India",
        date: "2024",
        icon: "🏆",
        color: "from-yellow-500 to-orange-500"
      },
      {
        title: "400+ Leetcode Problems Solved",
        issuer: "LeetCode",
        date: "2026",
        icon: "⚡",
        color: "from-purple-500 to-pink-500"
      },
      {
        title: "Built 5+ Full-Stack Projects",
        issuer: "Personal Portfolio",
        date: "2023-2024",
        icon: "🚀",
        color: "from-green-500 to-emerald-500"
      },
      // Add your real achievements here
    ]
  }
];

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-500/5 to-transparent" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Achievements & Certifications
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg"
          >
            Recognition and continuous learning milestones
          </motion.p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {achievementsData.map((cat, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === idx
                  ? "bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-white/5 backdrop-blur-xl border border-white/10 text-zinc-400 hover:border-cyan-500/50"
              }`}
            >
              {cat.category}
            </motion.button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievementsData[activeCategory].items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Scan line animation */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 animate-scan" />
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className={`text-5xl mb-4 inline-block p-4 rounded-xl bg-gradient-to-r ${item.color} bg-opacity-10`}
                >
                  {item.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-zinc-400 text-sm mb-3">{item.issuer}</p>
                
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                  {item.date}
                </div>

                {/* Gradient border glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Add more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-zinc-500 text-sm">
            More achievements coming soon... 🚀
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Achievements;
