import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm font-mono mb-4" style={{ color: 'var(--accent)' }}>
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span style={{ color: 'var(--accent)' }}>
            Bilikew Asratu
          </span>
        </h1>
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          Full‑Stack Developer & IT Support Workflow Expert — I turn complex
          data into elegant, automated solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full font-medium transition-colors"
            style={{ backgroundColor: 'var(--accent)', color: '#fff' }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border rounded-full font-medium transition-colors"
            style={{ borderColor: 'var(--border-color)', color: 'var(--text-primary)' }}
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-20 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <FiArrowDown style={{ color: 'var(--text-muted)' }} className="text-2xl" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;