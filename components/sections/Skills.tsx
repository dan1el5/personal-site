"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/animations/FadeIn";
import { SectionAccents } from "@/components/animations/SectionAccents";
import { siteConfig } from "@/lib/config";

export function Skills() {
  return (
    <section id="skills" className="relative pt-20 md:pt-28 pb-32 md:pb-48 overflow-hidden bg-[#f3f3f3]">
      <SectionAccents
        accents={[
          { type: "ring", size: 80, top: "10%", right: "5%", speed: 0.2 },
          { type: "dot", size: 10, top: "40%", left: "3%", speed: -0.15 },
          { type: "cross", size: 18, bottom: "15%", right: "4%", speed: 0.25 },
        ]}
      />

      <Container className="relative">
        <SectionHeading label="03" title="Skills" />

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
      </Container>
    </section>
  );
}
