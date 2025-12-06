/* eslint-disable react-refresh/only-export-components */
// src/components/sections/Timeline.jsx - ENHANCED VERSION
import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useRef } from "react";

const timelineData = [
  {
    year: "2025",
    title: "Computer Science Engineering Student",
    institution: "Sri Eshwar College of Engineering",
    description: "Building full-stack projects, exploring ethical hacking, and diving deep into discrete mathematics and algorithms.",
    status: "current",
    details: [
      "Learning full-stack development with React, Spring Boot",
      "Exploring cybersecurity and ethical hacking",
      "Building AI/ML projects and algorithms",
      "Participating in hackathons and coding competitions"
    ]
  },
  {
    year: "2022",
    title: "12th Grade - CBSE",
    institution: "AKR Academy",
    description: "Scored 352 marks with a cutoff of 132. Developed strong foundation in mathematics and computer science.",
    status: "completed",
    details: [
      "Scored 352/500 marks",
      "Cutoff: 132",
      "Strong foundation in Mathematics and Computer Science",
      "Participated in school coding events"
    ]
  },
  {
    year: "2020",
    title: "10th Grade - CBSE",
    institution: "AKR Academy",
    description: "Scored 406 marks. Built foundational knowledge in science and mathematics.",
    status: "completed",
    details: [
      "Scored 406/500 marks",
      "Excellent performance in Mathematics",
      "Developed interest in programming",
      "Participated in science exhibitions"
    ]
  }
];

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const containerRef = useRef(null);

  // Scroll progress for timeline line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-20 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="text-cyan-400 text-sm uppercase tracking-widest mb-4"
          >
            MY JOURNEY
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-4xl md:text-5xl font-bold"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Education Timeline
            </span>
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2">
            <motion.div
              style={{ scaleY: lineHeight }}
              className="w-full h-full bg-gradient-to-b from-cyan-500 via-fuchsia-500 to-cyan-500 origin-top"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;
              const isExpanded = expandedIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center ${
                    isLeft ? "" : "md:grid-flow-dense"
                  }`}
                >
                  {/* Pulsing Dot with Ripples */}
                  <div className="absolute left-4 md:left-1/2 top-8 transform -translate-x-1/2 md:-translate-x-1/2 z-10">
                    <div className="relative flex items-center justify-center">
                      {/* Ripple effects */}
                      <span className="absolute inline-flex h-8 w-8 rounded-full bg-cyan-400 opacity-75 animate-ping" />
                      <span className="absolute inline-flex h-6 w-6 rounded-full bg-fuchsia-400 opacity-50 animate-ping animation-delay-300" />
                      
                      {/* Main dot */}
                      <span className="relative inline-flex h-4 w-4 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 shadow-lg shadow-cyan-500/50" />
                    </div>
                  </div>

                  {/* Achievement Tag */}
                  {item.status === "current" && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.5, type: "spring" }}
                      className="absolute left-12 md:left-1/2 top-4 transform md:-translate-x-1/2 z-20"
                    >
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                        <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        CURRENT
                      </span>
                    </motion.div>
                  )}

                  {/* Empty spacer for alternating layout */}
                  <div className={`hidden md:block ${isLeft ? "md:order-2" : ""}`} />

                  {/* Card */}
                  <motion.div
                    whileHover={{ 
                      y: -10, 
                      scale: 1.02,
                    }}
                    className={`ml-12 md:ml-0 ${isLeft ? "md:order-1" : "md:order-2"}`}
                  >
                    <motion.div
                      onClick={() => toggleExpand(index)}
                      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 cursor-pointer hover:border-cyan-500/50 transition-all duration-300 group relative overflow-hidden"
                    >
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Grid pattern overlay */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative">
                        {/* Year */}
                        <motion.p
                          className="text-cyan-400 text-lg font-bold mb-2"
                        >
                          {item.year}
                        </motion.p>

                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                          {item.title}
                        </h3>

                        {/* Institution */}
                        <p className="text-zinc-400 font-medium mb-3">
                          {item.institution}
                        </p>

                        {/* Description */}
                        <p className="text-zinc-300 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Expandable Details */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: isExpanded ? "auto" : 0,
                            opacity: isExpanded ? 1 : 0
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-4 border-t border-white/10 space-y-2">
                            {item.details.map((detail, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-2"
                              >
                                <span className="text-cyan-400 mt-1">→</span>
                                <span className="text-zinc-400 text-sm">
                                  {detail}
                                </span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        {/* Expand indicator */}
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          className="absolute bottom-4 right-4 text-cyan-400"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
