import type { Metadata } from 'next'
import { DM_Sans, Source_Sans_3, Lora } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-source-sans',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://projectannie.org'),
  title: {
    default: 'Project Annie | Annie\'s Nursery School - Tallahassee, FL',
    template: '%s | Project Annie',
  },
  description: 'Project Annie provides quality, affordable childcare and early education for children ages 1-3 in Tallahassee\'s Frenchtown community. Serving families for over 15 years.',
  keywords: [
    'childcare Tallahassee',
    'nursery school Frenchtown',
    'affordable daycare Florida',
    'early childhood education',
    'Project Annie',
    'Annie\'s Nursery School',
    'community nonprofit Tallahassee',
  ],
  authors: [{ name: 'Project Annie, Inc.' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://projectannie.org',
    siteName: 'Project Annie',
    title: 'Project Annie | Annie\'s Nursery School',
    description: 'Quality, affordable childcare serving Tallahassee\'s Frenchtown community for over 15 years.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Project Annie - Annie\'s Nursery School',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Annie | Annie\'s Nursery School',
    description: 'Quality, affordable childcare serving Tallahassee\'s Frenchtown community for over 15 years.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NonprofitOrganization',
  name: 'Project Annie, Inc.',
  alternateName: "Annie's Nursery School",
  url: 'https://projectannie.org',
  logo: 'https://projectannie.org/images/logo.webp',
  description:
    "Project Annie provides quality, affordable childcare and early education for children ages 1-3 in Tallahassee's Frenchtown community. Serving families for over 15 years.",
  foundingDate: '2008',
  founder: {
    '@type': 'Person',
    name: 'Annie M. Johnson',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '625 W. 4th Ave.',
    addressLocality: 'Tallahassee',
    addressRegion: 'FL',
    postalCode: '32303',
    addressCountry: 'US',
  },
  telephone: '+1-850-222-6133',
  email: 'anniejohnsont@gmail.com',
  areaServed: {
    '@type': 'City',
    name: 'Tallahassee',
    containedInPlace: {
      '@type': 'State',
      name: 'Florida',
    },
  },
  nonprofitStatus: '501(c)(3)',
  taxID: '26-0638919',
  sameAs: [
    'https://www.paypal.com/paypalme/ProjectAnnieInc',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${sourceSans.variable} ${lora.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#C4532A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
