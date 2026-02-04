import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Donate',
  description:
    'Support Project Annie with a tax-deductible donation. Your gift provides childcare, meals, and hope to families in Tallahassee\'s Frenchtown community. 501(c)(3) EIN: 26-0638919.',
  openGraph: {
    title: 'Donate | Project Annie',
    description:
      'Support Project Annie with a tax-deductible donation. Your gift provides childcare, meals, and hope to Frenchtown families.',
    url: 'https://projectannie.org/donate/',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DonateAction',
  name: 'Donate to Project Annie',
  description:
    'Support Project Annie with a tax-deductible donation to provide childcare, meals, and community support in Tallahassee\'s Frenchtown neighborhood.',
  url: 'https://projectannie.org/donate/',
  recipient: {
    '@type': 'NonprofitOrganization',
    name: 'Project Annie, Inc.',
    url: 'https://projectannie.org',
    taxID: '26-0638919',
    nonprofitStatus: '501(c)(3)',
  },
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
      {children}
    </>
  )
}
