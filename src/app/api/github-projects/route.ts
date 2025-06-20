import { defaultImage } from "@/lib/constants";
import { NextResponse } from "next/server";

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

export const dynamic = 'force-dynamic'; // Prevent static generation

async function fetchReadmeImage(repoName: string, owner: string): Promise<string> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repoName}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN ? { Authorization: `token ${process.env.GITHUB_TOKEN}` } : {}),
        },
        cache: 'force-cache', // Cache during build
      }
    );

    if (!response.ok) {
      const text = await response.text();
      console.warn(`Failed to fetch README for ${repoName}: ${response.status} ${response.statusText}, Body: ${text}`);
      if (response.status === 429) {
        console.warn('GitHub API rate limit exceeded for README fetch');
      } else if (response.status === 404) {
        console.log(`README not found for ${repoName}`);
      }
      return defaultImage;
    }

    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      console.warn(`Non-JSON response for ${repoName}: ${contentType}`);
      return defaultImage;
    }

    const data = await response.json();
    if (!data.content) return defaultImage;

    const readmeContent = Buffer.from(data.content, 'base64').toString();
    const imageMatch = readmeContent.match(/!\[.*?\]\((.*?)\)/);
    const imageUrl = imageMatch ? imageMatch[1] : defaultImage;
    console.log(`Image for ${repoName}: ${imageUrl}`);
    return imageUrl;
  } catch (error) {
    console.error(`Error fetching README for ${repoName}:`, error);
    return defaultImage;
  }
}

export async function GET() {
  try {
    if (!process.env.GITHUB_USERNAME) {
      throw new Error("GITHUB_USERNAME environment variable is not set");
    }

    const res = await fetch(
      `https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`,
      {
        headers: process.env.GITHUB_TOKEN
          ? {
              Authorization: `token ${process.env.GITHUB_TOKEN}`, // Use 'token' for GitHub API
              Accept: "application/vnd.github.v3+json",
            }
          : { Accept: "application/vnd.github.v3+json" },
        cache: 'force-cache', // Cache during build
      }
    );

    if (!res.ok) {
      const text = await res.text();
      console.error('GitHub API error:', {
        status: res.status,
        statusText: res.statusText,
        body: text,
      });
      throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
    }

    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const text = await res.text();
      console.error(`Non-JSON response from GitHub API: ${contentType}, Body: ${text}`);
      throw new Error(`Non-JSON response from GitHub API: ${contentType}`);
    }

    const githubRepos: GitHubRepo[] = await res.json();
    const owner = process.env.GITHUB_USERNAME;

    // Process only non-archived repos first
    const activeRepos = githubRepos.filter(repo => !repo.archived);
    const archivedRepos = githubRepos.filter(repo => repo.archived);

    // Process active repos
    const activeProjects = await Promise.all(
      activeRepos.map(async (repo) => {
        try {
          const image = await fetchReadmeImage(repo.name, owner);
          return {
            id: repo.id,
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            description: repo.description || "No description available",
            image,
            techStacks: [repo.language, ...repo.topics].filter(Boolean) as string[],
            status: repo.disabled ? ["Disabled"] : ["Active"],
          };
        } catch (error) {
          console.error(`Error processing repo ${repo.name}:`, error);
          return {
            id: repo.id,
            title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
            description: "Error loading description",
            image: defaultImage,
            techStacks: [repo.language].filter(Boolean) as string[],
            status: ["Error"],
          };
        }
      })
    );

    // Process archived repos
    const archivedProjects = archivedRepos.map(repo => ({
      id: repo.id,
      title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '),
      description: repo.description || "Archived project",
      image: defaultImage,
      techStacks: [repo.language, ...repo.topics].filter(Boolean) as string[],
      status: ["Archived"],
    }));

    return NextResponse.json([...activeProjects, ...archivedProjects]);
  } catch (error) {
    console.error('Error in GitHub projects route:', error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub projects" },
      { status: 500 }
    );
  }
}