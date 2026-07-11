import { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold bg-gradient-to-r from-[var(--color-accent)] to-emerald-400 bg-clip-text text-transparent">
          YourName
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-8 text-sm font-medium text-[var(--color-text-secondary)]">
            {links.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[var(--color-text)] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-[var(--color-text-secondary)]"
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)] px-4 py-4 space-y-3">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="pt-2">
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;