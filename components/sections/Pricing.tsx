'use client'

import { Check } from 'lucide-react'
import { useState } from 'react'

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly')

  const plans = [
    {
      name: 'Starter',
      tagline: 'The Compliance Saver',
      price: { monthly: 299, yearly: 2870 },
      features: [
        'Single Branch POS',
        'ZATCA Phase 2 Auto-Submit',
        'Up to 1,000 products',
        'Basic Inventory Management',
        'Standard Reports',
        'Email Support',
      ],
      color: 'gray',
      cta: 'Start Free Trial',
    },
    {
      name: 'Growth',
      tagline: 'The Growth Engine',
      price: { monthly: 599, yearly: 5750 },
      features: [
        'Everything in Starter',
        'Up to 3 Branches',
        'Full Accounting Module',
        'HR & Payroll',
        'Unlimited Products',
        'Advanced Reports & Analytics',
        'E-commerce Integration (Salla, Zid)',
        'Priority Support (24/7)',
        'Custom Branding',
      ],
      color: 'primary',
      popular: true,
      cta: 'Start Free Trial',
    },
    {
      name: 'Enterprise',
      tagline: 'The Franchise Scaler',
      price: { monthly: 'Custom', yearly: 'Custom' },
      features: [
        'Everything in Growth',
        'Unlimited Branches',
        'White-Label Solution',
        'API Access + Custom Integrations',
        'Dedicated Account Manager',
        'Custom Development',
        'On-Premise Deployment Option',
        'SLA Guarantee (99.99%)',
      ],
      color: 'purple',
      cta: 'Contact Sales',
    },
  ]

  const savingsPercentage = 20

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Simple, Transparent{' '}
            <span className="text-primary-600">Pricing</span>
          </h2>
          <p className="section-subtitle mx-auto mb-8">
            No hidden fees. No surprises. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center space-x-4 bg-white rounded-full p-2 shadow-md border border-gray-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-full font-medium transition-all relative ${
                billingCycle === 'yearly'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-zatca-green text-white text-xs px-2 py-1 rounded-full">
                Save {savingsPercentage}%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl p-8 border-2 ${
                plan.popular
                  ? 'border-primary-500 scale-105'
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-500 mb-6">{plan.tagline}</p>

                <div className="mb-6">
                  {typeof plan.price[billingCycle] === 'number' ? (
                    <>
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price[billingCycle]}
                      </span>
                      <span className="text-gray-500 ml-2">EGP/mo</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price[billingCycle]}
                    </span>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            All plans include: SSL Security, Daily Backups, Free Updates, and ZATCA Compliance
          </p>
          <button className="text-primary-600 font-semibold hover:underline">
            Compare All Features →
          </button>
        </div>
      </div>
    </section>
  )
}
