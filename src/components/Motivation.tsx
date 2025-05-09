import React, { useEffect, useState } from 'react';
import './Motivation.css';
import { useTranslation } from 'react-i18next';

const TypewriterTitle: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const { t } = useTranslation();
  const titleText = t('motivacionTitulo');

  const [visibleTitle, setVisibleTitle] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleTitle(prev => {
        if (prev >= titleText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setCursorVisible(false);
            onComplete();
          }, 2500);
        }
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(interval);
  }, [onComplete, titleText]);

  return (
    <h2 className="typewriter-name">
      {titleText.slice(0, visibleTitle)}
      {cursorVisible && <span className="cursor" />}
    </h2>
  );
};

const TypewriterText: React.FC = () => {
  const { t } = useTranslation();
  const fullText = t('motivacionTexto');
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleChars(prev => {
        if (prev >= fullText.length) {
          clearInterval(interval);
        }
        return prev + 1;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <p className="typewriter-text">
      {fullText.slice(0, visibleChars)}
      {visibleChars < fullText.length && <span className="cursor" />}
    </p>
  );
};

const Motivation: React.FC = () => {
  const [textVisible, setTextVisible] = useState(false);

  return (
    <section className="motivation-section">
      <div className="motivation-textbox">
        <TypewriterTitle onComplete={() => setTextVisible(true)} />
        {textVisible && <TypewriterText />}
      </div>
    </section>
  );
};

export default Motivation;
