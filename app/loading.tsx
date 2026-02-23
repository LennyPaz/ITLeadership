import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

export default function Loading() {
  return (
    <section
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary-dark overflow-hidden flex-1 flex items-center"
      role="status"
      aria-label="Loading"
    >
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

        {/* Spinner */}
        <div className="relative w-12 h-12 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-white/20" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-white animate-spin" />
        </div>

        <p className="font-heading text-sm text-white/70" aria-hidden="true">
          Loading&hellip;
        </p>
        <span className="sr-only">Loading content, please wait.</span>
      </div>
    </section>
  )
}
