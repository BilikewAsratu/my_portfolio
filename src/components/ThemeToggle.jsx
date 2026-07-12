import { useTheme } from '../context/ThemeContext';

// Each theme gets an icon (SVG or emoji). Add more as you add themes.
// Icons order must match the themes array in ThemeContext.
const themeIcons = [
  // theme-dark (index 0)
  <svg key="moon" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>,
  // theme-light (index 1)
  <svg key="sun" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>,
  // theme-green (index 2)
  <svg key="leaf" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>,
  // theme-purple (index 3)
  <svg key="star" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>,
  // theme-ocean (index 4)
  <svg key="wave" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12c1-2 3-4 6-4s3 4 6 4 3-2 6-4" />
  </svg>,
  // theme-sunset (index 5)
  <svg key="sunrise" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m-8-9h1m14 0h1M5.6 5.6l.7.7m12.1 12.1l.7.7m-12.1 0l.7-.7m12.1-12.1l.7-.7" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16" />
  </svg>,
];

const ThemeToggle = () => {
  const { themeIndex, cycleTheme, themes } = useTheme();
  const themeNames = themes.map(t => t.replace('theme-', '').charAt(0).toUpperCase() + t.replace('theme-', '').slice(1));

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-full transition-colors flex items-center gap-1"
      style={{ color: 'var(--text-primary)' }}
      aria-label={`Current theme: ${themeNames[themeIndex]}. Click to cycle.`}
      title={themeNames[themeIndex]}
    >
      {themeIcons[themeIndex]}
    </button>
  );
};

export default ThemeToggle;