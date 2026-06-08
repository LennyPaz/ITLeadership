import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'Project Annie is committed to making our website accessible to all visitors. Learn about our accessibility practices and how to report issues.',
  alternates: { canonical: './' },
  openGraph: {
    title: 'Accessibility Statement | Project Annie',
    description:
      'Project Annie is committed to making our website accessible to all visitors.',
    url: 'https://projectannieinc.com/accessibility/',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Project Annie - Annie\'s Nursery School',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accessibility Statement | Project Annie',
    description:
      'Project Annie is committed to making our website accessible to all visitors.',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://projectannieinc.com' },
    { '@type': 'ListItem', position: 2, name: 'Accessibility', item: 'https://projectannieinc.com/accessibility/' },
  ],
}

export default function AccessibilityLayout({
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
