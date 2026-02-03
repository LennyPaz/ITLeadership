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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
