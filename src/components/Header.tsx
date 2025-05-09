import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import HandwrittenSlogan from './HandwrittenSlogan'
import './Header.css'


const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

function getRandomChar() {
  return letters[Math.floor(Math.random() * letters.length)]
}

const MatrixLetter = ({ targetChar, delay }: { targetChar: string; delay: number }) => {
  const [char, setChar] = useState(getRandomChar())
  const [final, setFinal] = useState(false)

  useEffect(() => {
    let interval: number
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setChar(getRandomChar())
      }, 70)
    }, delay * 1000)

    const fixDelay = setTimeout(() => {
      clearInterval(interval)
      setChar(targetChar)
      setFinal(true)
    }, delay * 1000 + 1200)

    return () => {
      clearTimeout(timeout)
      clearTimeout(fixDelay)
      clearInterval(interval)
    }
  }, [targetChar, delay])

  return (
    <span className="letter" style={{ opacity: final ? 1 : 0.8 }}>
      {targetChar === ' ' ? '\u00A0' : char}
    </span>
  )
}

const Header: React.FC = () => {
  const { t } = useTranslation()
  const introText = t('intro')

  return (
    <header className="hero">
      <div className="hero__content-with-photo">
        <img
          src="/AirBrush_20250503131434.png"
          alt="Perfil"
          className="hero-photo"
        />

        <div className="hero__content">
          <h1 className="hero-title">
            {'Maria Bratash'.split('').map((char, i) => (
              <MatrixLetter key={i} targetChar={char} delay={0.1 * i + 0.5} />
            ))}
          </h1>
          <HandwrittenSlogan text={t('slogan')} delay={60} />
          <div className="hero-subtext intro-text">
            {introText.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
