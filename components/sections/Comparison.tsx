'use client'

import { Check, X } from 'lucide-react'

export default function Comparison() {
  const comparisons = [
    {
      feature: 'Offline Mode',
      wk: '100% Full Function',
      others: 'Limited',
      wkBest: true,
    },
    {
      feature: 'Built-in Accounting',
      wk: 'Yes (No QuickBooks needed)',
      others: 'Paid Integration',
      wkBest: true,
    },
    {
      feature: 'ZATCA Phase 2',
      wk: 'Free & Automatic',
      others: 'Paid Add-on',
      wkBest: true,
    },
    {
      feature: 'Multi-Language Support',
      wk: 'AR, EN, UR, TL',
      others: 'AR, EN only',
      wkBest: true,
    },
    {
      feature: 'Recipe/BOM Management',
      wk: 'Yes (Ingredient-level)',
      others: 'Basic only',
      wkBest: true,
    },
    {
      feature: 'Hardware Integration',
      wk: 'Direct (WebHID/USB)',
      others: 'System print dialog',
      wkBest: true,
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Why Businesses Are Switching{' '}
            <span className="text-primary-600">From Foodics & Odoo</span>
          </h2>
          <p className="section-subtitle mx-auto">
            See what makes WK different (and better)
          </p>
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-900 text-white p-6">
            <div className="text-lg font-semibold">Feature</div>
            <div className="text-lg font-semibold text-center">
              <span className="text-primary-400">WK System</span>
            </div>
            <div className="text-lg font-semibold text-center text-gray-400">
              Others
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 p-6 ${
                index !== comparisons.length - 1 ? 'border-b border-gray-200' : ''
              }`}
            >
              <div className="font-semibold text-gray-900">{item.feature}</div>
              
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-lg">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-700">{item.wk}</span>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-red-50 px-4 py-2 rounded-lg">
                  <X className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-medium text-red-700">{item.others}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-primary text-lg px-8 py-4">
            See Full Feature Comparison
          </button>
        </div>
      </div>
    </section>
  )
}
