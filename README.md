# TechnoSafe Solutions — Fire Safety Website

React + Vite website concept built around the uploaded TechnoSafe Solutions logo.

## Run
1. Install Node.js 18+.
2. In this folder:
   npm install
   npm run dev
3. Open the local URL shown by Vite.

## Structure
- `src/pages/` — Home, About, Services, Products, Training, Contact, 404
- `src/components/` — every major section is a separate component
- Each component has its own CSS file.
- `src/styles/global.css` contains only shared tokens/layout utilities.
- `public/images/technosafe-logo.png` is the uploaded logo.

## Icons
Font Awesome is loaded in `index.html`. Social icons use explicit `fa-` prefixes, e.g.:
`fa-brands fa-instagram`, `fa-brands fa-facebook-f`, `fa-solid fa-envelope`.

## Replace demo assets
The image URLs are Unsplash placeholders. Replace them with your real project/product images.
The hero and video section use remote demo MP4 URLs. For production, put your own video at:
`public/videos/fire-safety-hero.mp4`
and change the `<source>` in `Hero.jsx` / `VideoSection.jsx`.

## Design
- Brand-led red/black/white palette inspired by the supplied logo
- Inter + Manrope + Space Grotesk typography
- Responsive layout
- Separate cards and layouts for services, products, industries, partners and clients
- Hero background video
- Dedicated video section
- Scroll/reveal entrance animations
