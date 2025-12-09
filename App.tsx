import React, { useState, useEffect } from 'react';
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import BentoGrid from './src/components/BentoGrid';
import WorkSection from './src/components/WorkSection';
import Pricing from './src/components/Pricing';
import Footer from './src/components/Footer';

const App: React.FC = () => {
  // Theme initialization
  const [isDark, setIsDark] = useState(true);

  // Check system preference or localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
    }
  }, []);

  // Update HTML class and localStorage
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/30 selection:text-blue-500">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <BentoGrid />
        <WorkSection />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;
