'use client'

import { ArrowRight, Play, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [view, setView] = useState<'retail' | 'restaurant'>('retail')

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Copy */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-zatca-green/10 px-4 py-2 rounded-full mb-6">
              <CheckCircle2 className="w-5 h-5 text-zatca-green" />
              <span className="text-sm font-semibold text-zatca-green">
                ZATCA Phase 2 Certified
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              The Only POS That{' '}
              <span className="text-primary-600">Pays Your Zakat</span>{' '}
              For You
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              WK System handles your Inventory, Accounting, and ZATCA Phase 2 
              compliance automatically. One screen, zero fines.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="btn-primary flex items-center justify-center space-x-2 group">
                <span>Try Demo (No Login Required)</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch 2-Min Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>No Credit Card</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>60-Second Setup</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Free Trial</span>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Demo Preview */}
          <div className="relative animate-slide-up">
            {/* View Toggle */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setView('retail')}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    view === 'retail'
                      ? 'bg-white text-primary-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Retail View
                </button>
                <button
                  onClick={() => setView('restaurant')}
                  className={`px-6 py-2 rounded-lg font-medium transition-all ${
                    view === 'restaurant'
                      ? 'bg-white text-primary-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Restaurant View
                </button>
              </div>
            </div>

            {/* 3D Isometric Mockup */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="aspect-video bg-gradient-to-br from-primary-50 to-purple-50 rounded-lg flex items-center justify-center">
                {view === 'retail' ? (
                  <div className="text-center">
                    <div className="text-6xl mb-4">🏪</div>
                    <p className="text-lg font-semibold text-gray-700">
                      Retail POS Interface
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Fast checkout • Barcode scanning • Inventory sync
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-6xl mb-4">🍽️</div>
                    <p className="text-lg font-semibold text-gray-700">
                      Restaurant POS Interface
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Table management • Kitchen display • Recipe costing
                    </p>
                  </div>
                )}
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-gray-700">Live Sync</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-200">
                <div className="text-sm">
                  <p className="text-gray-500">Works Offline</p>
                  <p className="text-2xl font-bold text-primary-600">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Transactions Map (Optional) */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Trusted by 2,500+ businesses across Saudi Arabia
          </p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl">🏪</div>
            <div className="text-2xl">🍔</div>
            <div className="text-2xl">💈</div>
            <div className="text-2xl">🔧</div>
            <div className="text-2xl">🏥</div>
          </div>
        </div>
      </div>
    </section>
  )
}
