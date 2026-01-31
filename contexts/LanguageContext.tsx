'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type Language = 'en' | 'ar'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.industries': 'Industries',
    'nav.apiDocs': 'API Docs',
    'nav.hardwareStore': 'Hardware Store',
    'nav.tryDemo': 'Try Demo',
    
    // Hero
    'hero.title': 'WK — Accounting, POS & Inventory',
    'hero.subtitle': 'Built for Retail and SMBs',
    'hero.fastPOS': 'Fast POS',
    'hero.offlineFirst': 'Offline-First',
    'hero.arabicTaxes': 'Arabic + International Taxes',
    'hero.startTrial': 'Start Free 14-day Trial',
    'hero.requestDemo': 'Request Demo',
    'hero.noCreditCard': 'No credit card required',
    'hero.quickSetup': '60-second setup',
    'hero.cancelAnytime': 'Cancel anytime',
    'hero.posInterface': 'WK POS Interface',
    'hero.posDescription': 'Lightning-fast cashier screen with offline support',
    
    // Feature Cards
    'features.offlineMode': 'Offline Mode',
    'features.autoSync': 'Auto-sync enabled',
    'features.fastCheckout': 'Fast Checkout',
    'features.under2Seconds': '< 2 seconds',
  },
  ar: {
    // Navigation
    'nav.features': 'المميزات',
    'nav.pricing': 'الأسعار',
    'nav.industries': 'الصناعات',
    'nav.apiDocs': 'وثائق API',
    'nav.hardwareStore': 'متجر الأجهزة',
    'nav.tryDemo': 'جرب النسخة التجريبية',
    
    // Hero
    'hero.title': 'WK — محاسبة، نقاط البيع والمخزون',
    'hero.subtitle': 'مصمم للتجزئة والشركات الصغيرة والمتوسطة',
    'hero.fastPOS': 'نقطة بيع سريعة',
    'hero.offlineFirst': 'يعمل بدون إنترنت',
    'hero.arabicTaxes': 'دعم اللغة العربية والضرائب الدولية',
    'hero.startTrial': 'ابدأ تجربة مجانية لمدة 14 يومًا',
    'hero.requestDemo': 'اطلب عرضًا توضيحيًا',
    'hero.noCreditCard': 'لا حاجة لبطاقة ائتمان',
    'hero.quickSetup': 'إعداد في 60 ثانية',
    'hero.cancelAnytime': 'إلغاء في أي وقت',
    'hero.posInterface': 'واجهة نقطة البيع WK',
    'hero.posDescription': 'شاشة صندوق سريعة مع دعم العمل بدون إنترنت',
    
    // Feature Cards
    'features.offlineMode': 'وضع عدم الاتصال',
    'features.autoSync': 'المزامنة التلقائية مفعلة',
    'features.fastCheckout': 'دفع سريع',
    'features.under2Seconds': '< ثانيتين',
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Load saved language preference
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ar')) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    // Update document language and direction
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    
    // Save language preference
    localStorage.setItem('language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en')
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
