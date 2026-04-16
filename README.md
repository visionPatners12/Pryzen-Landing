# Pryzen — Team Index Landing Page

A sports-tech landing page for the Pryzen ecosystem, built with React, Vite, and Tailwind CSS. Features Lottie animations, glassmorphic UI components, and a responsive multi-section layout.

## Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool & dev server
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations & transitions
- **Lottie React** — Lottie animation playback
- **Lucide React** — Icon library

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── AnimationCard  # Glassmorphic Lottie wrapper
│   │   ├── BenefitItem    # Checkmark list item
│   │   ├── BracketLabel   # Animated bracket badge
│   │   ├── CryptoIcons    # USDT, WETH, USDC, Polygon, Base SVGs
│   │   ├── GoldButton     # CTA button with image background
│   │   ├── GradientHeading# Gold gradient heading
│   │   └── ImageSlider    # Dot-indicator image carousel
│   ├── AnimatedLayer.jsx  # Lottie animation layer
│   └── SceneCanvas.jsx    # Hero scene renderer
├── pages/Home/
│   ├── Home.jsx           # Main page layout
│   └── sections/          # Page sections
│       ├── Navigation     # Fixed header + mobile drawer
│       ├── HeroSection    # Hero with scene canvas
│       ├── EcosystemSection # 3 Pillars (Fan App, Sportbook, Team Index)
│       ├── PryxPryzeSection # PRYX & PRYZE cards
│       ├── BenefitsSection  # Hub-and-spoke benefits
│       ├── HowItWorksSection # 3-step cards
│       ├── FeaturedExperienceSection
│       ├── CTASection     # Join Genesis CTA
│       └── Footer
├── styles/
│   └── constants.js       # Shared card style objects
└── lib/
    └── utils.js           # cn() classname helper
```

## Assets

- **Lottie animations** — `public/assets/lottie/`
- **Landing images & SVGs** — `public/landing/landing_assests/`
- **Fan token logos** — `public/landing/fan-app-logos/`
