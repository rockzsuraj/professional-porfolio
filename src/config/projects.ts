export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  slug: string;
  content?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description: "A modern portfolio built with Next.js",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "/images/projects/portfolio.jpg",
    slug: "portfolio-website",
    content: "Detailed description of the project..."
  },
  // Add more projects
];