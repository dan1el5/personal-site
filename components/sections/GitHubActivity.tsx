"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Skeleton } from "@/components/ui/Skeleton";
import { FadeIn } from "@/components/animations/FadeIn";
import { timeAgo, formatNumber } from "@/lib/utils";
import type { GitHubRepo, GitHubEvent, LanguageBreakdown } from "@/types";

function RepoSkeleton() {
  return (
    <div className="border border-border p-6 space-y-3">
      <Skeleton className="h-5 w-2/3" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-1/2" />
      <div className="flex gap-4 pt-2">
        <Skeleton className="h-3 w-16" />
        <Skeleton className="h-3 w-12" />
      </div>
    </div>
  );
}

function RepoCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  return (
    <FadeIn delay={index * 0.05}>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block border border-border p-6 hover:border-fg transition-colors duration-300"
      >
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-sm font-medium tracking-tight group-hover:underline underline-offset-4">
            {repo.name}
          </h3>
          <span className="text-[10px] text-muted-light opacity-0 group-hover:opacity-100 transition-opacity">
            &rarr;
          </span>
        </div>

        {repo.description && (
          <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-2">
            {repo.description}
          </p>
        )}

        <div className="flex items-center gap-4 text-[10px] tracking-wider uppercase text-muted-light">
          {repo.language && (
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-fg/30" />
              {repo.language}
            </span>
          )}
          {repo.stargazers_count > 0 && (
            <span>{formatNumber(repo.stargazers_count)} stars</span>
          )}
          <span>{timeAgo(repo.updated_at)}</span>
        </div>
      </a>
    </FadeIn>
  );
}

function LanguageBar({ languages }: { languages: LanguageBreakdown[] }) {
  if (languages.length === 0) return null;

  return (
    <FadeIn delay={0.2}>
      <div>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-4">
          Languages
        </p>

        {/* Bar */}
        <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-border/30 mb-4">
          {languages.slice(0, 6).map((lang, i) => (
            <motion.div
              key={lang.language}
              className="h-full"
              style={{
                width: `${lang.percentage}%`,
                backgroundColor: `hsl(${i * 50}, 0%, ${30 + i * 10}%)`,
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            />
          ))}
        </div>

        {/* Labels */}
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {languages.slice(0, 6).map((lang, i) => (
            <span
              key={lang.language}
              className="flex items-center gap-1.5 text-[10px] tracking-wider text-muted"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: `hsl(${i * 50}, 0%, ${30 + i * 10}%)`,
                }}
              />
              {lang.language}{" "}
              <span className="text-muted-light">
                {lang.percentage.toFixed(0)}%
              </span>
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

function ActivityFeed({ events }: { events: GitHubEvent[] }) {
  if (events.length === 0) return null;

  const formatEvent = (event: GitHubEvent): string => {
    const repoName = event.repo.name.split("/").pop() ?? event.repo.name;
    switch (event.type) {
      case "PushEvent": {
        const commitCount = event.payload.commits?.length ?? 0;
        return `Pushed ${commitCount} commit${commitCount !== 1 ? "s" : ""} to ${repoName}`;
      }
      case "CreateEvent":
        return `Created ${event.payload.ref_type ?? "repository"} in ${repoName}`;
      case "PullRequestEvent":
        return `${event.payload.action ?? "Opened"} PR in ${repoName}`;
      case "IssuesEvent":
        return `${event.payload.action ?? "Opened"} issue in ${repoName}`;
      case "WatchEvent":
        return `Starred ${repoName}`;
      case "ForkEvent":
        return `Forked ${repoName}`;
      default:
        return `Activity in ${repoName}`;
    }
  };

  return (
    <FadeIn delay={0.3}>
      <div>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-4">
          Recent Activity
        </p>
        <ul className="space-y-3">
          {events.slice(0, 8).map((event, i) => (
            <motion.li
              key={event.id}
              className="flex items-start gap-3 text-xs text-muted"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.05 }}
            >
              <span className="w-1 h-1 rounded-full bg-border mt-1.5 shrink-0" />
              <span className="leading-relaxed">
                {formatEvent(event)}
                <span className="text-muted-light ml-2">
                  {timeAgo(event.created_at)}
                </span>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </FadeIn>
  );
}

export function GitHubActivity() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const [reposRes, activityRes] = await Promise.all([
          fetch("/api/github/repos"),
          fetch("/api/github/activity"),
        ]);

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setRepos(reposData.repos ?? []);
        }

        if (activityRes.ok) {
          const activityData = await activityRes.json();
          setEvents(activityData.events ?? []);
        }

        if (!reposRes.ok && !activityRes.ok) {
          setError("GitHub data is currently unavailable");
        }
      } catch {
        setError("Failed to load GitHub data");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const languages: LanguageBreakdown[] = (() => {
    const counts: Record<string, number> = {};
    for (const repo of repos) {
      if (repo.language) {
        counts[repo.language] = (counts[repo.language] ?? 0) + 1;
      }
    }
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    return Object.entries(counts)
      .map(([language, count]) => ({
        language,
        count,
        percentage: total > 0 ? (count / total) * 100 : 0,
      }))
      .sort((a, b) => b.count - a.count);
  })();

  return (
    <Container as="section" id="github" className="py-32 md:py-48">
      <SectionHeading label="03" title="GitHub" />

      {error && !loading && repos.length === 0 && (
        <FadeIn>
          <div className="border border-border p-8 text-center">
            <p className="text-sm text-muted">{error}</p>
            <p className="text-xs text-muted-light mt-2">
              Check back later or visit my GitHub profile directly.
            </p>
          </div>
        </FadeIn>
      )}

      {/* Repo grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <RepoSkeleton key={i} />)
          : repos
              .slice(0, 6)
              .map((repo, i) => (
                <RepoCard key={repo.id} repo={repo} index={i} />
              ))}
      </div>

      {/* Bottom row: languages + activity */}
      {!loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <LanguageBar languages={languages} />
          <ActivityFeed events={events} />
        </div>
      )}
    </Container>
  );
}
