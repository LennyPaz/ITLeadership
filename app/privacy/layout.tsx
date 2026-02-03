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

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
