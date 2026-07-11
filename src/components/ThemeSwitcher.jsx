import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { currentTheme, changeTheme, themes } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {themes.map((t) => (
        <button
          key={t.name}
          onClick={() => changeTheme(t.name)}
          title={t.label}
          className={`text-xl p-1 rounded-full transition-all ${
            currentTheme === t.name
              ? 'ring-2 ring-[var(--color-accent)] scale-110'
              : 'opacity-60 hover:opacity-100'
          }`}
        >
          {t.icon}
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher;