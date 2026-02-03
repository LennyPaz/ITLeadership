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

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
