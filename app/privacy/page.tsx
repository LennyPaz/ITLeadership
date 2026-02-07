import Link from 'next/link'
import {
  FileText,
  Shield,
  Mail,
  CreditCard,
  Lock,
  Users,
  RefreshCw,
  MessageCircle,
  ArrowUp,
} from 'lucide-react'
import FocalImage from '@/components/FocalImage'
import HeroSection from '@/components/HeroSection'

const sections = [
  {
    id: 'information-we-collect',
    title: 'Information We Collect',
    icon: FileText,
    content: (
      <p className="text-neutral-gray text-lg leading-relaxed">
        When you use our contact form, we collect the
        information you provide: your name, email address,
        and message. We do not collect information
        automatically through cookies, analytics, or
        tracking technologies unless otherwise noted.
      </p>
    ),
  },
  {
    id: 'how-we-use-your-information',
    title: 'How We Use Your Information',
    icon: Shield,
    content: (
      <p className="text-neutral-gray text-lg leading-relaxed">
        We use the information you submit through our
        contact form solely to respond to your inquiry.
        We do not sell, rent, or share your personal
        information with third parties for marketing
        purposes.
      </p>
    ),
  },
  {
    id: 'email-communications',
    title: 'Email Communications',
    icon: Mail,
    content: (
      <p className="text-neutral-gray text-lg leading-relaxed">
        Contact form submissions are sent via Resend, a
        third-party email delivery service. Resend
        processes your information only to deliver the
        message and is bound by its own privacy policy.
      </p>
    ),
  },
  {
    id: 'donations',
    title: 'Donations',
    icon: CreditCard,
    content: (
      <p className="text-neutral-gray text-lg leading-relaxed">
        Donations are processed through PayPal. When you
        donate, you are subject to PayPal&apos;s privacy
        policy. We do not store your payment information
        on our servers.
      </p>
    ),
  },
  {
    id: 'data-security',
    title: 'Data Security',
    icon: Lock,
    content: (
      <p className="text-neutral-gray text-lg leading-relaxed">
        We take reasonable measures to protect the
        information you provide. Our website is served
        over HTTPS to encrypt data in transit. However,
        no method of transmission over the internet is
        100% secure.
      </p>
    ),
  },
  {
    id: 'childrens-privacy',
    title: "Children\u2019s Privacy",
    icon: Users,
    content: (
      <p className="text-neutral-gray text-lg leading-relaxed">
        Our website is not directed at children under 13.
        We do not knowingly collect personal information
        from children online. Photos of children on our
        site are used with parental consent.
      </p>
    ),
  },
  {
    id: 'changes-to-this-policy',
    title: 'Changes to This Policy',
    icon: RefreshCw,
    content: (
      <p className="text-neutral-gray text-lg leading-relaxed">
        We may update this privacy policy from time to
        time. Changes will be posted on this page with an
        updated effective date.
      </p>
    ),
  },
  {
    id: 'contact-us',
    title: 'Contact Us',
    icon: MessageCircle,
    content: (
      <p className="text-neutral-gray text-lg leading-relaxed">
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
    ),
  },
]

export default function PrivacyPage() {
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
            <span className="badge bg-white/10 text-white mb-6">Legal</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Privacy{' '}
              <span className="text-accent-honey">Policy</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
              Your privacy matters to us. This policy explains how
              Project Annie collects, uses, and protects your
              information.
            </p>
            <span className="inline-block mt-6 px-4 py-2 bg-white/10 rounded-full text-white/80 text-sm">
              Last updated: February 3, 2026
            </span>
          </HeroSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container-base">
          <div className="max-w-3xl mx-auto space-y-0">
              {sections.map((section, index) => {
                const Icon = section.icon
                return (
                  <div
                    key={section.id}
                    id={section.id}
                    className={`scroll-mt-32 py-10 ${
                      index > 0 ? 'border-t border-neutral-light' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-secondary" />
                      </div>
                      <h2 className="font-heading text-xl lg:text-2xl font-semibold text-neutral-charcoal">
                        {section.title}
                      </h2>
                    </div>
                    {section.content}
                  </div>
                )
              })}

              {/* Footer area */}
              <div className="border-t border-neutral-light pt-10 pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-neutral-gray">
                  Effective date: February 3, 2026
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  <ArrowUp className="w-4 h-4" />
                  Back to top
                </a>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}
