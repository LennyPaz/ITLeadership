import Link from 'next/link'
import Image from 'next/image'
import { Home, Search } from 'lucide-react'
import { getImagePath } from '@/lib/utils'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Dark hero section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary-dark overflow-hidden flex-1 flex items-center">
        {/* Background layer */}
        <div className="absolute inset-0">
          <Image
            src={getImagePath('/images/Home/IMG7.webp')}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark via-secondary-dark/95 to-secondary-dark" />
        </div>

        {/* Decorative blur */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-honey/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="container-base relative z-10 text-center">
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
          <h1 className="text-8xl font-heading font-bold text-white/20 mb-4">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Page Not Found
          </h2>

          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn bg-white text-primary hover:bg-white/90 font-semibold px-6 py-3 rounded transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="btn-outline-white"
            >
              <Search className="w-5 h-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Helpful links section */}
      <section className="bg-neutral-cream py-12">
        <div className="container-base text-center">
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
      </section>
    </div>
  )
}
