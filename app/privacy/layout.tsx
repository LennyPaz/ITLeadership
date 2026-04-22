import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Project Annie\'s website. Learn how we collect, use, and protect your personal information when you interact with our site.',
  alternates: { canonical: './' },
  openGraph: {
    title: 'Privacy Policy | Project Annie',
    description:
      'Privacy policy for Project Annie\'s website. Learn how we handle your personal information.',
    url: 'https://projectannieinc.com/privacy/',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, type: 'image/jpeg', alt: 'Project Annie - Privacy Policy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Project Annie',
    description:
      'Privacy policy for Project Annie\'s website. Learn how we handle your personal information.',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://projectannieinc.com' },
    { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://projectannieinc.com/privacy/' },
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
