
import { HeroSection, Introduction, WorkExperience } from '@components/homepage'
import { Inter } from 'next/font/google'
// import styles from './page.module.css'


export const metadata = {
  title: 'Amir Mahdi Keshan Zare (AMKZ) Portfolio',
  description: 'This is Amir Mahdi Keshan Zare Offical Portfolio , I Am A Professional Front End Developer , Feel Free To Get In Touch With (amkz.dev@gmail.com)',
}


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* <HeroSection /> */}
      <Introduction />
      <Introduction />
      <Introduction />
      <Introduction />
      {/* <WorkExperience/> */}

    </div>
  )
}
