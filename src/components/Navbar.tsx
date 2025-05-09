import React, { useEffect } from 'react'
import './Navbar.css'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  activeSection: 'home' | 'trayectoria' | 'proyectos' | 'motivacion' | 'contacto'
  setActiveSection: (section: NavbarProps['activeSection']) => void
  scrollLockRef: React.MutableRefObject<boolean>
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  setActiveSection,
  scrollLockRef,
  darkMode,
  setDarkMode,
}) => {
  const { t, i18n } = useTranslation()

  const sectionIds: NavbarProps['activeSection'][] = [
    'home',
    'trayectoria',
    'proyectos',
    'motivacion',
    'contacto',
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (scrollLockRef.current) return

      const sections = sectionIds.map((id) => {
        const el = document.getElementById(id)
        if (!el) return { id, top: Number.POSITIVE_INFINITY }
        const rect = el.getBoundingClientRect()
        return { id, top: Math.abs(rect.top) }
      })

      const closest = sections.reduce((prev, curr) =>
        curr.top < prev.top ? curr : prev
      )

      if (closest.id !== activeSection) {
        setActiveSection(closest.id)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [activeSection, setActiveSection, scrollLockRef])

  const handleClick = (id: NavbarProps['activeSection']) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="language-theme-group">
          <div className="language-switch">
            <button onClick={() => i18n.changeLanguage('es')} title="Español">🇪🇸</button>
            <button onClick={() => i18n.changeLanguage('en')} title="English">🇬🇧</button>
            <button onClick={() => i18n.changeLanguage('fr')} title="Français">🇫🇷</button>
          </div>
          <div className="theme-switch">
            <button onClick={() => setDarkMode(prev => !prev)}>
              {darkMode ? '🌞' : '🌙'}
            </button>
          </div>
        </div>
      </div>

      <ul className="navbar-links">
        {sectionIds.map((id) => (
          <li key={id}>
            <button
              onClick={() => handleClick(id)}
              className={activeSection === id ? 'active' : ''}
            >
              {t(id)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
