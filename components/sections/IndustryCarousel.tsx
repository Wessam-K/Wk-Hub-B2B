'use client'

import { Store, Coffee, Heart, Wrench, Hotel, GraduationCap, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const industries = [
  {
    icon: Store,
    name: 'Retail Stores',
    description: 'Product variants, loyalty points, installments',
    color: 'blue',
    href: '/solutions/retail'
  },
  {
    icon: Coffee,
    name: 'Cafes & Restaurants',
    description: 'Table management, kitchen display, recipes',
    color: 'orange',
    href: '/solutions/cafes'
  },
  {
    icon: Heart,
    name: 'Clinics & Healthcare',
    description: 'Patient management, appointments, records',
    color: 'red',
    href: '/solutions/clinics'
  },
  {
    icon: Wrench,
    name: 'Auto Parts',
    description: 'Serial tracking, warranty, part numbers',
    color: 'gray',
    href: '/solutions/auto'
  },
  {
    icon: Hotel,
    name: 'Hotels',
    description: 'Reservations, room status, guest profiles',
    color: 'purple',
    href: '/solutions/hotels'
  },
  {
    icon: GraduationCap,
    name: 'Education',
    description: 'Student enrollment, courses, certificates',
    color: 'green',
    href: '/solutions/education'
  }
]

const colorClasses = {
  blue: 'from-blue-500 to-blue-600',
  orange: 'from-orange-500 to-orange-600',
  red: 'from-red-500 to-red-600',
  gray: 'from-gray-500 to-gray-600',
  purple: 'from-purple-500 to-purple-600',
  green: 'from-green-500 to-green-600'
}

export default function IndustryCarousel() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Built for Your Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored workflows and features designed specifically for different business types
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const Icon = industry.icon
            const gradientClass = colorClasses[industry.color as keyof typeof colorClasses]
            
            return (
              <Link
                key={industry.name}
                href={industry.href}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {industry.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {industry.description}
                  </p>

                  <div className="flex items-center text-sm font-semibold text-gray-500 group-hover:text-gray-700">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-gray-700 bg-white rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200"
          >
            View All Industries
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
