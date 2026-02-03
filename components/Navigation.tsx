'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, ChevronRight, Heart } from 'lucide-react'
import { cn, getImagePath, BASE_PATH } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const rawPathname = usePathname()
  // Normalize pathname by removing basePath for active state comparison
  // Handle both production (with basePath) and development (without basePath)
  let pathname = rawPathname
  if (rawPathname.startsWith(BASE_PATH)) {
    pathname = rawPathname.slice(BASE_PATH.length) || '/'
  }
  // Ensure we have a clean pathname (remove trailing slash except for root)
  if (pathname !== '/' && pathname.endsWith('/')) {
    pathname = pathname.slice(0, -1)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [rawPathname])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      {/* Top bar - visible on larger screens */}
      <div
        className={cn(
          'hidden md:block border-b transition-all duration-300',
          isScrolled
            ? 'border-neutral-light/50 bg-neutral-cream/50'
            : 'border-white/10 bg-secondary-dark/80'
        )}
      >
        <div className="container-base">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className={cn(
              'flex items-center gap-2 transition-colors',
              isScrolled ? 'text-neutral-gray' : 'text-white/90'
            )}>
              <Phone className="w-4 h-4" />
              <a
                href="tel:8502226133"
                className="hover:text-primary transition-colors"
              >
                (850) 222-6133
              </a>
              <span className="mx-2 opacity-50">|</span>
              <span>625 W. 4th Ave., Tallahassee, FL</span>
            </div>
            <div className={cn(
              'text-sm transition-colors',
              isScrolled ? 'text-neutral-gray' : 'text-white/90'
            )}>
              Serving Frenchtown for 15+ years
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-base">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center gap-3 group"
          >
            <div className="relative w-14 h-14 lg:w-16 lg:h-16 transition-transform duration-200 group-hover:scale-105">
              <Image
                src={getImagePath('/images/logo.webp')}
                alt="Project Annie Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className={cn(
                'font-heading font-bold text-lg transition-colors',
                isScrolled || isOpen ? 'text-neutral-charcoal' : 'text-white'
              )}>
                Project Annie
              </div>
              <div className={cn(
                'text-xs tracking-wide transition-colors',
                isScrolled || isOpen ? 'text-neutral-gray' : 'text-white/90'
              )}>
                Annie&apos;s Nursery School
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={cn(
                    'relative px-4 py-2 font-heading font-medium text-sm transition-colors',
                    isActive
                      ? 'text-primary'
                      : isScrolled
                        ? 'text-neutral-charcoal hover:text-primary'
                        : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/donate"
              className={cn(
                'btn-primary text-sm',
                !isScrolled && 'bg-white text-primary hover:bg-white/90'
              )}
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              'relative z-10 lg:hidden p-2 -mr-2 transition-colors',
              isScrolled || isOpen
                ? 'text-neutral-charcoal'
                : 'text-white'
            )}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-neutral-charcoal/20 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg lg:hidden border-t border-neutral-light"
            >
              <div className="container-base py-6">
                <nav className="space-y-1">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          aria-current={isActive ? 'page' : undefined}
                          className={cn(
                            'flex items-center justify-between py-3 px-4 rounded-lg font-heading font-medium transition-colors',
                            isActive
                              ? 'bg-primary/5 text-primary'
                              : 'text-neutral-charcoal hover:bg-neutral-cream'
                          )}
                        >
                          {link.label}
                          <ChevronRight className={cn(
                            'w-4 h-4 transition-colors',
                            isActive ? 'text-primary' : 'text-neutral-light'
                          )} />
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-6 pt-6 border-t border-neutral-light">
                  <Link
                    href="/donate"
                    className="btn-primary w-full justify-center"
                  >
                    Donate Now
                  </Link>
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-neutral-gray">
                    <Phone className="w-4 h-4" />
                    <a href="tel:8502226133" className="hover:text-primary">
                      (850) 222-6133
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>

      {/* Sticky mobile donate button */}
      <Link
        href="/donate"
        className={cn(
          'fixed bottom-6 right-4 z-50 lg:hidden',
          'flex items-center gap-2 px-5 py-3',
          'bg-primary text-white font-heading font-semibold',
          'rounded-full shadow-lg shadow-primary/30',
          'transition-all duration-300',
          'hover:bg-primary-dark hover:shadow-xl',
          isOpen ? 'translate-y-20 opacity-0' : 'translate-y-0 opacity-100'
        )}
        aria-label="Donate Now"
      >
        <Heart className="w-5 h-5" />
        Donate
      </Link>
    </>
  )
}
