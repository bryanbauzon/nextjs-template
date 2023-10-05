import './globals.css'
import { Inter } from 'next/font/google'
import { WEBSITE_NAME,WEBSITE_DESCRIPTION } from './constants/string'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: WEBSITE_NAME,
  description: WEBSITE_DESCRIPTION,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
