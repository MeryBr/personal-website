import React from 'react';
import './Contact.css';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
        <a
          href="mailto:maria.bratash.dev@gmail.com"
          aria-label="Correo electrónico de María Bratash"
        >
          maria.bratash.dev@gmail.com
        </a>
      </div>

      <div className="contact-item">
        <Linkedin size={20} />
        <a
          href="https://www.linkedin.com/in/bratash-maria/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de María Bratash"
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
          aria-label="GitHub de María Bratash"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
