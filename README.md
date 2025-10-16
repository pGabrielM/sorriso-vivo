# 🦷 Sorriso Vivo - Professional Dental Clinic Landing Page

![Badges](https://img.shields.io/badge/Next.js-15.5.3-black?style=flat-square) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square) ![Tailwind](https://img.shields.io/badge/TailwindCSS-4-38bdf8?style=flat-square) ![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

> 🚀 **Fictional Portfolio Project** - A modern and professional landing page for a dental clinic, developed as an example of architecture, resources, and best practices in modern web projects.

---

## 📋 About the Project

**Sorriso Vivo** is a portfolio project demonstrating the creation of a complete and professional landing page for a healthcare business (dental clinic). It features a scalable architecture, modern componentization, professional animations, and full multilingual support.

### 🎯 Objectives

- Showcase of modern web development skills
- Demonstration of React/Next.js component architecture
- Best practices in TypeScript, TailwindCSS, and animations
- Standardized structure with internationalization (i18n) support
- Complete example of a professional landing page

### ✨ Key Features

- ✅ **Professional Design**: Modern interface with reusable UI
- ✅ **Responsive**: Desktop, tablet, and mobile
- ✅ **Smooth Animations**: Anime.js + Framer Motion
- ✅ **Performance**: Next.js 15 with Turbopack
- ✅ **Strict TypeScript**: Complete typing
- ✅ **Multilingual**: PT/EN/ES with next-intl
- ✅ **SEO Optimized**: Meta tags and semantic structure
- ✅ **Accessible**: WCAG compliance

---

## 🚀 Technologies Used

### Core

- Next.js 15.5.3 - React Framework
- React 19 - JavaScript Library
- TypeScript 5 - Typed Language

### Styling

- TailwindCSS 4 - Utility-first CSS
- Shadcn/UI - Accessible Components
- Lucide React - SVG Icons

### Animations

- Anime.js 4.2.0 - JavaScript Animations
- Framer Motion - React Animations

### Internationalization

- next-intl - Multilingual Support
- 80+ translation keys in 3 languages

### Quality

- ESLint - Code Linting
- Prettier - Code Formatting
- Radix UI - Accessibility

---

## 📦 Installation and Execution

### Prerequisites

- Node.js 18+
- npm or yarn

### Quick Start

```bash
git clone https://github.com/usuario/sorriso-vivo.git
cd sorriso-vivo
npm install
npm run dev
# Open http://localhost:3000
```

### Available Scripts

```bash
npm run dev       # Server with Turbopack
npm run build     # Production build
npm run start     # Production server
npm run lint      # Check code
npm run lint:fix  # Fix automatically
npm run format    # Format with Prettier
```

---

## 🏗️ Project Structure

```
sorriso-vivo/
├── public/images/          # Optimized images
├── messages/               # Translations (PT/EN/ES)
├── src/
│   ├── app/
│   │   ├── [locale]/      # Routes by language
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── commons/       # Base components (Button, Card, etc)
│   │   └── resources/
│   │       └── landing/   # Landing page components
│   ├── i18n/              # i18n configuration
│   ├── types/             # TypeScript interfaces
│   ├── utils/             # Data and helpers
│   └── lib/               # Anime.js, cn(), etc
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🎨 Landing Page Sections

| Section          | Description                            |
| ---------------- | -------------------------------------- |
| **Navbar**       | Responsive menu with language selector |
| **Hero**         | Main presentation with CTA             |
| **Services**     | 6 dental services with i18n            |
| **Team**         | 4 professionals with specialties       |
| **Testimonials** | 5 reviews with ratings                 |
| **Booking**      | Form with validation                   |
| **Contact**      | Form + information                     |
| **Footer**       | Links and clinic info                  |

---

## 🌍 Internationalization (i18n)

Supports **3 languages** with automatic routing:

```
http://localhost:3000/pt   # Portuguese (default)
http://localhost:3000/en   # English
http://localhost:3000/es   # Spanish
```

### Usage in Components

```typescript
'use client';
import { useTranslations } from 'next-intl';

export function ServiceCard({ service }: Props) {
  const t = useTranslations();
  const title = service.titleKey ? t(service.titleKey) : service.title;
  return <h3>{title}</h3>;
}
```

---

## 🎨 Color Palette

| Color          | Usage                |
| -------------- | -------------------- |
| Teal (#0d9488) | Primary, buttons     |
| Cyan (#06b6d4) | Secondary, gradients |
| Gray (#111827) | Text                 |

---

## 📱 Responsiveness

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## ⚡ Performance

- Turbopack: ~10x faster
- Image Optimization: lazy loading
- Code Splitting: automatic
- SSG/ISR: as needed

---

## 📚 Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [next-intl](https://next-intl-docs.vercel.app/)
- [TailwindCSS](https://tailwindcss.com/docs)
- [Anime.js](https://animejs.com/documentation/)

---

## 👥 Author

**Developed by**: Gabriel M.  
**Type**: Fictional portfolio project  
**Year**: 2025
