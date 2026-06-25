# KMJ Catering & Events — Website

A modern, animated single-page website for **KMJ Catering & Events**, a premier catering and event planning service based in Nigeria.

---

## Tech Stack

- **HTML5 / CSS3** — semantic markup, custom keyframe animations
- **Tailwind CSS** (CDN v3) — utility-first styling and responsive layout
- **Vanilla JavaScript** — no frameworks, all interactions built from scratch
- **Font Awesome 6** — icons
- **Google Fonts** — Poppins + Playfair Display
- **EmailJS** — contact form email delivery

---

## Features

### Animations & Interactions
- **Hero background carousel** — 4 images crossfade every 5 seconds with clickable dot indicators
- **Hero text entrance** — title, subtitle, and buttons stagger-animate in on load
- **Scroll-reveal** — every section fades/slides into view via `IntersectionObserver` (fade-up, fade-left, fade-right, zoom-in)
- **Staggered grid entrances** — service cards, menu items, and gallery items animate in with per-item delays
- **Testimonials carousel** — auto-scrolling with prev/next controls and dot indicators; responsive (1→2→3 columns)
- **Floating service icons** — icon circles gently bob on a continuous loop
- **Animated counters** — stats count up from 0 when the About section scrolls into view
- **Active nav underline** — a pink underline tracks the current section as you scroll
- **Pulse button** — "Book Your Event" CTA has a continuous glow pulse

### Pages / Sections
- Home (Hero)
- Services
- Signature Menu
- Gallery
- Testimonials
- About
- Contact (EmailJS form)

### Other
- Dark mode toggle (persisted via `localStorage`)
- Responsive mobile menu
- Smooth-scroll navigation

---

## Project Structure

```
kmj-website/
├── index.html   # All markup + inline Tailwind config + CSS animations
└── script.js    # All interactivity (carousels, observers, counters, form)
```

---

## Contact Form Setup

The form uses **EmailJS**. The service ID, template ID, and public key are already configured in `index.html`. To use your own account, replace the values in:

```html
emailjs.init("YOUR_PUBLIC_KEY");
```

```js
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
```

