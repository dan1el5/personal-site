"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionAccents } from "@/components/animations/SectionAccents";
import { DotGrid } from "@/components/animations/DotGrid";
import { siteConfig } from "@/lib/config";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasLinks = project.demoUrl || project.repoUrl;

  return (
    <FadeIn delay={index * 0.1}>
      <div className="border border-border p-6 md:p-8 h-full hover:border-fg transition-colors duration-300">
        <h3 className="text-lg md:text-xl font-light tracking-tight mb-2">
          {project.title}
        </h3>

        <p className="text-[10px] tracking-[0.2em] uppercase text-muted-light mb-4">
          {project.role}
        </p>

        <p className="text-xs leading-relaxed text-muted mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        {hasLinks && (
          <div className="flex gap-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] uppercase border border-fg bg-transparent hover:bg-fg hover:text-bg px-4 py-2 transition-colors duration-300"
              >
                Live Demo
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.2em] uppercase border border-border hover:border-fg px-4 py-2 transition-colors duration-300"
              >
                Source Code
              </a>
            )}
          </div>
        )}
      </div>
    </FadeIn>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative pt-20 md:pt-28 pb-32 md:pb-48 overflow-hidden"
    >
      <DotGrid />

      <SectionAccents
        accents={[
          { type: "ring", size: 140, top: "5%", left: "3%", speed: 0.2 },
          {
            type: "square",
            size: 30,
            top: "30%",
            right: "4%",
            speed: -0.15,
            rotate: 15,
          },
          { type: "dot", size: 10, top: "55%", left: "2%", speed: 0.3 },
          {
            type: "line",
            size: 100,
            top: "75%",
            right: "6%",
            speed: 0.2,
            rotate: 40,
          },
          { type: "cross", size: 18, bottom: "10%", left: "5%", speed: -0.25 },
          { type: "ring", size: 60, bottom: "20%", right: "3%", speed: 0.15 },
        ]}
      />

      <Container className="relative">
        <SectionHeading label="02" title="Projects" />

        <FadeIn>
          <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-8">
            Live Projects
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteConfig.liveProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <div className="mt-24 md:mt-32">
          <FadeIn>
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-8">
              Client Projects - Code Private
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {siteConfig.paidProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
