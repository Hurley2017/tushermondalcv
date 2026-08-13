// Central content store for the portfolio.
// Edit this file to update the site content — no component changes needed.

export const profile = {
  name: 'Tusher Mondal',
  firstName: 'Tusher',
  lastName: 'Mondal',
  role: 'Data Analyst at HSBC',
  tagline:
    'I turn messy data into decisions and build applications that solve real-world problems — analytics by day, engineering by passion.',
  location: 'Bengaluru, Karnataka, India',
  email: 'tusher9073mondal@gmail.com',
  phone: '+91 91230 90573',
  website: 'https://www.tushermondal.ml/',
  avatar: '/avatar.webp',
  resumeNote:
    "I'm a Data Analyst at HSBC working with Excel, Power BI, TM1 and Alteryx for enterprise data analytics — and I love building applications that solve real-life problems. With an MCA from Jadavpur University and a B.Sc (Hons) in Computer Science, I sit at the intersection of analytics and engineering: crafting data-driven insights, automating workflows, and shipping full-stack apps in Python, JavaScript and Rust.",
  cvPdf: '/Tusher_Mondal_CV.pdf',
  cvTex: '/Tusher_Mondal_CV.tex',
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
    { value: '200+', label: 'Problems solved' },
    { value: '5', label: 'Internships & roles' },
    { value: '9+', label: 'Years of coding' },
  ],
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects', page: true },
  { id: 'skills', label: 'Skills' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'contact', label: 'Contact' },
]

export const experience = [
  {
    role: 'Data Analyst',
    company: 'HSBC',
    companyUrl: 'https://www.hsbc.com/',
    period: 'Present',
    current: true,
    location: 'Bengaluru, India',
    summary:
      'Enterprise data analytics at one of the world’s largest banking groups — turning raw numbers into actionable insights and automated workflows.',
    highlights: [
      'Build data-driven insights and automated reporting for enterprise stakeholders',
      'Work across the analytics stack with Excel, Power BI, TM1 and Alteryx',
      'Automate repetitive tasks by building custom internal tools that streamline workflows',
    ],
    tech: ['Excel', 'Power BI', 'TM1', 'Alteryx', 'SQL', 'Python'],
  },
  {
    role: 'Analyst Intern',
    company: 'HSBC',
    companyUrl: 'https://www.hsbc.com/',
    period: 'Jan 2024 — Jul 2024',
    location: 'Chennai, India',
    summary:
      'Built automation and reporting systems that monitor data quality across businesses and regions during my HSBC internship.',
    highlights: [
      'Automated generation of email reports monitoring data quality across specified businesses and regions',
      'Automated repetitive tasks with custom internal tools, maximizing time efficiency and productivity',
      'Uncovered business trends through data exploration and visualization',
    ],
    tech: ['Python', 'pandas', 'openpyxl', 'xlwings', 'Power Query', 'Excel'],
  },
  {
    role: 'Data Science Intern',
    company: 'Celebal Technologies',
    companyUrl: 'https://celebaltech.com/',
    period: 'Jun 2023 — Aug 2023',
    location: 'Remote',
    summary:
      'Built forecasting models and interactive dashboards for usage analytics in a data-science internship.',
    highlights: [
      'Created a forecasting model using user traits to track behavior and predict future bandwidth consumption',
      'Developed an interactive full-stack panel visualizing usage reports across various metrics',
    ],
    tech: ['Python', 'pandas', 'scikit-learn', 'Data Space', 'NoSQL'],
  },
  {
    role: 'Python Developer Intern',
    company: 'CodeClause',
    companyUrl: 'https://codeclause.com/',
    period: 'May 2023 — Jun 2023',
    location: 'Remote',
    summary:
      'Shipped developer tools in a Python internship — a URL shortener and a Gemini-powered voice assistant.',
    highlights: [
      'Created a web-based URL shortener with database mapping for sharing large URLs',
      'Engineered a voice assistant CLI leveraging Google Gemini to mimic conversation',
    ],
    tech: ['Python', 'Flask', 'speech_recognition', 'Bard API', 'pyttsx3', 'MongoDB'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Phoenix India Research & Development Group',
    companyUrl: 'https://www.phoenixindiabiogas.com/',
    period: 'May 2022 — Oct 2022',
    location: 'India',
    summary:
      'Kicked off my professional career in software development, learning industry workflows, code standards and shipping real software in a team environment.',
    highlights: [
      'Worked on full-stack development tasks within a professional R&D team',
      'Learned office-to-production software development practices',
    ],
    tech: ['Python', 'JavaScript', 'Flask', 'Git'],
  },
]

export const education = [
  {
    school: 'Jadavpur University',
    url: 'http://www.jaduniv.edu.in/',
    degree: 'Master of Computer Applications (MCA)',
    period: 'Sep 2022 — Jul 2024',
    note: 'CGPA 8.52 [Linear Avg.]',
  },
  {
    school: 'Acharya Prafulla Chandra College (West Bengal State University)',
    url: 'https://apccollege.ac.in/',
    degree: 'B.Sc (Hons) — Computer Science',
    period: 'Jul 2019 — Aug 2022',
    note: 'CGPA 9.4',
  },
  {
    school: 'Nebadhai High School (WBCHSE)',
    url: 'https://wbchse.nic.in/',
    degree: 'Higher Secondary — Science',
    period: '2016 — 2019',
    note: 'Secured 80%',
  },
]

export const skillGroups = [
  {
    title: 'Data & Analytics',
    skills: ['Excel', 'Power BI', 'TM1', 'Alteryx', 'Pandas', 'NumPy', 'Power Query', 'SQL'],
  },
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'Java', 'C', 'C++', 'Rust', 'R', 'Bash', 'OpenEdge ABL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Flask', 'Django', 'Express', 'scikit-learn', 'WebSockets'],
  },
  {
    title: 'Databases',
    skills: ['MongoDB', 'Redis', 'MySQL', 'PostgreSQL', 'Microsoft Access'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Vercel', 'Linux', 'Docker', 'Postman', 'VS Code', 'Nmap'],
  },
  {
    title: 'Interests',
    skills: ['Full-Stack Development', 'Algorithms & DSA', 'Systems Programming', 'Music & Photography'],
  },
]

export const hobbies = [
  {
    icon: 'code',
    title: 'Competitive Programming',
    desc: '200+ problems solved on LeetCode & HackerRank — grinding dynamic programming, hash tables and binary search.',
  },
  {
    icon: 'gamepad',
    title: 'Gaming',
    desc: 'Genshin Impact enthusiast (yes, that’s Yelan in my profile picture) and a fan of well-designed puzzle games.',
  },
  {
    icon: 'music',
    title: 'Music & Audio',
    desc: 'Built my own ultra-lightweight music player (Rusty Radio). I code to music and love audio technology.',
  },
  {
    icon: 'camera',
    title: 'Photography',
    desc: 'Long-time photography interest — capturing moments that tell stories, especially while travelling.',
  },
  {
    icon: 'run',
    title: 'Running & Marathons',
    desc: 'Into the sport of running — I even built a complete marathon invitation site (ranbakure) for it.',
  },
  {
    icon: 'chess',
    title: 'Chess & Puzzles',
    desc: 'Chess and logic puzzles keep the problem-solving muscles sharp between coding sessions.',
  },
  {
    icon: 'bot',
    title: 'AI Tinkering',
    desc: 'Local LLMs, SDXL image generation and TTS experiments — the Writer project is my playground.',
  },
  {
    icon: 'book',
    title: 'Storytelling',
    desc: 'From reading and writing stories to building an AI agent that writes and narrates full audiobooks.',
  },
]

export const achievements = [
  {
    title: 'HackerRank Certifications',
    detail: 'Certified in Python, Java and SQL.',
  },
  {
    title: '200+ Competitive Programming Problems',
    detail: 'Solved across LeetCode and HackerRank — 178 on LeetCode alone (72 Easy, 101 Medium, 5 Hard).',
  },
  {
    title: 'LeetCode 50 Days Badge 2022',
    detail: 'Consistent daily problem-solving streak; 30 published solutions and 19.1K profile views.',
  },
  {
    title: 'Final Year Thesis',
    detail: 'Customizing MulVAL for Attack Graph Generation — with network-simulated digital forensics.',
  },
  {
    title: 'HSBC Converted Intern',
    detail: 'Interned as an Analyst at HSBC and converted to a full-time Data Analyst role.',
  },
  {
    title: '28+ Open Source Repositories',
    detail: 'A decade of tinkering — 66+ contributions across the last year and counting.',
  },
]

export const projects = [
  {
    name: 'Writer',
    year: 2026,
    tagline: 'A local AI agent that writes full stories',
    description:
      'A complete on-device AI storytelling pipeline: it drafts a story with a local LLM (LM Studio), generates photorealistic book covers with RealVisXL (SDXL), and narrates the result as a dual-voice audiobook with Orpheus TTS.',
    highlights: [
      '3-stage pipeline (draft PDF → images → audiobook) with automatic model selection',
      'Strict-JSON outline generation with schema-aware retries and plain-prose fallback',
      'Embedded SDXL/RealVisXL image backend with CPU offload',
      'Orpheus 3B narrator with inline emotion tags and dual voices',
    ],
    tech: ['Python', 'LLM', 'SDXL', 'TTS', 'PDF'],
    github: 'https://github.com/Hurley2017/Writer',
    demo: null,
    featured: true,
    commits: [
      {
        message:
          'Add local AI story writer: LLM story (LM Studio), RealVisXL images, Orpheus dual-voice audiobook',
        date: 'Aug 10, 2026',
      },
      {
        message: 'Upgrade to RealVisXL V4.0 (SDXL) for photorealistic covers; SDXL auto-detection + VRAM offload',
        date: 'Aug 9, 2026',
      },
    ],
  },
  {
    name: 'Piston-And-Sound',
    year: 2026,
    tagline: 'Physics-based engine sound in the browser',
    description:
      'A web interface that mimics the physics-based sound of different engine types — procedural audio synthesized in-browser from real engine physics: cylinder count, RPM, firing order and attack shapes.',
    highlights: [
      'Procedural audio synthesis driven by engine physics',
      'Pulse attack shaping: sharp “kut” revvers vs soft “dug” thumpers',
      'Idle sub-bass thump, gated vibration rumble and mechanical texture',
    ],
    tech: ['JavaScript', 'Web Audio API'],
    github: 'https://github.com/Hurley2017/Piston-And-Sound',
    demo: null,
    featured: true,
    commits: [
      {
        message:
          'Fix single-cylinder realism: gate vibration rumble, add idle sub-bass thump, sharper high-comp attacks',
        date: 'Aug 10, 2026',
      },
      {
        message: "Add pulse attack shape and factory tuning: sharp 'kut' revvers vs soft 'dug' thumpers",
        date: 'Aug 10, 2026',
      },
    ],
  },
  {
    name: 'Rusty Radio',
    year: 2026,
    tagline: 'An ultra-light music player in Rust',
    description:
      'An intentionally simple music player that consumes bare-minimum system resources. Old-school, limited-feature tech that just works in the background.',
    highlights: [
      'Ultra-lightweight background music playback',
      'Minimal system resource footprint',
      'Old-school, limited-feature design philosophy',
    ],
    tech: ['Rust'],
    github: 'https://github.com/Hurley2017/Rusty_Radio',
    demo: null,
    featured: true,
    commits: [
      { message: 'PPMG', date: 'Jul 21, 2026' },
      {
        message: 'Remove large binaries from git (use installer or download separately)',
        date: 'Jul 21, 2026',
      },
    ],
  },
  {
    name: 'HandMouse',
    year: 2026,
    tagline: 'Your webcam is your mouse',
    description:
      'Turns your hand gestures into mouse actions using just a webcam — “I don’t have any money to buy a mouse, I do have a webcam though.” Computer vision meets everyday utility.',
    highlights: [
      'Real-time hand tracking via webcam',
      'Gesture-to-mouse-action mapping',
      'Computer vision with OpenCV',
    ],
    tech: ['Python', 'OpenCV', 'CV'],
    github: 'https://github.com/Hurley2017/HandMouse',
    demo: null,
    featured: true,
    commits: [
      {
        message: 'a comprehensive readme for readers, stating my project doesnt entirely suck',
        date: 'Feb 17, 2026',
      },
      { message: 'Well I tried a lot os things, seems out of will', date: 'Feb 17, 2026' },
    ],
  },
  {
    name: 'AGG Web',
    year: 2024,
    tagline: 'Attack graph generator (thesis project)',
    description:
      'A web interface for generating and visualising attack graphs — the applied side of my final-year thesis on customizing MulVAL for attack graph generation. Built with Bitan Sarkar and deployed on Vercel.',
    highlights: [
      'Web-based attack graph generation and visualization',
      'Supports the MulVAL thesis: network-simulated digital forensics',
      'Full-stack deployment on Vercel',
    ],
    tech: ['Python', 'JavaScript', 'Graph'],
    github: 'https://github.com/Hurley2017/AGG_WEB',
    demo: 'https://attack-graph-generator.vercel.app',
    featured: true,
    commits: [
      { message: 'BackHost Added', date: 'Jun 7, 2024' },
      { message: 'Update Console Commented', date: 'Jun 7, 2024' },
    ],
  },
  {
    name: 'Email Spam Classifier',
    year: 2023,
    tagline: 'ML-powered spam detection',
    description:
      'A machine-learning based email spam detection system built during the Celebal Technologies internship — trained with scikit-learn and deployed live on Vercel.',
    highlights: [
      'ML classification with scikit-learn',
      'Built as the Celebal Technologies internship project',
      'Live deployment on Vercel',
    ],
    tech: ['Python', 'scikit-learn', 'ML'],
    github: 'https://github.com/Hurley2017/Email_Spam',
    demo: 'https://email-spam-tusher.vercel.app',
    featured: true,
    commits: [
      { message: 'last push', date: 'Aug 7, 2023' },
      { message: 'done!', date: 'Aug 7, 2023' },
    ],
  },
  {
    name: 'Socket Streaming',
    year: 2023,
    tagline: 'Cross-platform P2P file transfer',
    description:
      'A cross-platform file-sharing application built on socket programming — transfers data/files within an inter-network environment while utilizing the full capacity of the network interface.',
    highlights: [
      'Server-client architecture over TCP/IP',
      'Automatic chunk signing for efficient reassembly and faster transfer',
      'Full network interface capacity utilization',
    ],
    tech: ['Python', 'Sockets', 'TCP/IP'],
    github: 'https://github.com/Hurley2017/Socket_Streaming',
    demo: null,
    featured: false,
    commits: [
      { message: 'Final with Readme.md', date: 'Sep 17, 2023' },
      { message: 'From PC', date: 'Sep 17, 2023' },
    ],
  },
  {
    name: 'Perspective Pivot',
    year: 2025,
    tagline: 'Binary files as a pivot table',
    description:
      'A web view framework that renders binary files into a pivot-like structure, making raw binary data explorable in the browser.',
    highlights: ['Binary file → pivot structure rendering', 'In-browser data exploration'],
    tech: ['HTML', 'JavaScript'],
    github: 'https://github.com/Hurley2017/Perspective_Pivot',
    demo: null,
    featured: false,
    commits: [
      { message: 'Miracle Miracle', date: 'Apr 28, 2025' },
      { message: 'Commit Uno', date: 'Apr 28, 2025' },
    ],
  },
]
