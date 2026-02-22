'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Home, RotateCcw } from 'lucide-react'
import { getImagePath } from '@/lib/utils'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
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

          <h1 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
            Something Went Wrong
          </h1>

          <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
            We&apos;re sorry — an unexpected error occurred.
            Please try again, or head back to the homepage.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => reset()}
              className="btn bg-white text-primary hover:bg-white/90 font-semibold px-6 py-3 rounded transition-all duration-200 inline-flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              Try Again
            </button>
            <a
              href="/"
              className="btn-outline-white"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </a>
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
            <a
              href="/programs"
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Nursery School
            </a>
            <span className="text-neutral-light">|</span>
            <a
              href="/volunteer"
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Volunteer
            </a>
            <span className="text-neutral-light">|</span>
            <a
              href="/donate"
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Donate
            </a>
            <span className="text-neutral-light">|</span>
            <a
              href="/gallery"
              className="text-sm text-primary hover:text-primary-dark transition-colors"
            >
              Gallery
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
