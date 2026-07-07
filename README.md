# Nikky & Emily — Wedding Website

A luxury, invitation-style wedding website built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech stack

- **React 19** — component structure
- **Vite** — dev server & build tool
- **Tailwind CSS v4** — styling (theme tokens live in `src/index.css`)
- **Framer Motion** — animations

## Project structure

```
src/
  components/
    LoadingScreen.jsx   ← full-screen entrance animation (isolated — swap freely)
    Navbar.jsx           ← sticky nav with smooth scroll
    Hero.jsx              ← "Nikky & Emily" hero section
    WeddingDetails.jsx    ← Wedding Mass + Wedding Lunch cards
    Story.jsx             ← "Our Story" section (placeholder copy)
    Gallery.jsx           ← photo grid + lightbox
    RSVP.jsx               ← RSVP form (frontend-only for now)
    Footer.jsx             ← closing footer
    LeafDivider.jsx        ← reusable gold ornament (signature motif)
    Monogram.jsx            ← animated "N & E" line-drawing monogram
  App.jsx
  main.jsx
  index.css               ← Tailwind import + colour/type tokens
```

---

## 1. Getting set up in VS Code

1. Open **VS Code**.
2. Choose **File → Open Folder…** and select this `wedding-website` folder.
3. Open the built-in terminal: **Terminal → New Terminal**.
4. Install dependencies:

   ```bash
   npm install
   ```

5. Start the local dev server:

   ```bash
   npm run dev
   ```

6. Vite will print a local URL (usually `http://localhost:5173`). Open it in your browser.

Any file you save will hot-reload instantly in the browser — no need to refresh manually.

---

## 2. Customising content

- **Text**: edit the copy directly inside each file in `src/components/`. Look for comments marked `PLACEHOLDER` or `Replace this...`.
- **Images**: `Hero.jsx`, `Story.jsx`, and `Gallery.jsx` each contain a clearly marked placeholder block/comment showing exactly where to drop in an `<img src="..." />`. Put your image files in the `public/` folder and reference them as `/your-image.jpg`.
- **Colours**: all colours are defined once in `src/index.css` under `@theme` — change a hex value there and it updates everywhere.
- **RSVP backend**: open `src/components/RSVP.jsx` and look at the `submitRSVP` function near the top — it has commented examples for Firebase, Supabase, and a generic REST/email endpoint. Uncomment and adapt the one you want.
- **Loading screen**: `LoadingScreen.jsx` is fully self-contained. Replace the JSX inside it with your own animation any time without touching the rest of the app.

---

## 3. Building for production

```bash
npm run build
```

This creates an optimised, production-ready build in the `dist/` folder.

To preview that build locally before deploying:

```bash
npm run preview
```

---

## 4. Deploying to Vercel

1. Push this project to a GitHub repository:

   ```bash
   git init
   git add .
   git commit -m "Initial wedding website"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) and sign in (GitHub sign-in is easiest).
3. Click **Add New… → Project**, then select this GitHub repository.
4. Vercel auto-detects the Vite framework — leave the default build settings (`npm run build`, output directory `dist`).
5. Click **Deploy**. In under a minute your site goes live at a `*.vercel.app` URL.
6. Optional: add a custom domain under **Project Settings → Domains**.

---

## Notes

- The RSVP form currently only handles submissions in the browser (it simulates a short delay, then shows a success message) so you can see and test the full flow before connecting a real backend.
- Fonts (`Cormorant Garamond` for display, `Jost` for body text) are loaded from Google Fonts in `index.html`.
- Reduced-motion is respected — visitors with that OS setting enabled will see minimal animation.
