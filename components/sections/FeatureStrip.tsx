'use client'

import { CreditCard, Package, BarChart3, Users, FileText } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: CreditCard,
    title: 'POS',
    benefit: 'Lightning-fast checkout with offline support',
    href: '/products/pos',
    color: 'blue'
  },
  {
    icon: FileText,
    title: 'Invoicing',
    benefit: 'Professional invoices in seconds',
    href: '/products/accounting',
    color: 'green'
  },
  {
    icon: Package,
    title: 'Inventory',
    benefit: 'Real-time stock tracking across branches',
    href: '/products/inventory',
    color: 'purple'
  },
  {
    icon: Users,
    title: 'HR',
    benefit: 'Attendance, payroll & employee management',
    href: '/products/hr',
    color: 'orange'
  },
  {
    icon: BarChart3,
    title: 'Reports',
    benefit: 'Business insights at your fingertips',
    href: '/products/reports',
    color: 'pink'
  }
]

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
    hover: 'hover:bg-blue-100'
  },
  green: {
    bg: 'bg-green-50',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
    hover: 'hover:bg-green-100'
  },
  purple: {
    bg: 'bg-purple-50',
    iconBg: 'bg-purple-100',
    iconColor: 'text-purple-600',
    hover: 'hover:bg-purple-100'
  },
  orange: {
    bg: 'bg-orange-50',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-600',
    hover: 'hover:bg-orange-100'
  },
  pink: {
    bg: 'bg-pink-50',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
    hover: 'hover:bg-pink-100'
  }
}

export default function FeatureStrip() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need in One System
          </h2>
          <p className="text-xl text-gray-600">
            Powerful modules that work together seamlessly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            const colors = colorClasses[feature.color as keyof typeof colorClasses]
            
            return (
              <Link
                key={feature.title}
                href={feature.href}
                className={`group relative ${colors.bg} rounded-2xl p-6 transition-all duration-300 ${colors.hover} hover:shadow-lg`}
              >
                <div className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${colors.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.benefit}
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center text-sm font-semibold text-gray-500 group-hover:text-gray-700">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
