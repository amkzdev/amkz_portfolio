
import { Container, Header } from '@components/layout'
import './globals.css'
import { Montserrat } from './fonts'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Script from 'next/script';
import { ClientLayout } from './ClientLayout';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-frame-light dark:bg-frame-dark'>
      <ClientLayout>

        <body className={'bg-content-light dark:bg-content-dark m-0 p-0 container max-w-[1366px] mx-auto text-[12px] lg:text-[14px] mt-[40px]  lg:mt-[60px] '.concat(Montserrat.className)}>

          <Header />
          {children}
          {/* <Script
            async
            strategy="lazyOnload"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />

          <Script strategy="lazyOnload">
            {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                      page_path: window.location.pathname,
                    });
                    `}
          </Script> */}
        </body>

      </ClientLayout>
    </html>
  )
}
