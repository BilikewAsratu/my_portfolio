import { createContext, useContext, useState, useLayoutEffect } from 'react';

// Add new theme keys here – see step 2 for more themes
const themes = [
  'theme-dark',
  'theme-light',
  'theme-green',
  'theme-purple',
  'theme-ocean',
  'theme-sunset',
];
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Initialize state immediately from localStorage to avoid flash
  const [themeIndex, setThemeIndex] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    const idx = themes.indexOf(saved);
    return idx !== -1 ? idx : 0; // default to 0 (dark)
  });

  // Apply the class to <html> synchronously before paint
  useLayoutEffect(() => {
    const root = document.documentElement;
    // Remove all theme classes (you may have more than 3 now)
    themes.forEach((t) => root.classList.remove(t));
    // Add the current theme class
    const current = themes[themeIndex];
    root.classList.add(current);
    // Save to localStorage
    localStorage.setItem('portfolio-theme', current);
  }, [themeIndex]);

  const cycleTheme = () => {
    setThemeIndex((prev) => (prev + 1) % themes.length);
  };

  return (
    <ThemeContext.Provider value={{ themeIndex, cycleTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);