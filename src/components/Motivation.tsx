import React, { useEffect, useState } from 'react';
import HandwrittenSlogan from './HandwrittenSlogan';
import { useTranslation } from 'react-i18next';
import './Motivation.css';

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
          setTimeout(() => onComplete(), 800);
          setTimeout(() => setCursorVisible(false), 2200);
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete, titleText]);

  return (
    <h2 className="typewriter-name">
      {titleText.slice(0, visibleTitle)}
      {cursorVisible && <span className="cursor" />}
    </h2>
  );
};

const TypewriterText: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  const { t } = useTranslation();
  const fullText = t('motivacionTexto');
  const [visibleChars, setVisibleChars] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleChars(prev => {
        if (prev >= fullText.length) {
          clearInterval(interval);
          if (onComplete) onComplete();
          return prev;
        }
        return prev + 1;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [fullText, onComplete]);

  return (
    <p className="typewriter-text">
      {fullText.slice(0, visibleChars)}
      {visibleChars < fullText.length && <span className="cursor" />}
    </p>
  );
};

const Motivation: React.FC = () => {
  const { t } = useTranslation();
  const [textVisible, setTextVisible] = useState(false);
  const [allTextComplete, setAllTextComplete] = useState(false);

  return (
    <section className="motivation-section">
      <div className="motivation-textbox">
        <TypewriterTitle onComplete={() => setTextVisible(true)} />
        {textVisible && (
          <TypewriterText onComplete={() => setAllTextComplete(true)} />
        )}

        {allTextComplete && (
          <div style={{ marginTop: '2rem', color: '#4400ff', textAlign: 'center' }}>
            <HandwrittenSlogan text={t('slogan')} delay={60} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Motivation;
