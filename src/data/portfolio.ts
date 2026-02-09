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
    roles: ['Flutter Developer', 'UI Engineer', 'Mobile Architect'],
    description:
      'I craft beautiful, performant mobile experiences with Flutter and TypeScript. Passionate about pixel-perfect UI, smooth animations, and clean architecture.',
    profileImage: profileImage,
    ctaText: 'Get in touch',
    ctaHref: 'mailto:babindangol217@gmail.com',
  },

  navigation: [
    { id: 'about', label: 'About', href: '#about' },
    { id: 'blog', label: 'Blog', href: '#blog' },
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
    // {
    //   platform: 'dribbble',
    //   url: 'https://dribbble.com/alexchen',
    //   ariaLabel: 'View Dribbble portfolio',
    // },
    // {
    //   platform: 'behance',
    //   url: 'https://behance.net/alexchen',
    //   ariaLabel: 'View Behance portfolio',
    // },
  ],

  projects: [
    {
      id: 'fintech-app',
      title: 'FinFlow - Banking App',
      description:
        'A comprehensive banking application built with Flutter, featuring real-time transactions, biometric authentication, and beautiful data visualizations.',
      thumbnail: '/projects/finflow.jpg',
      tags: ['Flutter', 'Dart', 'Firebase', 'Riverpod'],
      liveUrl: 'https://finflow.app',
      sourceUrl: 'https://github.com/alexchen/finflow',
      featured: true,
      year: 2025,
    },
    {
      id: 'health-tracker',
      title: 'VitalSync - Health Tracker',
      description:
        'Cross-platform health monitoring app with wearable device integration, AI-powered insights, and adaptive UI themes.',
      thumbnail: '/projects/vitalsync.jpg',
      tags: ['Flutter', 'TypeScript', 'HealthKit', 'ML'],
      liveUrl: 'https://vitalsync.io',
      featured: true,
      year: 2025,
    },
    {
      id: 'ecommerce-app',
      title: 'Luxe Store',
      description:
        'Premium e-commerce experience with smooth animations, AR product preview, and seamless checkout flow.',
      thumbnail: '/projects/luxe.jpg',
      tags: ['Flutter', 'Node.js', 'Stripe', 'ARCore'],
      featured: false,
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
      id: 'senior-flutter',
      company: 'Nomad Studio',
      role: 'Senior Flutter Developer',
      startDate: '2023-01',
      current: true,
      description:
        'Leading mobile development for fintech clients across Southeast Asia. Building production apps with clean architecture and CI/CD pipelines.',
      achievements: [
        'Led development of 3 fintech applications',
        'Established clean architecture standards',
        'Implemented CI/CD pipelines for automated deployments',
      ],
      technologies: ['Flutter', 'Dart', 'Firebase', 'GraphQL'],
    },
    {
      id: 'freelance',
      company: 'Self-employed',
      role: 'Freelance Developer & Designer',
      startDate: '2020-01',
      endDate: '2023-01',
      current: false,
      description:
        'Delivered 15+ cross-platform apps for startups and agencies. Specialised in pixel-perfect UI and animation-rich experiences.',
      achievements: [
        'Delivered 15+ cross-platform applications',
        'Worked with clients across 8 countries',
        'Specialized in animation-rich mobile experiences',
      ],
      technologies: ['Flutter', 'React', 'TypeScript', 'Figma'],
    },
    {
      id: 'frontend-engineer',
      company: 'PixelCraft Agency',
      role: 'Frontend Engineer',
      startDate: '2018-01',
      endDate: '2020-01',
      current: false,
      description:
        'Built responsive web apps with React and TypeScript. Collaborated closely with designers to ship polished, accessible interfaces.',
      achievements: [
        'Built 20+ responsive web applications',
        'Improved accessibility scores by 40%',
        'Collaborated with design team on component library',
      ],
      technologies: ['React', 'TypeScript', 'CSS', 'Accessibility'],
    },
    {
      id: 'junior-dev',
      company: 'CodeBase Inc.',
      role: 'Junior Developer',
      startDate: '2016-01',
      endDate: '2018-01',
      current: false,
      description:
        'Started career building internal tools and dashboards. Gained deep experience with JavaScript, REST APIs, and agile workflows.',
      achievements: [
        'Built internal dashboard tools',
        'Learned agile development workflows',
        'Contributed to 5 production projects',
      ],
      technologies: ['JavaScript', 'REST APIs', 'HTML/CSS', 'Git'],
    },
  ],
};

export default portfolioData;
