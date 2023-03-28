
import { Container } from '@/components/layout'
import './globals.css'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-zinc-900 m-0 p-0'>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  )
}
