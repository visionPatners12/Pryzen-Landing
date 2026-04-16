# Pryzen - The Onchain Architecture of Sports

## Overview
Pryzen is a sports-tech landing page for the Pryzen ecosystem, serving as a "Web3 Home of Sports" built on the Chiliz blockchain. It showcases a connected ecosystem for fans to follow, predict, participate, own, and trade in a new digital sports economy.

## Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Animations:** framer-motion, lottie-react
- **Icons:** lucide-react

## Project Structure
- `src/main.jsx` - App entry point
- `src/App.jsx` - Main component with AnimatePresence preloader/reveal flow
- `src/lib/lottieCache.js` - Shared Lottie JSON cache with in-flight dedup
- `src/components/Preloader.jsx` - Cinematic multi-step preloader (particles, glow, step indicators)
- `src/components/AnimatedLayer.jsx` - Lottie wrapper using shared cache
- `src/pages/Home/Home.jsx` - Main page layout
- `src/pages/Home/sections/HeroSection.jsx` - Hero with staggered fade-up entrance
- `src/pages/Home/sections/EcosystemSection.jsx` - 3 Pillars with scroll-triggered slide animations
- `src/pages/Home/sections/` - Other page sections
- `src/components/ui/` - Reusable UI components
- `public/assets/lottie/` - Lottie animation files
- `public/landing/landing_assests/` - Images and SVGs

## Running
- Dev server: `npm run dev` (port 5000)
- Build: `npm run build`
