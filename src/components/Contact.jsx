// src/components/Contact.jsx
import { motion } from "framer-motion";

const contactMethods = [
  {
    name: "GitHub",
    value: "@ravishankar",
    link: "https://github.com/ravishankar",
    icon: "💻",
    color: "from-gray-600 to-gray-800"
  },
  {
    name: "LinkedIn",
    value: "Ravi Shankar",
    link: "https://linkedin.com/in/ravishankar",
    icon: "💼",
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "Email",
    value: "ravi@example.com",
    link: "mailto:ravi@example.com",
    icon: "📧",
    color: "from-cyan-500 to-blue-600"
  },
  {
    name: "Twitter/X",
    value: "@ravicodestech",
    link: "https://twitter.com/ravicodestech",
    icon: "🐦",
    color: "from-gray-700 to-zinc-900"
  }
];

const Contact = () => {
  return (
    <section className="relative min-h-screen w-full bg-black text-white py-20 px-6 flex items-center">
      
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto w-full">
        
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-fuchsia-400 text-xs uppercase tracking-[0.3em] mb-3">
            Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build Something
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
            Open to collaborations, project discussions, and tech conversations. 
            Tap in — let's create sentient-feeling experiences together.
          </p>
        </motion.div>

        {/* Main contact card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(6,182,212,0.1)]"
        >
          {/* Accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-purple-500" />

          {/* Status indicator */}
          <div className="flex items-center gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.8)]" />
            <span className="text-sm text-zinc-400">Available for opportunities</span>
          </div>

          {/* Contact methods grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.name}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 4 }}
                className="group flex items-center gap-4 p-4 bg-zinc-800/30 border border-zinc-700 rounded-xl hover:border-cyan-400/50 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} text-2xl`}>
                  {method.icon}
                </div>

                {/* Info */}
                <div className="flex-1">
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    {method.name}
                  </p>
                  <p className="text-sm font-medium text-zinc-200 group-hover:text-cyan-400 transition-colors">
                    {method.value}
                  </p>
                </div>

                {/* Arrow */}
                <div className="text-zinc-600 group-hover:text-cyan-400 transition-colors">
                  →
                </div>
              </motion.a>
            ))}
          </div>

          {/* Footer tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center pt-6 border-t border-zinc-800"
          >
            <p className="text-zinc-500 text-sm">
              Built with passion, creativity, and main-character energy ✨
            </p>
            <p className="text-zinc-600 text-xs mt-2">
              © 2025 Ravi Shankar · Sentient Portfolio
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
