import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGlobe, FiGithub, FiLinkedin } from 'react-icons/fi';

const contactInfo = [ /* same data */ ];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[var(--color-text)]">
          Get In <span className="text-[var(--color-accent)]">Touch</span>
        </h2>
        <p className="text-[var(--color-text-secondary)] text-center mb-12 max-w-md mx-auto">
          I'm currently open to new opportunities. Feel free to reach out
          through any of the channels below.
        </p>

        <div className="grid sm:grid-cols-2 gap-5">
          {contactInfo.map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-5 hover:border-[var(--color-accent)] transition-all group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="text-2xl text-[var(--color-accent)] group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-[var(--color-text-secondary)]">{item.label}</p>
                <p className="text-[var(--color-text)] font-medium break-all">
                  {item.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;