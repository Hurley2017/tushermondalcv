// Central content store for the portfolio.
// Edit this file to update the site content — no component changes needed.

export const profile = {
  name: 'Tusher Mondal',
  firstName: 'Tusher',
  lastName: 'Mondal',
  role: 'Data Analyst at HSBC',
  tagline:
    'Data analyst by day, developer by passion. I turn messy data into decisions and build applications that solve real-world problems.',
  location: 'Bengaluru, Karnataka, India',
  email: 'tusher9073mondal@outlook.com',
  emailAlt: 'luciefer9062hurley@gmail.com',
  phone: '+91 91230 90573',
  website: 'https://www.tushermondal.ml/',
  avatar: '/profile.jpg',
  avatarAlt: '/yelan1.png',
  resumeNote:
    "I'm a Data Analyst at HSBC in Bengaluru, working with Excel, Power BI, TM1 and Alteryx for enterprise data analytics — and I love building applications that solve real-life problems. With an MCA from Jadavpur University and a B.Sc (Hons) in Computer Science, I sit at the intersection of analytics and engineering: crafting data-driven insights, automating workflows, and shipping full-stack apps in Python, JavaScript and Rust.",
  socials: [
    {
      label: 'GitHub',
      handle: 'Hurley2017',
      url: 'https://github.com/Hurley2017',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      handle: 'in/tusher-mondal',
      url: 'https://www.linkedin.com/in/tusher-mondal/',
      icon: 'linkedin',
    },
    {
      label: 'LeetCode',
      handle: 'Hurley2017',
      url: 'https://leetcode.com/Hurley2017/',
      icon: 'code',
    },
    {
      label: 'X / Twitter',
      handle: '@HurleyLuciefer',
      url: 'https://twitter.com/HurleyLuciefer',
      icon: 'twitter',
    },
    {
      label: 'Website',
      handle: 'tushermondal.ml',
      url: 'https://www.tushermondal.ml/',
      icon: 'globe',
    },
  ],
  stats: [
    { value: '28+', label: 'Public repositories' },
    { value: '178', label: 'LeetCode problems solved' },
    { value: '19.1K', label: 'LeetCode profile views' },
    { value: '9+', label: 'Years of coding' },
  ],
  leetcode: {
    solved: 178,
    easy: 72,
    medium: 101,
    hard: 5,
    views: '19.1K',
    solutions: 30,
    rank: '942,981',
    strengths: ['Dynamic Programming', 'Hash Table', 'Binary Search', 'Two Pointers'],
  },
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
    role: 'Data Analyst',
    company: 'HSBC',
    companyUrl: 'https://www.hsbc.com/',
    period: 'Present',
    current: true,
    summary:
      'Working on enterprise data analytics in Bengaluru — turning raw numbers into actionable insights and automated workflows for one of the world\u2019s largest banking groups.',
    highlights: [
      'Build data-driven insights and automated reporting for enterprise stakeholders',
      'Work with Excel, Power BI, TM1 and Alteryx across the analytics stack',
      'Sit at the intersection of analytics and engineering to solve real-life problems',
    ],
    tech: ['Excel', 'Power BI', 'TM1', 'Alteryx', 'SQL', 'Python'],
  },
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
    title: 'Data & Analytics',
    skills: ['Excel', 'Power BI', 'TM1', 'Alteryx', 'Pandas', 'NumPy', 'SQL', 'Data Analysis'],
  },
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'C++', 'Rust', 'R', 'OpenEdge ABL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Flask', 'Django', 'Express', 'Vite', 'WebSockets'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'Redis', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Vercel', 'Linux', 'Docker', 'Postman', 'VS Code'],
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
    tech: ['Python', 'WebSockets', 'Networking'],
    github: 'https://github.com/Hurley2017/Socket_Streaming',
    demo: null,
    featured: true,
  },
  {
    name: 'Perspective Pivot',
    description:
      'A web view framework that renders binary files into a pivot-like structure for easy data exploration.',
    tech: ['HTML', 'JavaScript', 'Data'],
    github: 'https://github.com/Hurley2017/Perspective_Pivot',
    demo: null,
    featured: true,
  },
  {
    name: 'Voice Assistant',
    description:
      'A Python-based voice assistant that understands and responds to voice commands for hands-free operation.',
    tech: ['Python', 'Speech Recognition'],
    github: 'https://github.com/Hurley2017/Voice_Assistant',
    demo: null,
    featured: true,
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
  {
    name: 'GPA',
    description: 'General Purpose APIs for Projects and Production — a reusable API toolkit.',
    tech: ['Python'],
    github: 'https://github.com/Hurley2017/GPA',
    demo: 'https://gpa-bice.vercel.app',
    featured: false,
  },
  {
    name: 'Vroom-Vroom',
    description: 'Dynamic SoundCore iOS — a sound-focused iOS experiment with GitHub Pages hosting.',
    tech: ['HTML', 'JavaScript'],
    github: 'https://github.com/Hurley2017/Vroom-Vroom',
    demo: null,
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
