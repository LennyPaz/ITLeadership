import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description:
    'Project Annie is committed to making our website accessible to all visitors. Learn about our accessibility practices and how to report issues.',
  openGraph: {
    title: 'Accessibility Statement | Project Annie',
    description:
      'Project Annie is committed to making our website accessible to all visitors.',
    url: 'https://projectannie.org/accessibility/',
  },
}

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
