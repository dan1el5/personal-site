import { NextResponse } from "next/server";
import { fetchActivity } from "@/lib/github";

export const runtime = "edge";
export const revalidate = 3600;

interface ActivityErrorResponse {
  error: string;
  events: [];
}

/**
 * GET /api/github/activity
 *
 * Fetches recent public activity events from the GitHub API for the configured user.
 * Results are cached for 1 hour via ISR. Returns recent push, PR, and issue events.
 *
 * Response shape: { events: GitHubEvent[], rateLimitRemaining: number }
 * Error shape: { error: string, events: [] }
 */
export async function GET(): Promise<NextResponse> {
  const username = process.env.GITHUB_USERNAME;

  if (!username) {
    const body: ActivityErrorResponse = {
      error: "GITHUB_USERNAME is not configured",
      events: [],
    };
    return NextResponse.json(body, { status: 500 });
  }

  const result = await fetchActivity(username);

  if (result.error) {
    const body: ActivityErrorResponse = {
      error: result.error,
      events: [],
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
      { events: result.data, rateLimitRemaining: result.rateLimitRemaining },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
        },
      }
    );
  }

  return NextResponse.json(
    { events: result.data, rateLimitRemaining: result.rateLimitRemaining },
    {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=3600",
      },
    }
  );
}
