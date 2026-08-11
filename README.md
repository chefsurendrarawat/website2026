# Chef Surendra Rawat — Portfolio Website

Static portfolio site for Chef Surendra Rawat, Executive Chef at India Palace Restaurant, Wheaton IL.

## Tech Stack

- **Astro 5** — Static site generator, zero JS shipped to browser
- **Tailwind CSS 4** — Utility-first styling
- **Sanity CMS** — Headless content management
- **Formspree** — Contact form submissions
- **Vercel** — Static hosting + CDN

## Architecture

```
├── src/
│   ├── components/     # Astro components (static HTML)
│   ├── layouts/        # Base HTML layout with SEO meta
│   ├── lib/            # Sanity client + GROQ queries
│   ├── pages/          # Route pages
│   └── styles/         # Global CSS + animations
├── public/             # Static assets (images, CV, icons)
├── studio/             # Sanity Studio (deployed separately)
└── astro.config.mjs    # Astro configuration
```

## Content Management

Chef edits content at: https://chef-surendra-rawat.sanity.studio

Content types: Dishes, Timeline, Press, Reviews, Awards, Videos, Gallery, Site Settings

## Development

```bash
npm install
npm run dev       # Local dev server at localhost:4321
npm run build     # Build static site to dist/
npm run preview   # Preview production build
```

## Deployment

Hosted on Vercel with auto-deploy on push to `main`.

- Framework: Astro
- Build: `npm run build`
- Output: `dist`
- No env vars required (Sanity project ID is public read-only)

Auto-rebuild on CMS publish via Vercel Deploy Hook + Sanity Webhook.

## Security

- Zero JavaScript runtime — pure static HTML + CSS
- No API routes or server-side code
- No dependencies shipped to client
- Contact form handled by Formspree (external)
- Sanity data fetched at build time only

---

Built by [withHarsh.com](https://withharsh.com)
