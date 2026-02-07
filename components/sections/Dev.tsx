"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { siteConfig } from "@/lib/config";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.featured;

  return (
    <FadeIn delay={index * 0.1} className={isFeatured ? "md:col-span-2" : ""}>
      <motion.a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block border border-border p-6 md:p-8 hover:border-fg transition-colors duration-500 relative overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Hover fill */}
        <div className="absolute inset-0 bg-fg origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

        <div className="relative z-10 group-hover:text-bg transition-colors duration-500">
          {isFeatured && (
            <p className="text-[10px] tracking-[0.3em] uppercase text-muted group-hover:text-bg/60 mb-4 transition-colors duration-500">
              Featured Project
            </p>
          )}

          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg md:text-xl font-light tracking-tight">
              {project.title}
            </h3>
            <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              &rarr;
            </span>
          </div>

          <p className="text-xs leading-relaxed text-muted group-hover:text-bg/70 mb-6 max-w-lg transition-colors duration-500">
            {project.description}
          </p>

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
      </motion.a>
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
                {category.skills.map((skill, skillIndex) => {
                  const isHighlighted =
                    skill === "TypeScript" || skill === "React";
                  return (
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
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-transform duration-300 group-hover:scale-150 ${
                          isHighlighted ? "bg-fg" : "bg-border"
                        }`}
                      />
                      <span
                        className={
                          isHighlighted
                            ? "text-fg font-medium"
                            : "group-hover:text-fg transition-colors duration-300"
                        }
                      >
                        {skill}
                      </span>
                    </motion.li>
                  );
                })}
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
    <Container as="section" id="dev" className="py-32 md:py-48">
      <SectionHeading label="02" title="Dev" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {siteConfig.projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>

      <SkillsSection />
    </Container>
  );
}
