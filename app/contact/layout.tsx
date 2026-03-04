import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Project Annie in Tallahassee, FL. Call (850) 222-6133, email us, or visit Annie\'s Nursery School at 625 W. 4th Ave. in Frenchtown. Mon-Fri 9AM-3PM.',
  openGraph: {
    title: 'Contact Us | Project Annie',
    description:
      'Contact Project Annie in Tallahassee. Call (850) 222-6133 or visit us at 625 W. 4th Ave. in Frenchtown.',
    url: 'https://projectannieinc.com/contact/',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Project Annie - Contact Us' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Project Annie',
    description:
      'Contact Project Annie in Tallahassee. Call (850) 222-6133 or visit us at 625 W. 4th Ave. in Frenchtown.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Project Annie',
  description:
    'Contact Project Annie in Tallahassee, FL. Call, email, or visit us in Frenchtown.',
  url: 'https://projectannieinc.com/contact/',
  mainEntity: {
    '@type': 'NonprofitOrganization',
    name: 'Project Annie, Inc.',
    url: 'https://projectannieinc.com',
    telephone: '+1-850-222-6133',
    email: 'anniejohnsont@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '625 W. 4th Ave.',
      addressLocality: 'Tallahassee',
      addressRegion: 'FL',
      postalCode: '32303',
      addressCountry: 'US',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '15:00',
    },
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://projectannieinc.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact Us', item: 'https://projectannieinc.com/contact/' },
  ],
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
