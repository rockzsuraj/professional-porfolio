interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  slug: string;
  content?: string;
  github?: string;
  liveUrl?: string;
}