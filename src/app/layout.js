import { Inter } from 'next/font/google'
import './globals.css'
import TopHeader from '@/components/TopHeader'
import MainHeader from '@/components/MainHeader'
import NavHeader from '@/components/NavHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | BHMath',
    default: 'BHMath - Ressources Mathématiques',
  },
  description: 'Plateforme éducative pour l\'apprentissage des mathématiques au Maroc',
  keywords: ['mathématiques', 'éducation', 'Maroc', 'cours', 'exercices', 'collège', 'lycée'],
  authors: [{ name: 'BHMath' }],
  creator: 'BHMath',
  publisher: 'BHMath',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://bhmath.com'),
  openGraph: {
    title: 'BHMath - Ressources Mathématiques',
    description: 'Plateforme éducative pour l\'apprentissage des mathématiques au Maroc',
    url: 'https://bhmath.com',
    siteName: 'BHMath',
    locale: 'fr_FR',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#f97316',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.className}>
      <body>
      <TopHeader />
      <MainHeader />
      <NavHeader />
        {children}
      </body>
    </html>
  )
} 