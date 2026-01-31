import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API Docs', href: '/docs' },
      { name: 'Integrations', href: '/integrations' },
      { name: 'Hardware Store', href: '/hardware' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ],
    resources: [
      { name: 'Help Center', href: '/support' },
      { name: 'Video Tutorials', href: '/tutorials' },
      { name: 'Migration Guide', href: '/migrate' },
      { name: 'ZATCA Guide', href: '/zatca-guide' },
    ],
    migrate: [
      { name: 'From Foodics', href: '/migrate/foodics' },
      { name: 'From Odoo', href: '/migrate/odoo' },
      { name: 'From Excel', href: '/migrate/excel' },
    ],
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">WK</span>
              </div>
              <span className="text-2xl font-bold text-white">WK System</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              The ZATCA-compliant POS & ERP system built for Saudi businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Migrate Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Migrate From</h3>
            <ul className="space-y-2">
              {footerLinks.migrate.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-primary-400" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">support@wksystem.sa</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-primary-400" />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white" dir="ltr">+966 11 234 5678</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-primary-400" />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">Riyadh, Saudi Arabia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 WK System. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-gray-400 hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
