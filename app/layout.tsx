
import { Container, Header } from '@components/layout'
import './globals.css'
import { Montserrat } from './fonts'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-frame-black'>
      <body className={'bg-content-black m-0 p-0 container max-w-[1366px] mx-auto text-[12px] lg:text-[14px] '.concat(Montserrat.className)}>
        <Header />
        {children}
      </body>
    </html>
  )
}
