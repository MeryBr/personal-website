import React from 'react';
import './Contact.css';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FlowingWave from './FlowingWave';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-section">
      <h2 className="section-title">{t('contacto')}</h2>
      <p className="contact-description">
        {t('contactoTexto').split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>

      <div className="contact-item">
        <Mail size={20} />
        <a href="mailto:maria.bratash.dev@gmail.com">
          maria.bratash.dev@gmail.com
        </a>
      </div>

      <div className="contact-item">
        <Linkedin size={20} />
        <a
          href="https://www.linkedin.com/in/bratash-maria/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>

      <div className="contact-item">
        <Github size={20} />
        <a
          href="https://github.com/MeryBr"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>

      <div className="w-full overflow-hidden mt-8" style={{ zIndex: 0, position: 'relative' }}>
        <FlowingWave />
      </div>
      <footer>
        <p>&copy; Mery – 2025</p>
      </footer>
    </section>
  );
};

export default Contact;