import { useEffect, useState, type CSSProperties } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  name: string;
  onComplete: () => void;
}

type SplashLetterStyle = CSSProperties & {
  '--start-x': string;
  '--start-y': string;
  '--start-rotation': string;
  '--letter-delay': string;
};

interface SplashLetter {
  character: string;
  startX: string;
  startY: string;
  rotation: string;
  delay: string;
}

function createLetterOrigins(name: string): SplashLetter[] {
  return Array.from(name, (character) => ({
    character,
    startX: `${Math.round((Math.random() * 2 - 1) * 90)}vw`,
    startY: `${Math.round((Math.random() * 2 - 1) * 80)}vh`,
    rotation: `${Math.round((Math.random() * 2 - 1) * 50)}deg`,
    delay: `${Math.round(Math.random() * 450)}ms`,
  }));
}

export function SplashScreen({ name, onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(1);
  const [isSliding, setIsSliding] = useState(false);
  const [isNameAssembled, setIsNameAssembled] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const [letters, setLetters] = useState<SplashLetter[]>(() => Array.from(name, (character) => ({
    character,
    startX: '0',
    startY: '0',
    rotation: '0',
    delay: '0ms',
  })));

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const increment = (100 - 1) / (duration / interval);
    let completionTimer: ReturnType<typeof setTimeout> | undefined;
    let slideTimer: ReturnType<typeof setTimeout> | undefined;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          completionTimer = setTimeout(() => {
            setIsSliding(true);
            slideTimer = setTimeout(onComplete, 600);
          }, 120);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => {
      clearInterval(timer);
      if (completionTimer) clearTimeout(completionTimer);
      if (slideTimer) clearTimeout(slideTimer);
    };
  }, [onComplete]);

  useEffect(() => {
    let assembleFrame = 0;
    const originFrame = window.requestAnimationFrame(() => {
      setLetters(createLetterOrigins(name));
      assembleFrame = window.requestAnimationFrame(() => setIsNameAssembled(true));
    });

    return () => {
      window.cancelAnimationFrame(originFrame);
      window.cancelAnimationFrame(assembleFrame);
    };
  }, [name]);

  useEffect(() => {
    const timer = setTimeout(() => setStatusIndex(1), 750);
    return () => clearTimeout(timer);
  }, []);

  const statusText = statusIndex === 0 ? 'Fetching data' : 'Recovering your profile';

  return (
    <div
      className={`splash-screen ${isSliding ? 'slide-up' : ''}`}
      role="status"
      aria-label={`${statusText} for ${name}`}
    >
      <div className="splash-content">
        <div className="splash-identity">
          <h1 className={`splash-name ${isNameAssembled ? 'is-assembled' : ''}`} aria-label={name}>
            <span className="splash-name-letters" aria-hidden="true">
              {letters.map(({ character, startX, startY, rotation, delay }, index) => {
                const style: SplashLetterStyle = {
                  '--start-x': startX,
                  '--start-y': startY,
                  '--start-rotation': rotation,
                  '--letter-delay': delay,
                };
                return (
                  <span
                    className={character === ' ' ? 'splash-name-space' : 'splash-name-letter'}
                    key={`${character}-${index}`}
                    style={style}
                  >
                    {character === ' ' ? '\u00a0' : character}
                  </span>
                );
              })}
            </span>
            <span className="splash-name-caret" aria-hidden="true" />
          </h1>
          <p className="splash-tagline">Flutter Developer <span>·</span> Nepal</p>
        </div>

        <div className="splash-loader">
          <div className="splash-status-row">
            <span className="splash-status-dot" />
            <span key={statusIndex} className="splash-text">{statusText}</span>
            <span className="splash-percentage">{Math.round(progress)}%</span>
          </div>
          <div
            className="splash-progress-bar"
            role="progressbar"
            aria-label={statusText}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
          >
            <div
              className="splash-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <p className="splash-footer">DESIGNED &amp; BUILT WITH CARE</p>
      </div>
    </div>
  );
}
