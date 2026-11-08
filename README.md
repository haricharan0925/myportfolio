# Hari Charan: Portfolio

Personal engineering portfolio built with **React + TypeScript + Vite**. It's a single page with no backend, no analytics and no trackers.

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve the production build
```

## Editing content

All copy, links, skills and projects live in [`src/data/profile.ts`](src/data/profile.ts).

- **Project status:** set `status: 'Completed'` or `'In progress'` on a project to show a status pill.

## Structure

```
src/
  data/profile.ts         content (single source of truth)
  components/             Navbar, Hero, HeroVisual, About, Experience, Skills,
                          Projects, Capabilities, Contact, Footer, Background,
                          Reveal, SectionHeading
  hooks/                  useActiveSection, useSpotlight
  index.css               design tokens, layout, animations, responsive rules
public/
  favicon.svg, og-image.png, 404.html
```

## Before deploying

- Set `og:url` and an absolute `og:image` URL in `index.html`.
- Accessibility: semantic landmarks, a skip link, keyboard-operable menu (Esc closes it), visible focus states and `prefers-reduced-motion` support.
