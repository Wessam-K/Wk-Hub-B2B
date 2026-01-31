'use client'

import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    company: 'Al-Noor Pharmacy',
    industry: 'Healthcare',
    quote: 'WK transformed our inventory management. Batch tracking and expiry alerts saved us thousands in waste.',
    author: 'Ahmed Al-Hashmi',
    role: 'Owner',
    rating: 5
  },
  {
    company: 'Bella Cafe',
    industry: 'F&B',
    quote: 'The offline POS is a game-changer. We never lose a sale, even during internet outages.',
    author: 'Sara Mohammed',
    role: 'Manager',
    rating: 5
  },
  {
    company: 'Parts Plus Auto',
    industry: 'Automotive',
    quote: 'Serial number tracking and warranty management made our operations so much smoother.',
    author: 'Khalid Saeed',
    role: 'Operations Director',
    rating: 5
  }
]

const customers = [
  { name: 'Al-Noor', logo: '🏥' },
  { name: 'Bella', logo: '☕' },
  { name: 'TechMart', logo: '📱' },
  { name: 'Elite Fashion', logo: '👗' },
  { name: 'Golden Hotel', logo: '🏨' },
  { name: 'EduCenter', logo: '🎓' }
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trusted By */}
        <div className="text-center mb-16">
          <p className="text-sm text-gray-600 uppercase tracking-wider font-semibold mb-8">
            Trusted by 500+ businesses across Saudi Arabia
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {customers.map((customer) => (
              <div key={customer.name} className="flex items-center space-x-2 opacity-60 hover:opacity-100 transition-opacity">
                <span className="text-4xl">{customer.logo}</span>
                <span className="text-lg font-semibold text-gray-700">{customer.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">{testimonial.industry}</p>
                  </div>
                  <Quote className="w-8 h-8 text-blue-600 opacity-20" />
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Active Businesses</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime SLA</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">50K+</div>
            <div className="text-gray-600">Transactions Daily</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
