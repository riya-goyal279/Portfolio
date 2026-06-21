export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Awards', href: '#awards' },
];

export const services = [
  {
    icon: '🎨',
    title: 'Figma to Code',
    description:
      'I convert Figma designs into clean, responsive, and pixel-perfect frontend interfaces using React, JavaScript, SCSS, and modern frontend tools.',
  },
  {
    icon: '⚛️',
    title: 'React UI Development',
    description:
      'I build interactive and user-friendly React interfaces, including pages, sections, dashboards, sliders, filters, modals, and dynamic frontend features.',
  },
  {
    icon: '🧩',
    title: 'Reusable UI Components',
    description:
      'I create scalable and reusable UI components that help maintain design consistency and make future development faster and easier.',
  },
  {
    icon: '📱',
    title: 'Responsive Web Development',
    description:
      'I develop websites and interfaces that work smoothly across desktop, tablet, and mobile devices with clean layouts and optimized user experience.',
  },
  {
    icon: '📝',
    title: 'Form Development',
    description:
      'I build user-friendly forms with proper validation, clean layouts, error handling, and smooth interactions for better user experience.',
  },
  {
    icon: '🛠️',
    title: 'Frontend Fixes & Improvements',
    description:
      'I fix UI bugs, responsive issues, layout problems, styling inconsistencies, and improve existing frontend sections for better usability and performance.',
  },
];

export const featuredWork = [
  {
    id: 1,
    title: 'Nova Commerce',
    category: 'E-Commerce',
    description: 'Headless storefront with real-time inventory and immersive product storytelling.',
    tech: ['React', 'Next.js', 'GraphQL'],
    color: '#E2E8EC',
    year: '2025',
  },
  {
    id: 2,
    title: 'Pulse Analytics',
    category: 'SaaS Dashboard',
    description: 'Real-time data visualization platform with custom charting and live collaboration.',
    tech: ['TypeScript', 'D3.js', 'Vite'],
    color: '#E8E6E1',
    year: '2025',
  },
  {
    id: 3,
    title: 'Lumina Studio',
    category: 'Creative Agency',
    description: 'Award-winning portfolio site with WebGL transitions and scroll-driven narratives.',
    tech: ['React', 'Three.js', 'GSAP'],
    color: '#E5EBE8',
    year: '2024',
  },
  {
    id: 4,
    title: 'Flow Finance',
    category: 'FinTech',
    description: 'Secure banking dashboard with biometric auth and animated financial insights.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    color: '#EAE6ED',
    year: '2024',
  },
];

export const caseStudies = [
  {
    id: 1,
    client: 'Nova Commerce',
    tagline: '40% faster checkout, 2× conversion lift',
    challenge:
      'Legacy monolith caused 4.2s load times and a 68% cart abandonment rate on mobile.',
    solution:
      'Rebuilt the storefront as a headless React app with edge caching, optimistic UI, and a streamlined 3-step checkout.',
    results: [
      { metric: '40%', label: 'Faster checkout' },
      { metric: '2×', label: 'Conversion rate' },
      { metric: '98', label: 'Lighthouse score' },
    ],
  },
  {
    id: 2,
    client: 'Pulse Analytics',
    tagline: 'From prototype to 10K daily users in 8 weeks',
    challenge:
      'Startup needed a production-ready dashboard before their Series A demo day.',
    solution:
      'Shipped a modular component architecture with virtualized tables, WebSocket live data, and role-based views.',
    results: [
      { metric: '8 wks', label: 'Time to launch' },
      { metric: '10K+', label: 'Daily active users' },
      { metric: '60fps', label: 'Chart rendering' },
    ],
  },
];

export const skillCategories = [
  {
    name: 'Frontend Core',
    description: 'Core technologies I use to build clean and scalable interfaces.',
    skills: [
      'HTML5',
      'CSS3',
      'SCSS',
      'JavaScript',
      'React',
      'Redux Toolkit',
      'jQuery',
      'Bootstrap',
      'Tailwind CSS',
    ],
  },
  {
    name: 'UI Development',
    description: 'Frontend practices focused on responsive, accessible, and performance-friendly UI.',
    skills: [
      'Responsive Design',
      'Reusable Components',
      'Cross-Browser Compatibility',
      'Accessibility',
      'SEO',
      'Performance Optimization',
    ],
  },
  {
    name: 'Frontend Features',
    description: 'Business-ready features like forms, maps, payments, real-time UI, and AI integrations.',
    skills: [
      'API Integration',
      'Form Development',
      'OTP Workflows',
      'Payment Gateway Integration',
      'Map Integration',
      'Video Player Integration',
      'Real-Time Data Rendering',
      'LLM API Integration',
    ],
  },
  {
    name: 'Build Tools & Workflow',
    description: 'Modern tooling for faster development, optimized builds, and smooth project setup.',
    skills: [
      'Webpack',
      'Vite',
      'Parcel',
      'Babel',
      'npm',
    ],
  },
  {
    name: 'Version Control',
    description: 'Tools I use to manage code, collaborate, and maintain project versions.',
    skills: [
      'Git',
      'GitHub',
      'Bitbucket',
    ],
  },
  {
    name: 'Other Libraries & Integrations',
    description: 'Libraries and integrations used for animations, media, maps, validation, and interactions.',
    skills: [
      'GSAP',
      'ScrollTrigger',
      'Three.js',
      'Swiper.js',
      'Plyr.js',
      'Zod',
      'Google Maps API',
      'PayU Integration',
    ],
  },
];

export const clientValues = [
  {
    title: "Clear communication",
    text: "I keep project scope, updates, and feedback simple so the work moves smoothly.",
  },
  {
    title: "Clean execution",
    text: "I focus on building polished, responsive interfaces that match the design and feel reliable.",
  },
  {
    title: "Maintainable delivery",
    text: "I write structured frontend code that is easier to update, reuse, and scale later.",
  },
];

export const experiences = [
  {
    period: "Present",
    role: "Freelance Frontend Developer",
    company: "Independent",
    location: "Remote",
    desc: "Helping startups, agencies, and businesses build responsive websites, reusable UI components, frontend features, integrations, and polished client-ready web experiences.",
  },
  {
    period: "April 2025 – Feb 2026",
    role: "Software Engineer L2",
    company: "Axeno Consulting",
    location: "Noida, UP",
    desc: "Built AI-powered frontend experiences with LLM APIs, real-time streaming responses, speech input, TTS, and incremental text rendering, while improving frontend architecture through modular components and shared utilities.",
  },
  {
    period: "Aug 2023 – Mar 2025",
    role: "Software Engineer L1",
    company: "Axeno Consulting",
    location: "Noida, UP",
    desc: "Developed reusable API-driven UI components, schema-validated forms, OTP workflows, video integrations, payment flows, and accessible responsive interfaces focused on usability, performance, and maintainability.",
  },
  {
    period: "Jan 2023 – Jul 2023",
    role: "Software Intern",
    company: "Axeno Consulting",
    location: "Noida, UP",
    desc: "Worked on real-world frontend assignments using HTML, CSS, JavaScript, Webpack, Swiper.js, GSAP, ScrollTrigger, and Three.js while contributing to internal website improvements.",
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
  { label: 'Dribbble', href: 'https://dribbble.com', icon: 'dribbble' },
];
