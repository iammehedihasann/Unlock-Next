# 🎶 MUSIC-PEACE

_A Modern Music School Website built with Next.js & Tailwind CSS_

---

## 📌 Project Overview

**MUSIC-PEACE** is a responsive and modern web application designed for a music school.  
It provides information about courses, instructors, upcoming webinars, and student testimonials.  
The project is built with **Next.js 13 (App Router)**, **TypeScript**, and **Tailwind CSS** for fast, scalable, and maintainable development.

---

## 🚀 Features

- 🎼 **Beautiful Landing Page** with hero section and animated UI components
- 🎹 **Courses Section** to explore available music programs
- 🎤 **Testimonials (Moving Cards)** for student & parent feedback
- 🎶 **Featured Webinars** to enhance the learning journey
- 👩‍🏫 **Instructor Profiles** with details of teachers
- 🎨 **Modern UI Components** (custom cards, hover effects, sticky scroll, tooltips, etc.)
- 📱 **Fully Responsive Design** for mobile, tablet, and desktop
- 🌙 **Dark Mode Support**

---

## 🛠️ Tech Stack

- [Next.js 13](https://nextjs.org/) (with App Router)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [React Icons](https://react-icons.github.io/react-icons/) (social & UI icons)

---

## 📂 Project Structure

---

```
MUSIC-PEACE/
├── public/                     # Public assets (images, icons, etc.)
├── src/
│   ├── app/                    # App Router pages
│   │   ├── contact/            # Contact page
│   │   ├── courses/            # Courses page
│   │   ├── layout.tsx          # Global layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   │
│   ├── components/             # Reusable components
│   │   └── ui/                 # UI elements
│   │       ├── 3d-card.tsx
│   │       ├── animated-tooltip.tsx
│   │       ├── background-gradient.tsx
│   │       ├── card-hover-effect.tsx
│   │       ├── infinite-moving-cards.tsx
│   │       ├── moving-border.tsx
│   │       ├── navbar-menu.tsx
│   │       ├── Spotlight.tsx
│   │       ├── sticky-scroll-reveal.tsx
│   │       ├── wavy-background.tsx
│   │       ├── FeaturedSection.tsx
│   │       ├── Footer.tsx
│   │       ├── HeroSection.tsx
│   │       ├── Instructor.tsx
│   │       ├── MovingCards.tsx
│   │       ├── Navbar.tsx
│   │       ├── UpComingWebinars.tsx
│   │       └── WhyChooseUs.tsx
│   │
│   ├── data/                   # Static JSON data
│   │   └── music_courses.json
│   │
│   └── utils/                  # Utility functions
│
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

## 🚀 Features

- 🎼 Modern UI with reusable components
- 📚 Courses page with JSON-driven data
- 👨‍🏫 Instructor highlights & testimonials
- 🎥 Upcoming Webinars section
- 🎨 Animations (cards, tooltips, gradients, scroll effects)
- 📱 Fully responsive with Tailwind CSS

---

## ⚙️ Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (for animations)

---

## 📌 Scripts

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```
