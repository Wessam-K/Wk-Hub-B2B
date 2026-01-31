import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 to-purple-700 text-white">
      <div className="container-custom text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Grow Your Profit?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join 2,500+ businesses that trust WK System
        </p>
        
        <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center space-x-2">
          <span>Get Started in 60 Seconds</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <p className="mt-4 text-sm opacity-75">
          No credit card required • Free 14-day trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}
