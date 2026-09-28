# Powerhouse PNW - Official Website

The official website for **Powerhouse PNW** — a software engineering and DevOps consulting team operating out of Bellevue, WA.

> *"Bring us the problem, we build the solution."*

---

## Overview

- **Location:** Bellevue, Washington
- **Contact:** [powerhousepnw@gmail.com](mailto:powerhousepnw@gmail.com)
- **Pedigree:** 30+ years building iterative software on-prem and in the cloud for tech industry leaders (Microsoft, Oracle), with deep modern DevOps mastery.
- **Pages:**
  - `index.html` — Homepage with company overview, value pillars, and featured software highlights.
  - `products.html` — Products showcase: *Cascade StreamCore*, *StratusRelay*, and *AlpineTelemetry*.
  - `services.html` — Consulting offerings: Software Architecture, Modern DevOps & Cloud Infrastructure, Media Systems, and engagement models.
  - `about.html` — Bellevue team background, 30-year veteran story, and core engineering philosophy.
  - `contact.html` — Direct email actions and Netlify-compatible inquiry form.

---

## Tech Stack & Architecture

- **Zero-Build Static Architecture:** Pure semantic HTML5, modern CSS3, and lightweight Vanilla JavaScript (ES6+).
- **Zero Dependencies:** No node build pipelines, no complex frameworks to break or maintain. 100/100 performance out of the box.
- **Netlify Ready:** Includes `netlify.toml` with clean URL routing, security headers (`CSP`, `X-Frame-Options`), and asset caching.
- **Netlify Forms Ready:** The contact form on `contact.html` natively uses Netlify's built-in form detection (`data-netlify="true"`).

---

## Local Development & Preview

Because this is a zero-build static site, you can view it directly using any local web server:

### Option 1: VS Code Live Server
Right-click `index.html` and select **"Open with Live Server"**.

### Option 2: Python HTTP Server
```bash
python -m http.server 3000
```
Then open `http://localhost:3000` in your browser.

### Option 3: Node / npx serve
```bash
npx -y serve . -l 3000
```

---

## Deploying to Netlify (Free/Standard Tier)

### Method A: Git Integration (Recommended)
1. Push this repository to GitHub/GitLab.
2. Log into [Netlify](https://app.netlify.com).
3. Click **"Add new site"** → **"Import an existing project"**.
4. Select your Git repository.
5. Netlify will automatically detect the settings from `netlify.toml`:
   - **Publish directory:** `.` (root)
   - **Build command:** *(leave blank — zero build step required)*
6. Click **Deploy Site**. Every `git push` to `main` will automatically deploy your updates.

### Method B: Netlify Drop (Manual Drag-and-Drop)
1. Log into [Netlify](https://app.netlify.com/drop).
2. Drag and drop the root `powerhousepnw` folder into the drop zone.
3. Your site is live in seconds.
