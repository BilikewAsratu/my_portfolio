import { motion } from 'framer-motion';
import myImage from '../assets/img/my_photo.jpg'
import pdf_cv from '../assets/pdf/bilikew-asratu_cv.pdf'

const About = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div
          className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <img
            src={myImage}
            alt="Bilikew Asratu"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: `linear-gradient(to top, var(--bg-primary), transparent)`,
            }}
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span style={{ color: 'var(--accent)' }}>Me</span>
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
            I’m a Computer Science graduate who pairs deep frontend expertise
            (React, vanilla JS) with solid backend knowledge (PHP, Express) and a
            thorough command of Microsoft 365.
          </p>
          <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            I don’t just write code—I build bridges between technical systems and
            the people who use them. Whether it’s a React dashboard that feeds
            from an Excel macro or a custom PHP API, I deliver maintainable,
            polished software that respects business logic.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href={pdf_cv}
              download
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
              style={{ backgroundColor: 'var(--hover-bg)', color: 'var(--text-primary)' }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;