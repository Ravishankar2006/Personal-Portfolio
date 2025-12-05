// src/components/sections/ProfileIntro.jsx
import { motion } from "framer-motion";

const ProfileIntro = () => {
  return (
    <section className="min-h-screen py-20 px-6 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-fuchsia-500/5" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full relative"
      >
        <div className="grid md:grid-cols-5 gap-8 items-center">
          
          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative group">
              {/* Glowing rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-cyan-500 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />
              <div className="absolute -inset-2 rounded-full border-2 border-cyan-500/30 animate-spin-slow" />
              <div className="absolute -inset-4 rounded-full border border-fuchsia-500/20" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 rounded-full overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-500">
                {/* Scan line effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 animate-scan" />
                </div>
                
                {/* Replace with your image */}
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogM2MMNVUl2nz3QmbP_KktgrINo30fotBDg&s" // Put your image in public folder
                  alt="Ravi Shankar"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="md:col-span-3 space-y-6"
          >
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.5 }}
                className="text-5xl md:text-6xl font-bold mb-2"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  Ravi Shankar
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.6 }}
                className="text-xl text-zinc-400 flex items-center gap-2"
              >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for opportunities
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.7 }}
              className="text-lg text-zinc-300 leading-relaxed"
            >
              Computer Science Engineering student at{" "}
              <span className="text-cyan-400 font-semibold">Sri Eshwar College of Engineering</span>,
              passionate about building full-stack applications, exploring ethical hacking,
              and diving deep into algorithms and AI/ML.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { label: "CGPA", value: "8.5+" },
                { label: "Projects", value: "5+" },
                { label: "Skills", value: "10+" }
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProfileIntro;
