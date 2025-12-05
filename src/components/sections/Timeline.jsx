// src/components/Timeline.jsx
import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2025",
    title: "Computer Science Engineering Student",
    institution: "Sri Eshwar College of Engineering",
    description: "Building full-stack projects, exploring ethical hacking, and diving deep into discrete mathematics and algorithms."
  },
  {
    year: "2022",
    title: "12th Grade - CBSE",
    institution: "AKR Academy",
    description: "Scored 352 marks with a cutoff of 132. Developed strong foundation in mathematics and computer science."
  },
  {
    year: "2020",
    title: "10th Grade - CBSE",
    institution: "AKR Academy",
    description: "Scored 406 marks. Started coding journey with C and C++."
  }
];

const Timeline = () => {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 text-xs uppercase tracking-[0.3em] mb-3">
            My Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">Education Timeline</h2>
        </motion.div>

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative pl-8 md:pl-12 border-l-2 border-cyan-500/30 hover:border-cyan-500/60 transition-colors"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]">
                <div className="text-cyan-400 text-sm font-mono mb-2">{item.year}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-zinc-300 text-sm mb-3">{item.institution}</p>
                <p className="text-zinc-300 text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
