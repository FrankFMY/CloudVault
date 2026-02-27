# CloudVault

Landing page for a secure cloud storage service for business. Corporate trustworthy design with blue palette, SVG cloud illustration with floating UI elements, animated progress steps, security certifications, and trial signup form.

## Tech Stack

- **Next.js 16** — App Router, Turbopack
- **Tailwind CSS v4** — `@theme` directive for custom design tokens
- **Framer Motion** — Scroll-triggered animations and progress bar
- **Lucide React** — Icon system

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
components/
  Header.tsx              — Fixed navbar with mobile hamburger menu
  Hero.tsx                — Hero with gradient background and cloud illustration
  CloudIllustration.tsx   — SVG cloud with floating UI element cards
  Advantages.tsx          — Key advantages grid (encryption, uptime, collaboration, 1C)
  HowItWorks.tsx          — Three-step flow with animated progress line
  Pricing.tsx             — Tiered pricing plans in RUB
  Security.tsx            — Security features and compliance badges
  Clients.tsx             — Client logo strip
  CtaBanner.tsx           — Trial signup form with email and company fields
  Footer.tsx              — Site footer with navigation
```
