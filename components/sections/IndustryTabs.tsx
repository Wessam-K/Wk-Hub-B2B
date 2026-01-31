'use client'

import { useState } from 'react'

export default function IndustryTabs() {
  const [activeTab, setActiveTab] = useState<'retail' | 'restaurant' | 'services'>('retail')

  const industries = {
    retail: {
      icon: '🏪',
      title: 'Retail Stores',
      features: ['Variant Management (Size/Color)', 'Barcode Label Printing', 'Multi-Warehouse', 'Loyalty Programs'],
    },
    restaurant: {
      icon: '🍽️',
      title: 'Restaurants & Cafes',
      features: ['Kitchen Display System', 'Recipe Costing', 'Table Management', 'Online Orders Integration'],
    },
    services: {
      icon: '💈',
      title: 'Services (Salons/Repairs)',
      features: ['Appointment Booking', 'SMS Reminders', 'Technician Commissions', 'Service Packages'],
    },
  }

  return (
    <section id="industries" className="py-24 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Built for <span className="text-primary-600">Your Industry</span>
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          {Object.keys(industries).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as any)}
              className={`px-6 py-3 font-semibold transition-all ${
                activeTab === key
                  ? 'text-primary-600 border-b-2 border-primary-600'
                  : 'text-gray-600'
              }`}
            >
              {industries[key as keyof typeof industries].title}
            </button>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-6xl text-center mb-6">
            {industries[activeTab].icon}
          </div>
          <h3 className="text-2xl font-bold text-center mb-6">
            {industries[activeTab].title}
          </h3>
          <ul className="grid md:grid-cols-2 gap-4">
            {industries[activeTab].features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-green-500">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
