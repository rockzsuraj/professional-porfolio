// lib/fetchGitHubProjects.ts
import { defaultImage } from "@/lib/constants";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  topics: string[];
  html_url: string;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
}

async function fetchReadmeImage(repoName: string, owner: string): Promise<string> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repoName}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN ? { Authorization: `token ${process.env.GITHUB_TOKEN}` } : {}),
        },
        cache: 'force-cache',
      }
    );

    console.log('response image', response);


    if (!response.ok) return defaultImage;

    const data = await response.json();
    if (!data.content) return defaultImage;

    const readmeContent = Buffer.from(data.content, 'base64').toString();
    const imageMatch = readmeContent.match(/!\[.*?\]\((.*?)\)/);
    return imageMatch ? imageMatch[1] : defaultImage;
  } catch {
    return defaultImage;
  }
}

export async function fetchGitHubProjects() {
  if (!process.env.GITHUB_USERNAME) throw new Error("Missing GITHUB_USERNAME");

  const res = await fetch(`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`, {
    headers: process.env.GITHUB_TOKEN
      ? { Authorization: `token ${process.env.GITHUB_TOKEN}`, Accept: "application/vnd.github.v3+json" }
      : { Accept: "application/vnd.github.v3+json" },
    cache: 'force-cache',
  });

  if (!res.ok) throw new Error("GitHub API error");

  let githubRepos: GitHubRepo[] = await res.json();
  githubRepos = githubRepos.sort((a, b) =>
    new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  const owner = process.env.GITHUB_USERNAME;

  const activeRepos = githubRepos.filter(repo => !repo.archived && repo.topics.includes('major-project'));
  const archivedRepos = githubRepos.filter(repo => repo.archived);
  const smallProjectsRepos = githubRepos.filter(repo => !repo.archived && !repo.topics.includes('major-project'))

  const activeProjects = await Promise.all(
    activeRepos.map(async (repo) => {
      const image = await fetchReadmeImage(repo.name, owner);
      return {
        id: repo.id,
        title: repo.name.replace(/[-_]/g, ' '),
        description: repo.description || "No description available",
        image,
        techStacks: [repo.language, ...repo.topics].filter(Boolean) as string[],
        status: repo.disabled ? ["Disabled"] : ["Active"],
        url: repo.html_url,
        createdAt: repo.created_at,    // From GitHub API
        lastUpdated: repo.pushed_at
      };
    })
  );

  const minorProjects = await Promise.all(
    smallProjectsRepos.map(async (repo) => {
      const image = await fetchReadmeImage(repo.name, owner);
      return {
        id: repo.id,
        title: repo.name.replace(/[-_]/g, ' '),
        description: repo.description || "No description available",
        image,
        techStacks: [repo.language, ...repo.topics].filter(Boolean) as string[],
        status: repo.disabled ? ["Disabled"] : ["Active"],
        url: repo.html_url,
        createdAt: repo.created_at,    // From GitHub API
        lastUpdated: repo.pushed_at
      };
    })
  );

  const archivedProjects = archivedRepos.map(repo => ({
    id: repo.id,
    title: repo.name.replace(/[-_]/g, ' '),
    description: repo.description || "Archived project",
    image: defaultImage,
    techStacks: [repo.language, repo.topics].filter(Boolean) as string[],
    status: ["Archived"],
    url: repo.html_url,
    createdAt: repo.created_at,    // From GitHub API
    lastUpdated: repo.pushed_at
  }));

  return {
    majorProject: [...activeProjects, ...archivedProjects],
    minorProjects: [...minorProjects]
  };
}
