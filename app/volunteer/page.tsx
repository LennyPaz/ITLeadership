'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  Clock,
  ArrowRight,
  Mail,
  Quote,
} from 'lucide-react'
import ImageCarousel from '@/components/ImageCarousel'
import FocalImage from '@/components/FocalImage'
import { getIcon } from '@/lib/icons'

// Import content from JSON files
import volunteerData from '@/content/volunteer-opportunities.json'
import testimonialsData from '@/content/testimonials.json'
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

// Map opportunities and benefits from JSON with dynamic icons
const opportunities = volunteerData.items.map((opp) => ({
  ...opp,
  icon: getIcon(opp.icon),
}))

const benefits = volunteerData.benefits.map((benefit) => ({
  ...benefit,
  icon: getIcon(benefit.icon),
}))

// Application steps from JSON
const applicationSteps = volunteerData.applicationSteps

// Filter testimonials for volunteer page
const testimonials = testimonialsData.items.filter((t) =>
  t.showOn.includes('volunteer')
)

// Volunteer stats from JSON
const volunteerStats = statsData.volunteerStats

const volunteerGallery = [
  { src: '/images/Donate_Volunteer/V1.webp', alt: 'Volunteers at Project Annie' },
  { src: '/images/Donate_Volunteer/V2.webp', alt: 'Student volunteers' },
  { src: '/images/Donate_Volunteer/V3.webp', alt: 'Community service event' },
  { src: '/images/Donate_Volunteer/V4.webp', alt: 'Thanksgiving volunteers' },
  { src: '/images/Donate_Volunteer/V5.webp', alt: 'Volunteer meal service' },
  { src: '/images/Donate_Volunteer/V6.webp', alt: 'Team of volunteers' },
]

// Extended gallery for carousel
const extendedGallery = [
  ...volunteerGallery,
  { src: '/images/Donate_Volunteer/V7.webp', alt: 'Volunteers working' },
  { src: '/images/Donate_Volunteer/V8.webp', alt: 'Community service' },
]

export default function VolunteerPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary-dark overflow-hidden">
        <div className="absolute inset-0">
          <FocalImage
            src="/images/Donate_Volunteer/V1.webp"
            alt="Volunteers at Project Annie"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark via-secondary-dark/95 to-secondary-dark" />
        </div>

        <div className="absolute top-20 left-10 w-64 h-64 bg-accent-honey/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container-base relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="badge bg-white/10 text-white mb-6">Volunteer</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Make a{' '}
              <span className="text-accent-honey">Difference</span>
              <br />in Your Community
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
              Join FSU and TCC students, professionals, and community members who
              give their time to support Frenchtown families. Every hour you give
              creates lasting impact.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg"
              >
                Apply to Volunteer
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:anniejohnsont@gmail.com"
                className="btn bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 text-lg"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-neutral-cream py-12 border-b border-neutral-light">
        <div className="container-base">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {volunteerStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-neutral-gray text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <AnimatedSection>
              <span className="badge-primary mb-4">Why Volunteer</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-6">
                Your Time Creates Real Change
              </h2>

              <div className="space-y-4 text-neutral-gray text-lg leading-relaxed">
                <p>
                  At Project Annie, volunteers are the heartbeat of our organization.
                  Whether you&apos;re a college student seeking service hours, a professional
                  looking to give back, or a retiree with time to share—we have a place
                  for you.
                </p>
                <p>
                  Our volunteers help in the classroom, serve thousands during our
                  Thanksgiving meal program, assist with administrative tasks, and
                  support special events throughout the year.
                </p>
              </div>

              {/* Benefits */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="flex items-start gap-3 p-4 bg-neutral-cream rounded-lg"
                  >
                    <benefit.icon className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-heading font-semibold text-neutral-charcoal">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-neutral-gray">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Image Grid */}
            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {volunteerGallery.slice(0, 4).map((image, index) => (
                  <div
                    key={image.src}
                    className={`relative rounded-lg overflow-hidden ${
                      index === 0 ? 'col-span-2 aspect-video' : 'aspect-square'
                    }`}
                  >
                    <FocalImage
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20 lg:py-28 bg-neutral-cream">
        <div className="container-base">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-honey mb-4">Opportunities</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-4">
              Ways to Get Involved
            </h2>
            <p className="text-neutral-gray text-lg">
              Choose the volunteer opportunity that fits your schedule, skills,
              and interests. We&apos;ll help you find the perfect fit.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {opportunities.map((opp, index) => (
              <AnimatedSection key={opp.title} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-6 lg:p-8 h-full border border-neutral-light hover:border-primary/20 hover:shadow-sm transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <opp.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-xl text-neutral-charcoal mb-2">
                        {opp.title}
                      </h3>
                      <p className="text-neutral-gray mb-4">
                        {opp.description}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-primary mb-3">
                        <Clock className="w-4 h-4" />
                        <span>{opp.commitment}</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {opp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 bg-neutral-cream text-neutral-gray text-xs rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-secondary mb-4">Volunteer Voices</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal">
              Hear From Our Volunteers
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.author} delay={index * 0.1}>
                <div className="bg-neutral-cream rounded-lg p-8 h-full">
                  <Quote className="w-10 h-10 text-accent-honey/50 mb-4" />
                  <p className="text-neutral-charcoal text-lg leading-relaxed mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-heading font-bold text-primary text-lg">
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

      {/* Volunteer Gallery */}
      <section className="py-20 lg:py-28 bg-neutral-cream overflow-hidden">
        <div className="container-base mb-10">
          <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="badge-primary mb-4">In Action</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal">
                Volunteers Making a Difference
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
        <ImageCarousel images={extendedGallery} autoplayDelay={5000} />
      </section>

      {/* How to Apply */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <span className="badge-honey mb-4">Get Started</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-4">
                How to Become a Volunteer
              </h2>
              <p className="text-neutral-gray text-lg">
                Ready to make a difference? Here&apos;s how to get started.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="space-y-6">
                {applicationSteps.map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 p-6 bg-neutral-cream rounded-lg"
                  >
                    <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-heading font-bold shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-neutral-charcoal mb-1">
                        {item.title}
                      </h3>
                      <p className="text-neutral-gray">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-base text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Your time and talents can change lives. Join our community of
              volunteers today and experience the joy of giving back.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg"
              >
                Apply to Volunteer
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:anniejohnsont@gmail.com"
                className="btn bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 text-lg"
              >
                <Mail className="w-5 h-5" />
                anniejohnsont@gmail.com
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
