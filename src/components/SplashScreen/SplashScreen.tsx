import { useEffect, useState } from 'react';
import './SplashScreen.css';

interface SplashScreenProps {
  onComplete: () => void;
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(1);
  const [isSliding, setIsSliding] = useState(false);

  useEffect(() => {
    const duration = 2500; // Total loading time in ms
    const interval = 25; // Update interval in ms
    const increment = (100 - 1) / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          // Start slide animation after reaching 100%
          setTimeout(() => {
            setIsSliding(true);
            // Notify parent after slide animation completes
            setTimeout(onComplete, 800);
          }, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`splash-screen ${isSliding ? 'slide-up' : ''}`}>
      <div className="splash-content">
        <div className="splash-logo">
          <span className="splash-icon">⚡</span>
        </div>
        
        <div className="splash-loader">
          <div className="splash-progress-bar">
            <div 
              className="splash-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="splash-percentage">
            {Math.round(progress)}%
          </div>
        </div>

        <p className="splash-text">Loading experience...</p>
      </div>
    </div>
  );
}
