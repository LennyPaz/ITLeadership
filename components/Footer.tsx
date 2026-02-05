import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Heart, ExternalLink, Shield, Award } from 'lucide-react'
import { getImagePath } from '@/lib/utils'

// Import content from JSON files
import settingsData from '@/content/settings.json'

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/gallery', label: 'Photo Gallery' },
  { href: '/contact', label: 'Contact' },
]

const supportLinks = [
  { href: '/donate', label: 'Make a Donation' },
  { href: '/volunteer', label: 'Become a Volunteer' },
  { href: '/contact', label: 'Partner With Us' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const settings = settingsData

  // Format address
  const formattedAddress = `${settings.address.street}, ${settings.address.city}, ${settings.address.state} ${settings.address.zip}`
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(formattedAddress)}`

  return (
    <footer className="bg-secondary text-white">
      {/* Main footer content */}
      <div className="container-base py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-16 h-16 bg-white rounded-lg p-1 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src={getImagePath('/images/logo.webp')}
                  alt={`${settings.organizationName} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mt-5 text-white/90 text-sm leading-relaxed">
              {settings.tagline}. Providing quality,
              affordable childcare to Tallahassee&apos;s Frenchtown community since {settings.yearFounded}.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 text-accent-honey text-sm font-medium">
              <Heart className="w-4 h-4" />
              <span>501(c)(3) Nonprofit Organization</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5 text-white">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Us */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5 text-white">
              Support Us
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Donate button */}
            <Link
              href="/donate"
              className="mt-6 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded font-heading font-medium text-sm transition-colors"
            >
              <Heart className="w-4 h-4" />
              Donate Today
            </Link>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-5 text-white">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/90 hover:text-white transition-colors text-sm group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent-honey" />
                  <span>
                    {settings.address.street}<br />
                    {settings.address.city}, {settings.address.state} {settings.address.zip}
                  </span>
                  <ExternalLink className="w-3 h-3 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={`tel:${settings.phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0 text-accent-honey" />
                  <span>{settings.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${settings.email}`}
                  className="flex items-center gap-3 text-white/90 hover:text-white transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 shrink-0 text-accent-honey" />
                  <span>{settings.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/90 text-sm">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-accent-honey" />
                  <span>
                    {settings.hours.weekdays}<br />
                    {settings.hours.weekend}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Badges & Partners */}
      <div className="border-t border-white/10">
        <div className="container-base py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Trust badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-white/70 text-xs">
                <Shield className="w-5 h-5 text-accent-honey" />
                <span>501(c)(3) Verified</span>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-xs">
                <Award className="w-5 h-5 text-accent-honey" />
                <span>GuideStar Listed</span>
              </div>
            </div>

            {/* Partner acknowledgment */}
            <div className="text-white/50 text-xs text-center md:text-right">
              Proudly serving Tallahassee&apos;s Frenchtown community with our local partners
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-base py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/90">
            <p>
              &copy; {currentYear} {settings.organizationName}, Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-white/50">|</span>
              <Link
                href="/accessibility"
                className="hover:text-white transition-colors"
              >
                Accessibility
              </Link>
              <span className="text-white/50">|</span>
              <span>EIN: {settings.ein}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
