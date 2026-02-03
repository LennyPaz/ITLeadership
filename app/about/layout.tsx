import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Project Annie\'s mission, our founder Ms. Annie Johnson, and 15+ years of serving Tallahassee\'s Frenchtown community with childcare and community meals.',
  openGraph: {
    title: 'About Us | Project Annie',
    description:
      'Learn about Project Annie\'s mission, our founder Ms. Annie Johnson, and 15+ years of serving Tallahassee\'s Frenchtown community.',
    url: 'https://projectannie.org/about/',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
