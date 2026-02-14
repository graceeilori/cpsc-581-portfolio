# 581 — CPSC 581 Portfolio

An interactive portfolio website for CPSC 581 (Human-Computer Interaction) featuring a glowing "581" landing page with draggable physics, warm paper aesthetics, and animated project case studies.

## Tech Stack

- **Next.js 16** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (drag physics, animations, transitions)

## Getting Started

```bash
cd my-app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
my-app/app/
├── components/          # Shared UI components
│   ├── GlowNumber.tsx       # Interactive 581 numbers (drag, glow, click)
│   ├── VinylPlayer.tsx      # Spinning vinyl record
│   ├── PolaroidPhoto.tsx    # Polaroid-style photo card
│   ├── ProjectLayout.tsx    # Shared project page layout
│   ├── ImageGallery.tsx     # Lightbox image gallery
│   ├── FloatingMusicBadge.tsx
│   ├── BackButton.tsx
│   ├── ScrollHint.tsx
│   └── PageTransition.tsx
├── about/               # /about — Bio & design philosophy
├── project-5/           # /project-5 — Group Project 1
├── project-8/           # /project-8 — Group Project 2
├── project-1/           # /project-1 — Group Project 3
├── layout.tsx           # Root layout (fonts, metadata)
├── page.tsx             # Landing page (581 hero)
└── globals.css          # Theme tokens, textures, glows
```

## Adding / Editing Projects

Each project lives in `app/project-{N}/ProjectPage.tsx`. Edit the props passed to `<ProjectLayout>`:

- **projectTitle / projectSubtitle** — displayed in the hero
- **heroImage** — full-width hero background
- **problemSpace / designProcess / solution / reflection** — section content + images
- **songName / artist** — floating music badge text

Replace placeholder images (`picsum.photos` URLs) with your actual project assets.

## Spotify Integration (Future)

The vinyl player and music badges are currently visual placeholders. To connect Spotify:

1. Create an app at [developer.spotify.com](https://developer.spotify.com)
2. Add env vars to `.env.local`:
   ```
   SPOTIFY_CLIENT_ID=your_client_id
   SPOTIFY_CLIENT_SECRET=your_client_secret
   ```
3. Implement the Spotify Web API in `VinylPlayer.tsx`

## Deployment (Vercel)

1. Push to GitHub
2. Import in [vercel.com](https://vercel.com)
3. Set **Root Directory** to `my-app`
4. Add Spotify env vars in Vercel dashboard (when ready)
5. Deploy — zero config needed for Next.js
