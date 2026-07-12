import { motion } from 'framer-motion';
import { label } from 'framer-motion/client';
import { FaTiktok, FaYoutube } from 'react-icons/fa';
import { FiMail, FiPhone, FiGlobe, FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';

const contactInfo = [
  {
    icon: <FiMail />,
    label: 'Email',
    value: 'bilikew80@gmail.com',
    href: 'bilikew80@gmail.com',
  },
  {
    icon: <FiPhone />,
    label: 'Phone',
    value: '+251 968 405-650',
    href: 'tel:+251968405650',
  },
  {
    icon: <FiGlobe />,
    label: 'Website',
    value: 'https://bilikew-asratu.vercel.app',
    href: 'https://bilikew-asratu.vercel.app/',
  },
  {
    icon: <FiGithub />,
    label: 'GitHub',
    value: 'https://github.com/BilikewAsratu',
    href: 'https://github.com/BilikewAsratu',
  },
  {
    icon: <FiLinkedin />,
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/bilikew-asratu/',
    href: 'https://www.linkedin.com/in/bilikew-asratu/',
  },
  {
    icon: <FiFacebook />,
    label: 'Facebook',
    value: 'https://web.facebook.com/BilikewAsratu',
    href: 'https://web.facebook.com/BilikewAsratu',
  },
  {
    icon: <FaYoutube />,
    label: 'YouTube',
    value: 'https://www.youtube.com/@base_bas',
    href: 'https://www.youtube.com/@base_bas',
  },
  {
    icon: <FaTiktok />,
    label: 'TikTok',
    value: 'https://www.tiktok.com/bilikew_asratu',
    href: 'https://www.tiktok.com/bilikew_asratu',
  }
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