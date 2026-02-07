"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionAccents } from "@/components/animations/SectionAccents";
import { DotGrid } from "@/components/animations/DotGrid";
import { siteConfig } from "@/lib/config";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.featured;

  return (
    <FadeIn delay={index * 0.1} className={isFeatured ? "md:col-span-2" : ""}>
      <motion.div
        className="cursor-hover group relative border border-border p-6 md:p-8 hover:border-fg transition-colors duration-500 h-full overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Hover fill */}
        <div className="absolute inset-0 bg-fg origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-out" />

        <div className="relative z-10 group-hover:text-bg transition-colors duration-500">
          {isFeatured && (
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted group-hover:text-bg/60 mb-4 transition-colors duration-500">
              Featured Project
            </p>
          )}

          <h3 className="text-lg md:text-xl font-light tracking-tight mb-2">
            {project.title}
          </h3>

          <p className="text-[10px] tracking-[0.2em] uppercase text-muted-light group-hover:text-bg/50 mb-4 transition-colors duration-500">
            {project.role}
          </p>

          <p className="text-xs leading-relaxed text-muted group-hover:text-bg/70 mb-6 transition-colors duration-500">
            {project.description}
          </p>

          {/* Impact metrics */}
          <ul className="space-y-2 mb-6">
            {project.impact.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted group-hover:text-bg/70 transition-colors duration-500">
                <span className="w-1 h-1 rounded-full bg-fg group-hover:bg-bg/70 mt-1.5 shrink-0 transition-colors duration-500" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                className="group-hover:border-bg/30 group-hover:text-bg/80 transition-colors duration-500"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}

function SkillsSection() {
  return (
    <div className="mt-32 md:mt-48">
      <FadeIn>
        <p className="text-[10px] tracking-[0.3em] uppercase text-muted mb-12">
          Technologies
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {siteConfig.skills.map((category, categoryIndex) => (
          <FadeIn key={category.name} delay={categoryIndex * 0.15}>
            <div>
              <h3 className="text-xs tracking-[0.2em] uppercase mb-6 font-medium">
                {category.name}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      className="group flex items-center gap-3 text-sm text-muted"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.15 + skillIndex * 0.05,
                        duration: 0.4,
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-border transition-transform duration-300 group-hover:scale-150" />
                      <span className="group-hover:text-fg transition-colors duration-300">
                        {skill}
                      </span>
                    </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

export function Dev() {
  return (
    <section id="dev" className="relative py-32 md:py-48 overflow-hidden">
      <DotGrid />

      <SectionAccents
        accents={[
          { type: "ring", size: 140, top: "5%", left: "3%", speed: 0.2 },
          { type: "square", size: 30, top: "30%", right: "4%", speed: -0.15, rotate: 15 },
          { type: "dot", size: 10, top: "55%", left: "2%", speed: 0.3 },
          { type: "line", size: 100, top: "75%", right: "6%", speed: 0.2, rotate: 40 },
          { type: "cross", size: 18, bottom: "10%", left: "5%", speed: -0.25 },
          { type: "ring", size: 60, bottom: "20%", right: "3%", speed: 0.15 },
        ]}
      />

      <Container className="relative">
        <SectionHeading label="02" title="Dev" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteConfig.projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <SkillsSection />
      </Container>
    </section>
  );
}
