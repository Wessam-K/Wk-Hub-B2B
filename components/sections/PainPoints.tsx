'use client'

import { AlertTriangle, TrendingDown, Eye } from 'lucide-react'

export default function PainPoints() {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: 'Are you tired of "Ghost Inventory"?',
      description: 'Stock showing in system but missing on shelf',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      icon: TrendingDown,
      title: 'Terrified of Zakat Fines?',
      description: 'One wrong invoice could cost you 10,000 EGP',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Eye,
      title: 'Flying Blind?',
      description: 'Not knowing your profit until the end of the month',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Running a Business Shouldn't Feel Like{' '}
            <span className="text-red-400">Chaos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Most business owners are drowning in disconnected systems, 
            manual processes, and compliance anxiety.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {painPoints.map((pain, index) => {
            const Icon = pain.icon
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all"
              >
                <div className={`${pain.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${pain.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{pain.title}</h3>
                <p className="text-gray-400 text-lg">{pain.description}</p>
              </div>
            )
          })}
        </div>

        {/* The Pivot */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-1">
            <div className="bg-gray-900 rounded-xl px-8 py-6">
              <p className="text-3xl font-bold">
                WK turns <span className="text-primary-400">chaos</span> into{' '}
                <span className="text-zatca-green">clarity</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
