import { useState, useEffect, useRef, useCallback } from 'react';
import type { ScrollAnimationConfig, AnimationState, StaggerConfig } from '../types';
import { ANIMATION_PRESETS, getStaggerDelay } from '../types';

/**
 * Hook for scroll-triggered animations
 * Uses Intersection Observer for efficient scroll detection
 */
export function useScrollAnimation(
  config: Partial<ScrollAnimationConfig> = {}
): [React.RefObject<HTMLDivElement | null>, AnimationState] {
  const elementRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<AnimationState>({
    isVisible: false,
    hasAnimated: false,
    progress: 0,
  });

  const fullConfig = { ...ANIMATION_PRESETS.fadeUp, ...config };

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !state.hasAnimated) {
          setState({
            isVisible: true,
            hasAnimated: true,
            progress: 1,
          });
        }
      },
      {
        threshold: fullConfig.threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [fullConfig.threshold, state.hasAnimated]);

  return [elementRef, state];
}

/**
 * Hook for staggered children animations
 */
export function useStaggerAnimation(
  itemCount: number,
  config: Partial<StaggerConfig> = {}
): { delays: number[]; triggerAnimation: () => void; isTriggered: boolean } {
  const [isTriggered, setIsTriggered] = useState(false);
  const fullConfig = { ...ANIMATION_PRESETS.staggerDefault, ...config };

  const delays = Array.from({ length: itemCount }, (_, index) =>
    getStaggerDelay(index, fullConfig)
  );

  const triggerAnimation = useCallback(() => {
    setIsTriggered(true);
  }, []);

  return { delays, triggerAnimation, isTriggered };
}

/**
 * Hook for smooth scroll progress tracking
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(1, Math.max(0, scrollProgress)));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}

/**
 * Hook for navbar visibility on scroll
 */
export function useNavbarVisibility(): { isVisible: boolean; isAtTop: boolean } {
  const [isVisible, setIsVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsAtTop(currentScrollY < 50);
      setIsVisible(currentScrollY < lastScrollY.current || currentScrollY < 100);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { isVisible, isAtTop };
}

/**
 * Hook for element entrance animation on mount
 */
export function useEntranceAnimation(delay: number = 0): {
  ref: React.RefObject<HTMLDivElement | null>;
  style: React.CSSProperties;
} {
  const ref = useRef<HTMLDivElement>(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasEntered(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const style: React.CSSProperties = {
    opacity: hasEntered ? 1 : 0,
    transform: hasEntered ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms`,
  };

  return { ref, style };
}

/**
 * Hook for parallax scroll effect
 */
export function useParallax(speed: number = 0.5): React.RefObject<HTMLDivElement | null> {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollY = window.scrollY;
        ref.current.style.transform = `translateY(${scrollY * speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
}
