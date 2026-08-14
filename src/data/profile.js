// Central content store for the portfolio.
// Edit this file to update the site content — no component changes needed.

export const profile = {
  name: 'Tusher Mondal',
  role: 'Manager — Management Reporting — CIB',
  tagline:
    'I turn messy data into decisions and build applications that solve real-world problems — analytics by day, engineering by passion.',
  location: 'Bengaluru, Karnataka, India',
  email: 'tusher9073mondal@gmail.com',
  phone: '+91 91230 90573',
  avatar: '/avatar.webp',
  resumeNote:
    "I'm a Manager in Management Reporting (CIB) at HSBC, working with Excel, Power BI, TM1 and Alteryx for enterprise data analytics — and I love building applications that solve real-life problems. A big part of my tinkering is local, on-device AI: I run LLMs through LM Studio, generate images with Stable Diffusion (SDXL / RealVisXL) and synthesize voices with Orpheus TTS — everything fully local, no cloud. With an MCA from Jadavpur University and a B.Sc (Hons) in Computer Science, I sit at the intersection of analytics and engineering: crafting data-driven insights, automating workflows, and shipping full-stack apps in Python, JavaScript and Rust.",
  cvPdf: '/Tusher_Mondal_CV.pdf',
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
      label: 'Steam',
      handle: 'Tusher_Mondal',
      url: 'https://steamcommunity.com/id/Tusher_Mondal/',
      icon: 'steam',
    },
  ],
  languages: [
    { name: 'Bengali', level: 'Native / Bilingual' },
    { name: 'English', level: 'Professional working' },
    { name: 'Hindi', level: 'Limited working' },
  ],
  stats: [
    { value: '28+', label: 'Public repositories' },
    { value: '200+', label: 'Problems solved' },
    { value: '5', label: 'Roles & Internships' },
    { value: '9+', label: 'Years of coding' },
  ],
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'hobbies', label: 'Hobbies' },
  { id: 'contact', label: 'Contact' },
]

export const experience = [
  {
    role: 'Manager — Management Reporting — CIB',
    brand: 'HSBC',
    company: 'HSBC',
    companyUrl: 'https://www.hsbc.com/',
    period: 'Jul 2024 — Present',
    current: true,
    location: 'Bengaluru, India',
    summary:
      'Full-time role at HSBC after converting from an analyst internship — management reporting for the Corporate & Investment Banking division.',
    highlights: [
      'Own management reporting and data-quality workflows for CIB stakeholders',
      'Work across the analytics stack with Excel, Power BI, TM1 and Alteryx',
      'Automate repetitive tasks with custom internal tools that streamline workflows',
    ],
    learnings: [
      'Enterprise reporting at scale in a global banking environment',
      'Deep practical mastery of Power BI, Power Query, VBA & Excel automation',
      'Cross-team collaboration with finance and technology stakeholders',
    ],
    tech: ['Excel', 'VBA', 'Power BI', 'TM1', 'Alteryx', 'SQL', 'Python'],
  },
  {
    role: 'Analyst Intern',
    brand: 'HSBC',
    company: 'HSBC',
    companyUrl: 'https://www.hsbc.com/',
    period: 'Jan 2024 — Jul 2024',
    location: 'Chennai, India',
    summary:
      'Seven-month analyst internship at HSBC that led to a full-time conversion — building automation and reporting systems that monitor data quality across businesses and regions.',
    highlights: [
      'Automated generation of email reports monitoring data quality across specified businesses and regions',
      'Automated repetitive tasks with custom internal tools, maximizing time efficiency and productivity',
      'Uncovered business trends through data exploration and visualization',
    ],
    learnings: [
      'Translating business requirements into reliable, scheduled automations',
      'Data-quality monitoring patterns used in large enterprises',
      'Python office-automation stack: pandas, openpyxl, xlwings, pywin32',
    ],
    tech: ['Python', 'pandas', 'openpyxl', 'xlwings', 'Power Query', 'Excel'],
  },
  {
    role: 'Data Science Intern',
    brand: 'Celebal',
    company: 'Celebal Technologies',
    companyUrl: 'https://celebaltech.com/',
    period: 'Jun 2023 — Aug 2023',
    location: 'Remote · CSI Summer Internship 2023',
    summary:
      'CSI Summer Internship — data science fundamentals and machine learning under the mentorship of a senior data scientist.',
    highlights: [
      'Created a forecasting model using user traits to predict future bandwidth consumption',
      'Developed an interactive full-stack panel visualizing usage reports across metrics',
      'Reviewed and reinforced Statistics & Data Science fundamentals with mentor Devesh Vijay',
    ],
    learnings: [
      'End-to-end ML model development and performance evaluation',
      'Harmonizing teamwork toward weekly ML objectives across applications',
      'Statistical foundations for real-world forecasting',
    ],
    tech: ['Python', 'pandas', 'scikit-learn', 'Data Space', 'NoSQL'],
  },
  {
    role: 'Python Development Intern',
    brand: 'CodeClause',
    company: 'CodeClause',
    companyUrl: 'https://codeclause.com/',
    period: 'May 2023 — Jun 2023',
    location: 'Kolkata, India · Remote',
    summary:
      'Shipped three developer tools in a Python internship — a URL shortener, a GUI alarm clock, and a Gemini-powered voice assistant.',
    highlights: [
      'Created a web-based URL shortener with Python, Flask and MongoDB',
      'Streamlined an Alarm Clock with a GUI using Python & Tkinter and the play-sound library',
      'Engineered a Voice Assistant CLI using pyttsx3, speech recognition and the Bard-API',
    ],
    learnings: [
      'Full-stack patterns with Flask and database-backed services',
      'Desktop GUI development with Tkinter',
      'Voice interfaces — speech recognition and text-to-speech',
    ],
    tech: ['Python', 'Flask', 'Tkinter', 'speech_recognition', 'Bard API', 'pyttsx3', 'MongoDB'],
  },
  {
    role: 'Software Developer Intern',
    brand: 'Phoenix',
    company: 'Phoenix India Research & Development Group',
    companyUrl: 'https://www.phoenixindiabiogas.com/',
    period: 'May 2022 — Oct 2022',
    location: 'Kolkata, India',
    summary:
      'Worked on advanced biometric technology — an automatic commercial authentication system using computer vision.',
    highlights: [
      'Built an Automatic Commercial Authentication System using OpenCV and Dlib',
      'Developed a threaded system to concurrently perform feature checks, boosting stability and performance',
      'Learned industry software-development workflows in a professional R&D team',
    ],
    learnings: [
      'Computer vision pipelines with OpenCV and facial landmarks (Dlib)',
      'Concurrency and threading for performance-critical systems',
      'Professional R&D engineering practices',
    ],
    tech: ['Python', 'OpenCV', 'Dlib', 'Threading', 'Git'],
  },
]

export const education = [
  {
    school: 'Jadavpur University',
    brand: 'JU',
    url: 'http://www.jaduniv.edu.in/',
    degree: 'Master of Computer Applications (MCA) — Computer Engineering',
    period: 'Sep 2022 — Jun 2024',
    score: 'CGPA 8.52 · Linear Avg.',
    learnings: [
      'Computer Networks, Machine Learning, and Advanced Programming in Python & Java',
      'Final-year thesis: Customizing MulVAL for Attack Graph Generation',
      'Hands-on network-simulated digital forensics',
    ],
    projects: ['MulVAL Attack Graph Generator (thesis)', 'Network Simulated Digital Forensics'],
  },
  {
    school: 'Acharya Prafulla Chandra College (West Bengal State University)',
    brand: 'APCC',
    url: 'https://apccollege.ac.in/',
    degree: "B.Sc (Hons) — Computer Science",
    period: 'Jun 2019 — Aug 2022',
    score: 'CGPA 9.4',
    learnings: [
      'Core CS foundations — data structures, databases, operating systems',
      'Started competitive programming seriously',
      'Built first full-stack applications',
    ],
    projects: ['Railway Reservation System (Flask + MongoDB)', 'Socket Transfer (P2P file sharing)'],
  },
  {
    school: 'Nebadhai High School (WBCHSE)',
    brand: 'WBCHSE',
    url: 'https://wbchse.nic.in/',
    degree: 'Higher Secondary — Mathematics & Computer Science',
    period: 'Apr 2016 — May 2019',
    score: '80%',
    learnings: ['Strong foundation in mathematics and logic', 'First formal exposure to programming'],
    projects: [],
  },
  {
    school: 'Duttapukur Adarsha Vidyapith (WBBSE)',
    brand: 'WBBSE',
    url: 'https://wbbse.wb.gov.in/',
    degree: 'Secondary — General Studies',
    period: 'Jan 2010 — Jan 2016',
    score: '75%',
    learnings: ['Discipline and problem-solving fundamentals'],
    projects: [],
  },
]

export const skillGroups = [
  {
    title: 'Local AI & Models',
    skills: [
      'LM Studio',
      'Local LLMs',
      'Stable Diffusion (SDXL)',
      'RealVisXL',
      'Orpheus TTS',
      'Embedded ML',
    ],
  },
  {
    title: 'Data & Analytics',
    skills: ['Excel', 'VBA', 'Power BI', 'Power Query', 'TM1', 'Alteryx', 'Pandas', 'NumPy', 'SQL'],
  },
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'Java', 'C', 'C++', 'Rust', 'R', 'Bash', 'OpenEdge ABL'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Node.js', 'Flask', 'Django', 'Express', 'scikit-learn', 'OpenCV', 'WebSockets'],
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
    desc: 'Steam regular with 22 games and 47+ hours in Need for Speed Unbound. Genshin Impact fan too — that’s Yelan in the old avatar.',
    link: 'https://steamcommunity.com/id/Tusher_Mondal/',
    linkLabel: 'View my Steam profile',
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
    detail: 'Certified in Python (Basic), SQL (Basic) and Java (Basic).',
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
    title: 'CSI Summer Internship 2023',
    detail: 'Selected for Celebal Technologies’ data science internship under senior mentorship.',
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
    brands: ['Python', 'LLM', 'SDXL', 'TTS'],
    learnings: [
      'Orchestrating a multi-stage local AI pipeline with automatic model selection',
      'Generating photorealistic images with SDXL / RealVisXL on limited VRAM',
      'Building dual-voice audiobook narration with emotion tags (Orpheus TTS)',
      'Designing fault-tolerant pipelines with schema-aware retries and fallbacks',
    ],
    tech: ['Python', 'LLM', 'SDXL', 'TTS', 'PDF'],
    github: 'https://github.com/Hurley2017/Writer',
    demo: null,
    featured: true,
    commits: [
      {
        message: 'Shipped the full AI story pipeline — LLM drafting, SDXL covers, Orpheus dual-voice audiobooks',
        date: 'Aug 10, 2026',
      },
      {
        message: 'Upgraded image generation to RealVisXL V4.0 (SDXL) with VRAM offload',
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
    brands: ['JavaScript', 'Web Audio API'],
    learnings: [
      'Synthesizing procedural audio from physics parameters in the browser',
      'Shaping perceived sound character through attack envelopes and tuning',
      'Iterating on realism with gating, sub-bass and mechanical texture',
    ],
    tech: ['JavaScript', 'Web Audio API'],
    github: 'https://github.com/Hurley2017/Piston-And-Sound',
    demo: null,
    featured: true,
    commits: [
      {
        message: 'Improved single-cylinder realism — gated vibration rumble, idle sub-bass, sharper attacks',
        date: 'Aug 10, 2026',
      },
      {
        message: 'Added pulse attack shaping and factory tuning for revvers vs thumpers',
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
    brands: ['Rust'],
    learnings: [
      'Writing resource-efficient systems in Rust',
      'Keeping software minimal and focused — less is more',
    ],
    tech: ['Rust'],
    github: 'https://github.com/Hurley2017/Rusty_Radio',
    demo: null,
    featured: true,
    commits: [
      { message: 'Packaged the release build', date: 'Jul 21, 2026' },
      {
        message: 'Removed large binaries from the repo — moved to an installer / separate download',
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
    brands: ['Python', 'OpenCV'],
    learnings: [
      'Real-time computer vision with OpenCV hand tracking',
      'Mapping gesture space to reliable mouse control',
      'Debugging CV pipelines across real-world lighting conditions',
    ],
    tech: ['Python', 'OpenCV', 'CV'],
    github: 'https://github.com/Hurley2017/HandMouse',
    demo: null,
    featured: true,
    commits: [
      { message: 'Wrote comprehensive project documentation', date: 'Feb 17, 2026' },
      { message: 'Iterated on gesture-tracking experiments and tuning', date: 'Feb 17, 2026' },
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
    brands: ['Python', 'JavaScript', 'Graph'],
    learnings: [
      'Modeling attack graphs from MulVAL output',
      'Building a full-stack visualization tool with a backend',
      'Deploying multi-service apps to Vercel',
    ],
    tech: ['Python', 'JavaScript', 'Graph'],
    github: 'https://github.com/Hurley2017/AGG_WEB',
    demo: 'https://attack-graph-generator.vercel.app',
    featured: true,
    commits: [
      { message: 'Added backend hosting support', date: 'Jun 7, 2024' },
      { message: 'Cleaned up console logging', date: 'Jun 7, 2024' },
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
    brands: ['Python', 'scikit-learn', 'ML'],
    learnings: [
      'Text classification with scikit-learn',
      'Feature engineering for email spam detection',
      'Shipping an ML application to production on Vercel',
    ],
    tech: ['Python', 'scikit-learn', 'ML'],
    github: 'https://github.com/Hurley2017/Email_Spam',
    demo: 'https://email-spam-tusher.vercel.app',
    featured: true,
    commits: [
      { message: 'Finalized the deployment', date: 'Aug 7, 2023' },
      { message: 'Completed the classifier pipeline', date: 'Aug 7, 2023' },
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
    brands: ['Python', 'Sockets', 'TCP/IP'],
    learnings: [
      'Socket programming and TCP/IP fundamentals',
      'Chunked transfer with automatic signing for reliable reassembly',
      'Utilizing full NIC capacity for fast transfers',
    ],
    tech: ['Python', 'Sockets', 'TCP/IP'],
    github: 'https://github.com/Hurley2017/Socket_Streaming',
    demo: null,
    featured: false,
    commits: [
      { message: 'Finalized the project with full documentation', date: 'Sep 17, 2023' },
      { message: 'Synced work from the local development machine', date: 'Sep 17, 2023' },
    ],
  },
  {
    name: 'Perspective Pivot',
    year: 2025,
    tagline: 'Binary files as a pivot table',
    description:
      'A web view framework that renders binary files into a pivot-like structure, making raw binary data explorable in the browser.',
    highlights: ['Binary file → pivot structure rendering', 'In-browser data exploration'],
    brands: ['HTML', 'JavaScript'],
    learnings: [
      'Rendering binary data in the browser',
      'Building a pivot-style exploration UI',
    ],
    tech: ['HTML', 'JavaScript'],
    github: 'https://github.com/Hurley2017/Perspective_Pivot',
    demo: null,
    featured: false,
    commits: [
      { message: 'Shipped the core pivot renderer', date: 'Apr 28, 2025' },
      { message: 'Initial project commit', date: 'Apr 28, 2025' },
    ],
  },
]

// The big hero name cycles through these — Bengali (native) first, then English
// and Hindi. Kept intentionally short.
export const nameVariants = [
  { text: 'তুষার মণ্ডল', lang: 'বাংলা · Bengali', font: "'Noto Sans Bengali','Vrinda',sans-serif", scale: 0.95 },
  { text: 'Tusher Mondal', lang: 'English', font: "'Fraunces', Georgia, serif", italic: true, scale: 1 },
  { text: 'तुषार मोंडल', lang: 'हिन्दी · Hindi', font: "'Noto Sans Devanagari','Mangal',sans-serif", scale: 0.95 },
]
