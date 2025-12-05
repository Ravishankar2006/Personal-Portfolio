// src/components/TechStack.jsx
import { motion } from "framer-motion";

const techStack = {
  languages: [
    { name: "Java", color: "from-orange-500 to-red-600" },
    { name: "Python", color: "from-blue-400 to-yellow-400" },
    { name: "C", color: "from-blue-600 to-blue-800" },
    { name: "C++", color: "from-pink-500 to-purple-600" },
    { name: "JavaScript", color: "from-yellow-400 to-yellow-600" },
  ],
  frameworks: [
    { name: "Spring Boot", color: "from-green-500 to-green-700" },
    { name: "React", color: "from-cyan-400 to-blue-500" },
    { name: "Flutter", color: "from-blue-400 to-cyan-300" },
    { name: "Node.js", color: "from-green-600 to-green-800" },
  ],
  tools: [
    { name: "Git & GitHub", color: "from-gray-700 to-gray-900" },
    { name: "VS Code", color: "from-blue-500 to-blue-700" },
    { name: "MySQL", color: "from-orange-400 to-orange-600" },
    { name: "Android Studio", color: "from-green-400 to-teal-500" },
    { name: "Postman", color: "from-orange-500 to-orange-700" },
  ],
  webTech: [
    { name: "HTML", color: "from-orange-500 to-red-500" },
    { name: "CSS", color: "from-blue-500 to-blue-700" },
    { name: "Tailwind", color: "from-cyan-400 to-blue-600" },
  ],
};

const TechStack = () => {
  return (
    <section className="relative min-h-screen w-full bg-black text-white py-20 px-6">
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto mb-16 text-center"
      >
        <p className="text-fuchsia-400 text-xs uppercase tracking-[0.3em] mb-3">
          Arsenal
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Tech Stack
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          Languages, frameworks, and tools mastered through hands-on projects and continuous learning.
        </p>
      </motion.div>

      {/* Tech categories */}
      <div className="relative max-w-6xl mx-auto space-y-12">
        
        {/* Languages */}
        <TechCategory 
          title="Languages" 
          items={techStack.languages} 
          delay={0}
        />

        {/* Frameworks */}
        <TechCategory 
          title="Frameworks & Libraries" 
          items={techStack.frameworks} 
          delay={0.1}
        />

        {/* Web Technologies */}
        <TechCategory 
          title="Web Technologies" 
          items={techStack.webTech} 
          delay={0.2}
        />

        {/* Tools */}
        <TechCategory 
          title="Tools & Platforms" 
          items={techStack.tools} 
          delay={0.3}
        />

      </div>
    </section>
  );
};

// Reusable category component
const TechCategory = ({ title, items, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="space-y-4"
    >
      <h3 className="text-xl font-bold text-cyan-400 mb-4">{title}</h3>
      
      <div className="flex flex-wrap gap-3">
        {items.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: delay + index * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative"
          >
            {/* Badge */}
            <div className={`
              relative px-5 py-2.5 rounded-full
              bg-gradient-to-r ${tech.color}
              font-medium text-sm
              shadow-lg
              transition-all duration-300
              group-hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]
              cursor-default
            `}>
              {tech.name}
            </div>

            {/* Glow effect on hover */}
            <div className={`
              absolute inset-0 rounded-full
              bg-gradient-to-r ${tech.color}
              opacity-0 blur-xl
              group-hover:opacity-50
              transition-opacity duration-300
              -z-10
            `} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
