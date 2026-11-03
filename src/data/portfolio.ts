import type { PortfolioData } from '../types';
import profileImage from '../assets/professional_image.png';

/**
 * Portfolio Content Data
 * All portfolio content is centralized here for easy updates
 */

export const portfolioData: PortfolioData = {
  hero: {
    name: 'Babin Dangol',
    title: 'Flutter Developer',
    roles: ['Flutter Developer', 'Mobile Architect'],
    description:
      'I develop and maintain Android and iOS applications, from feature implementation and API integration to debugging and production improvements. My work focuses on solving technical problems, maintaining existing codebases, and improving application quality.',
    profileImage: profileImage,
    ctaText: 'Get in touch',
    ctaHref: 'mailto:babindangol217@gmail.com',
  },

  navigation: [
    { id: 'about', label: 'About', href: '#about' },
    // { id: 'blog', label: 'Blog', href: '#blog' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'resume', label: 'Resume', href: '#resume' },
  ],

  socials: [
    {
      platform: 'github',
      url: 'https://github.com/babindangol2',
      ariaLabel: 'View GitHub profile',
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/babin-dangol/',
      ariaLabel: 'View LinkedIn profile',
    },
    {
      platform: 'gmail',
      url: 'mailto:babindangol217s@gmail.com',
      ariaLabel: 'Send email',
    },
  ],

  projects: [
    {
      id: 'Ird-app',
      title: 'Hisaav - Invetory Management App',
      description:
        'A comprehensive inventory management solution for small businesses, featuring real-time stock tracking, sales analytics, and multi-user collaboration.`',
      thumbnail: '/projects/finflow.jpg',
      tags: ['Flutter', 'Dart', 'Firebase', 'Getx'],
      // liveUrl: 'https://finflow.app',
      // sourceUrl: 'https://github.com/alexchen/finflow',
      featured: true,
      year: 2023,
    },
    {
      id: 'dishhome-app',
      title: 'Dishhome',
      description:
        'A sleek, user-friendly app for managing your Dishhome TV subscription, with features like bill tracking, channel browsing, and support chat.',
      thumbnail: '/projects/vitalsync.jpg',
      tags: ['Flutter', ],
      liveUrl: 'https://vitalsync.io',
      featured: true,
      year: 2025,
    },
    {
      id: 'medical-app',
      title: 'MediPuzzel',
      description:
        'Medipuzzle is a game-based learning platform for Medical Education that makes learning online easier',
      thumbnail: '/projects/luxe.jpg',
      tags: ['Flutter','Dart','Firebase', 'Stripe'],
      featured: true,
      year: 2024,
    },
  ],

  blog: [
    {
      id: 'flutter-animations',
      title: 'Mastering Implicit Animations in Flutter',
      excerpt:
        'Deep dive into AnimatedContainer, AnimatedOpacity, and creating butter-smooth UI transitions.',
      publishedAt: '2026-01-15',
      readTime: 8,
      tags: ['Flutter', 'Animation', 'UI'],
      slug: 'mastering-implicit-animations-flutter',
    },
    {
      id: 'typescript-patterns',
      title: 'TypeScript Patterns for Scalable Apps',
      excerpt:
        'Essential TypeScript patterns that help maintain large codebases with confidence.',
      publishedAt: '2025-12-20',
      readTime: 12,
      tags: ['TypeScript', 'Architecture', 'Best Practices'],
      slug: 'typescript-patterns-scalable-apps',
    },
  ],

  about: {
    headline: 'Building digital experiences that matter',
    paragraphs: [
      "I'm a Flutter Developer based in Nepal, with 2+ years of experience crafting mobile applications.",
      'My focus is on creating interfaces that are not just functional, but delightful. I believe great software should feel as good as it works.',
      'When I\'m not coding, you\'ll find me exploring design systems, contributing to open source, or experimenting with new animation techniques.',
    ],
    skills: [
      { name: 'Flutter', category: 'mobile', proficiency: 95 },
      { name: 'Dart', category: 'mobile', proficiency: 95 },
      // { name: 'TypeScript', category: 'frontend', proficiency: 90 },
      // { name: 'React', category: 'frontend', proficiency: 85 },
      // { name: 'Node.js', category: 'backend', proficiency: 80 },
      { name: 'Firebase', category: 'backend', proficiency: 88 },
      { name: 'Figma', category: 'design', proficiency: 85 },
      { name: 'Git', category: 'tools', proficiency: 90 },
    ],
  },

  experience: [
    {
      id: 'ayata',
      company: 'Ayata',
      role: 'Mid-level Flutter Developer',
      startDate: '2024-01',
      current: true,
      description:
        'Developing Flutter applications including Zunun, Avyaas, DishHome, B&B PACS, iHRTrack, and Nepal Decor.',
      achievements: [
        'Built and maintained production Flutter applications across multiple products',
        'Implemented BLoC state management and Hive local storage',
        'Set up Firebase push notifications and CI/CD with GitHub Actions and Fastlane',
      ],
      technologies: ['Flutter', 'Dart', 'BLoC', 'Hive', 'Firebase', 'GitHub Actions', 'Fastlane'],
    },
    {
      id: 'axios',
      company: 'Axios',
      role: 'Junior Flutter Developer',
      startDate: '2022-07',
      endDate: '2024-01',
      current: false,
      description:
        'Spent approximately 1.5 years progressing from Intern to Junior Flutter Developer while contributing to Hissab Nivid and Bolpatra.',
      achievements: [
        'Progressed from Intern to Junior Flutter Developer',
        'Contributed to the Hissab Nivid and Bolpatra applications',
        'Built Flutter features with BLoC, Hive, and Firebase',
      ],
      technologies: ['Flutter', 'Dart', 'BLoC', 'Hive', 'Firebase'],
    },
  ],
};

export default portfolioData;
