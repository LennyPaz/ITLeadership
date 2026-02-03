import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description:
    'Browse photos from Project Annie\'s nursery school, community meals, volunteer events, and celebrations in Tallahassee\'s Frenchtown neighborhood.',
  openGraph: {
    title: 'Photo Gallery | Project Annie',
    description:
      'Browse photos from Project Annie\'s nursery school, community meals, volunteer events, and celebrations.',
    url: 'https://projectannie.org/gallery/',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
