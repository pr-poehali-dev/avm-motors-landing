import { useState, useEffect, useCallback } from "react";
import Icon from "@/components/ui/icon";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      root.classList.add('dark');
      setIsDark(true);
    } else {
      root.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const root = document.documentElement;
    
    setIsDark(prev => {
      const newIsDark = !prev;
      if (newIsDark) {
        root.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        root.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newIsDark;
    });
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full bg-header-accent/10 flex items-center justify-center hover:bg-header-accent/20 transition-colors"
      aria-label="Переключить тему"
    >
      {isDark ? (
        <Icon name="Sun" size={18} className="text-header-accent" />
      ) : (
        <Icon name="Moon" size={18} className="text-header-accent" />
      )}
    </button>
  );
};

export default ThemeToggle;