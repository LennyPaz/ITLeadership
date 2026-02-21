import Link from 'next/link'
import FocalImage from '@/components/FocalImage'
import HeroSection from '@/components/HeroSection'

export default function AccessibilityPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary-dark overflow-hidden">
        <div className="absolute inset-0">
          <FocalImage
            src="/images/Home/IMG7.webp"
            alt="Project Annie community"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark via-secondary-dark/95 to-secondary-dark" />
        </div>

        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-honey/10 rounded-full blur-3xl" />

        <div className="container-base relative z-10">
          <HeroSection className="max-w-3xl">
            <span className="badge bg-white/10 text-white mb-6">Accessibility</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Accessibility{' '}
              <span className="text-accent-honey">Statement</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
              Project Annie is committed to ensuring our website is
              accessible to everyone, including people with
              disabilities.
            </p>
          </HeroSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container-base max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-10">
            <div>
              <h2 className="font-heading text-xl font-semibold text-secondary mb-3">
                Our Commitment
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We strive to conform to the Web Content
                Accessibility Guidelines (WCAG) 2.1 at the AA
                level. These guidelines help make web content more
                accessible to people with a wide range of
                disabilities, including visual, auditory, motor,
                and cognitive impairments.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-secondary mb-3">
                What We&apos;ve Done
              </h2>
              <ul className="text-gray-700 leading-relaxed space-y-2 list-disc pl-5">
                <li>
                  All text meets WCAG AA contrast ratios against
                  its background
                </li>
                <li>
                  Images include descriptive alt text
                </li>
                <li>
                  The site is fully navigable by keyboard,
                  including a skip-to-content link
                </li>
                <li>
                  Interactive elements like the photo gallery
                  lightbox support keyboard navigation and include
                  ARIA attributes for screen readers
                </li>
                <li>
                  Form fields are properly labeled and announce
                  errors to assistive technology
                </li>
                <li>
                  The site uses semantic HTML and a logical
                  heading structure
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-secondary mb-3">
                Known Limitations
              </h2>
              <p className="text-gray-700 leading-relaxed">
                While we work to ensure accessibility, some
                third-party content (such as the PayPal donation
                flow) is outside our direct control. We
                continually review and improve our site as
                accessibility standards evolve.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-secondary mb-3">
                Feedback
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you encounter any accessibility barriers on
                our website, please{' '}
                <Link
                  href="/contact"
                  className="text-primary hover:text-primary-dark underline"
                >
                  contact us
                </Link>
                . We welcome your feedback and will do our best
                to address any issues.
              </p>
            </div>

            <p className="text-sm text-gray-500 pt-4 border-t border-gray-200">
              Last updated: February 3, 2026
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
