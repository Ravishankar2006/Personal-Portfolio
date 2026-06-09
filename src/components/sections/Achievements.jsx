// src/components/sections/Achievements.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Import certificate images
import dsaUdemy from "../../assets/dsa_udemy.jpg";
import mernCampusAacharya from "../../assets/mern_internship_campus_aacharya.jpg";
import techsprintGdg from "../../assets/techsprint_gdg.png";

const achievementsData = [
  {
    category: "Certifications",
    items: [
      {
        title: "Mastering Data Structures & Algorithms using C and C++",
        issuer: "Udemy (Abdul Bari)",
        date: "May 18, 2025",
        image: dsaUdemy
      },
      {
        title: "MERN Stack Internship with Capstone Project",
        issuer: "Campus Aacharya",
        date: "Dec 19, 2025",
        image: mernCampusAacharya
      }
    ]
  },
  {
    category: "Achievements",
    items: [
      {
        title: "TechSprint Hackathon 2026 - Top 10 Teams",
        issuer: "GDG on Campus & SECE",
        date: "2026",
        image: techsprintGdg
      }
    ]
  }
];

const Achievements = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/1 to-transparent" />
      
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
            <span className="text-white">
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
              className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === idx
                  ? "bg-white text-black border border-white shadow-md shadow-white/10"
                  : "bg-zinc-900/40 border border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
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
              onClick={() => setSelectedImage(item.image)}
              className="relative group cursor-pointer"
            >
              {/* Scan line animation */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-scan" />
              </div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full hover:border-white/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
                <div>
                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Certificate Image Thumbnail */}
                  {item.image && (
                    <div className="relative h-44 w-full mb-6 rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-all">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-md text-[11px] font-mono text-zinc-300 border border-zinc-800 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Full
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white group-hover:text-zinc-300 transition-colors line-clamp-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-zinc-500 text-sm mt-0.5">{item.issuer}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-500 mt-4 font-mono">
                  <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-pulse" />
                  {item.date}
                </div>

                {/* Subtle hover overlay */}
                <div className="absolute inset-0 rounded-2xl bg-white/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-zinc-500 text-sm">
            More achievements coming soon...
          </p>
        </motion.div>
      </motion.div>

      {/* Modal for full-size certificate view */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Certificate"
                className="max-w-full max-h-[85vh] rounded-xl object-contain border border-white/20 shadow-2xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-14 right-0 text-white hover:text-white/80 font-semibold text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full backdrop-blur-md transition-colors"
              >
                Close ×
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
