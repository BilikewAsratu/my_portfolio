import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGlobe, FiGithub, FiLinkedin } from 'react-icons/fi';

const contactInfo = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'you@example.com',
    href: 'mailto:you@example.com',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+1 (234) 567-890',
    href: 'tel:+1234567890',
  },
  {
    icon: <FiGlobe />,
    label: 'Website',
    value: 'www.yourname.dev',
    href: 'https://www.yourname.dev',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'github.com/yourusername',
    href: 'https://github.com/yourusername',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourusername',
    href: 'https://linkedin.com/in/yourusername',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Get In <span style={{ color: 'var(--accent)' }}>Touch</span>
        </h2>
        <p className="text-center mb-12 max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
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
              className="flex items-center gap-4 rounded-xl p-5 transition-all group"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
                border: '1px solid var(--border-color)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div
                className="text-2xl group-hover:scale-110 transition-transform"
                style={{ color: 'var(--accent)' }}
              >
                {item.icon}
              </div>
              <div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.label}</p>
                <p className="font-medium break-all" style={{ color: 'var(--text-primary)' }}>
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