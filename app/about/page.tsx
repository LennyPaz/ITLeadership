'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  Heart,
  Users,
  Calendar,
  MapPin,
  Target,
  Eye,
  Star,
  ArrowRight,
  Quote,
  Award,
  BookOpen,
  Home,
  Utensils,
} from 'lucide-react'
import { getImagePath } from '@/lib/utils'

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

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We treat every child and family with love, dignity, and respect.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We believe in the power of neighbors helping neighbors.',
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: 'We invest in early learning to build stronger futures.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We strive for quality in everything we do.',
  },
]

const timeline = [
  {
    year: '2008',
    title: 'Project Annie Founded',
    description: 'Ms. Annie Johnson opens Annie\'s Nursery School to serve Frenchtown families.',
  },
  {
    year: '2010',
    title: 'First Thanksgiving Meal',
    description: 'The annual community meal tradition begins, serving 200 families.',
  },
  {
    year: '2015',
    title: 'FSU Partnership',
    description: 'Florida State University students begin volunteering regularly.',
  },
  {
    year: '2020',
    title: '2,000+ Meals Served',
    description: 'Despite challenges, the Thanksgiving program reaches a new milestone.',
  },
  {
    year: '2024',
    title: 'Expanding Our Impact',
    description: 'New programs and partnerships to serve even more families.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-secondary-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={getImagePath('/images/Home/IMG7.webp')}
            alt="Project Annie community"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark via-secondary-dark/95 to-secondary-dark" />
        </div>

        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-honey/10 rounded-full blur-3xl" />

        <div className="container-base relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="badge bg-white/10 text-white mb-6">About Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              A Legacy of{' '}
              <span className="text-accent-honey">Love & Service</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
              For over 15 years, Project Annie has been the heart of Frenchtown
              providing quality childcare, nourishing meals, and hope to families
              throughout Tallahassee.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <AnimatedSection>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  <Image
                    src={getImagePath('/images/ms-annie.webp')}
                    alt="Ms. Annie Johnson, Founder of Project Annie"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Decorative frame */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent-honey/30 rounded-lg -z-10" />

                {/* Quote card */}
                <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-lg max-w-xs shadow-xl">
                  <Quote className="w-8 h-8 text-accent-honey mb-3" />
                  <p className="font-accent italic leading-relaxed">
                    &ldquo;Every child that walks through our doors is family.
                    That&apos;s how I was raised, and that&apos;s how we do things here.&rdquo;
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Content */}
            <AnimatedSection delay={0.2}>
              <span className="badge-primary mb-4">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-6">
                Meet Ms. Annie Johnson
              </h2>

              <div className="space-y-4 text-neutral-gray text-lg leading-relaxed">
                <p>
                  Annie M. Johnson has dedicated her life to serving the Frenchtown
                  community. Born and raised in Tallahassee, Ms. Annie understood
                  firsthand the challenges facing working familiesthe struggle to
                  find affordable, quality childcare while pursuing education and employment.
                </p>
                <p>
                  In 2008, she transformed her dream into reality, opening Annie&apos;s
                  Nursery School to provide the kind of loving, nurturing environment
                  she wished had been available when she was a young mother.
                </p>
                <p>
                  What started as a small childcare center has grown into a
                  community institution. The annual Thanksgiving meal program,
                  volunteer partnerships with local universities, and countless
                  acts of kindness have touched thousands of lives.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { number: '15+', label: 'Years Serving' },
                  { number: '500+', label: 'Families Helped' },
                  { number: '', label: 'Love Given' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 bg-neutral-cream rounded-lg">
                    <div className="text-2xl font-heading font-bold text-primary">
                      {stat.number}
                    </div>
                    <div className="text-sm text-neutral-gray">{stat.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 lg:py-28 bg-neutral-cream">
        <div className="container-base">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <AnimatedSection>
              <div className="bg-white rounded-lg p-8 lg:p-10 h-full border border-neutral-light">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-neutral-charcoal mb-4">
                  Our Mission
                </h3>
                <p className="text-neutral-gray text-lg leading-relaxed">
                  &ldquo;Helping Children/Adults to Help Themselves.&rdquo; Project Annie
                  provides quality, affordable childcare and early education that
                  empowers families in the Frenchtown community to pursue their
                  goals while ensuring their children receive the care and
                  development they deserve.
                </p>
              </div>
            </AnimatedSection>

            {/* Vision */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-lg p-8 lg:p-10 h-full border border-neutral-light">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-neutral-charcoal mb-4">
                  Our Vision
                </h3>
                <p className="text-neutral-gray text-lg leading-relaxed">
                  A thriving Frenchtown where every family has access to quality
                  childcare, every child has the foundation for success, and our
                  community grows stronger through mutual support and shared purpose.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-honey mb-4">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal">
              What We Stand For
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="text-center p-6 lg:p-8">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-5">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-neutral-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-gray">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20 lg:py-28 bg-neutral-cream">
        <div className="container-base">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-primary mb-4">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-4">
              Our Programs & Services
            </h2>
            <p className="text-neutral-gray text-lg">
              Project Annie serves the community through multiple initiatives,
              each designed to strengthen families and create opportunity.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Nursery School */}
            <AnimatedSection>
              <div className="bg-white rounded-lg overflow-hidden border border-neutral-light h-full">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={getImagePath('/images/About/EarlyChildcare.webp')}
                    alt="Children at Annie's Nursery School"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-neutral-charcoal mb-3">
                    Nursery School
                  </h3>
                  <p className="text-neutral-gray mb-4">
                    Quality, affordable childcare for children ages 1-3. Our licensed
                    program provides a safe, nurturing environment focused on early
                    learning and development.
                  </p>
                  <Link
                    href="/programs"
                    className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Thanksgiving Meals */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-lg overflow-hidden border border-neutral-light h-full">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={getImagePath('/images/Donate_Volunteer/Charity2.webp')}
                    alt="Thanksgiving meal service"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-accent-honey/20 rounded-lg flex items-center justify-center mb-4">
                    <Utensils className="w-6 h-6 text-accent-honey-dark" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-neutral-charcoal mb-3">
                    Community Meals
                  </h3>
                  <p className="text-neutral-gray mb-4">
                    Every Thanksgiving, we serve over 2,000 meals to families in need.
                    This annual tradition brings our community together in celebration
                    and support.
                  </p>
                  <Link
                    href="/donate"
                    className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                  >
                    Support This Program
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>

            {/* Volunteer Program */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-lg overflow-hidden border border-neutral-light h-full">
                <div className="relative aspect-[16/10]">
                  <Image
                    src={getImagePath('/images/Donate_Volunteer/V1.webp')}
                    alt="Volunteers at Project Annie"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-neutral-charcoal mb-3">
                    Volunteer Program
                  </h3>
                  <p className="text-neutral-gray mb-4">
                    We partner with FSU, TCC, and community members to provide
                    meaningful volunteer opportunities that make a real difference.
                  </p>
                  <Link
                    href="/volunteer"
                    className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                  >
                    Get Involved
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-base">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-secondary mb-4">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal">
              15+ Years of Community Impact
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <AnimatedSection key={item.year} delay={index * 0.1}>
                <div className="relative pl-8 pb-10 last:pb-0">
                  {/* Timeline line */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-[5px] top-8 bottom-0 w-0.5 bg-primary/20" />
                  )}

                  {/* Timeline dot - centered with title text (top-[0.4rem] aligns with text baseline) */}
                  <div className="absolute left-0 top-[0.4rem] w-3 h-3 bg-primary rounded-full ring-4 ring-white" />

                  {/* Content */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-heading font-bold text-xl text-neutral-charcoal leading-none">
                        {item.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded text-sm font-semibold">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-neutral-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 lg:py-28 bg-neutral-cream">
        <div className="container-base">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <span className="badge-honey mb-4">Our Location</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-6">
                In the Heart of Frenchtown
              </h2>
              <p className="text-neutral-gray text-lg leading-relaxed mb-6">
                Project Annie is located in the historic Frenchtown neighborhood of
                Tallahasseea community with deep roots and a bright future. We&apos;re
                proud to serve our neighbors and work alongside local partners to
                strengthen this vibrant area.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-neutral-charcoal">Address</div>
                    <div className="text-neutral-gray">
                      625 W. 4th Ave., Tallahassee, FL 32303
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <div>
                    <div className="font-semibold text-neutral-charcoal">Hours</div>
                    <div className="text-neutral-gray">
                      Monday - Friday: 7:00 AM - 6:00 PM
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="btn-primary">
                Get Directions
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3438.2!2d-84.285!3d30.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s625%20W%204th%20Ave%2C%20Tallahassee%2C%20FL%2032303!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Project Annie Location Map"
                />
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
              Ready to Be Part of Our Story?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Join the hundreds of families, volunteers, and donors who make
              Project Annie possible. Together, we can do more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/volunteer"
                className="btn bg-white text-secondary hover:bg-white/90 px-8 py-4 text-lg"
              >
                Volunteer With Us
              </Link>
              <Link
                href="/donate"
                className="btn bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg"
              >
                <Heart className="w-5 h-5" />
                Make a Donation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
