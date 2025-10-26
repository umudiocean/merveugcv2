# Merve UGC Portfolio Website

A modern, performance-optimized portfolio website for Merve UGC - showcasing UGC video content creation services for TikTok and Instagram Reels.

## Features

- ✨ Modern, minimal dark theme with gold accents
- 🎬 Portfolio showcase with video modals
- 📦 Service packages with detailed pricing
- 📊 Results and statistics section
- 💬 Client testimonials
- 📝 Contact form with validation
- 🎨 Smooth animations with Framer Motion
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Built with Next.js 14 App Router
- 🎯 SEO optimized with JSON-LD schema
- ♿ Accessible (WCAG AA compliant)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Manrope (Google Fonts)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy automatically

Or use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

## Customization

### Content

All content is centralized in `app/lib/constants.ts`:

- Social media links
- Portfolio items
- Packages
- Testimonials
- FAQ items
- Process steps

### Styling

- Colors: `tailwind.config.ts` and `app/globals.css`
- Fonts: Update in `app/layout.tsx`
- Animations: Configure in component files

### Images & Videos

- Add portfolio images to `public/images/`
- Add portfolio videos to `public/videos/`
- Update references in `app/lib/constants.ts`

## Structure

```
/app
  /components       # React components
  /lib              # Constants and utilities
  globals.css       # Global styles
  layout.tsx        # Root layout
  page.tsx          # Main page
/public             # Static assets
```

## Performance

- Lighthouse score target: 90+
- Image optimization with next/image
- Motion-safe preferences supported
- Lazy loading for non-critical content

## License

© 2025 Merve UGC. All rights reserved.

