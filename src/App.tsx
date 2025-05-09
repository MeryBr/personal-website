import React, { useState, useEffect, useRef } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Motivation from './components/Motivation';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WaveBackground from './components/WaveBackground';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<
    'home' | 'trayectoria' | 'proyectos' | 'motivacion' | 'contacto'
  >('home');

  const [animationKey, setAnimationKey] = useState(0);
  const scrollLockRef = useRef(false);

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleSectionChange = (
    section: typeof activeSection,
    forceAnimate = false
  ) => {
    scrollLockRef.current = true;
    setActiveSection(section);
    if (forceAnimate) {
      setAnimationKey((prev) => prev + 1);
    }

    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
      scrollLockRef.current = false;
    }, 500);
  };

  return (
    <div
      className={`min-h-screen text-white transition-colors duration-300 ${darkMode
        ? 'bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-lime-300'
        : 'bg-gradient-to-br from-indigo-600 via-cyan-500 to-teal-400 text-white'
        }`}
    >
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <WaveBackground />
      </div>

      <Navbar
        activeSection={activeSection}
        setActiveSection={(section) => handleSectionChange(section, true)}
        scrollLockRef={scrollLockRef}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="App">
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

      <Footer />
    </div>
  );
};

export default App;
