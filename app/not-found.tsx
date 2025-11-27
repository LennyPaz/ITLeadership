import Link from 'next/link'
import Image from 'next/image'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { getImagePath } from '@/lib/utils'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral-cream flex items-center justify-center px-4 py-32">
      <div className="max-w-lg text-center">
        {/* Logo */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <Image
            src={getImagePath('/images/logo.webp')}
            alt="Project Annie Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* 404 */}
        <h1 className="text-8xl font-heading font-bold text-primary/20 mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-heading font-bold text-neutral-charcoal mb-4">
          Page Not Found
        </h2>

        <p className="text-neutral-gray text-lg mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="btn-outline"
          >
            <Search className="w-5 h-5" />
            Contact Us
          </Link>
        </div>

        {/* Helpful links */}
        <div className="mt-12 pt-8 border-t border-neutral-light">
          <p className="text-sm text-neutral-gray mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/programs"
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Nursery School
            </Link>
            <span className="text-neutral-light">|</span>
            <Link
              href="/volunteer"
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Volunteer
            </Link>
            <span className="text-neutral-light">|</span>
            <Link
              href="/donate"
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Donate
            </Link>
            <span className="text-neutral-light">|</span>
            <Link
              href="/gallery"
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
