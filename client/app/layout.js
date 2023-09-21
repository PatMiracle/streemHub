import './globals.css'
import { Railway } from 'next/font/google'

const railway = Railway({
  subsets: ['latin'],
  variable: '--font-railway',
})

export const metadata = {
  title: 'STREEMHUB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={railway.variable}>
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body>{children}</body>
    </html>
  )
}
