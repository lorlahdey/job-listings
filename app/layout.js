import { League_Spartan } from 'next/font/google'
import './globals.css'

const league_spartan = League_Spartan({
    // weight: ['500', '700'],
    subsets: ['latin'],
    display: 'swap',
})


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={league_spartan.className}>{children}</body>
    </html>
  )
}
