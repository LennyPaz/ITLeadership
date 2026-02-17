import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Project Annie\'s website. Learn how we collect, use, and protect your personal information when you interact with our site.',
  openGraph: {
    title: 'Privacy Policy | Project Annie',
    description:
      'Privacy policy for Project Annie\'s website. Learn how we handle your personal information.',
    url: 'https://projectannie.org/privacy/',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://projectannie.org' },
    { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://projectannie.org/privacy' },
  ],
}

export default function PrivacyLayout({
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
