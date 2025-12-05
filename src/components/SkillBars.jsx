// src/components/SkillBars.jsx
import { motion } from "framer-motion";

const skills = [
  { name: "Java & Spring Boot", level: 90, color: "from-orange-500 to-red-600" },
  { name: "React & JavaScript", level: 85, color: "from-cyan-400 to-blue-500" },
  { name: "Python", level: 80, color: "from-yellow-400 to-blue-500" },
  { name: "SQL & Database Design", level: 85, color: "from-blue-500 to-purple-600" },
  { name: "System Design", level: 75, color: "from-purple-500 to-pink-600" },
  { name: "Algorithms & DSA", level: 88, color: "from-green-400 to-emerald-600" }
];

const SkillBars = () => {
  return (
    <section className="relative w-full bg-black text-white py-16 px-6">
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-3">Skill Proficiency</h3>
          <p className="text-zinc-400">Built through hands-on projects and continuous learning</p>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-zinc-300">{skill.name}</span>
                <span className="text-xs text-zinc-500">{skill.level}%</span>
              </div>
              
              <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.2, ease: "easeOut" }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillBars;
