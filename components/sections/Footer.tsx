"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <FadeIn>
            <div>
              <p className="text-sm font-medium tracking-wider mb-2">
                {siteConfig.name}
              </p>
              <p className="text-xs text-muted">
                {siteConfig.role}
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex items-center gap-6">
              {siteConfig.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative text-xs tracking-widest uppercase text-muted hover:text-fg transition-colors duration-300"
                >
                  {social.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-fg transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-[10px] tracking-wider text-muted-light">
              <motion.span
                key={currentYear}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block"
              >
                &copy; {currentYear}
              </motion.span>
              {" "}{siteConfig.name}
            </p>
            <p className="text-[10px] tracking-wider text-muted-light">
              Built with Next.js, TypeScript &amp; Tailwind
            </p>
          </div>
        </FadeIn>
      </Container>
    </footer>
  );
}
