import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Project Annie\'s mission, our founder Ms. Annie Johnson, and 15+ years of serving Tallahassee\'s Frenchtown community with childcare and community meals.',
  openGraph: {
    title: 'About Us | Project Annie',
    description:
      'Learn about Project Annie\'s mission, our founder Ms. Annie Johnson, and 15+ years of serving Tallahassee\'s Frenchtown community.',
    url: 'https://projectannieinc.com/about/',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://projectannieinc.com' },
    { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://projectannieinc.com/about' },
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
