// src/components/SocialProof.jsx
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Built", value: "5+", icon: "🚀" },
  { label: "Technologies", value: "10+", icon: "⚡" },
  { label: "Lines of Code", value: "10K+", icon: "💻" },
  { label: "Coffee Consumed", value: "∞", icon: "☕" }
];

const interests = [
  "Ethical Hacking",
  "Discrete Mathematics",
  "System Design",
  "Algorithm Optimization",
  "AI & Machine Learning"
];

const SocialProof = () => {
  return (
    <section className="relative w-full bg-black text-white py-16 px-6">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center hover:border-cyan-400/50 transition-colors"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-cyan-400 font-bold text-lg mb-4 flex items-center gap-2">
            <span>🧠</span> Currently Exploring
          </h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-fuchsia-500/10 border border-cyan-500/30 rounded-full text-sm text-zinc-200"
              >
                {interest}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
