# Pryzen - The Onchain Architecture of Sports

## Overview
Pryzen is a sports-tech landing page for the Pryzen ecosystem, serving as a "Web3 Home of Sports" built on Base. It showcases a connected ecosystem for fans to follow, predict, participate, own, and trade in a new digital sports economy.

## Tech Stack
- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Animations:** framer-motion, lottie-react
- **Icons:** lucide-react
- **i18n:** i18next, react-i18next, i18next-browser-languagedetector (EN/FR/ES/PT/DE)

## Project Structure
- `src/main.jsx` - App entry point (imports i18n)
- `src/App.jsx` - Main component with AnimatePresence preloader/reveal flow
- `src/i18n/index.js` - i18n configuration (browser detection + localStorage)
- `src/i18n/en.json` - English translations
- `src/i18n/fr.json` - French translations
- `src/i18n/es.json` - Spanish translations
- `src/i18n/pt.json` - Portuguese translations
- `src/i18n/de.json` - German translations
- `src/lib/lottieCache.js` - Shared Lottie JSON cache with in-flight dedup
- `src/components/Preloader.jsx` - Cinematic multi-step preloader (particles, glow, step indicators)
- `src/components/AnimatedLayer.jsx` - Lottie wrapper using shared cache
- `src/pages/Home/Home.jsx` - Main page layout
- `src/pages/Home/sections/HeroSection.jsx` - Hero with staggered fade-up entrance
- `src/pages/Home/sections/Navigation.jsx` - Nav bar with LanguageSwitcher (dropdown supporting 5 languages)
- `src/pages/Home/sections/EcosystemSection.jsx` - 3 Pillars with scroll-triggered slide animations
- `src/pages/Home/sections/` - Other page sections (all i18n-enabled)
- `src/components/ui/` - Reusable UI components
- `public/assets/lottie/` - Lottie animation files
- `public/landing/landing_assests/` - Images and SVGs

## i18n Details
- Languages: English (en), French (fr), Spanish (es), Portuguese (pt), German (de)
- Detection order: localStorage (`pryzen-lang` key) → browser navigator
- Fallback: English
- LanguageSwitcher component is embedded in Navigation.jsx (desktop + mobile drawer)
- All sections use `useTranslation()` hook with `t()` function
- Array translations (benefits, steps, tags) use `returnObjects: true`
- Footer uses interpolation: `t("footer.copyright", { year: ... })`

## Running
- Dev server: `npm run dev` (port 5000)
- Build: `npm run build`
