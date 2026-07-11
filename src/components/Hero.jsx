import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-blue-400 text-sm font-mono mb-4">
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Your Full Name
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          Full‑Stack Developer & Business Workflow Expert — I turn complex
          data into elegant, automated solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-medium transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-full font-medium transition-colors"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-20 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <FiArrowDown className="text-gray-500 text-2xl" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;