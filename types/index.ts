export interface Project {
  title: string;
  description: string;
  role: string;
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
  fullName: string;
  role: string;
  bio: string[];
  highlights: Highlight[];
  liveProjects: Project[];
  skills: SkillCategory[];
  socials: SocialLink[];
}
