# Next.js + Tailwind Portfolio (No Watermarks)

A clean, fully customizable portfolio starter using **Next.js (App Router)** and **Tailwind CSS**.  
Deploy free with **Vercel** or **Netlify** — your site won’t show any ads or watermarks.

## Quick Start

```bash
# 1) Install deps
npm install

# 2) Run locally
npm run dev

# 3) Build for prod
npm run build && npm start
```

## Customize

Edit `lib/siteConfig.ts` to change your **name, role, summary, email, socials, and projects**.  
Most of the text on the home page is powered by this file.

- Colors & spacing → `tailwind.config.ts` / `app/globals.css`
- Nav / Footer → `components/Navbar.tsx` and `components/Footer.tsx`
- Projects layout → `components/ProjectCard.tsx`

## Deploy (Free)

### Vercel
1. Push this folder to a **GitHub** repo.
2. Go to **vercel.com → Add New Project → Import** your repo.
3. Framework preset: **Next.js** (auto-detects). Build command defaults are fine.
4. Click **Deploy**. Your site will be live at `https://<project>.vercel.app`.
5. (Optional) Add your custom domain in **Vercel → Settings → Domains**.

### Netlify
1. Push to GitHub.
2. Go to **app.netlify.com → Add new site → Import an existing project**.
3. Build command: `npm run build`  
   Publish directory: `.next` (Netlify will auto-detect Next.js).
4. Click **Deploy**. (Add domain later in **Site settings → Domain management**.)

## Notes

- This template only uses static/server components—no serverless functions required.
- If you add API routes or forms, both Vercel and Netlify support serverless functions on free plans.
- Keep it simple: start with your About + 3 projects; you can expand later.

---

**License**: MIT


## Troubleshooting
- If you see `Module not found: Can't resolve '@/...'`, make sure `tsconfig.json` contains:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@/*": ["./*"] }
  }
}
```
- Restart your editor/TypeScript server and re-run `npm run dev`.
- To upgrade Next.js: `npm i next@latest eslint-config-next@latest`.
