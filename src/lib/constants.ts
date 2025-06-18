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
    image: "https://images.unsplash.com/photo-1677442135136-760c813a743e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    techStacks: ["Python", "TensorFlow", "React", "Flask"],
    status: ["live", "cached"] // Both versions available
  }
];