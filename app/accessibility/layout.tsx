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

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://projectannie.org' },
    { '@type': 'ListItem', position: 2, name: 'Accessibility', item: 'https://projectannie.org/accessibility' },
  ],
}

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  )
}
