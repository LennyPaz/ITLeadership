'use client'

import { useState, useCallback, useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const MAX_STAGGER = 20

function useInView() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(el)
        }
      },
      { rootMargin: '200px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Import content from JSON files
import galleryCategoriesData from '@/content/gallery-categories.json'
import galleryData from '@/content/gallery.json'

const categories = galleryCategoriesData.items
const galleryImages = galleryData.items

// Build a lookup map from category ID to human-readable label
const categoryLabelMap: Record<string, string> = {}
for (const cat of categories) {
  categoryLabelMap[cat.id] = cat.label
}

// Type for gallery images with focal point
type GalleryImage = {
  src: string
  alt: string
  category: string
  focalPoint?: string
}

// Convert focal point to CSS object-position
function getFocalPointStyle(focalPoint?: string): string {
  const positions: Record<string, string> = {
    center: 'center center',
    top: 'center top',
    bottom: 'center bottom',
    left: 'left center',
    right: 'right center',
  }
  return positions[focalPoint || 'center'] || 'center center'
}

function GalleryItem({
  image,
  index,
  prefersReducedMotion,
  onOpen,
}: {
  image: GalleryImage
  index: number
  prefersReducedMotion: boolean | null
  onOpen: () => void
}) {
  const { ref, isVisible } = useInView()
  const cappedDelay = Math.min(index, MAX_STAGGER) * 0.02

  return (
    <motion.div
      ref={ref}
      key={image.src}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, delay: cappedDelay }}
      className="relative group cursor-pointer overflow-hidden rounded-lg break-inside-avoid mb-4"
      role="button"
      tabIndex={0}
      aria-label={`View ${image.alt}`}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen()
        }
      }}
    >
      {isVisible ? (
        <div className="relative">
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            style={{ objectPosition: getFocalPointStyle(image.focalPoint) }}
          />
          <div className="absolute inset-0 bg-neutral-charcoal/0 group-hover:bg-neutral-charcoal/40 transition-colors duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
              <ZoomIn className="w-5 h-5 text-neutral-charcoal" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="px-2 py-1 bg-white/90 text-neutral-charcoal text-xs rounded font-medium">
              {categoryLabelMap[image.category] || image.category}
            </span>
          </div>
        </div>
      ) : (
        <div className="w-full" style={{ aspectRatio: '3/2' }} />
      )}
    </motion.div>
  )
}

export default function GalleryPage() {
  const prefersReducedMotion = useReducedMotion()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = useMemo(() => {
    return selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)
  }, [selectedCategory])

  // Count images per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: galleryImages.length }
    galleryImages.forEach((img) => {
      counts[img.category] = (counts[img.category] || 0) + 1
    })
    return counts
  }, [])

  const lightboxRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLElement | null>(null)

  const openLightbox = (index: number) => {
    triggerRef.current = document.activeElement as HTMLElement
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
    triggerRef.current?.focus()
  }

  const goToPrevious = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : null
      )
    }
  }, [lightboxIndex, filteredImages.length])

  const goToNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) =>
        prev !== null ? (prev + 1) % filteredImages.length : null
      )
    }
  }, [lightboxIndex, filteredImages.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return

      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') goToPrevious()
      if (e.key === 'ArrowRight') goToNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, goToPrevious, goToNext])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  // Focus trap for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return
    const dialog = lightboxRef.current
    if (!dialog) return

    const focusable = dialog.querySelectorAll<HTMLElement>(
      'button, [href], [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length === 0) return
    const first = focusable[0]
    const last = focusable[focusable.length - 1]

    first.focus()

    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    dialog.addEventListener('keydown', trap)
    return () => dialog.removeEventListener('keydown', trap)
  }, [lightboxIndex])

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/Gallery/g5.webp"
            alt="Project Annie community"
            fill
            sizes="100vw"
            className="object-cover opacity-20"
            style={{ objectPosition: 'center top' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark via-secondary-dark/95 to-secondary-dark" />
        </div>

        <div className="container-base relative z-10">
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="badge bg-white/10 text-white mb-6">Photo Gallery</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Our Community{' '}
              <span className="text-accent-honey">in Action</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl">
              Explore photos from our nursery school, community meals, volunteer
              events, and celebrations. These moments capture the heart of Project Annie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[72px] lg:top-[80px] z-30 bg-white border-b border-neutral-light shadow-sm">
        <div className="container-base py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                aria-pressed={selectedCategory === category.id}
                className={cn(
                  'px-4 py-2 rounded font-heading font-medium text-sm whitespace-nowrap transition-all flex items-center gap-2',
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-neutral-cream text-neutral-gray hover:bg-neutral-light'
                )}
              >
                {category.label}
                <span className={cn(
                  'px-1.5 py-0.5 text-xs rounded-full',
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-neutral-light text-neutral-gray'
                )}>
                  {categoryCounts[category.id] || 0}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="py-12 lg:py-16 bg-neutral-cream min-h-screen">
        <div className="container-base">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image: GalleryImage, index: number) => (
                <GalleryItem
                  key={image.src}
                  image={image}
                  index={index}
                  prefersReducedMotion={prefersReducedMotion}
                  onOpen={() => openLightbox(index)}
                />
              ))}
            </AnimatePresence>
          </div>

          {/* Image count */}
          <motion.div
            key={filteredImages.length}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-12 text-neutral-gray"
          >
            Showing {filteredImages.length} of {galleryImages.length} photos
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            ref={lightboxRef}
            initial={prefersReducedMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={prefersReducedMotion ? undefined : { opacity: 0 }}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
            className="fixed inset-0 z-50 bg-neutral-charcoal/95 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label={filteredImages[lightboxIndex].alt}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image counter */}
            <div className="absolute top-4 left-4 text-white/90 text-sm font-medium bg-black/30 px-3 py-1 rounded-full">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main image */}
            <motion.div
              key={filteredImages[lightboxIndex].src}
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.95 }}
              transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2 }}
              className="relative max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                width={1200}
                height={800}
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-charcoal/80 to-transparent p-4 rounded-b-lg">
                <p className="text-white text-center">
                  {filteredImages[lightboxIndex].alt}
                </p>
              </div>
            </motion.div>

            {/* Keyboard hint */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-xs bg-black/30 px-3 py-1 rounded-full">
              Use arrow keys to navigate, ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
