'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  Heart,
  CheckCircle2,
  ArrowRight,
  Phone,
  Quote,
  Shield,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import FocalImage from '@/components/FocalImage'
import { getIcon } from '@/lib/icons'

// Import content from JSON files
import donationData from '@/content/donation-tiers.json'
import statsData from '@/content/stats.json'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

function AnimatedSection({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Map donation tiers from JSON with dynamic icons
const donationTiers = donationData.items.map((tier) => ({
  ...tier,
  icon: getIcon(tier.icon),
}))

// Map ways to give from JSON with dynamic icons
const waysToGive = donationData.waysToGive.map((way) => ({
  ...way,
  icon: getIcon(way.icon),
}))

// Fund allocation from JSON
const fundAllocation = donationData.fundAllocation

// Impact stats from JSON
const impactStats = statsData.donateStats

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100)
  const [customAmount, setCustomAmount] = useState('')

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmount = (value: string) => {
    setCustomAmount(value)
    setSelectedAmount(null)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary-dark overflow-hidden">
        <div className="absolute inset-0">
          <FocalImage
            src="/images/Donate_Volunteer/Charity1.webp"
            alt="Community support at Project Annie"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark via-secondary-dark/95 to-secondary-dark" />
        </div>

        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-honey/10 rounded-full blur-3xl" />

        <div className="container-base relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="badge bg-white/10 text-white mb-6">Support Our Mission</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Your Gift{' '}
              <span className="text-accent-honey">Changes Lives</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
              Every donation to Project Annie goes directly to supporting children,
              feeding families, and strengthening the Frenchtown community. Your
              generosity makes a real difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Bar */}
      <section className="bg-primary py-8">
        <div className="container-base">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Donation Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Donation Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <span className="badge-primary mb-4">Make a Donation</span>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-6">
                  Choose Your Impact
                </h2>
                <p className="text-neutral-gray text-lg mb-8">
                  Select a donation amount to see the direct impact your gift will have.
                </p>

                {/* Amount Selection Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  {donationTiers.map((tier) => (
                    <button
                      key={tier.amount}
                      onClick={() => handleAmountSelect(tier.amount)}
                      className={cn(
                        'relative p-4 rounded-lg border-2 transition-all text-left',
                        selectedAmount === tier.amount
                          ? 'border-primary bg-primary/5'
                          : 'border-neutral-light hover:border-primary/30'
                      )}
                    >
                      {tier.popular && (
                        <span className="absolute -top-2 -right-2 bg-accent-honey text-white text-xs px-2 py-0.5 rounded font-medium">
                          Popular
                        </span>
                      )}
                      <tier.icon className={cn(
                        'w-6 h-6 mb-2',
                        selectedAmount === tier.amount ? 'text-primary' : 'text-neutral-gray'
                      )} />
                      <div className={cn(
                        'text-2xl font-heading font-bold',
                        selectedAmount === tier.amount ? 'text-primary' : 'text-neutral-charcoal'
                      )}>
                        ${tier.amount}
                      </div>
                      <div className="text-xs text-neutral-gray mt-1 leading-tight">
                        {tier.impact}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-8">
                  <label htmlFor="custom-amount" className="input-label">Or enter a custom amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-gray font-semibold">
                      $
                    </span>
                    <input
                      id="custom-amount"
                      type="number"
                      min="1"
                      placeholder="Other amount"
                      value={customAmount}
                      onChange={(e) => handleCustomAmount(e.target.value)}
                      className="input pl-8"
                    />
                  </div>
                </div>

                {/* Donate Button */}
                <a
                  href={`https://www.paypal.com/paypalme/ProjectAnnieInc/${selectedAmount || customAmount || ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-4 text-lg justify-center"
                >
                  <Heart className="w-5 h-5" />
                  Donate ${selectedAmount || customAmount || '0'}
                </a>

                <p className="text-center text-sm text-neutral-gray mt-4">
                  Secure one-time donation processed by PayPal. You&apos;ll be redirected to complete your gift.
                </p>
              </AnimatedSection>
            </div>

            {/* Impact Sidebar */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="bg-neutral-cream rounded-lg p-6 lg:p-8 sticky top-32">
                  <h3 className="font-heading font-bold text-xl text-neutral-charcoal mb-4">
                    Your Impact
                  </h3>

                  {selectedAmount && (
                    <div className="mb-6 pb-6 border-b border-neutral-light">
                      <div className="text-4xl font-heading font-bold text-primary mb-2">
                        ${selectedAmount}
                      </div>
                      <p className="text-neutral-gray">
                        {donationTiers.find((t) => t.amount === selectedAmount)?.impact}
                      </p>
                    </div>
                  )}

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-sage mt-0.5 shrink-0" />
                      <span className="text-neutral-charcoal text-sm">
                        100% of donations support programs
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-sage mt-0.5 shrink-0" />
                      <span className="text-neutral-charcoal text-sm">
                        Tax-deductible 501(c)(3) organization
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-sage mt-0.5 shrink-0" />
                      <span className="text-neutral-charcoal text-sm">
                        Receipt provided for your records
                      </span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-white rounded-lg p-4">
                    <Quote className="w-6 h-6 text-accent-honey/50 mb-2" />
                    <p className="text-neutral-charcoal text-sm italic mb-3">
                      &ldquo;Every dollar donated to Project Annie goes directly to
                      the families who need it most.&rdquo;
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full overflow-hidden">
                        <FocalImage
                          src="/images/ms-annie.webp"
                          alt="Ms. Annie"
                          width={32}
                          height={32}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <span className="text-xs text-neutral-gray">Ms. Annie Johnson</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Give */}
      <section className="py-20 lg:py-28 bg-neutral-cream">
        <div className="container-base">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-honey mb-4">More Ways to Give</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-4">
              Other Ways to Support Us
            </h2>
            <p className="text-neutral-gray text-lg">
              Online giving isn&apos;t the only way to help. Explore other options
              that work best for you.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {waysToGive.map((way, index) => (
              <AnimatedSection key={way.title} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-6 h-full border border-neutral-light">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <way.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-neutral-charcoal mb-2">
                    {way.title}
                  </h3>
                  <p className="text-neutral-gray text-sm">
                    {way.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <AnimatedSection>
              <span className="badge-secondary mb-4">Transparency</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-6">
                Where Your Money Goes
              </h2>

              <div className="space-y-4 text-neutral-gray text-lg leading-relaxed mb-8">
                <p>
                  We believe in complete transparency. As a 501(c)(3) nonprofit,
                  Project Annie is committed to using every dollar wisely to
                  maximize impact in our community.
                </p>
                <p>
                  Our dedicated volunteer base helps keep administrative costs low,
                  ensuring your donation goes directly to the children and families
                  we serve.
                </p>
              </div>

              {/* Breakdown */}
              <div className="space-y-4">
                {fundAllocation.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-neutral-charcoal font-medium">{item.label}</span>
                      <span className="text-neutral-gray">{item.percent}%</span>
                    </div>
                    <div className="h-2 bg-neutral-light rounded-full overflow-hidden">
                      <div
                        className={cn('h-full rounded-full', item.color)}
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Tax Info */}
              <div className="mt-8 p-4 bg-neutral-cream rounded-lg">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-heading font-semibold text-neutral-charcoal">
                      Tax-Deductible Donations
                    </h4>
                    <p className="text-sm text-neutral-gray">
                      Project Annie, Inc. is a registered 501(c)(3) nonprofit.
                      EIN: 26-0638919. Your donation may be tax-deductible.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Image */}
            <AnimatedSection delay={0.2}>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <FocalImage
                        src="/images/Donate_Volunteer/Charity2.webp"
                        alt="Community meal service"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <FocalImage
                        src="/images/About/C1.webp"
                        alt="Children at nursery"
                        width={400}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <FocalImage
                        src="/images/Donate_Volunteer/Annie1.webp"
                        alt="Ms. Annie with community"
                        width={400}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <FocalImage
                        src="/images/Donate_Volunteer/Charity3.webp"
                        alt="Thanksgiving volunteers"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-honey/20 rounded-lg -z-10" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact for Major Gifts */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-base text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Interested in Major Giving or Sponsorship?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              For donations over $1,000, corporate partnerships, or planned giving,
              we&apos;d love to speak with you personally about how your gift can
              make the greatest impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn bg-white text-secondary hover:bg-white/90 px-8 py-4 text-lg"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:8502226133"
                className="btn bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5" />
                (850) 222-6133
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
