export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStacks: string[];
  status: string[];
  url: string;
  createdAt: string;       // ISO date string
  lastUpdated: string;
}

export interface GithubProject {
  majorProject: Project[];
  minorProjects: Project[];
}