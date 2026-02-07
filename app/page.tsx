'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import {
  Heart,
  Users,
  Calendar,
  Utensils,
  ArrowRight,
  GraduationCap,
  HandHeart,
  Sparkles,
  Quote,
  ChevronRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import ImageCarousel from '@/components/ImageCarousel'
import FocalImage from '@/components/FocalImage'
import AnimatedSection from '@/components/AnimatedSection'

// Import content from JSON files
import statsData from '@/content/stats.json'
import testimonialsData from '@/content/testimonials.json'
import campaignData from '@/content/campaign.json'
import founderData from '@/content/founder.json'
import partnersData from '@/content/partners.json'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

const noMotion = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const noStagger = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
}

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Utensils,
  Heart,
  Calendar,
  Users,
}

// Pathways data (static - not frequently updated)
const pathways = [
  {
    title: 'For Parents',
    description: 'Quality, affordable childcare for ages 1-3 in a nurturing environment.',
    href: '/programs',
    icon: GraduationCap,
    image: '/images/About/EarlyChildcare.webp',
    color: 'primary',
  },
  {
    title: 'For Volunteers',
    description: 'Join FSU and TCC students making a difference in Frenchtown.',
    href: '/volunteer',
    icon: HandHeart,
    image: '/images/Donate_Volunteer/V1.webp',
    color: 'secondary',
  },
  {
    title: 'For Donors',
    description: 'Your gift provides meals, education, and hope to families in need.',
    href: '/donate',
    icon: Heart,
    image: '/images/Donate_Volunteer/Charity1.webp',
    color: 'honey',
  },
]

// Gallery images for carousel
const galleryImages = [
  { src: '/images/Home/IMG1.webp', alt: 'Community volunteers at Project Annie' },
  { src: '/images/Home/IMG4.webp', alt: 'Children at Annie\'s Nursery School' },
  { src: '/images/Home/IMG5.webp', alt: 'Thanksgiving community meal' },
  { src: '/images/Home/IMG6.webp', alt: 'Volunteers serving meals' },
  { src: '/images/Home/IMG7.webp', alt: 'Community event' },
  { src: '/images/Home/IMG8.webp', alt: 'Children learning at nursery' },
]

// Animated count-up for stat numbers
function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [display, setDisplay] = useState(value)

  // Parse "2,000+", "$25", "100%" etc.
  const parse = useCallback(() => {
    const prefix = value.match(/^[^0-9]*/)?.[0] || ''
    const suffix = value.match(/[^0-9]*$/)?.[0] || ''
    const numStr = value
      .replace(prefix, '')
      .replace(suffix, '')
      .replace(/,/g, '')
    const target = parseInt(numStr, 10)
    return { prefix, suffix, target }
  }, [value])

  useEffect(() => {
    if (!isInView) return
    const { prefix, suffix, target } = parse()
    if (isNaN(target) || target === 0) return

    const duration = 1800 // ms
    const start = performance.now()

    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)
      const formatted = current.toLocaleString()
      setDisplay(`${prefix}${formatted}${suffix}`)
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [isInView, parse])

  return <span ref={ref}>{display}</span>
}

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion()

  // Get content from imported JSON
  const stats = statsData.homeStats
  const testimonials = testimonialsData.items.filter(t => t.showOn.includes('home'))
  const campaign = campaignData
  const founder = founderData

  return (
    <>
      {/* Hero Section - Editorial Split Layout */}
      <section className="relative min-h-screen flex items-center bg-secondary-dark overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <FocalImage
            src="/images/Home/IMG1.webp"
            alt="Project Annie community gathering"
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark via-secondary-dark/95 to-secondary-dark/80" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-honey/10 rounded-full blur-3xl" />

        <div className="container-base relative z-10 py-32 lg:py-40">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text content */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded mb-6">
                <Sparkles className="w-4 h-4 text-accent-honey" />
                <span className="text-white/90 text-sm font-medium">
                  Serving Frenchtown Since 2008
                </span>
              </div>

              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
                Nurturing{' '}
                <span className="text-accent-honey">Every Child,</span>
                <br />
                Strengthening Our Community
              </h1>

              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                Project Annie provides quality, affordable childcare and serves
                thousands through our annual Thanksgiving meal program. Together,
                we&apos;re building a stronger Frenchtown.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/programs"
                  className="btn bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg"
                >
                  Enroll Your Child
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/donate"
                  className="btn bg-accent-honey hover:bg-accent-honey-dark text-neutral-charcoal font-semibold px-8 py-4 text-lg"
                >
                  <Heart className="w-5 h-5" />
                  Donate Now
                </Link>
              </div>

              {/* Quick stats preview */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="grid grid-cols-3 gap-8">
                  {[
                    { num: '2K+', label: 'Meals' },
                    { num: '150+', label: 'Children' },
                    { num: '18', label: 'Years' },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-heading font-bold text-white">
                        {stat.num}
                      </div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Hero image composition */}
            <motion.div
              initial={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
                  <FocalImage
                    src={founder.photo}
                    alt={founder.name}
                    fill
                    sizes="(max-width: 1024px) 0px, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Floating accent card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-lg shadow-xl max-w-[240px]">
                  <Quote className="w-8 h-8 text-accent-honey mb-2" />
                  <p className="text-neutral-charcoal font-accent italic text-sm leading-relaxed">
                    &ldquo;{founder.quotes[0]}&rdquo;
                  </p>
                  <p className="mt-2 text-primary font-heading font-semibold text-sm">
                     {founder.name}
                  </p>
                </div>

                {/* Decorative frame */}
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-accent-honey/30 rounded-lg -z-10" />
              </div>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Impact Stats Section */}
      <section className="relative py-20 bg-neutral-cream overflow-hidden">
        <div className="absolute inset-0 bg-texture-dots bg-dots opacity-50" />

        <div className="container-base relative">
          <AnimatedSection className="text-center mb-12">
            <span className="badge-primary mb-4">Our Impact</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal">
              Making a Difference in Frenchtown
            </h2>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={prefersReducedMotion ? noStagger : staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {stats.map((stat) => {
              const IconComponent = iconMap[stat.icon || 'Heart'] || Heart
              return (
                <motion.div
                  key={stat.label}
                  variants={prefersReducedMotion ? noMotion : fadeInUp}
                  transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.5 }}
                  className="relative group"
                >
                  <div className="bg-white rounded-lg p-6 lg:p-8 text-center border border-neutral-light hover:border-primary/20 transition-colors">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="stat-number mb-2"><CountUp value={stat.number} /></div>
                    <div className="text-neutral-gray text-sm">{stat.label}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission Section with Image */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image grid */}
            <AnimatedSection className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <FocalImage
                      src="/images/About/A1.webp"
                      alt="Children at Project Annie"
                      width={400}
                      height={533}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <FocalImage
                      src="/images/Home/IMG8.webp"
                      alt="Community volunteers"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <FocalImage
                      src="/images/About/C1.webp"
                      alt="Learning activities"
                      width={400}
                      height={400}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <FocalImage
                      src="/images/Donate_Volunteer/Charity2.webp"
                      alt="Thanksgiving meal service"
                      width={400}
                      height={533}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Accent element */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-honey/20 rounded-lg -z-10" />
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection delay={0.2}>
              <span className="badge-honey mb-4">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-6">
                Helping Children & Adults to Help Themselves
              </h2>

              <div className="space-y-4 text-neutral-gray text-lg leading-relaxed">
                <p>
                  Since 2008, Project Annie has been a cornerstone of
                  Tallahassee&apos;s Frenchtown community. Founded by {founder.name},
                  our organization provides essential services that empower families
                  and strengthen our neighborhood.
                </p>
                <p>
                  Through quality childcare, community meals, and volunteer
                  partnerships with FSU and TCC, we create opportunities for growth
                  and connection that ripple throughout our community.
                </p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="btn-primary"
                >
                  Our Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/programs"
                  className="btn-outline"
                >
                  View Programs
                </Link>
              </div>

              {/* Quote */}
              <blockquote className="mt-10 pt-8 border-t border-neutral-light">
                <p className="quote">
                  &ldquo;{founder.quotes[2]}&rdquo;
                </p>
                <footer className="mt-4 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <FocalImage
                      src={founder.photo}
                      alt={founder.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-neutral-charcoal">
                      {founder.name}
                    </div>
                    <div className="text-sm text-neutral-gray">
                      {founder.title}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Pathways Section */}
      <section className="py-20 lg:py-28 bg-neutral-cream">
        <div className="container-base">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-primary mb-4">Get Involved</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-4">
              How You Can Make a Difference
            </h2>
            <p className="text-neutral-gray text-lg">
              Whether you&apos;re a parent seeking quality childcare, a student
              looking to volunteer, or a donor wanting to give back &mdash; there&apos;s
              a place for you at Project Annie.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pathways.map((pathway, index) => (
              <AnimatedSection key={pathway.title} delay={index * 0.1}>
                <Link href={pathway.href} className="group block h-full">
                  <div className="relative h-full bg-white rounded-lg overflow-hidden border border-neutral-light hover:border-primary/20 hover:shadow-md transition-all duration-300">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <FocalImage
                        src={pathway.image}
                        alt={pathway.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-charcoal/60 to-transparent" />
                      <div className={cn(
                        'absolute top-4 left-4 w-12 h-12 rounded-lg flex items-center justify-center',
                        pathway.color === 'primary' && 'bg-primary text-white',
                        pathway.color === 'secondary' && 'bg-secondary text-white',
                        pathway.color === 'honey' && 'bg-accent-honey text-white'
                      )}>
                        <pathway.icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-heading font-bold text-xl text-neutral-charcoal mb-2 group-hover:text-primary transition-colors">
                        {pathway.title}
                      </h3>
                      <p className="text-neutral-gray mb-4">
                        {pathway.description}
                      </p>
                      <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                        Learn More
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Your Impact Section */}
      {campaign.active && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-base">
            <div className="relative bg-secondary-dark rounded-2xl overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent-honey rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
              </div>

              <div className="relative grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Content */}
                <div className="text-white">
                  <span className="inline-flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded text-sm font-medium mb-6">
                    <Heart className="w-4 h-4 text-accent-honey" />
                    Your Impact
                  </span>

                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">
                    {campaign.title}
                  </h2>

                  <p className="text-white/90 text-lg mb-8">
                    {campaign.description}
                  </p>

                  {/* Impact breakdown */}
                  <div className="space-y-3 mb-6">
                    {campaign.impactStats.map((stat) => (
                      <div key={stat.label} className="flex gap-3">
                        <div className="flex-shrink-0 w-1.5 bg-accent-honey rounded-full" />
                        <div>
                          <div className="text-accent-honey font-semibold text-sm mb-1">
                            {stat.label}
                          </div>
                          <div className="text-white/90 text-sm">
                            {stat.value}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Transparency note */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 mb-6">
                    <p className="text-white/90 text-sm flex items-center gap-2">
                      <span className="text-accent-honey text-lg">✓</span>
                      {campaign.transparency}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/donate"
                      className="btn bg-accent-honey hover:bg-accent-honey-dark text-neutral-charcoal font-semibold px-8 py-4"
                    >
                      <Heart className="w-5 h-5" />
                      Donate Now
                    </Link>
                    <Link
                      href="/volunteer"
                      className="btn bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4"
                    >
                      Volunteer to Help
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="relative hidden lg:block">
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <FocalImage
                      src="/images/Donate_Volunteer/Charity3.webp"
                      alt="Community volunteers serving meals"
                      fill
                      sizes="(max-width: 1024px) 0px, 50vw"
                      className="object-cover"
                    />
                  </div>

                  {/* Stats floating card */}
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-center mb-2">
                      <div className="text-xs font-semibold text-neutral-gray uppercase tracking-wide mb-1">
                        This Year
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-heading font-bold text-primary">
                          {campaign.mealsServed}
                        </div>
                        <div className="text-xs text-neutral-gray">Meals Served</div>
                      </div>
                      <div>
                        <div className="text-2xl font-heading font-bold text-secondary">
                          {campaign.familiesFed}
                        </div>
                        <div className="text-xs text-neutral-gray">Families Helped</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Photo Gallery Preview */}
      <section className="py-20 lg:py-28 bg-neutral-cream overflow-hidden">
        <div className="container-base">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="badge-secondary mb-4">Community in Action</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal">
                See Our Impact
              </h2>
            </div>
            <Link
              href="/gallery"
              className="btn-outline self-start md:self-auto"
            >
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>

        {/* Embla Carousel */}
        <ImageCarousel images={galleryImages} autoplayDelay={5000} />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-honey mb-4">Testimonials</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal">
              What Our Community Says
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.author} delay={index * 0.1}>
                <div className="h-full bg-neutral-cream rounded-lg p-6 lg:p-8 flex flex-col border-l-4 border-accent-honey/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                  <div>
                    <Quote className="w-10 h-10 text-accent-honey/50 mb-4" />
                    <p className="text-neutral-charcoal text-lg leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-auto pt-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-heading font-bold text-primary">
                        {testimonial.author[0]}
                      </span>
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-neutral-charcoal">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-neutral-gray">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-14 lg:py-18 bg-neutral-cream overflow-hidden scroll-mt-24">
        <AnimatedSection className="text-center mb-8">
          <span className="font-heading text-xs font-semibold tracking-[0.2em] uppercase text-neutral-gray">
            Proudly Supported By
          </span>
          <div className="mt-3 mx-auto w-8 h-0.5 bg-accent-honey rounded-full" />
        </AnimatedSection>

        {/* Marquee ribbon */}
        <div className="relative group">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-neutral-cream to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-neutral-cream to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
            {[...partnersData.partners, ...partnersData.partners].map((partner, i) => (
              <span
                key={`${partner.id}-${i}`}
                className="flex items-center shrink-0 px-5 md:px-7"
              >
                <span className="font-accent italic text-secondary/70 text-base md:text-lg whitespace-nowrap">
                  {partner.name}
                </span>
                <span className="ml-5 md:ml-7 text-accent-honey/50 text-xs select-none" aria-hidden="true">
                  &#9670;
                </span>
              </span>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.1} className="text-center mt-8">
          <p className="text-xs text-neutral-gray/70">
            {partnersData.partners.length} organizations helping us strengthen Frenchtown
          </p>
        </AnimatedSection>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-24 lg:py-32 bg-secondary-dark overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <FocalImage
            src="/images/Home/IMG12.webp"
            alt="Community gathering"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-dark via-secondary-dark/95 to-secondary-dark/90" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-accent-honey/20 rounded-full blur-3xl" />

        <div className="container-base relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                Join Us in Building a{' '}
                <span className="text-accent-honey">Stronger Community</span>
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Whether you donate, volunteer, or spread the word &mdash; every action
                helps a child learn, a family eat, and our community grow stronger.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/donate"
                  className="btn bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg"
                >
                  <Heart className="w-5 h-5" />
                  Make a Donation
                </Link>
                <Link
                  href="/volunteer"
                  className="btn bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 text-lg"
                >
                  Become a Volunteer
                </Link>
                <Link
                  href="/contact"
                  className="btn bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 text-lg"
                >
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
