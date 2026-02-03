import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Volunteer',
  description:
    'Volunteer with Project Annie in Tallahassee. Join FSU and TCC students making a difference through childcare assistance, community meals, and special events in Frenchtown.',
  openGraph: {
    title: 'Volunteer | Project Annie',
    description:
      'Volunteer with Project Annie in Tallahassee. Join FSU and TCC students making a difference in Frenchtown.',
    url: 'https://projectannie.org/volunteer/',
  },
}

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
