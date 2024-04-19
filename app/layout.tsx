import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Vercel Analytics
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Skailar | Cheats Reinvented',
  description: 'Discover cutting-edge cheats and enhancements for an unparalleled gaming experience with Skailar.',
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  keywords: "Skailar, Cheats, Gaming, Reinvented, Game Enhancements",
  authors: [
    {
      name: 'amtriix',
      url: 'https://skailar.com',
    },
  ],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://embed.sellpass.io/embed.js"></script>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
