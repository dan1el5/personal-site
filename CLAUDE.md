# Project: Personal Portfolio Site

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build (must pass clean)
- `npm run lint` — ESLint

## Stack
- Next.js 16 (App Router), TypeScript strict, Tailwind CSS v4, Framer Motion
- Font: Roboto Mono (`next/font/google`)
- Target deploy: Netlify

## Architecture
- All personal content is centralized in `lib/config.ts` — never hardcode strings in components
- GitHub API routes use edge runtime + ISR caching (1hr revalidate)
- GitHub credentials in `.env.local` (gitignored), documented in `.env.example`
- Animation components in `components/animations/` are reusable wrappers
- All animations respect `prefers-reduced-motion` via `useReducedMotion` hook

## Conventions
- No `any` types, no `@ts-ignore`
- Framer Motion `ease` arrays must use `as const` for strict mode
- Section backgrounds alternate `#fafafa` / `#f3f3f3` — dot grid on white sections only
- Don't use fixed z-index background layers (stacking context issues in Next.js) — place decorative elements inline in sections
- `mix-blend-difference` on nav must toggle off when mobile menu is open
- Custom cursor disabled on touch devices via `pointer: fine` media query
- CSS `radial-gradient` for static dot grids (canvas has timing issues)
- Project cards are case studies with no external links (private B2B work)
