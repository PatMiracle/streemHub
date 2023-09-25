import './globals.css'

export const metadata = {
  title: 'STREEMHUB',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body>{children}</body>
    </html>
  )
}
