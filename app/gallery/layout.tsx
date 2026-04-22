import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description:
    'Browse photos from Project Annie\'s nursery school, community meals, volunteer events, and celebrations in Tallahassee\'s Frenchtown neighborhood.',
  alternates: { canonical: './' },
  openGraph: {
    title: 'Photo Gallery | Project Annie',
    description:
      'Browse photos from Project Annie\'s nursery school, community meals, volunteer events, and celebrations.',
    url: 'https://projectannieinc.com/gallery/',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, type: 'image/jpeg', alt: 'Project Annie - Photo Gallery' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo Gallery | Project Annie',
    description:
      'Browse photos from Project Annie\'s nursery school, community meals, volunteer events, and celebrations.',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://projectannieinc.com' },
    { '@type': 'ListItem', position: 2, name: 'Photo Gallery', item: 'https://projectannieinc.com/gallery/' },
  ],
}

const galleryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Photo Gallery',
  description:
    'Browse photos from Project Annie\'s nursery school, community meals, volunteer events, and celebrations in Tallahassee\'s Frenchtown neighborhood.',
  url: 'https://projectannieinc.com/gallery/',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Project Annie',
    url: 'https://projectannieinc.com',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />
      {children}
    </>
  )
}
