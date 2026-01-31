'use client'

import { ArrowRight, CheckCircle2, Zap, Cloud, Globe } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function HeroNew() {
  const { t } = useLanguage()
  
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Tagline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in">
            {t('hero.title')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {t('hero.subtitle')}
            </span>
          </h1>

          {/* Three Benefit Bullets */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 animate-slide-up">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-lg font-semibold text-gray-700">{t('hero.fastPOS')}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                <Cloud className="w-5 h-5 text-green-600" />
              </div>
              <span className="text-lg font-semibold text-gray-700">{t('hero.offlineFirst')}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-lg font-semibold text-gray-700">{t('hero.arabicTaxes')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{animationDelay: '0.1s'}}>
            <Link 
              href="/demo" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl group"
            >
              <span>{t('hero.startTrial')}</span>
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link 
              href="/demo/request" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200"
            >
              {t('hero.requestDemo')}
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>{t('hero.noCreditCard')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>{t('hero.quickSetup')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>{t('hero.cancelAnytime')}</span>
            </div>
          </div>
        </div>

        {/* Animated Product Mockup */}
        <div className="mt-16 relative animate-scale-in" style={{animationDelay: '0.3s'}}>
          <div className="relative mx-auto max-w-6xl">
            {/* Main Screenshot */}
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200 bg-white">
              <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-xl">
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('hero.posInterface')}</h3>
                  <p className="text-gray-600">{t('hero.posDescription')}</p>
                </div>
              </div>
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -left-4 top-1/4 hidden lg:block animate-float">
              <div className="bg-white rounded-lg shadow-xl p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t('features.offlineMode')}</p>
                    <p className="text-xs text-gray-600">{t('features.autoSync')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-1/3 hidden lg:block animate-float" style={{animationDelay: '0.5s'}}>
              <div className="bg-white rounded-lg shadow-xl p-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t('features.fastCheckout')}</p>
                    <p className="text-xs text-gray-600">{t('features.under2Seconds')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
