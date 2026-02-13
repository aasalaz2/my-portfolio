export const personal = {
  name: 'Andrew Salazar',
  title: 'Software Engineer',
  location: 'Santa Ana, CA',
  email: 'andrewsalazar538@gmail.com',
  phone: '714-470-6168',
  github: 'https://github.com/aasalaz2',
  linkedin: 'https://www.linkedin.com/in/andrewasalazar/',
  intro: [
    "I'm a software engineer specializing in building web applications, mobile apps, and ML-powered systems.",
    "I hold a B.S. in Computer Science from UC Irvine and an M.S. in Computer Science from the University of Illinois Urbana-Champaign with a 4.0 GPA.",
    "I've worked across the stack — building cross-platform mobile apps with React Native, leading Android development teams, and shipping recommendation systems powered by NLP. I genuinely enjoy using AI-assisted development tools like Claude Code and Cursor to move fast without sacrificing quality.",
    "If you have an exciting project or role that aligns with my expertise, feel free to reach out.",
  ],
}

export const projects : {
  name: string
  year: string
  href: string | null
  desc: string
  tags: string[]
  private?: boolean
}[] = [
  {
    name: 'HealthMate',
    year: '2024',
    href: null,
    desc: 'A cross-platform mobile health app built with React Native and Expo. Features user authentication, personalized goal-setting, and ML-powered exercise recommendations tailored to each user\'s habits.',
    tags: ['TypeScript', 'React Native', 'Expo', 'Machine Learning'],
    private: true,
  },
  {
    name: 'WeatherGenie',
    year: '2025',
    href: null,
    desc: 'Led a 4-person team to build a native Android weather app with real-time forecasts via the WeatherBit API and an AI-powered Q&A feature, using Material Design.',
    tags: ['Java', 'Android SDK', 'REST API', 'Material Design'],
    private: true,
  },
  {
    name: 'Movie Sentiment Recommender',
    year: '2025',
    href: 'https://github.com/aasalaz2/movie-sentiment-recommender',
    desc: 'Backend recommendation engine using natural-language queries with a hybrid pipeline: keyword search, semantic similarity scoring, and sentiment analysis for fast, relevant results.',
    tags: ['Python', 'NLP', 'Backend Systems', 'Semantic Search'],
    private: false,
  },
  {
    name: 'Portfolio Site',
    year: '2026',
    href: 'https://github.com/aasalaz2/my-portfolio',
    desc: 'This site — built with Next.js and Tailwind CSS from scratch.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    private: false,
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['JavaScript / TypeScript', 'Python', 'Java', 'C / C++', 'HTML / CSS', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['React / React Native', 'Next.js', 'Node.js', 'Expo', 'PyTorch / TensorFlow', 'Scikit-learn'],
  },
  {
    title: 'Tools',
    items: ['Git / GitHub', 'Docker', 'Android Studio', 'Claude Code', 'Cursor', 'Figma'],
  },
  {
    title: 'AI & Data',
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'Text Retrieval', 'Data Visualization'],
  },
]

export const experience = [
  {
    date: 'Aug 2024 – Dec 2025',
    org: 'University of Illinois Urbana-Champaign',
    role: 'Master of Computer Science',
    gpa: '4.0 GPA',
    bullets: [
      'Siebel School of Computing & Data Science',
      'Applied Machine Learning, Software Engineering, Text Information Systems, Deep Learning for Healthcare, Data Visualization, Data Cleaning, Interactive Computer Graphics',
    ],
  },
  {
    date: 'Jan – Sep 2024',
    org: 'Outlier (Scale AI)',
    role: 'AI Trainer',
    gpa: null,
    bullets: [
      'Designed prompts for AI code generation systems',
      'Evaluated AI-generated code for correctness, performance, and readability',
      'Developed test cases and scored diverse AI solution approaches',
    ],
  },
  {
    date: 'Sep 2019 – Mar 2024',
    org: 'University of California, Irvine',
    role: 'B.S. Computer Science',
    gpa: '3.7 GPA',
    bullets: [
      'Algorithms, AI, HCI, Information Retrieval, User Interface Software, Embedded Software',
    ],
  },
]
