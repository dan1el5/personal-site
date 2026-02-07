import type { GitHubRepo, GitHubEvent, GitHubApiResponse } from "@/types";

const GITHUB_API_BASE = "https://api.github.com";

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "personal-site",
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

/**
 * Fetch a user's public repositories, sorted by most recently updated.
 * Returns up to 30 repos with rate limit info.
 */
export async function fetchRepos(
  username: string
): Promise<GitHubApiResponse<GitHubRepo[]>> {
  const url = `${GITHUB_API_BASE}/users/${encodeURIComponent(username)}/repos?sort=updated&per_page=30&type=owner`;

  const res = await fetch(url, {
    headers: getHeaders(),
    next: { revalidate: 3600 },
  });

  const rateLimitRemaining = parseInt(
    res.headers.get("X-RateLimit-Remaining") ?? "0",
    10
  );

  if (!res.ok) {
    return {
      data: [],
      rateLimitRemaining,
      error: `GitHub API error: ${res.status} ${res.statusText}`,
    };
  }

  const data: GitHubRepo[] = await res.json();
  return { data, rateLimitRemaining };
}

/**
 * Fetch a user's recent public activity events.
 * Returns up to 30 events with rate limit info.
 */
export async function fetchActivity(
  username: string
): Promise<GitHubApiResponse<GitHubEvent[]>> {
  const url = `${GITHUB_API_BASE}/users/${encodeURIComponent(username)}/events/public?per_page=30`;

  const res = await fetch(url, {
    headers: getHeaders(),
    next: { revalidate: 3600 },
  });

  const rateLimitRemaining = parseInt(
    res.headers.get("X-RateLimit-Remaining") ?? "0",
    10
  );

  if (!res.ok) {
    return {
      data: [],
      rateLimitRemaining,
      error: `GitHub API error: ${res.status} ${res.statusText}`,
    };
  }

  const data: GitHubEvent[] = await res.json();
  return { data, rateLimitRemaining };
}
