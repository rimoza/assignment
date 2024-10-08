import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Assignment',
  description: 'Assignment',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
