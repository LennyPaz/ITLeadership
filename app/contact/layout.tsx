import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Contact Project Annie in Tallahassee, FL. Call (850) 222-6133, email us, or visit Annie\'s Nursery School at 625 W. 4th Ave. in Frenchtown. Mon-Fri 9AM-3PM.',
  openGraph: {
    title: 'Contact Us | Project Annie',
    description:
      'Contact Project Annie in Tallahassee. Call (850) 222-6133 or visit us at 625 W. 4th Ave. in Frenchtown.',
    url: 'https://projectannie.org/contact/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Project Annie',
  description:
    'Contact Project Annie in Tallahassee, FL. Call, email, or visit us in Frenchtown.',
  url: 'https://projectannie.org/contact/',
  mainEntity: {
    '@type': 'NonprofitOrganization',
    name: 'Project Annie, Inc.',
    url: 'https://projectannie.org',
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
      {children}
    </>
  )
}
