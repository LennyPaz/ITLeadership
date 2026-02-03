import Link from 'next/link'

export default function AccessibilityPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-secondary text-white py-16 lg:py-20">
        <div className="container-base">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold">
            Accessibility Statement
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl">
            Project Annie is committed to ensuring our website is
            accessible to everyone, including people with
            disabilities.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
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
    </div>
  )
}
