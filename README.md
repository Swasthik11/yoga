# 🌿 Yoga Nova — Next.js Website

A nature-inspired, production-grade wellness website built with Next.js and CSS Modules.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
yoga-nova/
├── components/
│   ├── Navbar.js          # Sticky responsive navigation
│   ├── Navbar.module.css
│   ├── Footer.js          # Multi-column footer with newsletter
│   ├── Footer.module.css
│   ├── Layout.js          # Page wrapper
│   └── Layout.module.css
├── pages/
│   ├── index.js           # Home page
│   ├── trainers.js        # Trainers / Coaches page
│   ├── plans.js           # Membership Plans + Pricing
│   ├── blog.js            # Blog / Journal
│   ├── contact.js         # Contact + Studio info
│   ├── 404.js             # Custom 404 page
│   └── _app.js            # App entry
├── styles/
│   └── globals.css        # Design system + global styles
├── public/
│   └── images/            # ← Add your images here (see below)
├── next.config.js
└── package.json
```

---

## 🖼️ Images to Add

Place your images in `public/images/`. Here's what each page expects:

### Home Page
| File | Usage |
|------|-------|
| `hero-bg.jpg` | Full-screen hero background (woman meditating in nature) |
| `about-1.jpg` | About section — left image (yoga class / studio) |
| `about-2.jpg` | About section — right image (close-up / detail) |
| `promo-bg.jpg` | Promo banner background (nature / forest) |
| `testimonial-1.jpg` | Testimonial avatar — Priya Mehta |
| `testimonial-2.jpg` | Testimonial avatar — Sarah Okafor |
| `testimonial-3.jpg` | Testimonial avatar — James Lin |
| `testimonial-4.jpg` | Testimonial avatar — Amara Diallo |

### Trainers Page
| File | Usage |
|------|-------|
| `trainer-1.jpg` | Clare Bamford — featured instructor |
| `trainer-2.jpg` | Dana Kimura |
| `trainer-3.jpg` | Marcus Osei |
| `trainer-4.jpg` | Ananya Rao |
| `trainer-5.jpg` | Leo Vasquez |
| `trainer-6.jpg` | Fatima Al-Nouri |

### Blog Page
| File | Usage |
|------|-------|
| `blog-featured.jpg` | Featured article hero |
| `blog-1.jpg` | Morning rituals post |
| `blog-2.jpg` | Yin yoga post |
| `blog-3.jpg` | Ayurvedic nutrition post |
| `blog-4.jpg` | Finding your edge post |
| `blog-5.jpg` | Savasana science post |
| `blog-6.jpg` | Kundalini awakening post |

> **Tip:** All images gracefully fall back to a sage-green gradient placeholder until you add them. You can use images from Unsplash, Pexels, or your own photography.

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--sage` | `#4a5e3a` | Primary green |
| `--sage-dark` | `#2e3d23` | Deep forest |
| `--sage-light` | `#6b7f56` | Muted sage |
| `--cream` | `#f5f0e8` | Background light |
| `--accent` | `#c8a96e` | Gold accent |
| `--charcoal` | `#2a2a25` | Text |

Fonts: **Cormorant Garamond** (display) + **Jost** (body)

---

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero, About, Services, Promo, Why Us, Testimonials, CTA |
| `/trainers` | Coaches — Featured instructor + full team grid |
| `/plans` | Pricing — Billing toggle, 3-tier plans, comparison table, FAQ accordion |
| `/blog` | Journal — Featured post, category filter, posts grid, newsletter |
| `/contact` | Contact — Form, studio info, map placeholder, booking options |

---

## ✅ Features

- ✦ Fully responsive (mobile, tablet, desktop)
- ✦ Sticky transparent navbar → scrolled opaque
- ✦ CSS Modules — scoped, conflict-free styles
- ✦ Smooth animations (fade-up, float-leaf)
- ✦ Interactive billing toggle (Plans page)
- ✦ FAQ accordion (Plans page)
- ✦ Contact form with success state
- ✦ Nature-themed design system
- ✦ Custom 404 page
- ✦ Google Fonts (loaded via CSS @import)
- ✦ Image graceful fallback (gradient placeholder)

---

## 🌿 Credits

Design inspired by the reference Canva template provided. All content, layout, and code are original implementations in Next.js.
