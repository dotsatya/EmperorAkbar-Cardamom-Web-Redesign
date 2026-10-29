# 🌿 Emperor Akbar Cardamom — Website Redesign

> **A luxury, modern digital flagship experience redesigning [Emperor Akbar Cardamom](https://www.emperorakbar.com/) — the world's premier exporter of GI-tagged authentic Alleppey green cardamom from India.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-2ea44f?style=for-the-badge&logo=github)](https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/)
[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-amber?style=for-the-badge)](LICENSE)

---

## 🌐 Live Deployment & Project Links

* **🚀 Live Deployed Website:** [https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/](https://dotsatya.github.io/EmperorAkbar-Cardamom-Web-Redesign/)
* **🏛️ Original Website:** [https://www.emperorakbar.com/](https://www.emperorakbar.com/)
* **📦 GitHub Repository:** [dotsatya/EmperorAkbar-Cardamom-Web-Redesign](https://github.com/dotsatya/EmperorAkbar-Cardamom-Web-Redesign)

---

## 📸 The Transformation: Before & After

![Emperor Akbar Website Transformation](./public/xreadme/old-to-new.jpg)

### Side-by-Side Comparison

| Original Website (`old.png`) | Redesigned Website (`new.png`) |
| :---: | :---: |
| <img src="./public/xreadme/old.png" alt="Original Website" width="460" /> | <img src="./public/xreadme/new.png" alt="Redesigned Website" width="460" /> |
| **Traditional E-commerce Template**<br>Static banners, generic typography, boxy cards, and disconnected product lists. | **Luxury Heritage Flagship Experience**<br>Rich Alleppey emerald (`#172d1f`) and metallic gold (`#d4af37`), glassmorphism, interactive grading visualizer, multi-currency conversion, customer portal, and fluid responsiveness. |

---

## 🎯 Redesign Vision & Problem Statement

[Emperor Akbar Cardamom](https://www.emperorakbar.com/) is recognized globally as the gold standard in green cardamom — GI-tagged, harvested in the misty spice hills of Alleppey, and packaged with patented Aroma-Lock technology. It is championed by culinary legends including **Executive Chef of the Year Mohamad Chabchoul**.

However, the original web presence faced several UX and branding limitations:
1. **Generic E-commerce Feel:** The original look lacked the premium, regal branding befitting the "Green Gold of India".
2. **Static Grade Showcase:** Cardamom pod grading (Purple 8mm+, Pink 7.5mm+, Green 7-8mm, Orange 6.5-7.5mm, Red 6-7mm) was presented as static tables rather than an interactive visual experience.
3. **Fragmented Storytelling:** The rich heritage of Alleppey GI certification, aroma-lock vacuum sealing, culinary collaborations, and health benefits were buried across disconnected pages.
4. **Rigid Mobile & Tablet Funnel:** Navigation drawers, search modals, customer accounts, and footers suffered from poor responsiveness and rigid layout shifts on different screen sizes.

### 💡 The Solution
This redesign reimagines Emperor Akbar as an **exclusive luxury spice boutique**, combining high-performance frontend engineering (Next.js 16, React 19, Tailwind CSS v4, Turbopack) with an editorial, heritage-inspired design system.

---

## ✨ Key Features & User Experience

### 👑 1. Regal & Immersive Hero Experience
* High-impact hero section showcasing the misty Alleppey spice hills, aroma-lock packaging, and GI-tag validation.
* Distinctive typography combining **Playfair Display**, **Montserrat**, and editorial script accents (**Great Vibes**).
* Shimmering call-to-action buttons (`ShinyButton`) with dynamic light-sweep animations.

### 🔍 2. Interactive Cardamom Grades Visualizer
* Located at `/cardamom-grades`, an interactive visual grading system allows consumers and chefs to explore pod sizes, diameters, flavor intensity, and culinary uses:
  * 🟣 **Purple Grade (8 mm & above):** The crown jewel, handpicked for royal confections and gourmet dining.
  * 🌸 **Pink Grade (7.5 mm & above):** Bold, full-bodied pods with intense aroma oils.
  * 🟢 **Green Grade (7 mm – 8 mm):** The classic premium grade, versatile for daily curries and biryanis.
  * 🟠 **Orange Grade (6.5 mm – 7.5 mm):** Vibrant pods for teas, baking, and aromatic seasoning.
  * 🔴 **Red Grade (6 mm – 7 mm):** High essential oil concentration, economical for powdered blends.

### 🛒 3. State-of-the-Art E-Commerce Engine
* **Dynamic Global Cart Context (`CartProvider`):** Real-time cart state management with instant badge updates, quantity controls, and local persistence.
* **Interactive Weight Selectors:** Switch seamlessly between package sizes (50g, 100g, 250g, 500g) with live price updates.
* **Dedicated Product Pages (`/product/[id]`):** High-resolution image carousels, tasting profiles, storage instructions, and "Buy Now" quick checkout.

### 💱 4. Multi-Currency & Internationalization Switcher
* **Global Currency Support (`CurrencyProvider`):** Real-time currency conversion across all catalog prices, search results, shopping cart, and order history:
  * 🇦🇪 **AED** (United Arab Emirates Dirham)
  * 🇮🇳 **INR** (Indian Rupee)
  * 🇺🇸 **USD** (United States Dollar)
  * 🇪🇺 **EUR** (Euro)
  * 🇬🇧 **GBP** (British Pound)
  * 🇸🇦 **SAR** (Saudi Riyal)
* **Floating Switcher Dock (`LanguageCurrencySwitcher`):** One-click toggle for languages (English, Hindi, Marathi, Arabic) and international currencies.

### 🔎 5. Modular Smart Search Modal (`components/search-modal/`)
* Instant keyboard shortcut (`Cmd/Ctrl + K`) or header icon trigger.
* **Dedicated Subcomponent Architecture:**
  * `SearchBar`: Clean border-focused input with an isolated ESC shortcut button.
  * `RecentlySearched`: Search history pills automatically hidden during active queries.
  * `GradeResultCard`: Shows product image, title, size, stock availability, and a dedicated "Add to Cart" button, with full-card click routing.
  * `GradeResultsSection`, `RecipeResultsSection`, and `QuickPagesSection` for categorized discovery.
  * `SearchEmptyState` and `SearchFooter` with navigation hints.

### 👤 6. Royal Customer Account Portal (`/account`)
* Located at `/account` and modularized into `components/account-view/`:
  * **Header Banner (`AccountHeaderBanner`)**: Royal gradient card with avatar initials, verified loyalty privilege pill, and 3-column stats (`Orders`, `Addresses`, `In Cart`).
  * **Navigation Tabs (`AccountNavigationTabs`)**: Sticky sidebar on desktop and swipeable horizontal tab row on mobile.
  * **Order History (`AccountOrdersTab`)**: Past and active order cards with carrier tracking modal, item breakdown, and instant **"Buy Again"** reordering.
  * **Personal Information (`AccountProfileTab`)**: Editable profile form with preferred cardamom grade selector and loyalty status.
  * **Delivery Addresses (`AccountAddressesTab`)**: Saved address cards (`Home`, `Work`, `Other`), primary address toggle, and inline creation form.
  * **Saved Favorites (`AccountWishlistTab`)**: Quick-order grid with instant add-to-cart capability.
  * **Preferences (`AccountPreferencesTab`)**: iOS-style toggle switches for harvest drop newsletters, courier SMS alerts, and two-factor authentication badge.

### 🍲 7. Culinary Collaborations (Shimi's Kitchen)
* Curated recipe portal (`/recipes` and `/recipes/[slug]`) featuring exclusive dishes developed with Shimi's Kitchen:
  * *Cardamom Rasmalai*
  * *Cardamom Pistachio Latte*
  * *Elaichi Milk Tea*
  * *Elaichi Payasam*
* Complete ingredient checklists, cooking steps, difficulty ratings, and cook times.

### 🌿 8. "Doctor of Spices" Health & Wellness Hub
* Dedicated `/health-benefits` section highlighting medicinal benefits: digestion, respiratory wellness, oral health, and antioxidants.
* Interactive slider and informative cards referencing ancient Ayurvedic traditions and modern nutritional science.

### 📱 9. Precision Responsiveness Across All Viewports
* **Mobile (< 768px):** Balanced 2-column quadrant footer reducing vertical scroll by over 50%, compact mobile cart and account layouts, touch-friendly tap targets, and tap-to-call/tap-to-email actions.
* **Tablet (768px – 1023px, `md:`):** 12-column grid balance where Brand spans 4 columns across 2 rows on the left, while Shop, Company, Support, and Contact occupy 4 columns each in two neat 2-column rows on the right, eliminating text wrapping and email distortion.
* **Desktop (≥ 1024px, `lg:`):** 5-column single-row alignment across all 12 columns (`3 + 2 + 2 + 2 + 3 = 12`).

### 🎭 10. Curtain-Reveal Modern Footer
* Custom `FooterRevealWrapper` creates an elegant page-slide reveal effect over the deep forest-green footer.

---

## 🛠️ Technology Stack & Architecture

| Layer | Technologies Used |
| :--- | :--- |
| **Framework** | [Next.js 16.4](https://nextjs.org/) (App Router, Turbopack, Static Export) |
| **UI Library** | [React 19.3](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/), `@tailwindcss/typography`, `@tailwindcss/turbopack` |
| **Typography** | Google Fonts (`Montserrat`, `Playfair Display`, `Great Vibes`) via `next/font` |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **State Management** | React Context API (`CartProvider`, `CurrencyProvider`) |
| **CI / CD & Hosting** | [GitHub Actions](https://github.com/features/actions) → [GitHub Pages](https://pages.github.com/) |

---

## 📂 Project Directory Structure

```plaintext
emperorakbar-web-redesign/
├── .github/
│   └── workflows/
│       └── deploy.yml                  # Automated GitHub Actions workflow for GitHub Pages
├── app/
│   ├── account/                        # Customer Account Portal
│   │   ├── AccountView.tsx             # Re-export of components/account-view
│   │   └── page.tsx                    # Account route with metadata
│   ├── blog/                           # Spice market blogs & articles
│   │   ├── [slug]/                     # Dynamic blog post route (SSG)
│   │   │   ├── BlogDetails.tsx         # Article content & related reads
│   │   │   └── page.tsx
│   │   └── page.tsx                    # Blog directory & category filters
│   ├── cardamom-grades/                # Interactive Cardamom Grades Visualizer
│   │   └── page.tsx
│   ├── cart/                           # Shopping Cart & Checkout review
│   │   └── page.tsx
│   ├── csr/                            # Corporate Social Responsibility & Sustainability
│   │   └── page.tsx
│   ├── faq/                            # Frequently Asked Questions accordion
│   │   └── page.tsx
│   ├── health-benefits/                # Health & Wellness "Doctor of Spices" hub
│   │   └── page.tsx
│   ├── our-story/                      # Alleppey heritage & company timeline
│   │   ├── CertificatesSection.tsx     # Star Export House & ISO Certifications
│   │   ├── StoryBlock.tsx              # Timeline story milestones
│   │   └── page.tsx
│   ├── privacy-policy/                 # Privacy Policy legal statement
│   │   └── page.tsx
│   ├── product/                        # Product Detail Pages
│   │   └── [id]/                       # Dynamic product page (SSG)
│   │       ├── ProductDetails.tsx      # Tasting notes, Aroma-Lock info, weight selectors
│   │       ├── ProductGallery.tsx      # Thumbnail & high-res image previewer
│   │       └── page.tsx
│   ├── recipes/                        # Culinary recipes with Shimi's Kitchen
│   │   ├── [slug]/                     # Dynamic recipe detail page (SSG)
│   │   │   ├── RecipeDetails.tsx       # Ingredients, step-by-step directions
│   │   │   └── page.tsx
│   │   └── page.tsx                    # Recipe catalog & search
│   ├── return-policy/                  # Return & refund guidelines
│   │   └── page.tsx
│   ├── shipping-policy/                # Shipping & delivery guidelines
│   │   └── page.tsx
│   ├── shop/                           # Full product catalog & filter system
│   │   └── page.tsx
│   ├── terms-and-conditions/           # Terms & conditions legal page
│   │   └── page.tsx
│   ├── globals.css                     # Design tokens, custom animations, glassmorphism
│   ├── layout.tsx                      # Root layout (Fonts, CartProvider, CurrencyProvider, Nav, Footer)
│   ├── robots.ts                       # Search crawler directives (/robots.txt)
│   ├── sitemap.ts                      # Dynamic XML sitemap generator (/sitemap.xml)
│   └── page.tsx                        # Redesigned Homepage
├── components/
│   ├── account-view/                   # Modularized Account Portal subcomponents
│   │   ├── AccountAddressesTab.tsx     # Delivery addresses management & form
│   │   ├── AccountHeaderBanner.tsx     # Royal user profile card & stats
│   │   ├── AccountNavigationTabs.tsx   # Sidebar & mobile swipeable tabs
│   │   ├── AccountOrdersTab.tsx        # Order history, reorder & tracking modal
│   │   ├── AccountPreferencesTab.tsx   # Notifications, 2FA & guide links
│   │   ├── AccountProfileTab.tsx       # Profile form & loyalty privileges
│   │   ├── AccountView.tsx             # Master account view orchestrator
│   │   ├── AccountWishlistTab.tsx      # Saved favorites with quick-add
│   │   ├── constants.ts                # Initial profile, orders & addresses
│   │   ├── index.ts                    # Barrel export
│   │   └── types.ts                    # TypeScript interfaces
│   ├── cardamom-grades-components/     # Cardamom visualizer components
│   │   ├── CardamomVisualizer.tsx      # Grade tabs & interactive pod comparison
│   │   ├── GradeInfo.tsx               # Pod diameter & tasting specifications
│   │   ├── GradeTabs.tsx               # Color-coded grade selector pills
│   │   └── VisualizerArea.tsx          # SVG scale & pod alignment visualizer
│   ├── HomePageSections/               # Homepage modular sections
│   │   ├── BadgesSection.tsx           # GI Tag, Aroma-Lock & ISO badges
│   │   ├── FeaturedGradeSection.tsx    # Purple Grade highlight showcase
│   │   ├── HeroSection.tsx             # Cinematic hero banner & CTA
│   │   ├── LegacySection.tsx           # Chef Chabchoul testimonial & legacy
│   │   ├── ProductGridSection.tsx      # Quick product cards grid
│   │   └── RecipesSection.tsx          # Featured Shimi's Kitchen recipes
│   ├── policy/                         # Standardized policy document layout
│   │   └── PolicyLayout.tsx
│   ├── search-modal/                   # Modularized Quick Search Modal
│   │   ├── GradeResultCard.tsx         # Cardamom card with direct "Add to Cart"
│   │   ├── GradeResultsSection.tsx     # Categorized grade search results
│   │   ├── QuickPagesSection.tsx       # Instant page shortcuts
│   │   ├── RecentlySearched.tsx        # Recent query tags
│   │   ├── RecipeResultsSection.tsx    # Recipe search matches
│   │   ├── SearchBar.tsx               # Border-accented search input with ESC button
│   │   ├── SearchEmptyState.tsx        # Zero-state illustration & message
│   │   ├── SearchFooter.tsx            # Keyboard navigation helper hints
│   │   ├── SearchModal.tsx             # Search modal orchestrator
│   │   ├── constants.ts
│   │   ├── index.ts                    # Barrel export
│   │   └── types.ts
│   ├── BlogCard.tsx                    # Blog article card with reading time
│   ├── BlogList.tsx                    # Searchable blog directory
│   ├── CartProvider.tsx                # Global cart state & calculations
│   ├── CartView.tsx                    # Slide-over cart drawer & order calculation
│   ├── CurrencyProvider.tsx            # Multi-currency state (AED, INR, USD, EUR, GBP, SAR)
│   ├── Footer.tsx                      # Mobile (2-col) & tablet-optimized luxury footer
│   ├── FooterRevealWrapper.tsx         # Curtain-reveal scroll transition wrapper
│   ├── Header.tsx                      # Responsive glass navbar with drawer & cart badge
│   ├── HealthBenefitsSlider.tsx        # Wellness benefits interactive carousel
│   ├── HealthTopicsGrid.tsx            # Health benefits topical grid
│   ├── JsonLd.tsx                      # Schema.org SEO structured data
│   ├── LanguageCurrencySwitcher.tsx    # Floating dock for locale & currency switching
│   ├── ProductCard.tsx                 # Universal product card with weight selector
│   ├── RecipeCard.tsx                  # Recipe card with cook time & difficulty
│   ├── RecipesList.tsx                 # Searchable recipes catalog
│   ├── SearchModal.tsx                 # Re-export of components/search-modal
│   └── ShinyButton.tsx                 # Royal gold shimmering button
├── data/
│   └── websiteData.ts                  # Single source of truth (products, recipes, blogs, certificates)
├── public/
│   ├── .nojekyll                       # Bypasses Jekyll on GitHub Pages to serve _next/ assets
│   ├── apple-touch-icon.png            # Apple touch bookmark icon
│   ├── blogs/                          # Blog article photography
│   ├── certificates/                   # Star Export House & ISO certificate scans
│   ├── csr/                            # Sustainability & farmer welfare images
│   ├── green/, orange/, pink/, ...     # High-resolution grade packaging photos
│   ├── Health/                         # Health & wellness topic illustrations
│   ├── images/                         # Logos, hero backdrops, seal emblems
│   ├── recipes/                        # Shimi's Kitchen recipe dish photos
│   └── xreadme/                        # README comparison assets
├── next.config.ts                      # Static export configuration (output: export, basePath)
├── package.json                        # Project dependencies and npm scripts
├── tsconfig.json                       # TypeScript compiler options
└── README.md                           # Project documentation
```

---

## 🗺️ Pages & Routing Overview

| Route | Page Description | Rendering |
| :--- | :--- | :---: |
| `/` | Redesigned Homepage (Hero, Chef Chabchoul, Aroma-Lock, Recipes) | Static |
| `/cardamom-grades` | Interactive Cardamom Visualizer & Pod Size Comparison | Static |
| `/shop` | Full E-Commerce Shop with Filter & Multi-Weight Variants | Static |
| `/product/[id]` | Dynamic Product Details (Purple, Pink, Green, Orange, Red) | SSG |
| `/cart` | Dynamic Cart, Quantity Manager, Order Calculation | Static |
| `/account` | Royal Customer Account (Orders, Profile, Addresses, Wishlist, Preferences) | Static |
| `/recipes` | Culinary Portal (Recipes in collaboration with Shimi's Kitchen) | Static |
| `/recipes/[slug]` | Step-by-Step Cooking Guide & Ingredient Lists | SSG |
| `/blog` | Articles, Market Analysis & Cardamom Buying Guides | Static |
| `/blog/[slug]` | Individual Blog Post Detail View | SSG |
| `/health-benefits` | "Doctor of Spices" Wellness Guide | Static |
| `/our-story` | Brand Heritage & Alleppey GI-Tag Certification | Static |
| `/csr` | Corporate Social Responsibility & Farmer Welfare | Static |
| `/faq` | Interactive Frequently Asked Questions | Static |
| `/privacy-policy` | Privacy Policy Statement | Static |
| `/terms-and-conditions` | Terms & Conditions | Static |
| `/shipping-policy` | Shipping and Delivery Guidelines | Static |
| `/return-policy` | Return and Refund Guidelines | Static |

---

## 🚀 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/dotsatya/EmperorAkbar-Cardamom-Web-Redesign.git
cd EmperorAkbar-Cardamom-Web-Redesign
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build static export for production
```bash
npm run build
```
This compiles and validates all static pages and outputs the production bundle to `./out`.

---

## 🚢 Deployment on GitHub Pages

This project is configured for **automated static export deployment** using GitHub Actions:

1. **Static Export Settings (`next.config.ts`):**
   * `output: "export"` generates pure HTML/CSS/JS without requiring a Node.js server.
   * `basePath: isProd ? "/EmperorAkbar-Cardamom-Web-Redesign" : undefined` handles GitHub Pages subpath routing in production.
   * `trailingSlash: true` ensures clean URL routing without 404s.
   * `images: { unoptimized: true }` enables static Next.js image exports.
2. **Jekyll Bypass (`public/.nojekyll`):**
   * Automatically included in the build output to ensure GitHub Pages does not ignore the `_next/` directory.
3. **Automated CI/CD Workflow (`.github/workflows/deploy.yml`):**
   * On every push to `main`, GitHub Actions automatically installs dependencies, executes `npm run build`, and deploys the `./out` directory directly to GitHub Pages.

---

## 👨‍💻 Author & Credits

* **Redesign & Development:** [Satya (dotsatya)](https://github.com/dotsatya)
* **Internship Project:** Developed during internship at **CodeWarrior Technologies Pvt. Ltd.**
* **Original Brand & Asset Rights:** [Emperor Akbar Cardamom](https://www.emperorakbar.com/) (All trademarks, brand assets, and imagery belong to their respective owners).
