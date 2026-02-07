import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "<DG/>",
  role: "Full Stack Developer & UI Engineer",
  bio: [
    "{PLACEHOLDER: I'm a frontend-leaning full-stack developer who thrives in fast-moving, collaborative environments. I partner closely with designers, product managers, and backend engineers to turn ambiguous requirements into polished, scalable products across web and mobile.}",
    "{PLACEHOLDER: My core stack is TypeScript and React, but I work across the full stack — collaborating on API design, data models, and AI-powered features with a frontend lens on usability and clarity. I care about building interfaces that feel intuitive, not just functional.}",
    "{PLACEHOLDER: I'm drawn to evolving products where the roadmap shifts and the engineering challenges grow with it. I enjoy the full lifecycle — from requirements gathering and technical specification through to shipping and iterating.}",
  ],
  projects: [
    {
      title: "{PLACEHOLDER: Internal Analytics Platform}",
      description:
        "{PLACEHOLDER: A full-stack analytics dashboard for an enterprise B2B SaaS product. Built real-time data visualizations, complex filtering, and role-based access control from the ground up.}",
      role: "{PLACEHOLDER: Lead Frontend Engineer}",
      impact: [
        "{PLACEHOLDER: Reduced average page load time by 40% through code splitting and query optimization}",
        "{PLACEHOLDER: Served 10k+ daily active users across 200+ enterprise accounts}",
        "{PLACEHOLDER: Built a reusable charting system adopted by 3 other product teams}",
      ],
      tech: ["TypeScript", "React", "Next.js", "REST API", "PostgreSQL"],
      featured: true,
    },
    {
      title: "{PLACEHOLDER: Design System & Component Library}",
      description:
        "{PLACEHOLDER: Designed and built a shared component library used across multiple internal products. Established accessibility standards, documentation patterns, and automated visual regression testing.}",
      role: "{PLACEHOLDER: Frontend Engineer}",
      impact: [
        "{PLACEHOLDER: 40+ production components with full keyboard and screen reader support}",
        "{PLACEHOLDER: Cut new feature development time by ~30% across teams}",
        "{PLACEHOLDER: Zero accessibility audit failures after adoption}",
      ],
      tech: ["TypeScript", "React", "Tailwind CSS", "Storybook"],
    },
    {
      title: "{PLACEHOLDER: Client Onboarding Portal}",
      description:
        "{PLACEHOLDER: A multi-step onboarding flow for enterprise clients with dynamic form generation, document uploads, and integration with internal CRM and billing APIs.}",
      role: "{PLACEHOLDER: Full Stack Developer}",
      impact: [
        "{PLACEHOLDER: Reduced client onboarding time from 2 weeks to 3 days}",
        "{PLACEHOLDER: Handled 500+ client onboardings in the first quarter}",
        "{PLACEHOLDER: Integrated with 4 internal microservices and 2 third-party APIs}",
      ],
      tech: ["Next.js", "Node.js", "REST API", "Tailwind CSS"],
    },
    {
      title: "{PLACEHOLDER: AI-Powered Search Interface}",
      description:
        "{PLACEHOLDER: Built the frontend for an AI-assisted search feature that combines semantic search with traditional filters. Designed the conversational UI and streaming response rendering.}",
      role: "{PLACEHOLDER: Frontend Engineer}",
      impact: [
        "{PLACEHOLDER: 3x improvement in search result relevance (measured by click-through)}",
        "{PLACEHOLDER: Sub-200ms time-to-first-token for streaming AI responses}",
        "{PLACEHOLDER: Adopted as the primary search across 2 product lines}",
      ],
      tech: ["TypeScript", "React", "AI/LLM", "WebSocket"],
    },
    {
      title: "{PLACEHOLDER: Real-Time Notification System}",
      description:
        "{PLACEHOLDER: Architected a cross-platform notification system handling email, in-app, and push channels. Built the preference management UI and real-time delivery pipeline with WebSocket fanout.}",
      role: "{PLACEHOLDER: Full Stack Developer}",
      impact: [
        "{PLACEHOLDER: Delivered 2M+ notifications/month with 99.9% delivery rate}",
        "{PLACEHOLDER: Reduced user-reported missed alerts by 85%}",
        "{PLACEHOLDER: Built a preference UI that cut support tickets around notifications by half}",
      ],
      tech: ["TypeScript", "React", "Node.js", "WebSocket", "Redis"],
    },
  ],
  skills: [
    {
      name: "Client",
      skills: [
        "TypeScript",
        "React",
        "Next.js",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      name: "Server",
      skills: ["Node.js", "REST APIs", "Next.js API Routes", "PostgreSQL"],
    },
    {
      name: "Tools & Cloud",
      skills: ["Git", "Netlify", "Vercel", "CI/CD", "Docker", "Linux"],
    },
  ],
  socials: [
    {
      label: "GitHub",
      url: "{PLACEHOLDER: https://github.com/username}",
    },
  ],
  githubUsername:
    process.env.GITHUB_USERNAME ?? "{PLACEHOLDER: your_github_username}",
};
