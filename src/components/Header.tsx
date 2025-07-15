import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

const Header: React.FC = () => {
  const { t } = useTranslation();
  const introText = t('intro');

  return (
    <header className="hero">
      <div className="hero__content-with-photo">
        <img
          src="/personal-website/NewPhoto2.png"
          alt="Perfil"
          className="hero-photo"
        />

        <div className="hero-text">
          <div className="hero__content">
            <h1 className="hero-title">
              <span className="font-montecarlo">Maria Bratash</span>
            </h1>
            <h2 className="hero-subtitle">Frontend Developer</h2>

            <div className="hero-subtext intro-text">
              {introText.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </header>
  );
};

export default Header;
