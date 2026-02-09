/**
 * Animation Types and Configurations
 * TypeScript definitions for animation timing and scroll logic
 */

// Animation easing functions
export type EasingFunction = 
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | 'cubic-bezier';

// Animation direction
export type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade';

// Scroll animation configuration
export interface ScrollAnimationConfig {
  threshold: number; // 0-1, when animation triggers
  duration: number; // milliseconds
  delay: number; // milliseconds
  easing: EasingFunction;
  direction: AnimationDirection;
  distance: number; // pixels for slide animations
}

// Stagger animation configuration
export interface StaggerConfig {
  staggerDelay: number; // delay between each item
  baseDelay: number; // initial delay before first item
  duration: number;
  easing: EasingFunction;
}

// Hover animation configuration
export interface HoverAnimationConfig {
  scale: number;
  opacity: number;
  duration: number;
  glowColor?: string;
  glowSpread?: number;
}

// Animation state
export interface AnimationState {
  isVisible: boolean;
  hasAnimated: boolean;
  progress: number; // 0-1
}

// Default animation presets
export const ANIMATION_PRESETS = {
  fadeUp: {
    threshold: 0.1,
    duration: 600,
    delay: 0,
    easing: 'ease-out' as EasingFunction,
    direction: 'up' as AnimationDirection,
    distance: 30,
  },
  fadeIn: {
    threshold: 0.1,
    duration: 500,
    delay: 0,
    easing: 'ease-out' as EasingFunction,
    direction: 'fade' as AnimationDirection,
    distance: 0,
  },
  staggerDefault: {
    staggerDelay: 100,
    baseDelay: 200,
    duration: 500,
    easing: 'ease-out' as EasingFunction,
  },
  hoverButton: {
    scale: 1.02,
    opacity: 1,
    duration: 200,
    glowColor: 'rgba(255, 255, 255, 0.1)',
    glowSpread: 20,
  },
  hoverIcon: {
    scale: 1.1,
    opacity: 0.8,
    duration: 150,
  },
} as const;

// Timing utility functions
export const getStaggerDelay = (index: number, config: StaggerConfig): number => {
  return config.baseDelay + (index * config.staggerDelay);
};

export const getCubicBezier = (type: 'smooth' | 'bounce' | 'snap'): string => {
  const beziers = {
    smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    snap: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };
  return beziers[type];
};
