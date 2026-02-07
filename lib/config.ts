import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "{PLACEHOLDER: Your Name}",
  role: "{PLACEHOLDER: Frontend Developer & UI Engineer}",
  email: "{PLACEHOLDER: your@email.com}",
  bio: [
    "{PLACEHOLDER: I'm a frontend-leaning full-stack developer who cares deeply about craft. I build interfaces that feel alive — with thoughtful motion, clean architecture, and obsessive attention to the details that make software feel polished.}",
    "{PLACEHOLDER: My core stack is TypeScript and React, but I'm equally comfortable building server-side APIs, working with cloud infrastructure, and thinking through system design. I believe the best frontend engineers understand the full stack.}",
    "{PLACEHOLDER: When I'm not coding, you'll find me exploring generative art, reading about design systems, or contributing to open-source projects that push the web forward.}",
  ],
  projects: [
    {
      title: "{PLACEHOLDER: Project Alpha}",
      description:
        "{PLACEHOLDER: A real-time collaborative editor built with React and WebSockets. Features conflict-free replicated data types (CRDTs) for seamless multi-user editing.}",
      tech: ["TypeScript", "React", "Node.js", "WebSocket"],
      url: "{PLACEHOLDER: https://project-alpha.dev}",
      github: "{PLACEHOLDER: https://github.com/username/project-alpha}",
      featured: true,
    },
    {
      title: "{PLACEHOLDER: Project Beta}",
      description:
        "{PLACEHOLDER: A design system and component library with 40+ components, comprehensive accessibility testing, and interactive documentation.}",
      tech: ["TypeScript", "React", "Tailwind CSS", "Storybook"],
      url: "{PLACEHOLDER: https://project-beta.dev}",
      github: "{PLACEHOLDER: https://github.com/username/project-beta}",
    },
    {
      title: "{PLACEHOLDER: Project Gamma}",
      description:
        "{PLACEHOLDER: A full-stack dashboard for monitoring API health, with real-time charts, alerting, and team management features.}",
      tech: ["Next.js", "REST API", "PostgreSQL", "Tailwind CSS"],
      url: "{PLACEHOLDER: https://project-gamma.dev}",
    },
    {
      title: "{PLACEHOLDER: Project Delta}",
      description:
        "{PLACEHOLDER: A CLI tool for scaffolding TypeScript projects with opinionated defaults for linting, testing, and CI/CD configuration.}",
      tech: ["TypeScript", "Node.js", "CLI"],
      url: "{PLACEHOLDER: https://project-delta.dev}",
      github: "{PLACEHOLDER: https://github.com/username/project-delta}",
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
    {
      label: "LinkedIn",
      url: "{PLACEHOLDER: https://linkedin.com/in/username}",
    },
  ],
  githubUsername:
    process.env.GITHUB_USERNAME ?? "{PLACEHOLDER: your_github_username}",
};
