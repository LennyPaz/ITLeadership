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

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
