import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "<DG/>",
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
        "An internal operations dashboard for a property management company, built to replace ad-hoc email and spreadsheet workflows. Designed and implemented a work-order ticketing system with structured submission, assignment, and resolution flows tied to clear SLAs. Added role-based access control, access reviews, and a full activity trail for audit traceability. Integrated notification pipelines and reporting views to give cross-functional teams visibility into operational status.",
      role: "Full Stack Developer",
      impact: [
        "Designed a work-order/ticketing workflow with submission, assignment, and resolution tied to SLAs",
        "Implemented RBAC, access reviews, and an activity trail to improve traceability and compliance",
        "Integrated notifications and reporting to streamline cross-team coordination",
      ],
      tech: ["TypeScript", "React", "Node.js", "REST API", "PostgreSQL"],
    },
    {
      title: "Fogain",
      description:
        "An integrated tool suite for an accounting firm that consolidated 7+ previously siloed internal tools into a single shared environment with unified access controls. Built reporting dashboards and a tax-report generator to reduce manual data entry and improve accuracy during filing season. Maintained lightweight FAQs and support documentation to reduce onboarding friction for new users across the firm.",
      role: "Full Stack Developer",
      impact: [
        "Centralized 7+ internal tools into a shared environment with unified access controls",
        "Built reporting dashboards and a tax-report generator to reduce manual workflows",
        "Maintained lightweight FAQs and support notes to streamline user onboarding",
      ],
      tech: ["TypeScript", "React", "Node.js", "REST API", "Tailwind CSS"],
    },
    {
      title: "OtomAI",
      description:
        "A chat-based financial assistant for an accounting firm, powered by OpenAI's API. Designed and built the conversational interface and prompt orchestration layer to automate routine tasks like report generation, data interpretation, and financial summarization. Tailored prompts to domain-specific accounting workflows to improve output accuracy and reduce back-and-forth between users and the system.",
      role: "Full Stack Developer",
      impact: [
        "Used OpenAI's API with tailored prompts to automate report generation and data interpretation",
        "Built a conversational UI for natural-language interaction with financial data",
        "Reduced manual effort on routine accounting tasks through prompt-driven automation",
      ],
      tech: ["TypeScript", "React", "OpenAI API", "Node.js", "Tailwind CSS"],
    },
    {
      title: "QueueTrack",
      description:
        "A React Native mobile app that lets university students check real-time wait times at bars near campus. Users can report and view line lengths, helping them decide where to go on busy nights. Built the full mobile client with live-updating queue data, location-based bar listings, and a simple crowdsourced reporting flow.",
      role: "Mobile Developer",
      impact: [
        "Built an IOS app with React Native for real-time bar line tracking",
        "Implemented crowdsourced reporting so users could share and view live wait times",
        "Designed a location-aware UI for browsing nearby bars and their current queue status",
      ],
      tech: ["React Native", "TypeScript", "Node.js", "REST API"],
    },
  ],
  liveProjects: [
    {
      title: "Prism",
      description:
        "A web app where you enter a question and an AI agent autonomously explores it, producing a structured knowledge map with synthesis, all visible in real-time. The agent runs four stages: decomposing the question into lenses, exploring concepts per lens in parallel, finding cross-domain connections, and synthesizing key tensions and patterns. The agent's reasoning trace is the UI. Every stage streams in via SSE so you watch it think in real-time, while an interactive React Flow graph builds up as concepts and connections arrive.",
      role: "Designer & Developer",
      impact: [
        "Built a multi-stage AI agent pipeline with real-time SSE streaming and progressive UI rendering",
        "Interactive knowledge graph with lens-colored nodes, built with React Flow and dagre layout",
        "Pre-baked explorations stored as static JSON with progressive reveal to simulate the live experience",
        "Rate-limited to 5 live explorations per IP/day with no database, stateless by design",
      ],
      tech: ["TypeScript", "Next.js", "Tailwind CSS", "React Flow", "Vitest", "Claude Code", "Anthropic SDK", "SSE"],
      demoUrl: "https://prism-nine-ebon.vercel.app/",
      repoUrl: "https://github.com/dan1el5/prism",
    },
    {
      title: "This Site",
      description:
        "A from-scratch developer portfolio built with Next.js App Router and TypeScript strict mode. Features an interactive canvas dot grid with cursor reactivity, scroll-driven parallax animations, and a custom cursor with spring physics. Developed using agentic coding practices with Claude Code, iterating on architecture, design, and implementation through AI-assisted pair programming.",
      role: "Designer & Developer",
      impact: [
        "Interactive hero with auto-animating wave pulses and cursor-reactive dot grid",
        "Full accessibility support including prefers-reduced-motion and keyboard navigation",
        "Built end-to-end with Claude Code as an agentic coding partner for rapid iteration",
      ],
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
      skills: ["Node.js", "Express.js", "Python", "Flask", "Java", "C/C++", "REST/JSON", "tRPC", "SQL", "Supabase", "Drizzle ORM", "Clerk"],
    },
    {
      name: "Infrastructure & Tooling",
      skills: ["Git", "Claude Code", "Docker", "Kubernetes", "AWS Services", "Vercel/Netlify", "Prometheus", "Grafana", "Postman", "Jira", "Slack"],
    },
  ],
  socials: [
    {
      label: "GitHub Profile",
      url: "https://github.com/dan1el5",
    },
  ],
};
