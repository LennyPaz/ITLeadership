import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support Project Annie with a tax-deductible donation. Your gift provides childcare, meals, and hope to families in Tallahassee\'s Frenchtown community. 501(c)(3) EIN: 52-2011801.',
  openGraph: {
    title: 'Donate | Project Annie',
    description:
      'Support Project Annie with a tax-deductible donation. Your gift provides childcare, meals, and hope to Frenchtown families.',
    url: 'https://projectannieinc.com/donate/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DonateAction',
  name: 'Donate to Project Annie',
  description:
    'Support Project Annie with a tax-deductible donation to provide childcare, meals, and community support in Tallahassee\'s Frenchtown neighborhood.',
  url: 'https://projectannieinc.com/donate/',
  recipient: {
    '@type': 'NonprofitOrganization',
    name: 'Project Annie, Inc.',
    url: 'https://projectannieinc.com',
    taxID: '52-2011801',
    nonprofitStatus: '501(c)(3)',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://projectannieinc.com' },
    { '@type': 'ListItem', position: 2, name: 'Donate', item: 'https://projectannieinc.com/donate' },
  ],
}

export default function DonateLayout({
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
