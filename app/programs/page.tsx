'use client'

import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  Baby,
  Clock,
  CheckCircle2,
  ArrowRight,
  Phone,
  FileText,
  Calendar,
  Star,
  Sparkles,
  Download,
  Briefcase,
} from 'lucide-react'
import FocalImage from '@/components/FocalImage'
import { getIcon } from '@/lib/icons'
import AnimatedSection from '@/components/AnimatedSection'

// Import content from JSON file
import programsData from '@/content/programs.json'

// Map features from JSON with dynamic icons
const features = programsData.features.map((feature) => ({
  ...feature,
  icon: getIcon(feature.icon),
}))

// Data from JSON
const { dailySchedule, enrollmentSteps, learningAreas, keyPoints, requiredDocuments } = programsData
const { ageRange, hours, days, status } = programsData

export default function ProgramsPage() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary-dark overflow-hidden">
        <div className="absolute inset-0">
          <FocalImage
            src="/images/About/EarlyChildcare.webp"
            alt="Children learning at Annie's Nursery School"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark via-secondary-dark/95 to-secondary-dark" />
        </div>

        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-honey/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="container-base relative z-10">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="badge bg-white/10 text-white mb-6">Our Programs</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Annie&apos;s{' '}
              <span className="text-accent-honey">Nursery School</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
              Quality, affordable childcare for children ages 1-3 in a safe, loving
              environment that nurtures growth, curiosity, and confidence.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg"
              >
                Schedule a Tour
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:8502226133"
                className="btn bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-4 text-lg"
              >
                <Phone className="w-5 h-5" />
                (850) 222-6133
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-neutral-cream border-b border-neutral-light">
        <div className="container-base">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-light">
            {[
              { icon: Baby, label: 'Ages', value: ageRange },
              { icon: Clock, label: 'Hours', value: hours },
              { icon: Calendar, label: 'Days', value: days },
              { icon: Star, label: 'Status', value: status },
            ].map((item) => (
              <div key={item.label} className="py-5 px-4 text-center">
                <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm text-neutral-gray">{item.label}</div>
                <div className="font-heading font-semibold text-neutral-charcoal">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Images */}
            <AnimatedSection>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <FocalImage
                        src="/images/About/C1.webp"
                        alt="Children playing"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <FocalImage
                        src="/images/About/C3.webp"
                        alt="Learning activities"
                        width={400}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden">
                      <FocalImage
                        src="/images/About/C2.webp"
                        alt="Nursery classroom"
                        width={400}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="aspect-square rounded-lg overflow-hidden">
                      <FocalImage
                        src="/images/About/Toddler Care.webp"
                        alt="Toddler care"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-honey/20 rounded-lg -z-10" />
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection delay={0.2}>
              <span className="badge-primary mb-4">About Our Program</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-6">
                A Foundation for Lifelong Learning
              </h2>

              <div className="space-y-4 text-neutral-gray text-lg leading-relaxed">
                <p>
                  At Annie&apos;s Nursery School, we believe every child deserves a
                  strong start. Our licensed childcare program provides the perfect
                  blend of structured learning and creative play for children ages 1-3.
                </p>
                <p>
                  With small class sizes and dedicated caregivers, each child receives
                  the individual attention they need to thrive. We focus on building
                  social skills, encouraging curiosity, and fostering independenceall
                  in a warm, family-like atmosphere.
                </p>
              </div>

              {/* Key points */}
              <div className="mt-8 space-y-3">
                {keyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-sage mt-0.5 shrink-0" />
                    <span className="text-neutral-charcoal">{point}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-28 bg-neutral-cream">
        <div className="container-base">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-honey mb-4">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-4">
              Everything Your Child Needs
            </h2>
            <p className="text-neutral-gray text-lg">
              Our comprehensive program addresses every aspect of early childhood
              development in a nurturing, supportive environment.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-6 lg:p-8 h-full border border-neutral-light hover:border-primary/20 hover:shadow-sm transition-all">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-neutral-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-gray">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Schedule */}
            <AnimatedSection>
              <span className="badge-secondary mb-4">Daily Schedule</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-6">
                A Day at Annie&apos;s
              </h2>
              <p className="text-neutral-gray text-lg mb-8">
                Our structured daily routine provides consistency and security
                while allowing flexibility for each child&apos;s unique needs.
              </p>

              <div className="space-y-0">
                {dailySchedule.map((item, index) => (
                  <div
                    key={item.time}
                    className={`flex items-center gap-4 py-3 ${
                      index !== dailySchedule.length - 1 ? 'border-b border-neutral-light' : ''
                    }`}
                  >
                    <div className="w-20 shrink-0 font-heading font-semibold text-primary">
                      {item.time}
                    </div>
                    <div className="text-neutral-charcoal">{item.activity}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Educational Philosophy */}
            <AnimatedSection delay={0.2}>
              <span className="badge-honey mb-4">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-6">
                Learning Through Play
              </h2>

              <div className="space-y-6 text-neutral-gray text-lg leading-relaxed">
                <p>
                  We believe children learn best through hands-on exploration and
                  play. Our curriculum is designed to spark curiosity and build
                  essential skills through engaging activities.
                </p>

                <div className="bg-neutral-cream rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-neutral-charcoal mb-4">
                    Our Learning Areas:
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {learningAreas.map((area) => (
                      <div key={area} className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-accent-honey" />
                        <span className="text-neutral-charcoal text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <p>
                  Every activity is an opportunity for learningfrom circle time
                  songs that build vocabulary to outdoor play that develops motor
                  skills and social awareness.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
      <section className="py-20 lg:py-28 bg-neutral-cream">
        <div className="container-base">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-primary mb-4">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-4">
              Enrollment Process
            </h2>
            <p className="text-neutral-gray text-lg">
              Joining our nursery school family is easy. Here&apos;s how to get started.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {enrollmentSteps.map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="relative h-full">
                  {/* Connector line */}
                  {index < enrollmentSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-neutral-light -translate-y-1/2 z-0" />
                  )}

                  <div className="relative bg-white rounded-lg p-6 h-full border border-neutral-light z-10">
                    <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-heading font-bold text-xl mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-neutral-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-neutral-gray text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Documents needed */}
          <AnimatedSection delay={0.4} className="mt-12">
            <div className="bg-white rounded-lg p-6 lg:p-8 border border-neutral-light max-w-2xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-honey/20 rounded-lg flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-accent-honey-dark" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-lg text-neutral-charcoal mb-2">
                    Documents Required
                  </h3>
                  <ul className="space-y-2 text-neutral-gray mb-6">
                    {requiredDocuments.map((doc) => (
                      <li key={doc} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent-sage" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/images/Nursery/Forms/Annie APPLICATION FOR ENROLLMENT.pdf"
                    download
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3"
                  >
                    <Download className="w-5 h-5" />
                    Download Enrollment Application (PDF)
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Employment Forms */}
      <section className="py-20 lg:py-28 bg-neutral-cream">
        <div className="container-base">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-secondary mb-4">Join Our Team</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-4">
              Employment Opportunities
            </h2>
            <p className="text-neutral-gray text-lg">
              Interested in working at Annie&apos;s Nursery School? Download the required
              forms below to begin your application process.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: 'Items Needed Prior to Employment',
                description: 'Review the requirements and documents needed before starting employment.',
                file: '1. Items needed prior to emplyment.docx',
              },
              {
                title: 'Employment Application',
                description: 'Complete this application to apply for a position at our nursery school.',
                file: '2. Employment Application.docx',
              },
              {
                title: 'DCF Course Registration - How to Apply',
                description: 'Instructions for registering for required DCF training courses.',
                file: '3. DCF Course Reg 1 how to apply.docx',
              },
              {
                title: 'DCF Course Registration - Sample Sheet',
                description: 'Sample registration form for DCF course requirements.',
                file: '4. DCF Course Reg 2 sample sheet.docx',
              },
            ].map((form, index) => (
              <AnimatedSection key={form.file} delay={index * 0.1}>
                <div className="bg-white rounded-lg p-6 h-full border border-neutral-light hover:border-primary/20 hover:shadow-sm transition-all">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Briefcase className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-neutral-charcoal mb-2">
                    {form.title}
                  </h3>
                  <p className="text-neutral-gray text-sm mb-4">
                    {form.description}
                  </p>
                  <a
                    href={`/images/Nursery/Forms/${form.file}`}
                    download
                    className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-dark transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download Form
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.5} className="mt-12 text-center">
            <p className="text-neutral-gray">
              Questions about employment?{' '}
              <Link href="/contact" className="text-primary font-medium hover:text-primary-dark">
                Contact us
              </Link>{' '}
              or call{' '}
              <a href="tel:8502226133" className="text-primary font-medium hover:text-primary-dark">
                (850) 222-6133
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Ready to Give Your Child the Best Start?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Schedule a tour today to see our facility, meet our team, and
                discover why families trust Annie&apos;s Nursery School with their
                most precious little ones.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg"
                >
                  Schedule a Tour
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a
                  href="tel:8502226133"
                  className="btn bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="hidden lg:block">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <FocalImage
                  src="/images/Nursery/ELC.webp"
                  alt="Annie's Nursery School"
                  fill
                  sizes="(max-width: 1024px) 0px, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
