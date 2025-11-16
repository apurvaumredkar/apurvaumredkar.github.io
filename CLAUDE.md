# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a personal portfolio website for Apurva Umredkar, built with React, Vite, Tailwind CSS, and Framer Motion. The site showcases professional experience, projects, skills, and contact information with Apple-inspired design and smooth scroll-based animations.

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth transitions
- **react-intersection-observer** - Scroll-based animation triggers

## Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx          # Landing section with name and introduction
│   │   ├── Experience.jsx    # Work experience cards
│   │   ├── Projects.jsx      # Project showcase with descriptions
│   │   ├── Skills.jsx        # Technical skills and education
│   │   └── Contact.jsx       # Contact information and footer
│   ├── App.jsx               # Main app component
│   ├── index.css             # Tailwind imports and global styles
│   └── main.jsx              # React entry point
├── tailwind.config.js        # Tailwind configuration with custom colors
├── postcss.config.js         # PostCSS configuration
└── package.json              # Dependencies and scripts
```

## Development Commands

### Start Development Server
```bash
cd portfolio
npm run dev
```
- Runs on `http://localhost:5173`
- Hot module replacement enabled

### Build for Production
```bash
cd portfolio
npm run build
```
- Output directory: `portfolio/dist/`
- Optimized and minified assets

### Preview Production Build
```bash
cd portfolio
npm run preview
```

### Install Dependencies
```bash
cd portfolio
npm install
```

## Design Philosophy

The portfolio follows Apple's design language:
- **Minimal and clean** - Generous white space, simple layouts
- **Typography-focused** - Large headings, clear hierarchy
- **Scroll-based animations** - Fade-in effects using Framer Motion and Intersection Observer
- **Smooth transitions** - Easing functions for natural feel
- **Responsive** - Mobile-first approach with Tailwind breakpoints

## Component Architecture

Each section is a standalone component with:
- Framer Motion animations (opacity, y-axis transforms)
- Intersection Observer for scroll triggers
- Responsive design with Tailwind classes
- Staggered animation delays for visual flow

## Customization

### Colors
Defined in [tailwind.config.js](portfolio/tailwind.config.js:5-11):
- `apple-blue`: #0071e3 (links, CTAs)
- `apple-gray`: #1d1d1f (text)

### Content Updates
Update personal information in component files:
- [Hero.jsx](portfolio/src/components/Hero.jsx) - Name, tagline, links
- [Experience.jsx](portfolio/src/components/Experience.jsx) - Work history
- [Projects.jsx](portfolio/src/components/Projects.jsx) - Project details
- [Skills.jsx](portfolio/src/components/Skills.jsx) - Technical skills, education
- [Contact.jsx](portfolio/src/components/Contact.jsx) - Contact info

## GitHub Pages Deployment

### Build and Deploy
```bash
cd portfolio
npm run build
# Copy contents of dist/ to repository root for GitHub Pages
```

The site will be available at `https://apurvaumredkar.github.io` once deployed to the master branch.
