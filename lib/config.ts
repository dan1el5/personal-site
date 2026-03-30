import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "<DG/>",
  fullName: "DG",
  role: "Product Designer & Full Stack Engineer",
  bio: [
    "Product engineer based in Toronto. I work across the entire stack and design process, from early concepts and user flows through to APIs, infrastructure, and production deployment.",
    "I care about building products that are well-designed and well-engineered. That means thoughtful interfaces backed by clean architecture, not one at the expense of the other.",
    "I thrive in collaborative, fast-moving environments where the roadmap evolves and the problems get harder. I enjoy owning the full lifecycle, from requirements and technical spec through to shipping and iterating on design and functionality.",
  ],
  highlights: [
    { value: "BSc Computer Science", label: "Western University" },
    { value: "Prev Co-Founder", label: "Aurelis, Software Development Agency" },
    { value: "25+ Products Built", label: "Scoped and shipped b2b + consumer-facing WebApps, Websites, Mobile Apps" },
  ],
  liveProjects: [
    {
      title: "Prism",
      description:
        "Enter a question and watch an AI agent explore it in real-time. The agent decomposes, researches, connects, and synthesizes, streaming its reasoning as an interactive knowledge graph you can see being built.",
      role: "Agentic Knowledge Visualization",
      tech: ["TypeScript", "Next.js", "Tailwind CSS", "React Flow", "Vitest", "Claude Code", "Anthropic SDK", "SSE"],
      demoUrl: "https://prism-nine-ebon.vercel.app/",
      repoUrl: "https://github.com/dan1el5/prism",
    },
    {
      title: "Vortera",
      description:
        "Interactive, seed-based generative mandala art. Creates visualizations using radial symmetry, particle systems, flow fields, and sacred geometry. Every piece is deterministic from its seed, and every parameter is tunable in real time.",
      role: "Generative Art",
      tech: ["TypeScript", "Next.js", "React", "p5.js", "Tailwind CSS"],
      demoUrl: "https://vortera.vercel.app/",
      repoUrl: "https://github.com/dan1el5/vortera",
    },
    {
      title: "Sentinel",
      description:
        "Real-time seismic event monitoring dashboard powered by USGS earthquake data. Events render on an interactive 3D Mapbox globe with severity-based filtering, detailed analysis, and a tactical command center UI.",
      role: "Geospatial Command Center",
      tech: ["React", "TypeScript", "Tailwind CSS", "Mapbox GL JS", "Python", "FastAPI", "Strawberry GraphQL", "Claude Code", "Vercel", "Render"],
      demoUrl: "https://sentinel-six-kappa.vercel.app/",
      repoUrl: "https://github.com/dan1el5/sentinel",
    },
    {
      title: "This Site",
      description:
        "The site you're on. Built from scratch with Next.js, featuring an interactive dot grid, scroll-driven parallax, spring-physics cursor, and full accessibility support.",
      role: "Design & Development",
      tech: ["TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Claude Code"],
      repoUrl: "https://github.com/dan1el5/personal-site",
    },
  ],
  skills: [
    {
      name: "Frontend",
      skills: ["TypeScript", "React", "React Native", "Next.js", "Tailwind CSS", "Framer Motion", "HTML/CSS", "Vitest", "Figma"],
    },
    {
      name: "Backend & Data",
      skills: ["Node.js", "Python", "Java", "C/C++", "REST/JSON", "tRPC", "PostgreSQL", "Drizzle ORM", "Clerk"],
    },
    {
      name: "Infrastructure & Tooling",
      skills: ["Git", "Claude Code", "Docker", "Kubernetes", "AWS Services", "Vercel", "Prometheus", "Grafana", "Postman", "Jira", "Slack"],
    },
  ],
  socials: [
    {
      label: "GitHub Profile",
      url: "https://github.com/dan1el5",
    },
  ],
};
