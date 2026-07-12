import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer
      className="py-8 border-t mt-20"
      style={{ borderColor: 'var(--border-color)' }}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
        style={{ color: 'var(--text-muted)' }}
      >
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex gap-5 text-xl">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-primary)] transition-colors" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:you@example.com" className="hover:text-[var(--text-primary)] transition-colors" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;