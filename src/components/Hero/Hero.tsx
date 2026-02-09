import { useEffect, useState } from 'react';
import type { HeroContent } from '../../types';
import './Hero.css';

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className={`hero-image-wrapper ${isLoaded ? 'loaded' : ''}`}>
          <div className="hero-image-glow" />
          <img
            src={content.profileImage}
            alt={`${content.name} profile`}
            className="hero-image"
            onError={(e) => {
              // Fallback to initial
              const target = e.currentTarget;
              target.style.display = 'none';
              target.parentElement?.classList.add('fallback');
            }}
          />
          <div className="hero-image-fallback">
            {content.name.charAt(0)}
          </div>
        </div>

        <div className="hero-content">
          <h1 className={`hero-title ${isLoaded ? 'loaded' : ''}`}>
            <span className="hero-greeting" style={{ animationDelay: '0.1s' }}>
              Hi, I'm{' '}
            </span>
            <span className="hero-name" style={{ animationDelay: '0.2s' }}>
              {content.name}
            </span>
            <span className="hero-comma" style={{ animationDelay: '0.3s' }}>
              ,
            </span>
            <br />
            <span className="hero-role" style={{ animationDelay: '0.4s' }}>
              {content.title}
            </span>
          </h1>

          <p className={`hero-description ${isLoaded ? 'loaded' : ''}`}>
            {content.description}
          </p>

          <div className={`hero-cta-wrapper ${isLoaded ? 'loaded' : ''}`}>
            <a href={content.ctaHref} className="hero-cta">
              <span className="hero-cta-text">{content.ctaText}</span>
              <span className="hero-cta-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
