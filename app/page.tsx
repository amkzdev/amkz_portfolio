
import { HeroSection, Introduction } from '@components/homepage'
import { Inter } from 'next/font/google'
// import styles from './page.module.css'


export const metadata = {
  title: 'Amir Mahdi Keshan Zare',
  description: 'This is Amir Mahdi Keshan Zare Offical Portfolio',
}


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Introduction />
    </div>
  )
}
