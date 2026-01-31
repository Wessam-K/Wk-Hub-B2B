'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, Globe, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()
  const langMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const navLinks = [
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.industries'), href: '#industries' },
    { name: t('nav.apiDocs'), href: '/docs' },
    { name: t('nav.hardwareStore'), href: '/hardware' },
  ]

  const handleLanguageToggle = () => {
    toggleLanguage()
    setIsLangMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">WK</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">WK System</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Dropdown */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-600 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{language === 'en' ? 'EN' : 'AR'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                  <button
                    onClick={handleLanguageToggle}
                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {language === 'en' ? 'العربية' : 'English'}
                  </button>
                </div>
              )}
            </div>

            <Link href="/demo" className="btn-primary">
              {t('nav.tryDemo')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-3 text-gray-700 hover:text-primary-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Language Toggle */}
            <button
              onClick={handleLanguageToggle}
              className="flex items-center space-x-2 py-3 text-gray-700 hover:text-primary-600 font-medium w-full"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'en' ? 'Switch to Arabic (العربية)' : 'التبديل إلى الإنجليزية (English)'}</span>
            </button>
            
            <Link
              href="/demo"
              className="block mt-4 text-center btn-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.tryDemo')}
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
