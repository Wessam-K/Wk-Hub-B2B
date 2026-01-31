'use client'

import { Check, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const editions = [
  {
    name: 'WK Lite',
    tagline: 'Perfect for small businesses',
    price: '$299',
    period: '/month',
    description: 'Get started with essential features',
    features: [
      '5 users',
      '3 branches',
      '1,000 products',
      'Basic reports',
      'Email support',
      'Mobile app access',
      'Cloud storage'
    ],
    cta: 'Start Free Trial',
    href: '/pricing',
    popular: false
  },
  {
    name: 'WK Pro',
    tagline: 'Most popular for growing teams',
    price: '$599',
    period: '/month',
    description: 'Advanced features for scaling businesses',
    features: [
      '20 users',
      '10 branches',
      'Unlimited products',
      'Advanced reports & analytics',
      'Payment gateway integration',
      'E-invoice connector',
      'Priority support (phone + chat)',
      'Custom workflows',
      'API access'
    ],
    cta: 'Start Free Trial',
    href: '/pricing',
    popular: true
  },
  {
    name: 'WK Enterprise',
    tagline: 'For large organizations',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions with dedicated support',
    features: [
      'Unlimited users & branches',
      'White-label option',
      'On-premise deployment',
      'Custom integrations',
      'Dedicated account manager',
      '24/7 SLA support',
      'Training & onboarding',
      'Custom development',
      'Advanced security'
    ],
    cta: 'Contact Sales',
    href: '/contact',
    popular: false
  }
]

export default function EditionsCards() {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Edition
          </h2>
          <p className="text-xl text-gray-600">
            Scale as you grow. Switch plans anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editions.map((edition) => (
            <div
              key={edition.name}
              className={`relative rounded-2xl border-2 p-8 transition-all duration-300 hover:shadow-2xl ${
                edition.popular
                  ? 'border-blue-600 shadow-xl scale-105'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {edition.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {edition.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {edition.tagline}
                </p>
                
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-gray-900">
                    {edition.price}
                  </span>
                  {edition.period && (
                    <span className="text-gray-600 ml-2">{edition.period}</span>
                  )}
                </div>
                
                <p className="text-sm text-gray-600">
                  {edition.description}
                </p>
              </div>

              <Link
                href={edition.href}
                className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 mb-6 ${
                  edition.popular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                {edition.cta}
              </Link>

              <div className="space-y-3">
                {edition.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            Compare all features in detail
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
