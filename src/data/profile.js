// Central content store for the portfolio.
// Edit this file to update the site content — no component changes needed.

export const profile = {
  name: 'Tusher Mondal',
  firstName: 'Tusher',
  lastName: 'Mondal',
  role: 'Software Developer',
  tagline:
    'MCA graduate from Jadavpur University, passionate about full-stack development, algorithms and building things that feel effortless.',
  location: 'Duttapukur, North 24 Parganas, West Bengal, India',
  email: 'tusher9073mondal@outlook.com',
  phone: '+91 91230 90573',
  avatar: '/profile.jpg',
  avatarAlt: '/yelan1.png',
  resumeNote:
    'Software Developer with a Master of Computer Applications (MCA) from Jadavpur University and a B.Sc (Hons) in Computer Science. Experienced in full-stack development across Python, JavaScript and Rust, with a focus on clean, lightweight and practical software.',
  socials: [
    {
      label: 'GitHub',
      handle: 'Hurley2017',
      url: 'https://github.com/Hurley2017',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      handle: 'in/tusher-mondal-609263168',
      url: 'https://www.linkedin.com/in/tusher-mondal-609263168/',
      icon: 'linkedin',
    },
    {
      label: 'LeetCode',
      handle: 'Hurley2017',
      url: 'https://leetcode.com/Hurley2017/',
      icon: 'code',
    },
  ],
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const experience = [
  {
    role: 'Software Developer Intern',
    company: 'Phoenix India Research & Development Group',
    companyUrl: 'https://www.phoenixindiabiogas.com/',
    period: 'May 2022 — Oct 2022',
    summary:
      'Kicked off my professional career in software development at a research & development group, learning industry workflows, code standards and shipping real software in a team environment.',
    highlights: [
      'Worked on full-stack development tasks within a professional R&D team',
      'Learned office-to-production software development practices',
      'Gained hands-on exposure to the software development lifecycle',
    ],
    tech: ['Python', 'JavaScript', 'Flask', 'Git'],
  },
]

export const education = [
  {
    school: 'Jadavpur University',
    url: 'http://www.jaduniv.edu.in/',
    degree: 'Master of Computer Applications (MCA)',
    period: '2022 — 2024',
    note: 'Advanced coursework in computer science and application development.',
  },
  {
    school: 'Acharya Prafulla Chandra College',
    url: 'https://apccollege.ac.in/',
    degree: 'B.Sc (Hons) — Computer Science, West Bengal State University',
    period: '2019 — 2022',
    note: 'SGPA 9.43',
  },
  {
    school: 'Nebadhai High School',
    url: 'https://wbchse.nic.in/',
    degree: 'Higher Secondary (WBCHSE) — Science',
    period: '2016 — 2019',
    note: 'Secured 80%',
  },
  {
    school: 'Duttapukur Adarsha Vidyapith',
    url: 'https://wbbse.wb.gov.in/',
    degree: 'Secondary (WBBSE)',
    period: '2011 — 2016',
    note: 'Secured 75%',
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'C++', 'Rust', 'R', 'SQL', 'JSP'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Flask', 'Django', 'Express', 'Vite'],
  },
  {
    title: 'Databases & Data',
    skills: ['MongoDB', 'Redis', 'MySQL', 'PostgreSQL', 'Pandas'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Vercel', 'Linux', 'Docker', 'npm', 'REST APIs'],
  },
  {
    title: 'Interests',
    skills: ['Full-Stack Development', 'Algorithms & DSA', 'Systems Programming', 'Music & Photography'],
  },
]

export const projects = [
  {
    name: 'Writer',
    description:
      'A local AI agent that writes stories. Experiment in prompt-driven narrative generation running entirely on-device.',
    tech: ['Python', 'AI / LLM'],
    github: 'https://github.com/Hurley2017/Writer',
    demo: null,
    featured: true,
  },
  {
    name: 'Piston-And-Sound',
    description:
      'Web interface that mimics physics-based sound of different types of engines — procedural audio from real engine physics.',
    tech: ['JavaScript', 'Web Audio'],
    github: 'https://github.com/Hurley2017/Piston-And-Sound',
    demo: null,
    featured: true,
  },
  {
    name: 'Rusty Radio',
    description:
      'An intentionally simple music player that consumes bare-minimum system resources. Old-school, limited-feature tech done right.',
    tech: ['Rust'],
    github: 'https://github.com/Hurley2017/Rusty_Radio',
    demo: null,
    featured: true,
  },
  {
    name: 'HandMouse',
    description:
      'Turns your hand gestures into mouse actions using just a webcam — computer vision meets everyday utility.',
    tech: ['Python', 'OpenCV', 'CV'],
    github: 'https://github.com/Hurley2017/HandMouse',
    demo: null,
    featured: true,
  },
  {
    name: 'AGG Web',
    description:
      'Attack Graph Generator — web interface for generating and visualising attack graphs. Built with Bitan Sarkar.',
    tech: ['Python', 'JavaScript', 'Graph'],
    github: 'https://github.com/Hurley2017/AGG_WEB',
    demo: 'https://attack-graph-generator.vercel.app',
    featured: true,
  },
  {
    name: 'Email Spam Classifier',
    description:
      'Machine-learning powered spam email classifier, built as the Celebal Technologies internship project.',
    tech: ['Python', 'ML', 'Scikit-learn'],
    github: 'https://github.com/Hurley2017/Email_Spam',
    demo: 'https://email-spam-tusher.vercel.app',
    featured: true,
  },
  {
    name: 'Socket Streaming',
    description:
      'Cross-platform peer-to-peer file sharing application built on sockets for fast, direct transfers.',
    tech: ['Python', 'Sockets', 'Networking'],
    github: 'https://github.com/Hurley2017/Socket_Streaming',
    demo: null,
    featured: false,
  },
  {
    name: 'ranbakure',
    description:
      'A polished marathon invitation site with a live deployment — design-forward web work.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Hurley2017/ranbakure',
    demo: 'https://www.ranbakure.com/',
    featured: false,
  },
]

export const interests = [
  'Coding & problem solving',
  'Puzzles & games',
  'Web development',
  'Databases',
  'Photography',
  'Music',
]
