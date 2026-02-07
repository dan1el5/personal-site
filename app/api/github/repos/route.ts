import { NextResponse } from "next/server";
import { fetchRepos } from "@/lib/github";

export const runtime = "edge";
export const revalidate = 3600;

interface ReposErrorResponse {
  error: string;
  repos: [];
}

/**
 * GET /api/github/repos
 *
 * Fetches the authenticated user's public repositories from the GitHub API.
 * Results are cached for 1 hour via ISR. Returns repos sorted by recent activity.
 *
 * Response shape: { repos: GitHubRepo[], rateLimitRemaining: number }
 * Error shape: { error: string, repos: [] }
 */
export async function GET(): Promise<NextResponse> {
  const username = process.env.GITHUB_USERNAME;

  if (!username) {
    const body: ReposErrorResponse = {
      error: "GITHUB_USERNAME is not configured",
      repos: [],
    };
    return NextResponse.json(body, { status: 500 });
  }

  const result = await fetchRepos(username);

  if (result.error) {
    const body: ReposErrorResponse = {
      error: result.error,
      repos: [],
    };
    return NextResponse.json(body, {
      status: 502,
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  }

  if (result.rateLimitRemaining < 10) {
    return NextResponse.json(
      { repos: result.data, rateLimitRemaining: result.rateLimitRemaining },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
        },
      }
    );
  }

  return NextResponse.json(
    { repos: result.data, rateLimitRemaining: result.rateLimitRemaining },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=3600",
      },
    }
  );
}
