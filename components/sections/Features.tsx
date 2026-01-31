'use client'

import { Zap, Wifi, BarChart3, Shield, Layers, Cpu } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Speed of Light POS',
      description: 'Process 50 customers in 10 minutes. Works offline. Syncs instantly.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: BarChart3,
      title: 'Your AI Accountant',
      description: 'VAT returns generated in 1-click. P&L statements updated every second.',
      gradient: 'from-green-400 to-emerald-600',
    },
    {
      icon: Layers,
      title: 'Plays Nice with Others',
      description: 'Integrates with Salla, Zid, HungerStation, Jahez, and 50+ platforms.',
      gradient: 'from-blue-400 to-indigo-600',
    },
    {
      icon: Wifi,
      title: 'Works 100% Offline',
      description: 'Internet down? No problem. POS keeps running, syncs when back online.',
      gradient: 'from-purple-400 to-pink-600',
    },
    {
      icon: Shield,
      title: 'ZATCA Auto-Pilot',
      description: 'Phase 2 invoices cryptographically signed and submitted automatically.',
      gradient: 'from-red-400 to-rose-600',
    },
    {
      icon: Cpu,
      title: 'Multi-Branch Magic',
      description: 'One dashboard for 1 store or 100 stores. Real-time inventory transfers.',
      gradient: 'from-cyan-400 to-teal-600',
    },
  ]

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            Everything You Need,{' '}
            <span className="text-primary-600">Nothing You Don't</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Built by retailers, for retailers. Every feature solves a real pain point.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`} />
                
                <div className="relative">
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech & Compliance Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gray-50 px-8 py-4 rounded-full border border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-zatca-green rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">ZATCA Phase 2</p>
                <p className="text-xs text-gray-500">Certified & Compliant</p>
              </div>
            </div>
            
            <div className="w-px h-10 bg-gray-300" />
            
            <div className="flex items-center space-x-2">
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-900">99.99% Uptime</p>
                <p className="text-xs text-gray-500">ISO 27001 Security</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
