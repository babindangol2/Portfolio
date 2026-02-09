/**
 * Portfolio Data Models
 * Strongly typed interfaces for portfolio content
 */

// Social link platform types
export type SocialPlatform = 'github' | 'dribbble' | 'behance' | 'threads' | 'linkedin' | 'twitter';

// Navigation item interface
export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

// Social link interface
export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  ariaLabel: string;
}

// Project interface
export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
  featured: boolean;
  year: number;
}

// Blog post interface
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
  slug: string;
  coverImage?: string;
}

// Hero section content
export interface HeroContent {
  name: string;
  title: string;
  roles: string[];
  description: string;
  profileImage: string;
  ctaText: string;
  ctaHref: string;
}

// About section content
export interface AboutContent {
  headline: string;
  paragraphs: string[];
  skills: Skill[];
}

// Skill interface
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'mobile' | 'tools' | 'design';
  proficiency: number; // 0-100
}

// Resume/Experience interface
export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  achievements: string[];
  technologies: string[];
}

// Complete portfolio data interface
export interface PortfolioData {
  hero: HeroContent;
  navigation: NavItem[];
  socials: SocialLink[];
  projects: Project[];
  blog: BlogPost[];
  about: AboutContent;
  experience: Experience[];
}
