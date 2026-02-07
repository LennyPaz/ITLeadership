'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Heart,
  Users,
  GraduationCap,
  CheckCircle2,
  ExternalLink,
  Shield,
} from 'lucide-react'
import { cn, getImagePath } from '@/lib/utils'
import AnimatedSection from '@/components/AnimatedSection'
import settingsData from '@/content/settings.json'

const quickActions = [
  {
    icon: GraduationCap,
    title: 'Enroll Your Child',
    description: 'Learn about our nursery school program',
    href: '/programs',
    color: 'primary',
  },
  {
    icon: Users,
    title: 'Volunteer',
    description: 'Join our team of community helpers',
    href: '/volunteer',
    color: 'secondary',
  },
  {
    icon: Heart,
    title: 'Make a Donation',
    description: 'Support children and families',
    href: '/donate',
    color: 'honey',
  },
]

export default function ContactPage() {
  const prefersReducedMotion = useReducedMotion()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    website: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev }
        delete next[name]
        return next
      })
    }
  }

  const formRef = useRef<HTMLFormElement>(null)

  const validateFields = (): boolean => {
    const errors: Record<string, string> = {}
    if (!formState.name.trim()) errors.name = 'Name is required.'
    if (!formState.email.trim()) {
      errors.email = 'Email is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errors.email = 'Enter a valid email address.'
    }
    if (!formState.subject) errors.subject = 'Please select a subject.'
    if (!formState.message.trim()) errors.message = 'Message is required.'
    setFieldErrors(errors)

    // Auto-focus first errored field
    const errorKeys = Object.keys(errors)
    if (errorKeys.length > 0 && formRef.current) {
      const firstErrorField = formRef.current.querySelector<HTMLElement>(
        `[name="${errorKeys[0]}"]`
      )
      firstErrorField?.focus()
    }

    return errorKeys.length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateFields()) return
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setIsSubmitted(true)
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        website: '',
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={getImagePath('/images/Home/IMG7.webp')}
            alt="Project Annie community"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark via-secondary-dark/95 to-secondary-dark" />
        </div>

        <div className="container-base relative z-10">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="badge bg-white/10 text-white mb-6">Contact Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Get in{' '}
              <span className="text-accent-honey">Touch</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Have questions about enrollment, volunteering, or how to support our
              mission? We&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Bar */}
      <section className="bg-neutral-cream border-b border-neutral-light">
        <div className="container-base">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-light">
            <a
              href="tel:8502226133"
              className="flex items-center gap-4 py-6 px-4 hover:bg-white transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-neutral-gray">Call Us</div>
                <div className="font-heading font-semibold text-neutral-charcoal">
                  (850) 222-6133
                </div>
              </div>
            </a>

            <a
              href="mailto:anniejohnsont@gmail.com"
              className="flex items-center gap-4 py-6 px-4 hover:bg-white transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-neutral-gray">Email Us</div>
                <div className="font-heading font-semibold text-neutral-charcoal">
                  anniejohnsont@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://maps.google.com/?q=625+W+4th+Ave+Tallahassee+FL+32303"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 py-6 px-4 hover:bg-white transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="text-sm text-neutral-gray">Visit Us</div>
                <div className="font-heading font-semibold text-neutral-charcoal">
                  625 W. 4th Ave., Tallahassee
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-neutral-light group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="contact-form" className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="container-base">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-4">
                  Send Us a Message
                </h2>
                <p className="text-neutral-gray text-lg mb-8">
                  Fill out the form below and we&apos;ll get back to you within 1&ndash;2 business days.
                </p>

                {isSubmitted ? (
                  <div className="bg-accent-sage/10 border border-accent-sage/30 rounded-lg p-8 text-center" role="status" aria-live="polite">
                    <CheckCircle2 className="w-16 h-16 text-accent-sage mx-auto mb-4" />
                    <h3 className="font-heading font-bold text-xl text-neutral-charcoal mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-neutral-gray mb-6">
                      Thank you for reaching out. We&apos;ll get back to you within 1-2 business days.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-outline"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - hidden from real users */}
                    <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
                      <label htmlFor="website">Website</label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formState.website || ''}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="input-label">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          maxLength={100}
                          aria-required="true"
                          aria-invalid={!!fieldErrors.name}
                          aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                          value={formState.name}
                          onChange={handleInputChange}
                          className={cn('input', fieldErrors.name && 'border-red-400')}
                          placeholder="John Smith"
                        />
                        {fieldErrors.name && (
                          <p id="name-error" role="alert" className="text-red-600 text-sm mt-1">{fieldErrors.name}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="input-label">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          inputMode="email"
                          required
                          maxLength={254}
                          aria-required="true"
                          aria-invalid={!!fieldErrors.email}
                          aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                          value={formState.email}
                          onChange={handleInputChange}
                          className={cn('input', fieldErrors.email && 'border-red-400')}
                          placeholder="john@example.com"
                        />
                        {fieldErrors.email && (
                          <p id="email-error" role="alert" className="text-red-600 text-sm mt-1">{fieldErrors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="input-label">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          inputMode="tel"
                          value={formState.phone}
                          onChange={handleInputChange}
                          className="input"
                          placeholder="(850) 555-0123"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="input-label">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          aria-required="true"
                          aria-invalid={!!fieldErrors.subject}
                          aria-describedby={fieldErrors.subject ? 'subject-error' : undefined}
                          value={formState.subject}
                          onChange={handleInputChange}
                          className={cn('input', fieldErrors.subject && 'border-red-400')}
                        >
                          <option value="">Select a subject</option>
                          <option value="enrollment">Enrollment Inquiry</option>
                          <option value="volunteer">Volunteering</option>
                          <option value="donation">Donations & Sponsorship</option>
                          <option value="partnership">Partnership Opportunity</option>
                          <option value="media">Media Inquiry</option>
                          <option value="other">Other</option>
                        </select>
                        {fieldErrors.subject && (
                          <p id="subject-error" role="alert" className="text-red-600 text-sm mt-1">{fieldErrors.subject}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="input-label">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        maxLength={5000}
                        aria-required="true"
                        aria-invalid={!!fieldErrors.message}
                        aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                        rows={6}
                        value={formState.message}
                        onChange={handleInputChange}
                        className={cn('input resize-none', fieldErrors.message && 'border-red-400')}
                        placeholder="How can we help you?"
                      />
                      {fieldErrors.message && (
                        <p id="message-error" role="alert" className="text-red-600 text-sm mt-1">{fieldErrors.message}</p>
                      )}
                    </div>

                    {error && (
                      <div id="form-error" role="alert" aria-live="assertive" className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-sm text-neutral-dark/60 flex items-center gap-1.5 mt-3">
                      <Shield className="w-4 h-4 flex-shrink-0" />
                      Your information is secure and will never be shared.{' '}
                      <Link href="/privacy" className="underline hover:text-primary">
                        Privacy Policy
                      </Link>
                    </p>
                  </form>
                )}
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.2}>
                <div className="sticky top-32 space-y-8">
                  {/* Hours & Info */}
                  <div className="bg-neutral-cream rounded-lg p-6 lg:p-8">
                    <h3 className="font-heading font-bold text-xl text-neutral-charcoal mb-6">
                      Hours & Location
                    </h3>

                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <Clock className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <div className="font-semibold text-neutral-charcoal">Hours</div>
                          <div className="text-neutral-gray text-sm">
                            {settingsData.hours.weekdays}<br />
                            {settingsData.hours.weekend}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <div className="font-semibold text-neutral-charcoal">Address</div>
                          <div className="text-neutral-gray text-sm">
                            Annie&apos;s Nursery School<br />
                            625 W. 4th Ave.<br />
                            Tallahassee, FL 32303
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <div className="font-semibold text-neutral-charcoal">Phone</div>
                          <a
                            href="tel:8502226133"
                            className="text-primary hover:text-primary-dark text-sm"
                          >
                            (850) 222-6133
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                        <div>
                          <div className="font-semibold text-neutral-charcoal">Email</div>
                          <a
                            href="mailto:anniejohnsont@gmail.com"
                            className="text-primary hover:text-primary-dark text-sm"
                          >
                            anniejohnsont@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="bg-secondary rounded-lg p-6 lg:p-8">
                    <h3 className="font-heading font-bold text-xl text-white mb-6">
                      Quick Actions
                    </h3>

                    <div className="space-y-3">
                      {quickActions.map((action) => (
                        <Link
                          key={action.title}
                          href={action.href}
                          className="flex items-center gap-4 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                        >
                          <div className={cn(
                            'w-10 h-10 rounded-lg flex items-center justify-center',
                            action.color === 'primary' && 'bg-primary',
                            action.color === 'secondary' && 'bg-secondary-light',
                            action.color === 'honey' && 'bg-accent-honey'
                          )}>
                            <action.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-heading font-semibold text-white text-sm">
                              {action.title}
                            </div>
                            <div className="text-white/80 text-xs">
                              {action.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 lg:py-28 bg-neutral-cream">
        <div className="container-base">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-charcoal mb-4">
              Find Us in Frenchtown
            </h2>
            <p className="text-neutral-gray text-lg">
              Located in the heart of Tallahassee&apos;s historic Frenchtown
              neighborhood, we&apos;re easily accessible and always welcoming visitors.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-lg overflow-hidden shadow-lg">
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

          <AnimatedSection delay={0.2} className="mt-8 text-center">
            <a
              href="https://maps.google.com/?q=625+W+4th+Ave+Tallahassee+FL+32303"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <ExternalLink className="w-4 h-4" />
              Get Directions
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary overflow-hidden">
        <div className="container-base text-center">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-4">
              Ready to Visit?
            </h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Schedule a tour to see our nursery school in person and meet Ms. Annie
              and our dedicated team.
            </p>
            <a
              href="tel:8502226133"
              className="btn bg-white text-primary hover:bg-white/90"
            >
              <Phone className="w-5 h-5" />
              Call to Schedule: (850) 222-6133
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
