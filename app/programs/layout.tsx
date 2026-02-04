import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Annie\'s Nursery School',
  description:
    'Quality, affordable childcare for children ages 1-3 in Tallahassee\'s Frenchtown community. Licensed nursery school with small class sizes, structured learning, and a nurturing environment.',
  openGraph: {
    title: 'Annie\'s Nursery School | Project Annie',
    description:
      'Quality, affordable childcare for children ages 1-3 in Tallahassee. Licensed nursery school with small class sizes and structured learning.',
    url: 'https://projectannie.org/programs/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: "Annie's Nursery School",
  description:
    'Quality, affordable childcare for children ages 1-3 in Tallahassee\'s Frenchtown community. Licensed nursery school with small class sizes, structured learning, and a nurturing environment.',
  url: 'https://projectannie.org/programs/',
  provider: {
    '@type': 'NonprofitOrganization',
    name: 'Project Annie, Inc.',
    url: 'https://projectannie.org',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '625 W. 4th Ave.',
    addressLocality: 'Tallahassee',
    addressRegion: 'FL',
    postalCode: '32303',
    addressCountry: 'US',
  },
  telephone: '+1-850-222-6133',
  areaServed: {
    '@type': 'City',
    name: 'Tallahassee',
  },
  audience: {
    '@type': 'PeopleAudience',
    suggestedMinAge: '1',
    suggestedMaxAge: '3',
  },
}

export default function ProgramsLayout({
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
      {children}
    </>
  )
}
