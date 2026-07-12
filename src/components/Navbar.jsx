import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: 'var(--nav-bg)',
        borderColor: 'var(--border-color)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold"
          style={{ color: 'var(--accent)' }}
        >
          YourName
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + mobile menu button */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl"
            style={{ color: 'var(--text-secondary)' }}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden px-4 py-4 space-y-3 border-t"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-color)',
          }}
        >
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block transition-colors"
              style={{ color: 'var(--text-secondary)' }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;