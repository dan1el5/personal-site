export interface Project {
  title: string;
  description: string;
  role: string;
  impact: string[];
  tech: string[];
  featured?: boolean;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SiteConfig {
  name: string;
  role: string;
  bio: string[];
  projects: Project[];
  skills: SkillCategory[];
  socials: SocialLink[];
  githubUsername: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
  payload: {
    action?: string;
    ref?: string;
    ref_type?: string;
    commits?: Array<{
      sha: string;
      message: string;
    }>;
  };
}

export interface GitHubApiResponse<T> {
  data: T;
  rateLimitRemaining: number;
  error?: string;
}

export interface LanguageBreakdown {
  language: string;
  count: number;
  percentage: number;
}
