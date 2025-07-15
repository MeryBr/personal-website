import React, { useState, useEffect, useRef } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Motivation from './components/Motivation';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'home' | 'trayectoria' | 'proyectos' | 'motivacion' | 'contacto'>('home');
  const [animationKey, setAnimationKey] = useState(0);
  const scrollLockRef = useRef(false);

  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleSectionChange = (section: typeof activeSection, forceAnimate = false) => {
    scrollLockRef.current = true;
    setActiveSection(section);
    if (forceAnimate) setAnimationKey((prev) => prev + 1);
    const target = document.getElementById(section);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => { scrollLockRef.current = false; }, 500);
  };

  return (
    <div
      className={`relative min-h-screen transition-colors duration-500 ${darkMode
        ? 'bg-gradient-to-br from-[#0f0f2b] via-[#1c003b] to-[#000000] text-[#c3b8ff]'
        : 'bg-[radial-gradient(circle_at_top_left,_#FAF8F5,_#E6ECF0)] text-[#2C2C2C]'
        }`}
    >
      <Navbar
        activeSection={activeSection}
        setActiveSection={(section) => handleSectionChange(section, true)}
        scrollLockRef={scrollLockRef}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <section id="home" key={activeSection === 'home' ? animationKey : undefined}>
          <Header />
        </section>
        <section id="trayectoria" key={activeSection === 'trayectoria' ? animationKey : undefined}>
          <Timeline />
        </section>
        <section id="proyectos" key={activeSection === 'proyectos' ? animationKey : undefined}>
          <Projects />
        </section>
        <section id="motivacion" key={activeSection === 'motivacion' ? animationKey : undefined}>
          <Motivation />
        </section>
        <section id="contacto" key={activeSection === 'contacto' ? animationKey : undefined}>
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
