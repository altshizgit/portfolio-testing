import { motion } from 'motion/react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export function Portfolio() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <motion.div
            className="text-xl font-bold tracking-wider"
            whileHover={{ scale: 1.02 }}
          >
            SHIZUKI SERVICES
          </motion.div>

          <div className="flex gap-8 items-center">
            <motion.a
              href="#about"
              className="text-sm text-white/60 hover:text-white transition-colors tracking-wide"
              whileHover={{ y: -2 }}
            >
              ABOUT
            </motion.a>
            <motion.a
              href="#projects"
              className="text-sm text-white/60 hover:text-white transition-colors tracking-wide"
              whileHover={{ y: -2 }}
            >
              PROJECTS
            </motion.a>
            <motion.a
              href="#contact"
              className="text-sm text-white/60 hover:text-white transition-colors tracking-wide"
              whileHover={{ y: -2 }}
            >
              CONTACT
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with BMW */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 tracking-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            SHIZUKI SERVICES
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/50 mb-16 max-w-2xl mx-auto font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Software Engineer specializing in full-stack development
            and scalable solutions
          </motion.p>

          <motion.div
            className="text-sm text-white/40 tracking-widest flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span>SCROLL TO EXPLORE</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Minimal grid background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:80px_80px]" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <motion.div
                className="h-px w-12 bg-white mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                About Me
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  Software engineer with a passion for building robust and scalable applications. 
                  With foundational expertise in front-end development and strong back-end capabilities.
                </p>
                <p className="text-lg text-white/70 leading-relaxed font-light">
                  I specialize in creating high-performance solutions across multiple programming 
                  languages and frameworks, delivering clean code and exceptional user experiences.
                </p>
              </motion.div>

              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div>
                  <h3 className="text-xl font-bold mb-6 tracking-wide">
                    TECH STACK
                  </h3>
                  <div className="space-y-4 text-white/60">
                    <div>
                      <div className="flex items-center gap-4 group mb-3">
                        <div className="w-px h-8 bg-white/20 group-hover:bg-white transition-colors" />
                        <span className="text-sm tracking-wide text-white font-medium">
                          Web Development
                        </span>
                      </div>
                      <p className="text-xs text-white/50 ml-8 font-light">
                        JavaScript (JS), HTML, CSS, PHP
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-4 group mb-3">
                        <div className="w-px h-8 bg-white/20 group-hover:bg-white transition-colors" />
                        <span className="text-sm tracking-wide text-white font-medium">
                          Programming Languages
                        </span>
                      </div>
                      <p className="text-xs text-white/50 ml-8 font-light">
                        Python, Ruby, C++, C#, R
                      </p>
                    </div>
                    <div>
                      <div className="flex items-center gap-4 group mb-3">
                        <div className="w-px h-8 bg-white/20 group-hover:bg-white transition-colors" />
                        <span className="text-sm tracking-wide text-white font-medium">
                          Database
                        </span>
                      </div>
                      <p className="text-xs text-white/50 ml-8 font-light">
                        SQL
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <motion.div
                className="h-px w-12 bg-white mb-8"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Featured Projects
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
              {[1, 2, 3, 4, 5, 6].map((item, index) => (
                <motion.div
                  key={item}
                  className="group relative bg-black hover:bg-zinc-950 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className="aspect-[4/3] bg-zinc-900 flex items-center justify-center relative overflow-hidden">
                    <motion.div
                      className="text-6xl font-bold text-white/5"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      {String(item).padStart(2, '0')}
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-2 tracking-wide">
                      PROJECT {String(item).padStart(2, '0')}
                    </h3>
                    <p className="text-white/50 mb-6 text-sm font-light">
                      A cutting-edge solution delivering exceptional results
                    </p>
                    <motion.div
                      className="flex items-center gap-2 text-sm text-white/40 group-hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      <span className="tracking-wide">VIEW PROJECT</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <motion.div
                className="h-px w-12 bg-white mb-8 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
              <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-center">
                Get In Touch
              </h2>
            </div>

            <p className="text-lg text-white/50 mb-16 text-center font-light max-w-2xl mx-auto">
              Ready to elevate your digital presence? Let's create something
              extraordinary together.
            </p>

            <div className="flex justify-center gap-8 mb-16">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 border border-white/10 hover:border-white/30 transition-colors flex items-center justify-center"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 text-white/60" />
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 border border-white/10 hover:border-white/30 transition-colors flex items-center justify-center"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 text-white/60" />
              </motion.a>

              <motion.a
                href="mailto:contact@shizukiservices.com"
                className="w-14 h-14 border border-white/10 hover:border-white/30 transition-colors flex items-center justify-center"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 text-white/60" />
              </motion.a>
            </div>

            <div className="text-center">
              <motion.button
                className="px-10 py-4 bg-white text-black font-bold text-sm tracking-widest hover:bg-white/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                START A PROJECT
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-white/30 text-sm tracking-wide">
              © 2026 SHIZUKI SERVICES
            </p>
            <p className="text-white/30 text-sm tracking-wide">
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}