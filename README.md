# Dr. പപ്പനും പിള്ളേരും — Digital Memory Book

A scrapbook-inspired Next.js App Router foundation for the 2025 B.Tech CSE batch of TKM College of Engineering.

## Current build

Stage 1–2 foundation: design tokens, typography, shared navigation/section/card/footer components, and a complete responsive homepage concept. Route shells are included for the planned sections and individual student profiles. The current student names, award examples, and project tiles are clearly demo placeholders. The photography uses generic Unsplash images only as layout stand-ins; replace them with batch-approved photographs before launch.

The community, upload, voting, authentication, and admin publishing flows are intentionally not simulated. They require the Supabase integration and moderation rules in later stages.

## Stack

- Next.js 15 App Router + TypeScript
- Tailwind CSS 4 (with a detailed custom CSS design system)
- Framer Motion
- Lucide React
- Supabase dependencies and environment placeholders (integration comes after UI approval)

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Design tokens

- Paper: `#F6EEDC`
- Sand: `#D9B98C`
- Terracotta: `#A65E3F`
- Olive: `#526B50`
- Ink: `#34312D`

## Next stages

1. Add the route pages and shared page shell.
2. Add real student profiles and albums.
3. Integrate Supabase Auth, PostgreSQL, Storage, and RLS policies.
4. Build moderated community flows and admin RBAC.
5. Add automated tests, accessibility checks, and Vercel deployment config.

Never put `SUPABASE_SERVICE_ROLE_KEY` in a `NEXT_PUBLIC_` variable or client bundle.
