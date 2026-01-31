# WK-Hub Marketing Website Specification

## Overview

A single-page, high-conversion marketing website designed to sell WK-Hub — an offline-first POS and business management system for Egyptian retail chains.

**Goal:** Make visitors want the product within 30 seconds of scrolling.

---

## Website Structure

### Section 1: Hero (Above the Fold)

**Headline:**
> Your branches keep selling.  
> Even when the internet doesn't.

**Subheadline:**
> The offline-first POS and business system built for Egyptian retail. Multi-branch control, Arabic-native, EGP-ready.

**Primary CTA:** "Start Free Trial" (with arrow icon)  
**Secondary CTA:** "Book a Demo"

**Trust Indicators:**
- ✓ No credit card required
- ✓ 14-day free trial
- ✓ Works offline from day one

**Visual Elements:**
- Subtle gradient background (slate-50 → white)
- Dot grid pattern overlay at 3% opacity
- Scroll-down indicator with bounce animation
- Parallax fade-out effect on scroll

---

### Section 2: The Problem

**Headline:**
> You've been here before.

**Pain Points (with X icons):**
1. "Internet drops during Friday rush. Sales lost."
2. "Stock transfer requests via WhatsApp. Nobody tracks them."
3. "End of month: reconciling spreadsheets until midnight."
4. "Your POS can't tell you what's really in your Alexandria branch."

**Closing Statement:**
> Your tools weren't built for how Egyptian retail actually works.

**Design:** Dark section (slate-900 background), cards with red X indicators

---

### Section 3: The Solution

**Headline:**
> One system that runs your entire operation.

**Subheadline:**
> POS, inventory, accounting, and HR — connected, offline-capable, and built for multi-branch reality.

**Visual:** Screenshot placeholder with browser chrome mockup

**TODO:** Add actual dashboard screenshot showing:
- Multi-branch overview
- Today's sales across locations
- Stock alerts
- Branch selector

---

### Section 4: Unique Features

**Headline:**
> What makes WK-Hub different

**Features (5 total, stacked cards):**

1. **Offline-First Architecture** (WifiOff icon, blue gradient)
   > Not "offline mode" — true offline-first. Your cashiers keep selling, inventory updates, and everything syncs when connectivity returns. Zero data loss.

2. **Real Multi-Branch Control** (GitBranch icon, emerald gradient)
   > Stock transfers with approval workflows. Branch-specific pricing. Consolidated reporting. Move 20 units from Downtown to Main with full audit trail.

3. **Built-In Double-Entry Accounting** (Calculator icon, violet gradient)
   > Every sale generates journal entries automatically. Chart of Accounts, Trial Balance, P&L, Balance Sheet — without exporting to another system.

4. **Enterprise Permissions, Simple Setup** (Shield icon, amber gradient)
   > 150+ granular permissions. User-level overrides. Branch-scoped access. "Manager can approve refunds up to 500 EGP" — rules that actually work.

5. **Arabic-First, Not Translated** (Languages icon, rose gradient)
   > Built for Egyptian e-invoicing (ETA), Arabic UI, EGP currency, and local payment gateways. Not a US product with a language pack.

---

### Section 5: How It Works

**Headline:**
> Up and running in 3 steps

**Steps (horizontal layout on desktop):**

| Step | Title | Description |
|------|-------|-------------|
| 01 | Set Up Your Branches | Add your locations, assign users, configure permissions. Takes about 15 minutes. |
| 02 | Import Your Products | Bulk import from Excel, scan barcodes, or enter manually. Variants (size, color) supported. |
| 03 | Start Selling | Your first sale can happen today. Offline sync works from minute one. |

**Design:** Numbered cards with connector lines between them

---

### Section 6: Who It's For

**Headline:**
> Built for Egyptian retail chains

**Ideal Customers (checkmark list):**
- Clothing stores with size/color variants
- Retail chains with 2-50 branches
- Businesses with unreliable internet
- Owners who want real visibility into every branch
- Shops preparing for ETA compliance

**Design:** Simple checklist cards on white/slate-50 background

---

### Section 7: Trust / Proof

**Headline:**
> Built to production standards

**Stats Grid (4 columns):**
| Stat | Label | Sublabel |
|------|-------|----------|
| 1,037 | Tests Passing | Automated test suite |
| 60+ | API Modules | Full coverage |
| 3 | Platforms | Web, Desktop, Mobile |
| 99.9% | Uptime | Offline-first = never down |

---

### Section 8: Final CTA

**Headline:**
> Ready to run your branches without the chaos?

**Subheadline:**
> Start your 14-day free trial. No credit card. No commitment.

**Primary CTA:** "Start Free Trial"  
**Secondary:** "Or book a personalized demo" (text link)

**Design:** Dark section (slate-900), centered text

---

### Footer

**Tagline:**
> The business system that works when the internet doesn't.

**Links:** Privacy | Terms | Contact

**Copyright:** © 2026 WK-Hub. All rights reserved.

---

## Component Breakdown

| Component | File | Purpose |
|-----------|------|---------|
| MarketingPage | `components/MarketingPage.tsx` | Main one-page component |
| Navigation | (inline) | Fixed header with CTA |
| HeroSection | (inline) | Above-fold with parallax |
| ProblemSection | (inline) | Pain points |
| SolutionSection | (inline) | Product intro + screenshot |
| FeaturesSection | (inline) | 5 differentiators |
| HowItWorksSection | (inline) | 3 steps |
| WhoItsForSection | (inline) | Ideal customer list |
| TrustSection | (inline) | Stats grid |
| CTASection | (inline) | Final conversion |
| Footer | (inline) | Legal + tagline |

---

## Animation & Scrolling Behavior

### Scroll-Triggered Animations (Framer Motion)

1. **Hero Section**
   - Staggered fade-in-up for headline, subheadline, CTAs
   - Parallax fade-out effect as user scrolls past
   - Bouncing scroll indicator

2. **Problem Section**
   - Cards fade in with stagger delay
   - Scale slightly on hover

3. **Solution Section**
   - Screenshot scales in from 0.9 to 1.0
   - Subtle shadow increase

4. **Features Section**
   - Cards fade up in sequence
   - Icon containers have gradient backgrounds

5. **How It Works**
   - Steps reveal left-to-right with connector lines

6. **All Sections**
   - `useInView` hook triggers animation once when 100px from viewport
   - `once: true` prevents re-animation on scroll back

### CSS Animations
- `fadeInUp`: 0.6s ease-out
- `scaleIn`: 0.5s ease-out
- Smooth scroll behavior on html element
- Custom easing: `[0.22, 1, 0.36, 1]` (ease-out-quint)

---

## Screenshot TODOs

Add these screenshots when available:

| Location | Screenshot Needed | Notes |
|----------|-------------------|-------|
| Solution Section | Dashboard overview | Show multi-branch selector, today's sales |
| Features: Offline | Sync status indicator | Show "Syncing..." or "Offline - 23 pending" |
| Features: Multi-Branch | Stock transfer modal | Show approval workflow |
| Features: Accounting | Journal entries view | Show auto-generated entries from sale |
| Features: Permissions | ACL page | Show permission checkboxes by role |
| How It Works: Step 1 | Branch setup wizard | Show adding a new branch |
| How It Works: Step 2 | Product import | Show bulk import from Excel |
| How It Works: Step 3 | POS interface | Show completed sale with offline indicator |

**Screenshot Requirements:**
- PNG format, 2x resolution
- No customer data visible
- Arabic UI variant for RTL version
- Consistent branch names (Cairo, Alexandria, Giza)

---

## Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 10
- **Icons:** Lucide React
- **Fonts:** Inter (Latin), IBM Plex Sans Arabic (Arabic)

---

## Performance Targets

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- Total Bundle: < 200KB (gzipped)
- Lighthouse Score: 90+ (all categories)

---

## SEO Structure

**Title:** WK-Hub — The Business System That Works When The Internet Doesn't

**Description:** Offline-first POS and business system built for Egyptian retail. Multi-branch control, Arabic-native, EGP-ready. Inventory, accounting, and HR in one platform.

**Keywords:** POS system Egypt, Egyptian retail, multi-branch POS, offline POS, ETA e-invoicing, Arabic POS, EGP, retail management Egypt

**OG Image:** TODO - Create branded image with headline

---

## Copywriting Guidelines

**Tone:**
- Confident, not loud
- Simple, not shallow
- Human, not corporate
- Zero hype without substance

**Rules:**
1. Every sentence must increase clarity or desire
2. Lead with specific outcomes, not features
3. Use numbers when possible (1,037 tests, 60+ modules)
4. Speak to the Egyptian market specifically
5. Acknowledge limitations honestly (2-50 branches, not enterprise)

---

*Last updated: January 31, 2026*
