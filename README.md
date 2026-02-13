# Andrew Salazar — Portfolio

Inspired by [adarsha.dev](https://adarsha.dev). Built with **Next.js 15**, **Tailwind CSS**, and **Geist** font.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## File Structure

```
app/
  layout.tsx        ← Root layout + Geist font setup
  page.tsx          ← Main page
  globals.css       ← Tailwind base + global styles

components/
  Nav.tsx           ← Sticky top nav with social icons
  Hero.tsx          ← Intro section with avatar + prose
  Projects.tsx      ← Project list
  Skills.tsx        ← Skills grouped by category
  Experience.tsx    ← Work & education timeline
  Footer.tsx        ← Footer with contact info

lib/
  data.ts           ← ⭐ Edit all your content here
```

---

## Customization

**All content lives in `lib/data.ts`** — update your name, bio, projects, skills, and experience there.

### Adding your photo
1. Add your photo to `/public/avatar.jpg`
2. In `components/Hero.tsx`, replace the initials `<div>` with:
```tsx
<Image src="/avatar.jpg" alt="Andrew Salazar" width={64} height={64} className="rounded-full" />
```

### Updating project GitHub links
In `lib/data.ts`, find the `projects` array and update the `href` fields with real repo URLs.

### Adding LinkedIn
Update the `linkedin` field in `lib/data.ts` and update the LinkedIn href in `components/Nav.tsx`.

---

## Deploy

Push to GitHub and connect to [Vercel](https://vercel.com) for instant deployment.
