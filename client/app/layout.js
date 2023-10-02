import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import './globals.css'
import 'animate.css'
import localFont from 'next/font/local'

const railway = localFont({
  src: './railway.ttf',
  variable: '--font-railway',
})

export const metadata = {
  title: 'StreemHub.ai',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={railway.variable}>
      <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      <body>
        {children}
        <ToastContainer limit={2} />
      </body>
    </html>
  )
}
