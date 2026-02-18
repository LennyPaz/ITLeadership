import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description:
    'Browse photos from Project Annie\'s nursery school, community meals, volunteer events, and celebrations in Tallahassee\'s Frenchtown neighborhood.',
  openGraph: {
    title: 'Photo Gallery | Project Annie',
    description:
      'Browse photos from Project Annie\'s nursery school, community meals, volunteer events, and celebrations.',
    url: 'https://projectannieinc.com/gallery/',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://projectannieinc.com' },
    { '@type': 'ListItem', position: 2, name: 'Photo Gallery', item: 'https://projectannieinc.com/gallery' },
  ],
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
      {children}
    </>
  )
}
