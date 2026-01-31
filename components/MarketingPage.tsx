'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  WifiOff, GitBranch, Calculator, Shield, Languages, Wifi,
  ArrowRight, Check, X, Package, MonitorSmartphone, Building2,
  Database, Clock, Lock, Zap, AlertCircle
} from 'lucide-react'
import Link from 'next/link'

// Simplified animation variants for professional feel
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
}

// ============== NAVIGATION ==============
function Navigation() {
  return (
    <nav className="sticky top-0 w-full z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-slate-900 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">WK</span>
            </div>
            <div>
              <span className="text-lg font-semibold text-slate-900">WK-Hub</span>
              <span className="hidden sm:inline text-xs text-slate-500 ml-2">Business Operating System</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a href="#overview" className="text-sm text-slate-700 hover:text-slate-900 transition-colors">Product</a>
            <a href="#differentiators" className="text-sm text-slate-700 hover:text-slate-900 transition-colors">Why Different</a>
            <a href="#technical" className="text-sm text-slate-700 hover:text-slate-900 transition-colors">Technical Proof</a>
            <a href="#fit" className="text-sm text-slate-700 hover:text-slate-900 transition-colors">Is This For You?</a>
          </div>

          <div className="flex items-center gap-3">
            <Link 
              href="/demo" 
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Request Demo
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-md hover:bg-slate-800 transition-colors"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

// ============== HERO SECTION ==============
function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="relative bg-white pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="max-w-4xl"
        >
          {/* Clear statement of what it is */}
          <motion.div variants={fadeIn} className="inline-block px-3 py-1 bg-slate-100 rounded-full mb-6">
            <span className="text-sm font-medium text-slate-700">Offline-First Multi-Branch Retail Operating System</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 
            variants={fadeIn}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight"
          >
            One system to run every branch.<br />
            <span className="text-slate-600">Works when the internet doesn't.</span>
          </motion.h1>

          {/* Who it's for */}
          <motion.p 
            variants={fadeIn}
            className="mt-6 text-lg text-slate-600 leading-relaxed"
          >
            Built for Egyptian and Middle Eastern retail chains (2–50 branches).<br />
            POS, inventory, accounting, and HR that stay operational during outages.
          </motion.p>

          {/* Primary differentiator callout */}
          <motion.div 
            variants={fadeIn}
            className="mt-10 p-6 bg-slate-50 border-l-4 border-slate-900 rounded-r-lg"
          >
            <div className="flex items-start gap-4">
              <WifiOff className="w-6 h-6 text-slate-900 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">What "offline-first" actually means</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Your cashier at Mall of Arabia makes 50 sales while the network is down. 
                  When connectivity returns, everything syncs — inventory, journal entries, loyalty points. 
                  Zero data loss. No manual reconciliation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeIn} className="mt-10 flex flex-wrap gap-4">
            <Link 
              href="/demo"
              className="px-6 py-3 bg-slate-900 text-white font-medium rounded-md hover:bg-slate-800 transition-colors"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-slate-900 font-medium rounded-md border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
            >
              Talk to Us
            </Link>
          </motion.div>

          {/* Trust line */}
          <motion.p variants={fadeIn} className="mt-6 text-sm text-slate-500">
            No credit card required • 14-day trial • Egyptian businesses trust WK-Hub with daily operations
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// ============== QUICK UNDERSTANDING ==============
function QuickUnderstanding() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const coreFacts = [
    { label: "Offline-First", description: "Branches operate independently, sync when connected" },
    { label: "Multi-Branch Control", description: "Stock transfers, approvals, consolidated reporting" },
    { label: "Arabic-Native", description: "Built for Egyptian e-invoicing (ETA), EGP, local gateways" },
    { label: "Accounting Built-In", description: "Double-entry bookkeeping, not Excel export" }
  ]

  return (
    <section ref={ref} className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeIn}
            className="text-2xl font-semibold text-slate-900 mb-8"
          >
            Core Capabilities
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreFacts.map((fact, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="p-5 bg-white rounded-lg border border-slate-200"
              >
                <h3 className="font-semibold text-slate-900 mb-2">{fact.label}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{fact.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============== PRODUCT OVERVIEW ==============
function ProductOverview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const modules = [
    {
      icon: MonitorSmartphone,
      name: "POS",
      description: "Touch-friendly point of sale. Barcode scanning, split payments, hold/resume transactions.",
      practice: "Cashier processes 50 sales during network outage. Everything syncs when connection returns."
    },
    {
      icon: Package,
      name: "Inventory",
      description: "Multi-branch stock control. Variants (size, color), transfers with approval workflows.",
      practice: "Move 20 units from Downtown to Main branch. Manager approves. Stock updates across all locations."
    },
    {
      icon: Calculator,
      name: "Accounting",
      description: "Double-entry bookkeeping built in. Chart of Accounts, Trial Balance, P&L, Balance Sheet.",
      practice: "Every sale automatically generates journal entries. No Excel export. No manual reconciliation."
    },
    {
      icon: Clock,
      name: "HR & Commissions",
      description: "Employee management, attendance tracking, commission calculation on every sale.",
      practice: "Assign seller to sale. Commission calculated automatically. Attendance tied to shifts."
    }
  ]

  return (
    <section id="overview" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Product Overview</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              One connected platform — not modules glued together. Every component shares the same database, 
              syncs together, and works offline.
            </p>
          </motion.div>

          {/* Screenshot Zone */}
          <motion.div variants={fadeIn} className="mt-12 p-8 bg-slate-50 rounded-lg border-2 border-dashed border-slate-300">
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <MonitorSmartphone className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-500 font-medium">Screenshot Zone: Dashboard Overview</p>
              <p className="text-sm text-slate-400 mt-2">Multi-branch selector, today's sales, stock alerts</p>
            </div>
          </motion.div>

          {/* Modules Grid */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => {
              const Icon = module.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="p-6 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-slate-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">{module.name}</h3>
                      <p className="text-sm text-slate-600 mb-3 leading-relaxed">{module.description}</p>
                      <div className="pl-3 border-l-2 border-slate-200">
                        <p className="text-sm text-slate-500 italic">In practice: {module.practice}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============== KEY DIFFERENTIATORS ==============
function Differentiators() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const differentiators = [
    {
      icon: WifiOff,
      title: "True Offline-First",
      problem: "Most systems are 'offline-capable' — they cache data but break without internet.",
      solution: "WK-Hub operates independently per branch. No internet required for operations.",
      impact: "Complete sales, manage inventory, print receipts — even if your ISP is down for a week."
    },
    {
      icon: GitBranch,
      title: "Multi-Branch Designed",
      problem: "Generic POS treats branches as separate entities. Transfers tracked in notebooks.",
      solution: "Built-in stock transfer workflows with approval chains and branch-to-branch visibility.",
      impact: "Manager sees real-time stock across all locations. Approve transfers from phone."
    },
    {
      icon: Languages,
      title: "Arabic-Native, EGP-First",
      problem: "International SaaS adapted for Arabic is clunky. ETA invoicing added as afterthought.",
      solution: "Built from day one for Egyptian retail. ETA e-invoicing, Fawry, Paymob integrated.",
      impact: "Compliant with tax authority. Customers pay via Egyptian gateways. No surprises."
    },
    {
      icon: Calculator,
      title: "Accounting, Not Reports",
      problem: "Most POS exports to Excel. Accountant rebuilds everything manually each month.",
      solution: "Double-entry bookkeeping engine built in. Chart of Accounts, Trial Balance, Financial Statements.",
      impact: "Close books in minutes, not days. Every sale is a journal entry. No reconciliation needed."
    },
    {
      icon: Shield,
      title: "150+ Permission Granularity",
      problem: "Basic roles: 'Admin' or 'Cashier'. Can't restrict who approves discounts or transfers.",
      solution: "150+ granular permissions. Control exactly who can approve, view, delete, or export.",
      impact: "Branch manager approves discounts but can't delete sales. Accountant sees reports, not passwords."
    },
    {
      icon: Database,
      title: "No Vendor Lock-In",
      problem: "Cloud-only SaaS holds your data hostage. Can't export full database or run locally.",
      solution: "Self-host option available. Full database export anytime. LAN/VPN sync without cloud.",
      impact: "Own your data completely. Switch to self-hosting whenever you choose."
    }
  ]

  return (
    <section id="different" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why WK-Hub Is Different</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Not positioned as "better" — different by design. Built for constraints that most systems ignore.
            </p>
          </motion.div>

          <div className="mt-16 space-y-12">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-8 rounded-lg border border-slate-200"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-slate-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-4">{diff.title}</h3>
                      
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Problem</span>
                          <p className="mt-1 text-slate-600">{diff.problem}</p>
                        </div>
                        
                        <div>
                          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Solution</span>
                          <p className="mt-1 text-slate-700 font-medium">{diff.solution}</p>
                        </div>
                        
                        <div>
                          <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">Impact</span>
                          <p className="mt-1 text-slate-600 italic">{diff.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============== HOW IT WORKS SECTION ==============
function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: "01",
      title: "Set Up Your Branches",
      description: "Add your locations, assign users, configure permissions. Takes about 15 minutes."
    },
    {
      number: "02",
      title: "Import Your Products",
      description: "Bulk import from Excel, scan barcodes, or enter manually. Variants (size, color) supported."
    },
    {
      number: "03",
      title: "Start Selling",
      description: "Your first sale can happen today. Offline sync works from minute one."
    }
  ]

  return (
    <section id="how-it-works" ref={ref} className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
              Up and running in 3 steps
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-slate-200 -translate-x-1/2 z-0" />
                )}
                
                <div className="relative z-10 text-center md:text-left">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 text-white text-xl font-bold rounded-2xl mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============== WHO IT'S FOR SECTION ==============
function WhoItsForSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const forYou = [
    "Retail chains with 2-50 branches across cities",
    "Businesses where internet is unreliable or expensive",
    "Stores selling products with variants (size, color, material)",
    "Owners who need real visibility into every branch's operations",
    "Businesses required to comply with Egyptian ETA e-invoicing"
  ]

  const notForYou = [
    "Single-location shops (too complex for your needs)",
    "Businesses with stable, fast internet and simple operations",
    "Companies wanting cloud-only solutions with no self-host option",
    "International operations outside Egypt/Middle East (not localized)",
    "Shops comfortable with Excel spreadsheets and manual processes"
  ]

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-16"
          >
            Is This For You?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For You */}
            <motion.div variants={fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">This is for you if:</h3>
              </div>
              <ul className="space-y-4">
                {forYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not For You */}
            <motion.div variants={fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                  <X className="w-5 h-5 text-slate-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">This is NOT for you if:</h3>
              </div>
              <ul className="space-y-4">
                {notForYou.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============== TECHNICAL PROOF SECTION ==============
function TechnicalProof() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const proofPoints = [
    {
      metric: "1,037 Tests",
      detail: "Automated test suite covering backend and frontend",
      why: "Every module tested. Regression prevention built in."
    },
    {
      metric: "60+ API Modules",
      detail: "Full REST API with TypeScript, Prisma ORM, PostgreSQL",
      why: "Complete business logic. No smoke and mirrors."
    },
    {
      metric: "3 Platforms",
      detail: "Web admin panel, Electron desktop POS, React Native mobile",
      why: "Same codebase, same data model, same experience."
    },
    {
      metric: "71 Tenant-Scoped Models",
      detail: "Multi-tenant architecture with branch-level isolation",
      why: "Your data never mixes with another business. Ever."
    }
  ]

  const techStack = [
    { category: "Backend", items: "Node.js, Express, TypeScript, Prisma, PostgreSQL, Redis" },
    { category: "Frontend", items: "React 18, Vite, TailwindCSS, Zustand, IndexedDB" },
    { category: "Desktop", items: "Electron 28, 93MB installer, Windows/macOS/Linux" },
    { category: "Mobile", items: "React Native, Expo, offline-first sync" }
  ]

  return (
    <section id="proof" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Technical Proof</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Not vapor ware. Not a prototype. Production-grade system handling real money, inventory, and payroll.
            </p>
          </motion.div>

          {/* Proof Points */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">
            {proofPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="p-6 bg-white border border-slate-200 rounded-lg"
              >
                <div className="font-mono text-2xl font-bold text-slate-900 mb-2">{point.metric}</div>
                <p className="text-sm text-slate-600 mb-3">{point.detail}</p>
                <p className="text-sm text-slate-500 italic">{point.why}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack */}
          <motion.div variants={fadeIn} className="mt-12 p-8 bg-white border border-slate-200 rounded-lg">
            <h3 className="text-lg font-semibold text-slate-900 mb-6">Technology Stack</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {techStack.map((stack, index) => (
                <div key={index}>
                  <div className="text-sm font-medium text-slate-500 mb-2">{stack.category}</div>
                  <div className="text-slate-700">{stack.items}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Architecture Diagram Zone */}
          <motion.div variants={fadeIn} className="mt-8 p-8 bg-white rounded-lg border-2 border-dashed border-slate-300">
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-200 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Database className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-500 font-medium">Screenshot Zone: Architecture Diagram</p>
              <p className="text-sm text-slate-400 mt-2">IndexedDB → Service Worker → Backend sync flow</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// ============== COMPARISON SECTION ==============
function ComparisonSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const comparisons = [
    {
      type: "vs Generic Cloud POS",
      them: "Online-only. Branch data scattered. Manual stock transfers via WhatsApp.",
      us: "True offline-first. Unified multi-branch view. Built-in transfer workflows with approvals."
    },
    {
      type: "vs Full ERP Systems",
      them: "Massive, complex setup. Consultant required. 6-month implementation.",
      us: "15-minute setup. Import products from Excel. Start selling today."
    },
    {
      type: "vs International SaaS",
      them: "Arabic as afterthought. No ETA integration. Priced in USD with conversion fees.",
      us: "Arabic-native. ETA e-invoicing built in. Priced in EGP. Local payment gateways."
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How WK-Hub Compares</h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Not better at everything — better at what actually matters for multi-branch Egyptian retail.
            </p>
          </motion.div>

          <div className="mt-16 space-y-8">
            {comparisons.map((comp, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="border border-slate-200 rounded-lg overflow-hidden"
              >
                <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
                  <h3 className="font-semibold text-slate-900">{comp.type}</h3>
                </div>
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                  <div className="p-6">
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-3">Them</div>
                    <p className="text-slate-600">{comp.them}</p>
                  </div>
                  <div className="p-6 bg-slate-50/50">
                    <div className="text-xs font-medium text-slate-900 uppercase tracking-wide mb-3">WK-Hub</div>
                    <p className="text-slate-900 font-medium">{comp.us}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ============== CTA SECTION ==============
function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 bg-slate-900">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.h2 
            variants={fadeIn}
            className="text-3xl sm:text-4xl font-bold text-white leading-tight"
          >
            See if WK-Hub fits your operations.
          </motion.h2>
          
          <motion.p 
            variants={fadeIn}
            className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Request a demo. We'll walk through your workflow, show how the system handles your specific needs, 
            and answer questions about multi-branch sync, offline operations, and ETA compliance.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-10 flex flex-wrap justify-center gap-4">
            <Link 
              href="/demo"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
            >
              Request a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-slate-700 text-white font-semibold rounded-lg hover:border-slate-600 transition-colors"
            >
              Talk to Us
            </Link>
          </motion.div>

          <motion.p variants={fadeIn} className="mt-8 text-sm text-slate-500">
            Response within 24 hours. No sales pressure.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

// ============== FOOTER ==============
function Footer() {
  return (
    <footer className="py-16 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">WK</span>
              </div>
              <span className="text-white font-semibold">WK-Hub</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              Offline-first business operating system for Egyptian retail chains. 
              One system for POS, inventory, accounting, and HR.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#overview" className="text-slate-400 hover:text-slate-300 transition-colors">Overview</a></li>
              <li><a href="#different" className="text-slate-400 hover:text-slate-300 transition-colors">Why Different</a></li>
              <li><a href="#proof" className="text-slate-400 hover:text-slate-300 transition-colors">Technical Proof</a></li>
              <li><a href="/pricing" className="text-slate-400 hover:text-slate-300 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/demo" className="text-slate-400 hover:text-slate-300 transition-colors">Request Demo</a></li>
              <li><a href="/contact" className="text-slate-400 hover:text-slate-300 transition-colors">Contact</a></li>
              <li><a href="/privacy" className="text-slate-400 hover:text-slate-300 transition-colors">Privacy</a></li>
              <li><a href="/terms" className="text-slate-400 hover:text-slate-300 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} WK-Hub. Built for Egyptian retail.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span>v2.60.0</span>
            <span className="w-1 h-1 bg-slate-700 rounded-full" />
            <span>1,037 tests passing</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============== MAIN PAGE ==============
export default function MarketingPage() {
  return (
    <main className="bg-white">
      <Navigation />
      <HeroSection />
      <QuickUnderstanding />
      <ProductOverview />
      <Differentiators />
      <HowItWorksSection />
      <WhoItsForSection />
      <TechnicalProof />
      <ComparisonSection />
      <CTASection />
      <Footer />
    </main>
  )
}
