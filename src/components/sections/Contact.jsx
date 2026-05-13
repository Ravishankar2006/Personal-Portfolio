// src/components/Contact.jsx
import { motion } from "framer-motion";

const contactLinks = [
  { name: "GitHub", icon: "💻", url: "https://github.com/Ravishankar2006", color: "from-purple-500 to-pink-500" },
  { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/ravishankar-a-g", color: "from-blue-500 to-cyan-500" },
  { name: "Email", icon: "📧", url: "mailto:ravishankar08062006@gmail.com", color: "from-red-500 to-orange-500" },
  { name: "Twitter", icon: "🐦", url: "https://twitter.com/yourusername", color: "from-cyan-500 to-blue-500" }
];

const Contact = () => {
  return (
    <section className="relative w-full bg-black text-white py-20 px-6">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
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
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all overflow-hidden"
              >
                {/* Gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`} />
                
                <div className="relative z-10 flex items-center gap-4">
                  <span className="text-4xl">{link.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg">{link.name}</h3>
                    <p className="text-sm text-zinc-400">Connect with me</p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
