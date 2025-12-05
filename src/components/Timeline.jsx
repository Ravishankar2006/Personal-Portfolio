// src/components/Timeline.jsx
import { motion } from "framer-motion";

const history = [
  {
    year: "2023 - Present",
    title: "B.Tech Computer Science Engineering",
    subtitle: "Sri Eshwar College of Engineering",
    desc: "Building full-stack systems, exploring ethical hacking, discrete math, and crafting projects with passion. Active learner with hands-on approach to tech.",
    icon: "🎓",
    color: "cyan"
  },
  {
    year: "2021 - 2023",
    title: "12th Grade - CBSE",
    subtitle: "AKR Academy CBSE School",
    desc: "Scored 352 marks with a cutoff of 132. Developed strong analytical skills and interest in computer science fundamentals.",
    icon: "📚",
    color: "fuchsia"
  },
  {
    year: "2020 - 2021",
    title: "10th Grade - CBSE",
    subtitle: "AKR Academy CBSE School",
    desc: "Scored 406 marks. Built foundation in mathematics and science. First exposure to programming logic sparked the tech journey.",
    icon: "🚀",
    color: "purple"
  },
  {
    year: "2020",
    title: "System Initialization",
    subtitle: "Hello World",
    desc: "Wrote first lines of C code. The journey into algorithms, data structures, and building sentient-feeling experiences began.",
    icon: "💻",
    color: "emerald"
  }
];

const Timeline = () => {
  return (
    <section className="relative min-h-screen w-full bg-black text-white py-20 px-6">
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative max-w-6xl mx-auto mb-16 text-center"
      >
        <p className="text-cyan-400 text-xs uppercase tracking-[0.3em] mb-3">
          Journey Log
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          System Timeline
        </h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">
          From first "Hello World" to building secure systems — the milestones that shaped the path.
        </p>
      </motion.div>

      {/* Timeline container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-fuchsia-500/50 to-purple-500/50 hidden md:block" />

        {/* Timeline items */}
        {history.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative mb-12 md:mb-20 flex items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Content card */}
            <div className="w-full md:w-[calc(50%-40px)] bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
              
              {/* Icon and year */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{item.icon}</span>
                <span className={`text-${item.color}-400 text-sm font-mono uppercase tracking-wider`}>
                  {item.year}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              
              {/* Subtitle */}
              <p className={`text-${item.color}-300 text-sm mb-3`}>
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Center dot (visible on desktop) */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 shadow-[0_0_20px_rgba(6,182,212,0.6)]" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
