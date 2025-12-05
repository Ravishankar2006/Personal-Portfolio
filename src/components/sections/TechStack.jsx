// src/components/TechStack.jsx
import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Languages",
    items: ["Java", "Python", "C/C++", "JavaScript", "HTML/CSS"]
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "React", "Flutter", "Tailwind CSS"]
  },
  {
    category: "Tools & Platforms",
    items: ["Git/GitHub", "MySQL", "Postman", "VS Code", "Android Studio"]
  },
  {
    category: "Currently Learning",
    items: ["Ethical Hacking", "Discrete Math", "System Design", "AI/ML"]
  }
];

const TechStack = () => {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-xs uppercase tracking-[0.3em] mb-3">
            Tech Arsenal
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Technology Stack</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
            >
              <h3 className="text-lg font-bold text-cyan-400 mb-4">{tech.category}</h3>
              <ul className="space-y-2">
                {tech.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="text-sm text-zinc-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
