import './globals.css'

export const metadata = {
  title: 'First Quantum Computing Hackathon - Pakistan',
  description: 'Join Pakistan\'s first quantum computing hackathon at National Center for Physics, Islamabad. February 6-8, 2026.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}