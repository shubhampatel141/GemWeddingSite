# Shruti & Shubham | Sacred Union — Wedding Website

A luxury Indian wedding website built with **React + Vite + Tailwind CSS v4**. Pixel-perfect design with premium animations, cinematic video hero, live countdown timer, interactive flip cards, Google Maps integration, photo gallery with lightbox, and a full RSVP system with envelope animation.

## Features

- **Hero Section** — Looping cinematic video background with gradient overlay and fade-in animations
- **Live Countdown Timer** — Real-time countdown to December 22, 2026
- **Sticky Navbar** — Smooth scroll navigation with active section highlighting and mobile hamburger menu
- **Story Section** — Scroll-reveal animations with elegant typography
- **Itinerary Flip Cards** — 6 event cards with hover (desktop) and tap (mobile) flip animations
- **Destination Section** — Embedded Google Maps with "Get Directions" button
- **Photo Gallery** — Grid layout with lightbox modal and navigation
- **RSVP System** — Envelope/wax-seal animation, form validation, multi-select events, Firebase-ready
- **Scroll-triggered Reveals** — Subtle IntersectionObserver-based animations
- **Fully Responsive** — Mobile-first design with luxury aesthetics
- **Accessible** — Semantic HTML, ARIA labels, keyboard navigation

## Folder Structure

```
wedding-app/
├── public/
│   ├── hero.mp4              # Hero background video
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navbar + mobile menu
│   │   ├── Hero.jsx          # Video hero + countdown
│   │   ├── Welcome.jsx       # Welcome section
│   │   ├── Story.jsx         # Our Story section
│   │   ├── Itinerary.jsx     # Flip cards for events
│   │   ├── Destination.jsx   # Google Maps + travel info
│   │   ├── Gallery.jsx       # Photo grid + lightbox
│   │   ├── RSVP.jsx          # Envelope animation + RSVP form
│   │   └── Footer.jsx        # Footer
│   ├── hooks/
│   │   ├── useCountdown.js   # Live countdown hook
│   │   ├── useReveal.js      # Scroll-reveal hook
│   │   └── useActiveSection.js # Active nav section hook
│   ├── firebase.js           # Firebase config (instructions inside)
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Tailwind + custom styles
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Quick Start

```bash
cd wedding-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Production Build

```bash
npm run build
npm run preview   # Preview the production build locally
```

The built files will be in the `dist/` folder.

## Deploy to GitHub Pages

1. Install the GitHub Pages plugin:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Set the base path in `vite.config.js`:
   ```js
   export default defineConfig({
     base: '/GemWeddingSite/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## Deploy to Netlify

1. Build: `npm run build`
2. Drag the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Or connect your GitHub repo in Netlify dashboard with:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

## Connect RSVP Backend (Firebase)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project and enable **Firestore Database**
3. Add a web app and copy the config
4. Install Firebase:
   ```bash
   npm install firebase
   ```
5. Open `src/firebase.js` and uncomment the code, replacing placeholder values with your config
6. In `src/components/RSVP.jsx`, replace the simulated API call with:
   ```js
   import { submitRSVP } from '../firebase';
   // In handleSubmit:
   await submitRSVP(formData);
   ```

### Firestore Security Rules
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /rsvps/{rsvpId} {
      allow create: if true;
      allow read, update, delete: if false;
    }
  }
}
```

## Tech Stack

- **React 19** — UI framework
- **Vite 8** — Build tool
- **Tailwind CSS v4** — Utility-first CSS
- **Google Fonts** — Allura, Playfair Display, Lato
- **Material Symbols** — Icon set
- **Firebase** (optional) — RSVP data storage
