# Powerhouse PNW Website Design Specification

**Date:** 2026-09-28  
**Author:** Antigravity & Powerhouse PNW Team  
**Status:** Approved by User  
**Target Hosting:** Netlify (Free/Standard Tier)  

---

## 1. Executive Summary & Vision

Powerhouse PNW is a lean, battle-tested software engineering and modern DevOps consultancy based in Bellevue, WA. Founded on over 30 years of experience delivering mission-critical software at tech industry titans (including Microsoft and Oracle), Powerhouse PNW specializes in cloud architecture, media-based processing pipelines, hybrid infrastructure, and automated DevOps release engineering.

This project delivers a multi-page, ultra-performant, zero-dependency static website that reflects the company's identity: authoritative, highly capable, modern, and grounded in real-world engineering excellence.

**Core Slogan:** *"Bring us the problem, we build the solution."*

---

## 2. Technical Architecture & Approach

### 2.1 Core Stack
- **Structure:** Semantic HTML5 across all pages.
- **Styling:** Modular Vanilla CSS3 utilizing modern CSS custom properties (variables), Flexbox, CSS Grid, and responsive clamp typography. Zero framework overhead (no Tailwind, Bootstrap, or heavy runtimes).
- **Interactivity:** Lightweight Vanilla JavaScript (ES6+) for interactive navigation, active route highlighting, mobile drawer menu, contact form feedback, and one-click email copying.
- **Assets:** High-resolution Powerhouse PNW brand artwork (`public/images/powerhouse-graphic.jpg`), customized SVG favicon, and optimized typography loaded via Google Fonts (`Plus Jakarta Sans`, `Inter`, `JetBrains Mono`).
- **Hosting & Deployment:** Static hosting ready for Netlify (or GitHub Pages, Cloudflare Pages, AWS S3/CloudFront) with zero build step required. Includes `netlify.toml` for cache control, security headers, and clean URL routing.

### 2.2 Directory Structure
```
powerhousepnw/
├── index.html                  # Homepage (Hero, core value proposition, key highlights, quick contact)
├── products.html               # Products showcase (3 cloud & media-focused software products)
├── services.html               # Consulting & engineering services (Architecture, DevOps, Media Systems)
├── about.html                  # About Us (Bellevue origins, 30+ year pedigree, team philosophy)
├── contact.html                # Contact page (Direct email action + Netlify-ready inquiry form)
├── netlify.toml                # Netlify deployment and security header configuration
├── css/
│   ├── main.css                # Global design tokens, resets, base typography, header & footer styles
│   └── components.css          # Cards, hero section, badges, forms, buttons, grid layouts
├── js/
│   └── main.js                 # Mobile menu toggle, dynamic year, active page indicator, copy-to-clipboard
├── public/
│   └── images/
│       ├── powerhouse-graphic.jpg # Official brand hero artwork
│       └── favicon.svg         # SVG icon with mountain & lightning bolt motif
└── docs/
    └── superpowers/
        └── specs/
            └── 2026-09-28-powerhousepnw-website-design.md
```

---

## 3. Visual Design System & Brand Identity

The aesthetic directly draws from the official Powerhouse PNW emblem: a storm cloud with an electric yellow lightning bolt striking over a Pacific Northwest mountain silhouette and house crest on a dark textured background.

### 3.1 Design Tokens (CSS Variables)
```css
:root {
  /* Surface & Background Colors */
  --bg-primary: #0A0F16;       /* Deep slate night */
  --bg-secondary: #121A24;     /* Elevated panel surface */
  --bg-card: #16202C;          /* Card & container background */
  --bg-card-hover: #1B2736;    /* Card hover elevation */
  
  /* Brand Accent Colors */
  --accent-gold: #F5BA13;      /* Lightning bolt gold */
  --accent-gold-hover: #E5A805;/* Darker gold for active states */
  --accent-gold-glow: rgba(245, 186, 19, 0.22);
  
  /* PNW Alpine Blues */
  --pnw-blue: #3E73A0;         /* Mountain ridge slate-blue */
  --pnw-blue-dark: #223B52;    /* Shadowed mountain base */
  --pnw-blue-light: #7BAFD4;   /* Glacier ice highlight */
  
  /* Text & Typography */
  --text-primary: #F3F7FA;     /* High contrast off-white */
  --text-secondary: #94A3B8;   /* Muted slate text for subtitles */
  --text-muted: #64748B;       /* Tertiary captions & metadata */
  
  /* Borders & Dividers */
  --border-subtle: #233446;    /* Subtle structural lines */
  --border-highlight: rgba(245, 186, 19, 0.35); /* Accent gold borders */
  
  /* Shadows & Glows */
  --shadow-card: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  --shadow-gold-glow: 0 0 24px rgba(245, 186, 19, 0.25);
  
  /* Typography Families */
  --font-heading: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### 3.2 Visual Styling Features
- **Atmospheric Hero Section:** Dynamic dark gradient with subtle lightning accent aura highlighting the company artwork.
- **Glassmorphic Cards:** Translucent slate cards with fine borders, gentle hover transforms, and electric gold accent lines.
- **Status Badges & Metrics:** Clean tech pills (`30+ Years Experience`, `Bellevue, WA`, `Cloud & On-Prem`) styled in monospace/sans accents.
- **Mobile First & Responsive:** Fluid grid layouts scaling gracefully from 320px mobile screens up to 4K ultra-wide displays.

---

## 4. Page Breakdown & Content Strategy

### 4.1 Global Elements (Header & Footer)
- **Header Navigation:**
  - Brand identity with mountain/lightning badge and "POWERHOUSE PNW" title.
  - Links: `Home`, `Products`, `Services`, `About Us`, `Contact`.
  - Prominent "Get In Touch" action button.
  - Responsive hamburger drawer for mobile viewports (< 768px).
- **Footer:**
  - Brief company summary and Bellevue, WA location tag.
  - Direct contact link: `powerhousepnw@gmail.com`.
  - Quick navigation links and current year copyright (`© 2026 Powerhouse PNW. All rights reserved.`).

---

### 4.2 Home Page (`index.html`)
- **Hero Unit:**
  - Headline: *"Engineering Solutions for Cloud, Media, and Distributed Systems."*
  - Slogan: *"Bring us the problem, we build the solution."*
  - Supporting Copy: Backed by over 30 years of engineering software for tech industry giants like Microsoft and Oracle, with deep modern DevOps mastery. We tackle the tough technical problems that off-the-shelf software can't solve.
  - CTAs: Primary button → *"Explore Services"*, Secondary button → *"View Products"*.
  - Visual Showcase: High-definition presentation of the Powerhouse PNW emblem.
- **Key Capability Pillars (Quick Overview):**
  1. *Iterative Software Development:* Decades of shipping resilient code on-prem and in the cloud.
  2. *Cloud & DevOps Mastery:* 4+ years of dedicated modern CI/CD, IaC, and zero-downtime infrastructure operations.
  3. *High-Throughput Media Systems:* Deep expertise architecting video, audio, and high-volume streaming data pipelines.
  4. *Lean & Senior-Led:* Small, agile team operating out of Bellevue, WA. No junior handoffs; senior engineering direct to solution.
- **Featured Teasers:**
  - Snapshot of the 3 Products.
  - Consultation callout with direct link to email.

---

### 4.3 Products Page (`products.html`)
Showcases three representative, technically authentic products rooted in cloud infrastructure, media software, and modern DevOps:

1. **Cascade StreamCore (Media Processing & Distribution Engine)**
   - *Category:* Cloud & Media Infrastructure
   - *Description:* A high-throughput, low-latency media ingestion and distributed transcoding pipeline. Engineered for cloud-native audio/video transformation, resilient segmenting, and scalable edge delivery across distributed CDNs.
   - *Key Tech Specs:* Distributed parallel transcode workers, multi-format container support, automated cloud storage lifecycle hooks, sub-second manifest generation.
   - *Status:* In Active Development & Production Testing.

2. **StratusRelay (Hybrid Cloud Release & DevOps Orchestrator)**
   - *Category:* DevOps & Infrastructure Automation
   - *Description:* A unified deployment bridge connecting legacy on-prem bare metal and hybrid cloud environments. Streamlines complex multi-stage release cycles with automated rollback gates, drift detection, and declarative pipeline synchronization.
   - *Key Tech Specs:* Zero-downtime blue/green orchestrations, on-prem agent daemon, multi-cloud credential isolation, declarative YAML release definitions.
   - *Status:* Enterprise Pilot Ready.

3. **AlpineTelemetry (Lightweight Cloud Observability & Resiliency Monitor)**
   - *Category:* Reliability Engineering & Diagnostics
   - *Description:* An ultra-lean observability daemon engineered for microsecond-sensitive distributed systems. Provides high-fidelity latency profiling, bottleneck detection, and proactive automated failover triggers without bloating CPU or memory budgets.
   - *Key Tech Specs:* Zero-overhead eBPF metric probes, automated health thresholding, real-time alert routing, seamless Grafana/OpenTelemetry export.
   - *Status:* Available for Partner Integration.

---

### 4.4 Services Page (`services.html`)
Clearly defines the consulting offerings and engagement models:

- **Headline:** *"Software Consulting & Modern DevOps Engineering"*
- **Core Value Proposition:** Reasonable, transparent pricing paired with rare 30+ year veteran experience. We do not do bloatware or speculative billable hours. We take thorny, high-stakes engineering problems and deliver working, maintainable software.
- **Service Offerings:**
  1. **Full-Lifecycle Software Consulting & Architecture:**
     - Translating complex business requirements into robust, scalable software architectures.
     - Legacy code modernization and monolithic-to-microservices refactoring.
     - High-performance systems programming and distributed data processing.
  2. **Modern DevOps & Cloud Infrastructure:**
     - Infrastructure as Code (Terraform, CloudFormation, Bicep).
     - CI/CD pipeline modernization (GitHub Actions, Azure DevOps, GitLab CI) with automated testing gates.
     - Containerization and orchestration (Docker, Kubernetes, ECS).
     - Cloud cost optimization, security hardening, and disaster recovery planning.
  3. **Media Systems & Cloud Data Pipelines:**
     - End-to-end media capture, encoding, packaging, and streaming delivery architectures.
     - High-throughput asynchronous queuing and real-time processing pipelines.
     - Hybrid integrations linking existing on-prem systems to modern cloud scale.
- **Engagement Model:**
  - *Fixed-Scope Solution Sprints:* Clear milestones, predictable costs, concrete deliverables.
  - *Advisory & Architecture Reviews:* Rapid diagnosis of architectural bottlenecks, deployment slowdowns, or reliability vulnerabilities.
  - *Embedded Senior Consulting:* Senior technical firepower augmenting your engineering squad to crack the hardest problems.
- **Direct Call to Action:** *"Bring us your problem. Let's build the solution."*

---

### 4.5 About Us Page (`about.html`)
Focuses on authenticity, pedigree, and the advantages of working with a lean, senior team:

- **Location:** Bellevue, Washington (Pacific Northwest tech corridor).
- **Our Story:**
  - Over three decades of building and releasing iterative software that has powered platforms at global scale, including key contributions at enterprise leaders Microsoft and Oracle.
  - The past four years dedicated intensely to modern DevOps, cloud infrastructure automation, and resilient continuous delivery.
- **The Bellevue Advantage:**
  - Located in the heart of the Pacific Northwest tech ecosystem, bridging the legacy of classical software engineering rigor with modern cloud-native velocity.
- **Our Philosophy:**
  - *No Fluff, No Layers:* You talk directly with the engineers designing and writing the code.
  - *Iterative & Pragmatic:* Software succeeds when delivered in tight, validated iterations rather than multi-year theoretical roadmaps.
  - *On-Prem to Cloud Native:* We understand the reality of production systems—from bare-metal servers in a colocation rack to multi-region cloud serverless fleets.
- **Core Principles:**
  - *Craftsmanship:* Code written to be read, maintained, and operated reliably at 3 AM.
  - *Predictable Delivery:* Battle-tested release disciplines forged across decades of production deployments.
  - *Value-Focused:* Reasonable pricing, zero unnecessary overhead.

---

### 4.6 Contact Page (`contact.html`)
- **Direct Contact Channel:**
  - Email: `powerhousepnw@gmail.com`
  - Action: Large click-to-email button plus interactive "Copy Email to Clipboard" button with live feedback tooltip.
- **Netlify-Ready Contact Form:**
  - Fields: Full Name, Email Address, Subject / Project Category, Message.
  - Form attributes: `name="contact"`, `method="POST"`, `data-netlify="true"`.
  - Fallback message: "Prefer direct communication? Send an email directly to powerhousepnw@gmail.com".
- **Turnaround:** Typical response within 1 business day.

---

## 5. Netlify Configuration & Production Readiness

A `netlify.toml` file will be provided to configure:
1. **Clean URLs:** Allowing `/about`, `/services`, `/products`, `/contact` to load cleanly without requiring `.html` extensions.
2. **Security Headers:**
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; script-src 'self' 'unsafe-inline';`
3. **Asset Caching:** Fast caching rules for CSS, JS, and image assets.

---

## 6. Testing, Verification & Quality Standards

- **Cross-Browser Verification:** Validate in Chrome, Firefox, Edge, and Safari viewports.
- **Responsive Layout Testing:** Test across standard device breakpoints:
  - Mobile (360px - 480px)
  - Tablet (768px - 1024px)
  - Desktop (1200px+)
- **Accessibility & SEO:**
  - Valid semantic elements (`<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`).
  - Clear `aria-label` tags on interactive buttons and hamburger toggle.
  - Complete OpenGraph and Meta Description tags on every page for social previews.
- **Interactive Verification:**
  - Test mobile menu drawer open/close.
  - Test email clipboard copy interaction and status toast.
  - Test contact form submission structure.

---

## 7. Next Steps

Upon review and sign-off of this specification:
1. Commit the spec document to the repository.
2. Invoke the `writing-plans` skill to generate a step-by-step implementation plan.
3. Execute the implementation tasks systematically.
