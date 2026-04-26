"use client";
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggle = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  if (!mounted) return null;

  return (
    <motion.button 
      onClick={toggle}
      aria-label="Toggle dark mode"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{ 
        position: 'fixed', 
        top: '24px', 
        right: '24px', 
        zIndex: 1000, 
        padding: '12px', 
        borderRadius: '50%', 
        background: 'var(--card-bg)', 
        border: '1px solid var(--card-border)', 
        boxShadow: 'var(--card-shadow)',
        backdropFilter: 'blur(10px)',
        cursor: 'pointer', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      {isDark ? <Sun color="var(--accent)" size={20} /> : <Moon color="var(--primary)" size={20} />}
    </motion.button>
  );
}
