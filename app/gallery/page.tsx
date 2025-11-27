'use client'

import { useState, useCallback, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react'
import { cn, getImagePath } from '@/lib/utils'

const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'community', label: 'Community' },
  { id: 'nursery', label: 'Nursery School' },
  { id: 'thanksgiving', label: 'Thanksgiving' },
  { id: 'volunteers', label: 'Volunteers' },
]

const galleryImages = [
  // Community images
  { src: getImagePath('/images/Home/IMG1.webp'), alt: 'Community volunteers at Project Annie', category: 'community' },
  { src: getImagePath('/images/Home/IMG4.webp'), alt: 'Community gathering', category: 'community' },
  { src: getImagePath('/images/Home/IMG5.webp'), alt: 'Frenchtown community event', category: 'community' },
  { src: getImagePath('/images/Home/IMG6.webp'), alt: 'Community celebration', category: 'community' },
  { src: getImagePath('/images/Home/IMG7.webp'), alt: 'Project Annie community event', category: 'community' },
  { src: getImagePath('/images/Home/IMG8.webp'), alt: 'Community members at event', category: 'community' },
  { src: getImagePath('/images/Home/IMG9.webp'), alt: 'Frenchtown families', category: 'community' },
  { src: getImagePath('/images/Home/IMG10.webp'), alt: 'Community support', category: 'community' },

  // Nursery school images
  { src: getImagePath('/images/About/C1.webp'), alt: 'Children at Annie\'s Nursery School', category: 'nursery' },
  { src: getImagePath('/images/About/C2.webp'), alt: 'Nursery school classroom', category: 'nursery' },
  { src: getImagePath('/images/About/C3.webp'), alt: 'Early learning activities', category: 'nursery' },
  { src: getImagePath('/images/About/C4.webp'), alt: 'Children playing', category: 'nursery' },
  { src: getImagePath('/images/About/C5.webp'), alt: 'Toddlers learning', category: 'nursery' },
  { src: getImagePath('/images/About/C6.webp'), alt: 'Nursery school activities', category: 'nursery' },
  { src: getImagePath('/images/About/EarlyChildcare.webp'), alt: 'Early childcare program', category: 'nursery' },
  { src: getImagePath('/images/About/Toddler Care.webp'), alt: 'Toddler care at Project Annie', category: 'nursery' },

  // Thanksgiving / Charity images
  { src: getImagePath('/images/Donate_Volunteer/Charity1.webp'), alt: 'Thanksgiving meal preparation', category: 'thanksgiving' },
  { src: getImagePath('/images/Donate_Volunteer/Charity2.webp'), alt: 'Community meal service', category: 'thanksgiving' },
  { src: getImagePath('/images/Donate_Volunteer/Charity3.webp'), alt: 'Thanksgiving feast', category: 'thanksgiving' },
  { src: getImagePath('/images/Donate_Volunteer/Annie1.webp'), alt: 'Ms. Annie at Thanksgiving', category: 'thanksgiving' },
  { src: getImagePath('/images/Donate_Volunteer/Annie2.webp'), alt: 'Community leaders', category: 'thanksgiving' },
  { src: getImagePath('/images/Home/IMG12.webp'), alt: 'Thanksgiving event', category: 'thanksgiving' },

  // Volunteer images
  { src: getImagePath('/images/Nursery/V1.webp'), alt: 'Volunteers at Project Annie', category: 'volunteers' },
  { src: getImagePath('/images/Nursery/V2.webp'), alt: 'Student volunteers', category: 'volunteers' },
  { src: getImagePath('/images/Nursery/V3.webp'), alt: 'FSU volunteers', category: 'volunteers' },
  { src: getImagePath('/images/Nursery/V4.webp'), alt: 'Community volunteers', category: 'volunteers' },
  { src: getImagePath('/images/Nursery/V5.webp'), alt: 'Volunteer team', category: 'volunteers' },
  { src: getImagePath('/images/Nursery/V6.webp'), alt: 'Volunteers helping', category: 'volunteers' },
  { src: getImagePath('/images/Nursery/V7.webp'), alt: 'TCC student volunteers', category: 'volunteers' },
  { src: getImagePath('/images/Nursery/V8.webp'), alt: 'Volunteer service', category: 'volunteers' },
  { src: getImagePath('/images/Nursery/VW1.webp'), alt: 'Volunteers at work', category: 'volunteers' },
  { src: getImagePath('/images/Nursery/VW2.webp'), alt: 'Volunteer activities', category: 'volunteers' },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-secondary-dark overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={getImagePath('/images/Home/IMG12.webp')}
            alt="Project Annie community"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-dark via-secondary-dark/95 to-secondary-dark" />
        </div>

        <div className="container-base relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="badge bg-white/10 text-white mb-6">Photo Gallery</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Our Community{' '}
              <span className="text-accent-honey">in Action</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              Explore photos from our nursery school, Thanksgiving meals, volunteer
              events, and community celebrations. These moments capture the heart
              of Project Annie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[72px] lg:top-[80px] z-30 bg-white border-b border-neutral-light">
        <div className="container-base py-4">
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  'px-4 py-2 rounded font-heading font-medium text-sm whitespace-nowrap transition-all',
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-neutral-cream text-neutral-gray hover:bg-neutral-light'
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 lg:py-16 bg-neutral-cream">
        <div className="container-base">
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    'relative group cursor-pointer overflow-hidden rounded-lg',
                    // Create varied sizes for visual interest
                    index % 7 === 0 && 'md:col-span-2 md:row-span-2',
                    index % 11 === 3 && 'md:row-span-2',
                  )}
                  onClick={() => openLightbox(index)}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-neutral-charcoal/0 group-hover:bg-neutral-charcoal/40 transition-colors duration-300" />

                    {/* Zoom icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-neutral-charcoal" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Image count */}
          <div className="text-center mt-8 text-neutral-gray">
            Showing {filteredImages.length} of {galleryImages.length} photos
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-charcoal/95 flex items-center justify-center"
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
            <div className="absolute top-4 left-4 text-white/80 text-sm font-medium">
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].alt}
                width={1200}
                height={800}
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
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs">
              Use arrow keys to navigate, ESC to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
