import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-secondary text-white py-16 lg:py-20">
        <div className="container-base">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold">
            Privacy Policy
          </h1>
          <p className="mt-4 text-white/90 max-w-2xl">
            Your privacy matters to us. This policy explains how
            Project Annie collects, uses, and protects your
            information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20">
        <div className="container-base max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-10">
            <div>
              <h2 className="font-heading text-xl font-semibold text-secondary mb-3">
                Information We Collect
              </h2>
              <p className="text-gray-700 leading-relaxed">
                When you use our contact form, we collect the
                information you provide: your name, email address,
                and message. We do not collect information
                automatically through cookies, analytics, or
                tracking technologies unless otherwise noted.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-secondary mb-3">
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We use the information you submit through our
                contact form solely to respond to your inquiry.
                We do not sell, rent, or share your personal
                information with third parties for marketing
                purposes.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-secondary mb-3">
                Email Communications
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Contact form submissions are sent via Resend, a
                third-party email delivery service. Resend
                processes your information only to deliver the
                message and is bound by its own privacy policy.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-secondary mb-3">
                Donations
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Donations are processed through PayPal. When you
                donate, you are subject to PayPal&apos;s privacy
                policy. We do not store your payment information
                on our servers.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-secondary mb-3">
                Data Security
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We take reasonable measures to protect the
                information you provide. Our website is served
                over HTTPS to encrypt data in transit. However,
                no method of transmission over the internet is
                100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-secondary mb-3">
                Children&apos;s Privacy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our website is not directed at children under 13.
                We do not knowingly collect personal information
                from children online. Photos of children on our
                site are used with parental consent.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-secondary mb-3">
                Changes to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this privacy policy from time to
                time. Changes will be posted on this page with an
                updated effective date.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl font-semibold text-secondary mb-3">
                Contact Us
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this privacy policy,
                please{' '}
                <Link
                  href="/contact"
                  className="text-primary hover:text-primary-dark underline"
                >
                  contact us
                </Link>
                .
              </p>
            </div>

            <p className="text-sm text-gray-500 pt-4 border-t border-gray-200">
              Effective date: February 3, 2026
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
