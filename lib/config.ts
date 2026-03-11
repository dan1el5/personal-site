import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "<DG/>",
  fullName: "DG",
  role: "Product Designer & Full Stack Developer",
  bio: [
    "I'm a frontend-leaning full-stack developer based in Toronto who thrives in fast-moving, collaborative environments. I partner closely with designers, product managers, and backend engineers to turn ambiguous requirements into polished, scalable products across web and mobile.",
    "My core stack is TypeScript and React, but I work across the full stack, collaborating on API design, data models, and AI-powered features with a frontend lens on usability and clarity. I care about building interfaces that feel intuitive, not just functional.",
    "I'm drawn to evolving products where the roadmap shifts and the engineering challenges grow with it. I enjoy the full lifecycle, from requirements gathering and technical specification through to shipping and iterating.",
  ],
  highlights: [
    { value: "BSc Computer Science", label: "Western University" },
    { value: "Prev Co-Founder", label: "Aurelis, Software Development Agency" },
    { value: "25+ Products Built", label: "Scoped and shipped b2b + consumer-facing WebApps, Websites, Mobile Apps" },
  ],
  paidProjects: [
    {
      title: "Cintrex",
      description:
        "An operations dashboard for a property management company. Replaced scattered email and spreadsheet workflows with a structured ticketing system, role-based access, audit trails, and real-time reporting.",
      role: "CRM",
      tech: ["TypeScript", "React", "Node.js", "REST API", "PostgreSQL"],
    },
    {
      title: "Fogain",
      description:
        "A unified tool suite for an accounting firm. Consolidated 7+ siloed internal tools into one environment with shared access controls, reporting dashboards, and a tax-report generator.",
      role: "CRM",
      tech: ["TypeScript", "React", "Node.js", "REST API", "Tailwind CSS"],
    },
    {
      title: "OtomAI",
      description:
        "A chat-based financial assistant powered by OpenAI. Natural-language interface for report generation, data interpretation, and financial summarization, tailored to domain-specific accounting workflows.",
      role: "LLM Interface",
      tech: ["TypeScript", "React", "OpenAI API", "Node.js", "Tailwind CSS"],
    },
    {
      title: "QueueTrack",
      description:
        "A React Native app for university students to check real-time wait times at nearby bars. Crowdsourced reporting, live queue data, and location-aware listings.",
      role: "Mobile App",
      tech: ["React Native", "TypeScript", "Node.js", "REST API"],
    },
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
      title: "Sentinel",
      description:
        "Real-time seismic event monitoring dashboard that ingests live earthquake data from the USGS API. A Python FastAPI backend normalizes and caches upstream data, exposing it via both REST and GraphQL endpoints. The React frontend renders events on an interactive 3D Mapbox globe with severity-based filtering, detailed event analysis, and a tactical command center UI.",
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
      skills: ["Node.js", "Express.js", "Python", "Java", "C/C++", "REST/JSON", "tRPC", "PostgreSQL", "Drizzle ORM", "Clerk"],
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
