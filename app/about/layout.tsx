import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Project Annie\'s mission, our founder Ms. Annie Johnson, and 15+ years of serving Tallahassee\'s Frenchtown community with childcare and community meals.',
  alternates: { canonical: './' },
  openGraph: {
    title: 'About Us | Project Annie',
    description:
      'Learn about Project Annie\'s mission, our founder Ms. Annie Johnson, and 15+ years of serving Tallahassee\'s Frenchtown community.',
    url: 'https://projectannieinc.com/about/',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, type: 'image/jpeg', alt: 'Project Annie - About Us' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Project Annie',
    description:
      'Learn about Project Annie\'s mission, our founder Ms. Annie Johnson, and 15+ years of serving Tallahassee\'s Frenchtown community.',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://projectannieinc.com' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://projectannieinc.com/about/' },
  ],
}

export default function AboutLayout({
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
