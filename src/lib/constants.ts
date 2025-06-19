export const icons = [
  {
    src: 'github.svg',
    alt: 'github'
  },
  {
    src: 'linkedin.svg',
    alt: 'linkedin'
  },
  {
    src: 'email.svg',
    alt: 'email'
  }
] as const

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with product listings, cart functionality, and secure payment processing.",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    techStacks: ["React", "Node.js", "MongoDB", "Stripe API"],
    status: ["live", "cached"] // Both live and cached versions available
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Productivity application for organizing tasks with drag-and-drop functionality and team collaboration features.",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    techStacks: ["React Native", "Firebase", "Redux"],
    status: ["archived"] // Only archived version available
  },
  {
    id: 3,
    title: "Health & Fitness Tracker",
    description: "Mobile application that tracks workouts, nutrition, and health metrics with data visualization.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    techStacks: ["Flutter", "Dart", "Firebase", "HealthKit"],
    status: ["live"] // Currently live only
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media managers with real-time metrics and reporting tools.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    techStacks: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
    status: ["cached", "demo"] // Cached version with demo available
  },
  {
    id: 5,
    title: "AI Image Generator",
    description: "Web application that generates custom artwork using machine learning models.",
    image: "https://images.unsplash.com/photo-1650421120432-178ec62cd849?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStacks: ["Python", "TensorFlow", "React", "Flask"],
    status: ["live", "cached"] // Both versions available
  }
];
type SkillCategory = {
  category: string;
  technologies: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    technologies: ["JavaScript", "TypeScript", "Python", "Java", "C#", "Go", "Rust"]
  },
  {
    category: "Web Development",
    technologies: ["HTML", "CSS", "Sass", "Less"]
  },
  {
    category: "Frontend Frameworks",
    technologies: ["React", "Next.js", "Vue", "Angular", "Svelte"]
  },
  {
    category: "Backend Technologies",
    technologies: ["Node.js", "Express", "NestJS", "Spring Boot", "Django", "Flask"]
  },
  {
    category: "Mobile Development",
    technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
  },
  {
    category: "Databases",
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Firebase"]
  },
  {
    category: "Cloud & DevOps",
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"]
  },
  {
    category: "Testing",
    technologies: ["Jest", "Cypress", "Testing Library", "Mocha", "Chai"]
  },
  {
    category: "Tools",
    technologies: ["VS Code", "Git", "Postman", "Figma", "Jira", "Webpack"]
  },
  {
    category: "Other",
    technologies: ["GraphQL", "REST API", "WebSockets", "WebRTC"]
  }
];

export const smallProjects = [
  {
    name: "Discord.js Bot Boilerplate",
    tech: ["Discord.js", "TypeScript"],
    description: "Start creating scalable Discord.js bots with TypeScript in seconds.",
    link: "Github"
  },
  {
    name: "Vue Blog Frontend",
    tech: ["Vue", "CSS", "JS"],
    description: "Front-end of my future blog website written in Vue.",
    link: "Live"
  },
  {
    name: "Chess Service Landing Page",
    tech: ["Figma", "CSS"],
    description: "Figma landing page about a service for viewing chess tournaments.",
    link: "Github"
  },
  {
    name: "Crash Protect Website",
    tech: ["HTML", "CSS", "JS"],
    description: "Website for anti-raid, anti-crash Discord bot.",
    link: "Github"
  },
  {
    name: "CSS Experiments",
    tech: ["CSS"],
    description: "Collection of my different little projects in CSS.",
    link: "Github"
  },
  {
    name: "Web Dev Neovim Config",
    tech: ["Lua", "NeoVim"],
    description: "Config for Neovim perfect for web developers.",
    link: "Github"
  },
  {
    name: "Anti-Raid Bot Figma Template",
    tech: ["Figma"],
    description: "Figma template for website about anti-raid Discord bot.",
    link: "Figma"
  },
  {
    name: "Ooku School Website",
    tech: ["Python", "Flask", "HTML"],
    description: "School website built with Flask.",
    link: "Github"
  },
  {
    name: "Link Shortener with Auth",
    tech: ["Flask", "Quart", "HTML"],
    description: "Simple link shortener with authentication.",
    link: "Github"
  },
  {
    name: "Chess Pro Discord Bot",
    tech: ["Discord.js", "TypeScript"],
    description: "Discord bot for playing and managing chess tournaments.",
    link: "Github"
  },
  {
    name: "Figma School Template",
    tech: ["Figma"],
    description: "Figma template website for my school.",
    link: "Github"
  }
];

export const aboutMe = [
  "❄️ I like winter more than summer",
  "🚴 I often bike with my friends",
  "🍕 I like pizza and pasta",
  "✈️ I was in Egypt, Poland and Turkey",
  "🎥 My favorite movie is The Green Mile",
  "🏫 I am still in school",
  "👪 I don’t have any siblings"
];