import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'WK-Hub — The Business System That Works When The Internet Doesn\'t',
  description: 'Offline-first POS and business system built for Egyptian retail. Multi-branch control, Arabic-native, EGP-ready. Inventory, accounting, and HR in one platform.',
  keywords: 'POS system Egypt, Egyptian retail, multi-branch POS, offline POS, ETA e-invoicing, Arabic POS, EGP, retail management Egypt, inventory management Egypt',
  openGraph: {
    title: 'WK-Hub — Offline-First POS for Egyptian Retail',
    description: 'Your branches keep selling. Even when the internet doesn\'t. Multi-branch control, Arabic-native, EGP-ready.',
    images: ['/og-image.png'],
    locale: 'en_EG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WK-Hub — Offline-First POS for Egyptian Retail',
    description: 'Your branches keep selling. Even when the internet doesn\'t.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} bg-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
