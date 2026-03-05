export interface Project {
  title: string;
  description: string;
  role: string;
  impact: string[];
  tech: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Highlight {
  value: string;
  label: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  bio: string[];
  highlights: Highlight[];
  paidProjects: Project[];
  liveProjects: Project[];
  skills: SkillCategory[];
  socials: SocialLink[];
}
