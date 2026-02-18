import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Volunteer',
  description:
    'Volunteer with Project Annie in Tallahassee. Join FSU and TCC students making a difference through childcare assistance, community meals, and special events in Frenchtown.',
  openGraph: {
    title: 'Volunteer | Project Annie',
    description:
      'Volunteer with Project Annie in Tallahassee. Join FSU and TCC students making a difference in Frenchtown.',
    url: 'https://projectannieinc.com/volunteer/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VolunteerAction',
  name: 'Volunteer with Project Annie',
  description:
    'Join FSU and TCC students volunteering with Project Annie through childcare assistance, community meals, and special events in Tallahassee\'s Frenchtown neighborhood.',
  url: 'https://projectannieinc.com/volunteer/',
  location: {
    '@type': 'Place',
    name: "Annie's Nursery School",
    address: {
      '@type': 'PostalAddress',
      streetAddress: '625 W. 4th Ave.',
      addressLocality: 'Tallahassee',
      addressRegion: 'FL',
      postalCode: '32303',
      addressCountry: 'US',
    },
  },
  organizer: {
    '@type': 'NonprofitOrganization',
    name: 'Project Annie, Inc.',
    url: 'https://projectannieinc.com',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://projectannieinc.com' },
    { '@type': 'ListItem', position: 2, name: 'Volunteer', item: 'https://projectannieinc.com/volunteer' },
  ],
}

export default function VolunteerLayout({
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
