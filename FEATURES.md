# WK-Hub — Product Marketing Truth Source

## Elevator Pitch

**WK-Hub is the complete business operating system built for Egyptian and Middle Eastern retail businesses.** It's a production-ready suite of POS, inventory, accounting, and HR tools that works offline-first, syncs across branches, and speaks Arabic natively. Unlike generic SaaS platforms, WK-Hub is built from the ground up for markets where internet cuts out, tax compliance is complex, and businesses need real multi-branch control—not just dashboards.

---

## Core Value Proposition

**One system. Every branch. Always running.**

Most POS systems fail the moment your internet drops. Most ERPs pretend multi-branch means "see data from other locations." WK-Hub is different:

- **Offline-first architecture** — Your cashiers keep selling, your inventory keeps updating, and everything syncs the moment connectivity returns.
- **True multi-branch operations** — Stock transfers, approval workflows, branch-specific pricing, and consolidated reporting. Not an afterthought.
- **Arabic-first, EGP-native** — Built for Egyptian e-invoicing (ETA), Arabic UI, and local payment gateways (Fawry, Paymob). Not localized from English.
- **Enterprise-grade security without enterprise complexity** — Role-based access, MFA, audit trails, and API metering built into a system a single store can run.

---

## Unique Features

### 1. Offline-First POS That Actually Works

Not "offline mode" — true offline-first architecture. IndexedDB stores everything locally, service workers handle sync, and your business never stops because the internet did.

- **What it means in practice:** Your cashier at the Mall of Arabia location makes 50 sales while the network is down. When it reconnects, everything syncs—inventory, journal entries, customer loyalty points. Zero data loss.

### 2. Real Multi-Branch Stock Control

Move inventory between locations with approval workflows. See what's in Alexandria from Cairo. Transfer 20 units of SKU-1234 from Downtown to Main Store with full audit trail.

- **Not just visibility — actual control:** Stock transfer requests, shipment tracking, receiving with damage recording, variance reconciliation.

### 3. Complete Double-Entry Accounting Built-In

Every sale automatically generates journal entries. Chart of Accounts, Trial Balance, P&L, Balance Sheet — without exporting to another system.

- **For non-accountants:** You don't need to know debits and credits. The system does it for you.
- **For accountants:** You get proper double-entry bookkeeping that respects Egyptian accounting standards.

### 4. Enterprise Stocktaking Without the Complexity

SAP-style cycle counting, variance reporting, and approval workflows — in a system a shop owner can actually use.

- **Physical counts:** Full inventory, category-based, or spot checks
- **Variance detection:** See what's missing before it becomes a problem
- **Approval chain:** Managers review discrepancies before posting to inventory

### 5. Employee Commission & HR That Makes Sense

Assign sellers to sales, track commission automatically, manage attendance, and run payroll — all integrated with your sales data.

- **Commission on every sale:** Your top seller's bonus calculated automatically
- **Attendance tied to shifts:** Clock-in, clock-out, overtime tracking
- **Payslip generation:** Earnings, deductions, net pay

### 6. Granular Permission Control

Not just "Admin, Manager, Cashier." 150+ individual permissions. User-level overrides. Branch-scoped access. ABAC policies for complex rules like "Manager can approve refunds up to 500 EGP."

- **Active Directory-style lockouts:** Lock accounts, require password changes, prevent lockout for emergency access
- **Audit everything:** Who did what, when, from which device

### 7. Multi-Platform Deployment

Same codebase runs as web app, Windows desktop (Electron), and mobile (React Native). Offline desktop syncs over LAN without touching the internet.

- **Desktop installer:** 93 MB Windows installer for shops without reliable cloud access
- **Branch sync over LAN/VPN:** Main branch acts as server, client branches sync directly

### 8. API-First Architecture

Everything the UI does, your integrations can do. Scoped API keys with rate limiting, webhook subscriptions for real-time events, full audit logging.

- **Connect anything:** Shopify, WooCommerce, custom ERP, accounting software
- **Secure by default:** API keys with granular scopes, HMAC webhook signatures

---

## Who This Is For

### ✓ Ideal Customers

- **Egyptian retail chains (2-50 branches)** who outgrew single-store POS but can't afford or don't need SAP
- **Clothing stores with variants** — size, color, SKU matrices with proper stock tracking
- **Businesses with unreliable internet** — malls, remote locations, pop-up shops
- **Owners who want control** — real-time visibility into every branch's cash drawer
- **Shops preparing for ETA compliance** — Egyptian e-invoicing integration ready

### ✗ Who This Is NOT For

- **Single cashiers who just need a till** — Simpler solutions exist
- **Pure e-commerce** — This is POS-first with e-commerce bridge, not the reverse
- **Enterprise with 500+ branches** — We're honest about our scale target
- **Restaurants needing kitchen display systems** — Partial support only, not our focus

---

## Why This Exists

Egyptian retail runs on disconnected tools: a POS that doesn't talk to inventory, a spreadsheet for employee commissions, WhatsApp for stock transfer requests, and a separate accounting system that's always behind.

WK-Hub exists because the choice shouldn't be between "expensive enterprise ERP that needs consultants" and "consumer POS that breaks at 2 branches."

We built the system we wished existed when running retail operations in Egypt:
- One that works when Vodafone's network doesn't
- One that tracks every unit from supplier invoice to customer sale
- One that doesn't require an IT team to maintain
- One that respects Arabic as a first-class language, not a translation

---

## Technical Reality (Not Marketing)

| Claim | Evidence |
|-------|----------|
| 1,037 tests passing | Jest test suite, 100% pass rate |
| 60+ API modules | Full REST API with OpenAPI documentation |
| Offline sync | IndexedDB + Service Worker + background sync |
| Multi-tenant | Row-level isolation with 71 tenant-scoped models |
| LAN sync | WebSocket-based sync between desktop clients |
| License server | Separate license management with API metering |
| Enterprise-tested | 6 months of seed data, 14,000+ products stress tested |

---

## Competitive Positioning

| vs. Competition | WK-Hub Advantage |
|-----------------|------------------|
| Foodics, Lightspeed | Offline-first, not offline-capable. Works during outages, not just caches orders. |
| Odoo, ERPNext | Focused on retail. No "ERP sprawl." Faster to deploy, easier to train. |
| Square, Toast | Arabic-native. EGP-first. Egyptian payment gateways. Not a US product adapted for MENA. |
| Custom development | Production-ready on day one. 18+ months of development you don't have to fund. |

---

## Messaging Guidelines

**DO:**
- Lead with reliability (offline-first)
- Emphasize multi-branch control (not just visibility)
- Mention Arabic/EGP as proof of market fit
- Use specific numbers (1,037 tests, 60+ modules, 3 platforms)
- Be honest about target market size

**DON'T:**
- Claim to be "the best POS" — too generic
- Promise AI/ML features that don't exist
- Use enterprise buzzwords without substance
- Pretend we're bigger than we are
- Ignore the desktop/LAN sync differentiator

---

*Last updated: January 31, 2026*
