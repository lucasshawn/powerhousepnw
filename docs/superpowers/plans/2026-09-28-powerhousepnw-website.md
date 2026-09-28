# Powerhouse PNW Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and verify a high-performance, modern multi-page static website for Powerhouse PNW ready for immediate hosting on Netlify.

**Architecture:** Pure semantic HTML5 with modular Vanilla CSS (design system, components, responsive grid) and lightweight ES6+ JavaScript for micro-interactions and mobile navigation. Zero build toolchain dependencies, 100/100 performance, with Netlify forms and clean routing configured.

**Tech Stack:** Semantic HTML5, Vanilla CSS3 (Custom Properties, Flexbox, Grid), Vanilla JavaScript (ES6+), Google Fonts (Plus Jakarta Sans, Inter, JetBrains Mono), Netlify configuration (`netlify.toml`).

## Global Constraints

- Zero build tools required for deployment (native static files served directly).
- Netlify-ready: includes `netlify.toml` with clean URL routing, caching headers, and security headers.
- Contact email: `powerhousepnw@gmail.com`.
- Location: Bellevue, WA.
- Engineering Pedigree: 30+ years building iterative software on-prem and in the cloud for tech giants (Microsoft, Oracle); last 4 years focused on modern DevOps and cloud infrastructure.
- Core Slogan: "Bring us the problem, we build the solution."
- Authentic Products: Cascade StreamCore (Media Processing), StratusRelay (Hybrid Cloud/DevOps), AlpineTelemetry (Cloud Observability).
- Official Brand Graphic: `public/images/powerhouse-graphic.jpg`.

---

### Task 1: Design Tokens, CSS Foundation & Assets Setup

**Files:**
- Create: `css/main.css`
- Create: `public/images/favicon.svg`
- Verify: `public/images/powerhouse-graphic.jpg`
- Test: `tests/verify-css.js`

**Interfaces:**
- Consumes: `public/images/powerhouse-graphic.jpg`
- Produces: CSS custom properties (`--bg-primary`, `--accent-gold`, etc.), reset, container styles, typography, base layout classes, and SVG favicon.

- [ ] **Step 1: Write test to verify design tokens and stylesheet integrity**

```javascript
// tests/verify-css.js
const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../css/main.css');
const faviconPath = path.join(__dirname, '../public/images/favicon.svg');
const graphicPath = path.join(__dirname, '../public/images/powerhouse-graphic.jpg');

let failed = false;
function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message);
    failed = true;
  } else {
    console.log('PASS:', message);
  }
}

assert(fs.existsSync(graphicPath), 'Official graphic exists in public/images');
assert(fs.existsSync(faviconPath), 'Favicon SVG exists');
assert(fs.existsSync(cssPath), 'Main CSS exists');

if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, 'utf8');
  assert(css.includes('--bg-primary'), 'CSS defines --bg-primary token');
  assert(css.includes('--accent-gold'), 'CSS defines --accent-gold token');
  assert(css.includes('--pnw-blue'), 'CSS defines --pnw-blue token');
  assert(css.includes('Plus Jakarta Sans'), 'CSS imports or references Plus Jakarta Sans');
  assert(css.includes('Inter'), 'CSS imports or references Inter');
}

if (failed) process.exit(1);
console.log('All Task 1 assertions passed!');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/verify-css.js`  
Expected: FAIL (files do not exist yet)

- [ ] **Step 3: Implement SVG Favicon and `css/main.css`**

Create `public/images/favicon.svg` with mountain and lightning bolt vector artwork.
Create `css/main.css` with:
- Google Fonts import (`Plus Jakarta Sans`, `Inter`, `JetBrains Mono`).
- Root CSS variables matching the spec (`--bg-primary: #0A0F16`, `--accent-gold: #F5BA13`, `--pnw-blue: #3E73A0`, etc.).
- Modern reset (`box-sizing: border-box`, clean margin/padding).
- Base body styling, headings, typography scales, container utilities (`.container`, `.section`, `.grid`).
- Global header and navigation bar styling with backdrop blur.
- Global footer layout with branding, links, and copyright text.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/verify-css.js`  
Expected: PASS with "All Task 1 assertions passed!"

- [ ] **Step 5: Commit**

```bash
git add css/main.css public/images/favicon.svg tests/verify-css.js
git commit -m "feat: setup design tokens, global styles, and brand assets"
```

---

### Task 2: Component Styles, Interactive Navigation & Utility Scripts

**Files:**
- Create: `css/components.css`
- Create: `js/main.js`
- Test: `tests/verify-scripts.js`

**Interfaces:**
- Consumes: CSS tokens from `css/main.css`
- Produces: Card components, buttons, badges, mobile nav drawer toggling, clipboard copy helper, dynamic footer year.

- [ ] **Step 1: Write test for component styles and JS functions**

```javascript
// tests/verify-scripts.js
const fs = require('fs');
const path = require('path');

const componentsCssPath = path.join(__dirname, '../css/components.css');
const jsPath = path.join(__dirname, '../js/main.js');

let failed = false;
function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message);
    failed = true;
  } else {
    console.log('PASS:', message);
  }
}

assert(fs.existsSync(componentsCssPath), 'components.css exists');
assert(fs.existsSync(jsPath), 'main.js exists');

if (fs.existsSync(componentsCssPath)) {
  const css = fs.readFileSync(componentsCssPath, 'utf8');
  assert(css.includes('.btn-primary'), 'components.css defines .btn-primary');
  assert(css.includes('.card'), 'components.css defines .card');
  assert(css.includes('.badge'), 'components.css defines .badge');
}

if (fs.existsSync(jsPath)) {
  const js = fs.readFileSync(jsPath, 'utf8');
  assert(js.includes('copyEmail'), 'main.js defines copyEmail function');
  assert(js.includes('powerhousepnw@gmail.com'), 'main.js references powerhousepnw@gmail.com');
  assert(js.includes('nav-toggle') || js.includes('mobile-menu'), 'main.js handles mobile nav');
}

if (failed) process.exit(1);
console.log('All Task 2 assertions passed!');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/verify-scripts.js`  
Expected: FAIL

- [ ] **Step 3: Implement `css/components.css` and `js/main.js`**

In `css/components.css`:
- Buttons: `.btn`, `.btn-primary` (electric gold glow), `.btn-secondary` (outline glassmorphic), `.btn-sm`.
- Cards: `.card`, `.card-hover`, `.card-featured` with subtle gold border accent and hover glow.
- Badges: `.badge`, `.badge-gold`, `.badge-blue`, `.badge-dark` for technology and status tags.
- Hero layout components: `.hero-content`, `.hero-badge`, `.hero-image-wrapper`, `.hero-glow`.
- Form controls: `.form-group`, `.form-input`, `.form-textarea`, `.form-label`.
- Toast/Alert feedback: `.copy-toast` for clipboard interaction.

In `js/main.js`:
- Mobile menu drawer open/close with keyboard escape key and outside click listeners.
- Active page link highlighting based on current `window.location.pathname`.
- `copyEmail(event)` function that copies `powerhousepnw@gmail.com` to clipboard and triggers a visual feedback tooltip/toast.
- Automatic copyright year updater (`document.querySelectorAll('.current-year')`).

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/verify-scripts.js`  
Expected: PASS with "All Task 2 assertions passed!"

- [ ] **Step 5: Commit**

```bash
git add css/components.css js/main.js tests/verify-scripts.js
git commit -m "feat: add component styles and core interactive scripts"
```

---

### Task 3: Home Page (`index.html`) & Netlify Config (`netlify.toml`)

**Files:**
- Create: `index.html`
- Create: `netlify.toml`
- Test: `tests/verify-home.js`

**Interfaces:**
- Consumes: `css/main.css`, `css/components.css`, `js/main.js`, `public/images/powerhouse-graphic.jpg`, `public/images/favicon.svg`
- Produces: Complete homepage with hero, value pillars, featured products preview, consulting overview, and Netlify config.

- [ ] **Step 1: Write test for homepage structure and netlify configuration**

```javascript
// tests/verify-home.js
const fs = require('fs');
const path = require('path');

const indexPath = path.join(__dirname, '../index.html');
const netlifyPath = path.join(__dirname, '../netlify.toml');

let failed = false;
function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message);
    failed = true;
  } else {
    console.log('PASS:', message);
  }
}

assert(fs.existsSync(indexPath), 'index.html exists');
assert(fs.existsSync(netlifyPath), 'netlify.toml exists');

if (fs.existsSync(indexPath)) {
  const html = fs.readFileSync(indexPath, 'utf8');
  assert(html.includes('Powerhouse PNW'), 'index.html contains company name');
  assert(html.includes('powerhouse-graphic.jpg'), 'index.html references brand graphic');
  assert(html.includes('Bring us the problem, we build the solution'), 'index.html contains core slogan');
  assert(html.includes('Bellevue, WA'), 'index.html mentions Bellevue, WA');
  assert(html.includes('30'), 'index.html mentions 30+ years experience');
  assert(html.includes('Microsoft') || html.includes('Oracle'), 'index.html highlights Microsoft/Oracle pedigree');
  assert(html.includes('powerhousepnw@gmail.com'), 'index.html has contact email');
}

if (fs.existsSync(netlifyPath)) {
  const toml = fs.readFileSync(netlifyPath, 'utf8');
  assert(toml.includes('publish = "."') || toml.includes('publish = "/"'), 'netlify.toml defines publish dir');
  assert(toml.includes('[[headers]]'), 'netlify.toml defines security headers');
}

if (failed) process.exit(1);
console.log('All Task 3 assertions passed!');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/verify-home.js`  
Expected: FAIL

- [ ] **Step 3: Implement `index.html` and `netlify.toml`**

Create `netlify.toml` with:
- Publish root set to `.`.
- Security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Content-Security-Policy`).
- Clean URL redirects for extensionless paths.

Create `index.html` with:
- High-impact Hero featuring the official `powerhouse-graphic.jpg`.
- Headline: *"Engineering Solutions for Cloud, Media, and Distributed Systems"*.
- Slogan callout: *"Bring us the problem, we build the solution."*
- Pillar cards: Iterative Software Engineering (30+ years), Cloud & DevOps Mastery (4+ years), High-Throughput Media Pipelines, Bellevue-based lean team.
- Teaser grid highlighting the 3 products linking to `products.html`.
- Services teaser linking to `services.html`.
- Responsive navigation header and semantic footer.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/verify-home.js`  
Expected: PASS with "All Task 3 assertions passed!"

- [ ] **Step 5: Commit**

```bash
git add index.html netlify.toml tests/verify-home.js
git commit -m "feat: implement home page and netlify configuration"
```

---

### Task 4: Products Showcase Page (`products.html`)

**Files:**
- Create: `products.html`
- Test: `tests/verify-products.js`

**Interfaces:**
- Consumes: Global layout, styles, and scripts
- Produces: Dedicated products showcase for Cascade StreamCore, StratusRelay, AlpineTelemetry.

- [ ] **Step 1: Write test for products page**

```javascript
// tests/verify-products.js
const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, '../products.html');

let failed = false;
function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message);
    failed = true;
  } else {
    console.log('PASS:', message);
  }
}

assert(fs.existsSync(productsPath), 'products.html exists');

if (fs.existsSync(productsPath)) {
  const html = fs.readFileSync(productsPath, 'utf8');
  assert(html.includes('Cascade StreamCore'), 'Contains Cascade StreamCore');
  assert(html.includes('StratusRelay'), 'Contains StratusRelay');
  assert(html.includes('AlpineTelemetry'), 'Contains AlpineTelemetry');
  assert(html.includes('Media Processing') || html.includes('Streaming'), 'Describes media processing');
  assert(html.includes('DevOps') || html.includes('Deployment'), 'Describes DevOps automation');
  assert(html.includes('Observability') || html.includes('Diagnostics'), 'Describes observability');
  assert(html.includes('powerhousepnw@gmail.com'), 'Contains contact link for product inquiries');
}

if (failed) process.exit(1);
console.log('All Task 4 assertions passed!');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/verify-products.js`  
Expected: FAIL

- [ ] **Step 3: Implement `products.html`**

Create `products.html` with:
- Consistent header with active state on "Products".
- Intro section: *"Purpose-built tools born from three decades of production software and high-scale DevOps engineering."*
- Detailed product cards:
  1. **Cascade StreamCore**: High-throughput distributed media ingest & transcoding engine. Technical specs, architecture points, status badge.
  2. **StratusRelay**: Hybrid cloud release & DevOps deployment orchestrator. Multi-cloud bridge, zero-downtime releases, status badge.
  3. **AlpineTelemetry**: Lightweight eBPF cloud observability & latency diagnostics monitor. Microsecond tracing, zero-overhead metrics.
- Callout banner inviting custom product trials and integration inquiries.
- Standard footer.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/verify-products.js`  
Expected: PASS with "All Task 4 assertions passed!"

- [ ] **Step 5: Commit**

```bash
git add products.html tests/verify-products.js
git commit -m "feat: implement products showcase page"
```

---

### Task 5: Services & Consulting Page (`services.html`)

**Files:**
- Create: `services.html`
- Test: `tests/verify-services.js`

**Interfaces:**
- Consumes: Global layout, styles, and scripts
- Produces: Dedicated consulting and engineering services page detailing offerings, 30-year veteran experience, and engagement models.

- [ ] **Step 1: Write test for services page**

```javascript
// tests/verify-services.js
const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, '../services.html');

let failed = false;
function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message);
    failed = true;
  } else {
    console.log('PASS:', message);
  }
}

assert(fs.existsSync(servicesPath), 'services.html exists');

if (fs.existsSync(servicesPath)) {
  const html = fs.readFileSync(servicesPath, 'utf8');
  assert(html.includes('Services') || html.includes('Consulting'), 'Contains Services heading');
  assert(html.includes('30'), 'Highlights 30+ year track record');
  assert(html.includes('Reasonable') || html.includes('Transparent'), 'Mentions reasonable pricing');
  assert(html.includes('DevOps') || html.includes('Cloud Infrastructure'), 'Covers DevOps services');
  assert(html.includes('Architecture') || html.includes('Software Consulting'), 'Covers architecture services');
  assert(html.includes('Bring us the problem, we build the solution'), 'Features core slogan');
  assert(html.includes('powerhousepnw@gmail.com'), 'Contains contact action');
}

if (failed) process.exit(1);
console.log('All Task 5 assertions passed!');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/verify-services.js`  
Expected: FAIL

- [ ] **Step 3: Implement `services.html`**

Create `services.html` with:
- Header with active state on "Services".
- Header section: *"Software Consulting & Modern DevOps Engineering"* with subline *"Reasonable pricing. Three decades of proven delivery. Direct access to veteran engineers."*
- Service Pillars:
  1. Full-Lifecycle Software Consulting & Architecture (refactoring, system design, high-performance distributed code).
  2. Cloud & Modern DevOps Engineering (IaC, CI/CD pipelines, container orchestration, zero-downtime releases).
  3. Media Systems & Cloud Data Pipelines (transcoding pipelines, high-throughput streaming, hybrid cloud migration).
- Engagement models: Fixed-Scope Sprints, Advisory & Architecture Audits, Embedded Senior Firepower.
- CTA box: *"Have a project or roadblock? Bring us the problem, we build the solution."*
- Standard footer.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/verify-services.js`  
Expected: PASS with "All Task 5 assertions passed!"

- [ ] **Step 5: Commit**

```bash
git add services.html tests/verify-services.js
git commit -m "feat: implement services and consulting page"
```

---

### Task 6: About Us Page (`about.html`)

**Files:**
- Create: `about.html`
- Test: `tests/verify-about.js`

**Interfaces:**
- Consumes: Global layout, styles, and scripts
- Produces: Dedicated About Us page detailing Bellevue roots, 30+ year pedigree at Microsoft/Oracle, 4-year DevOps focus, and engineering philosophy.

- [ ] **Step 1: Write test for about page**

```javascript
// tests/verify-about.js
const fs = require('fs');
const path = require('path');

const aboutPath = path.join(__dirname, '../about.html');

let failed = false;
function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message);
    failed = true;
  } else {
    console.log('PASS:', message);
  }
}

assert(fs.existsSync(aboutPath), 'about.html exists');

if (fs.existsSync(aboutPath)) {
  const html = fs.readFileSync(aboutPath, 'utf8');
  assert(html.includes('About Us') || html.includes('Who We Are'), 'Contains About Us heading');
  assert(html.includes('Bellevue, WA') || html.includes('Bellevue, Washington'), 'Mentions Bellevue, WA');
  assert(html.includes('Microsoft') && html.includes('Oracle'), 'Mentions Microsoft and Oracle background');
  assert(html.includes('30') || html.includes('three decades'), 'Mentions 30+ years experience');
  assert(html.includes('DevOps') || html.includes('devops'), 'Mentions 4 years devops experience');
  assert(html.includes('small') && (html.includes('efficient') || html.includes('lean')), 'Mentions small, efficient team');
}

if (failed) process.exit(1);
console.log('All Task 6 assertions passed!');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/verify-about.js`  
Expected: FAIL

- [ ] **Step 3: Implement `about.html`**

Create `about.html` with:
- Header with active state on "About Us".
- Hero section: *"Small Team. Elite Engineering. Based in Bellevue, WA."*
- The Story: 30+ years designing, building, and deploying software for industry giants Microsoft and Oracle; past 4 years delivering modern DevOps and cloud automation.
- Team Philosophy: Lean, direct access to seniors, craftsmanship over buzzwords, pragmatic iteration.
- Regional roots: The Pacific Northwest engineering ethos—grounded, rigorous, and persistent.
- Core Values grid: Craftsmanship, Pragmatism, Transparency, Velocity.
- Standard footer.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/verify-about.js`  
Expected: PASS with "All Task 6 assertions passed!"

- [ ] **Step 5: Commit**

```bash
git add about.html tests/verify-about.js
git commit -m "feat: implement about us page"
```

---

### Task 7: Contact Page (`contact.html`) & Netlify Form Integration

**Files:**
- Create: `contact.html`
- Test: `tests/verify-contact.js`

**Interfaces:**
- Consumes: Global layout, styles, scripts, `copyEmail()` helper
- Produces: Direct email button, copy email action, Netlify-compatible inquiry form.

- [ ] **Step 1: Write test for contact page**

```javascript
// tests/verify-contact.js
const fs = require('fs');
const path = require('path');

const contactPath = path.join(__dirname, '../contact.html');

let failed = false;
function assert(condition, message) {
  if (!condition) {
    console.error('FAIL:', message);
    failed = true;
  } else {
    console.log('PASS:', message);
  }
}

assert(fs.existsSync(contactPath), 'contact.html exists');

if (fs.existsSync(contactPath)) {
  const html = fs.readFileSync(contactPath, 'utf8');
  assert(html.includes('powerhousepnw@gmail.com'), 'Contains direct email');
  assert(html.includes('Bellevue, WA') || html.includes('Bellevue, Washington'), 'Mentions Bellevue location');
  assert(html.includes('data-netlify="true"') || html.includes('netlify'), 'Form has Netlify attribute');
  assert(html.includes('name="contact"'), 'Form named contact');
  assert(html.includes('copyEmail'), 'Includes copy email handler');
}

if (failed) process.exit(1);
console.log('All Task 7 assertions passed!');
```

- [ ] **Step 2: Run test to verify it fails**

Run: `node tests/verify-contact.js`  
Expected: FAIL

- [ ] **Step 3: Implement `contact.html`**

Create `contact.html` with:
- Header with active state on "Contact".
- Intro: *"Let's Talk Engineering — Bring Us Your Challenge."*
- Direct contact card:
  - Big email display: `powerhousepnw@gmail.com`
  - Action buttons: "Send Email" (`mailto:powerhousepnw@gmail.com`) and "Copy Email Address" button.
  - Location badge: Bellevue, Washington (Pacific Northwest).
  - SLA: Typically respond within 1 business day.
- Netlify Inquiry Form:
  - Form attributes: `name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field"`.
  - Fields: Name, Email, Service / Topic (Software Architecture, DevOps & Cloud, Media Systems, Custom), Message.
  - Submit button with electric gold styling.
- Standard footer.

- [ ] **Step 4: Run test to verify it passes**

Run: `node tests/verify-contact.js`  
Expected: PASS with "All Task 7 assertions passed!"

- [ ] **Step 5: Commit**

```bash
git add contact.html tests/verify-contact.js
git commit -m "feat: implement contact page with netlify form support"
```

---

### Task 8: End-to-End Suite Verification & Visual Browser Audit

**Files:**
- Create: `tests/run-all-tests.js`
- Test: All 5 pages + assets + responsive layout via browser verification

**Interfaces:**
- Consumes: All project files (`index.html`, `products.html`, `services.html`, `about.html`, `contact.html`, `css/*`, `js/*`, `netlify.toml`, `public/*`)
- Produces: Complete verified website ready for production deployment.

- [ ] **Step 1: Create master test runner script**

```javascript
// tests/run-all-tests.js
const { execSync } = require('child_process');
const testFiles = [
  'verify-css.js',
  'verify-scripts.js',
  'verify-home.js',
  'verify-products.js',
  'verify-services.js',
  'verify-about.js',
  'verify-contact.js'
];

console.log('Running complete verification suite...\n');
for (const file of testFiles) {
  console.log(`--> Running ${file}:`);
  execSync(`node tests/${file}`, { stdio: 'inherit' });
}
console.log('\nAll test suites successfully passed!');
```

- [ ] **Step 2: Run master test suite**

Run: `node tests/run-all-tests.js`  
Expected: PASS with all 7 test files completing with code 0.

- [ ] **Step 3: Launch local static server and perform live visual audit**

Run a local server (e.g. `npx -y serve . -l 3000` or Python HTTP server).
Use browser subagent to:
- Open `http://localhost:3000/index.html` and capture screenshot.
- Navigate to `http://localhost:3000/products.html` and verify product cards.
- Navigate to `http://localhost:3000/services.html` and verify services layout.
- Navigate to `http://localhost:3000/about.html` and verify Bellevue and Microsoft/Oracle story.
- Navigate to `http://localhost:3000/contact.html` and test email copy interaction.
- Test responsive view at mobile viewport (375px width).

- [ ] **Step 4: Final commit and deployment documentation**

Create a `README.md` with instructions on local viewing and zero-effort Netlify deployment (Git connect & Netlify Drop).
Commit all final verification assets.

```bash
git add tests/run-all-tests.js README.md
git commit -m "feat: complete end-to-end verification and documentation"
```
