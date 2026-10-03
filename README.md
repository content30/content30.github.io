# Content30 | Free 100% Client-Side 30-Day Social Media Calendar

> **Privacy-first, zero-server 30-day content planner built with Astro, React Islands, and Tailwind CSS.**
> Plan, organize, and export a month of high-converting social media posts directly in your browser using local storage.

🌐 **Live URL**: [https://content30.github.io](https://content30.github.io)  
☕ **Support Developer**: [buymeacoffee.com/kisharadilz](https://buymeacoffee.com/kisharadilz)

---

## 🌟 Key Features

- **100% Client-Side & Zero-Server Storage**: No accounts, no cookies, no third-party tracking, and zero database writes. All content ideas, hooks, scripts, and schedules stay strictly saved in your browser's `LocalStorage`.
- **Interactive 30-Day Grid & Timeline**:
  - Desktop view: Elegant, calendar-style multi-column grid.
  - Mobile & Tablet view: Seamless vertical timeline / stacked cards.
  - Switch between Grid and Timeline views on any screen size.
- **Click-to-Edit Modal Engine**:
  - Post Title / Core Topic Hook.
  - Social Platform selector (TikTok, Instagram, YouTube, X/Twitter, LinkedIn, Pinterest, Threads, Facebook).
  - Content Format (Reel/Short, Carousel, Single Photo, Long Video, Text Thread, Story, Article).
  - Production Status (Idea, Scripting, In Progress, Ready, Published).
  - Target Posting Time and Hashtags.
  - Opening Hook & Notes + Full Caption copy.
  - Automatic continuous save on every keystroke.
  - Quick "Copy to Next Day" button for fast batching.
- **Instant Client-Side Export**:
  - **CSV Export**: Instant structured spreadsheet download.
  - **PNG Image Export**: High-resolution image rendering of the full 30-day calendar using client-side canvas.
  - **JSON Backup & Restore**: Effortlessly backup your strategies or switch devices without cloud sync.
  - **Print / PDF Friendly**: Clean `@media print` styling for paper prints or PDF export.
- **Pre-Loaded Sample Strategy**: One-click starter pack loaded with 30 creator-tested hook formulas, carousels, reels, and video ideas.
- **Responsive Strict-Icon Navigation**:
  - Desktop: Full text labels with icons.
  - Mobile & Tablet: Strictly collapsed to **ICONS ONLY** for a clean, uncluttered responsive experience.
- **Light & Dark Theme Switcher**:
  - Custom palette based on `#F7EAE0` (cream canvas), `#F9D2BA` (accent peach), `#1D4533` (primary dark green), and `#5E3122` (secondary brown).
  - Inverted dark mode with zero flash of unstyled content (FOUC).
- **Internationalization (i18n)**:
  - 5 Static Localized Subpaths:
    - English: `/`
    - Spanish: `/es/`
    - French: `/fr/`
    - Portuguese: `/pt/`
    - Japanese: `/ja/`
- **Technical SEO Architecture**:
  - OpenGraph & Twitter Card tags with `<meta property="og:site_name" content="Content30" />`.
  - Crawlable `hreflang` alternate links for all 5 languages + `x-default`.
  - Dynamically injected `WebApplication` and `SoftwareApplication` JSON-LD schemas targeting keywords like `free 30 day content calendar`, `social media planner online`, and `private content scheduler`.
  - Optimized `sitemap.xml` and `robots.txt`.

---

## 🎨 Design System & Custom Color Palette

| Name | Hex Code | Purpose |
|---|---|---|
| **Primary Dark Green** | `#1D4533` | Brand identity, primary typography, buttons, ready badges |
| **Background Cream** | `#F7EAE0` | Clean light mode canvas, high contrast readability |
| **Accent Peach** | `#F9D2BA` | Interactive grid cards, hover states, dark mode accents |
| **Secondary Brown** | `#5E3122` | Supporting typography, category badges, coffee support button |

---

## 🛠️ Technology Stack

- **Static Site Generator**: [Astro 5+](https://astro.build)
- **Interactive UI (Islands Architecture)**: [React 19](https://react.dev)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com)
- **Icons**: Lucide React + custom inline brand SVGs
- **Client-Side Export**: `html-to-image`, Blob CSV generation
- **Celebration Effects**: `canvas-confetti`
- **Deployment**: GitHub Pages (via GitHub Actions `.github/workflows/deploy.yml`)

---

## 🚀 Development & Build

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:4321](http://localhost:4321) in your browser.

### 3. Build for Production
```bash
npm run build
```
Generates static pages in the `dist/` directory ready for GitHub Pages.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📦 Deployment to GitHub Pages

1. Push changes to the `main` branch:
   ```bash
   git add .
   git commit -m "feat: complete Content30 30-day social media calendar"
   git push origin main
   ```
2. In your GitHub repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. The included workflow `.github/workflows/deploy.yml` will automatically build and deploy the root domain `https://content30.github.io`.

---

## 📄 License

MIT License. Free for commercial and personal creator use.
Developed with ❤️ by [Kishan Radilz](https://buymeacoffee.com/kisharadilz).
