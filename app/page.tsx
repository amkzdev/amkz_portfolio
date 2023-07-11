
import { Cover, TechnicalSkills } from '@components/homepage'


export const metadata = {
  title: 'Amir Mahdi Keshan Zare (AMKZ) Portfolio',
  description: 'This is Amir Mahdi Keshan Zare Offical Portfolio , I Am A Professional Front End Developer , Feel Free To Get In Touch With (amkz.dev@gmail.com)',
}


export default function Home() {
  return (
    <div className='px-6 flex flex-col gap-8 py-8'>

      <Cover />
      <TechnicalSkills/>
      {/* <HeroSection /> */}
      {/* <Introduction />
      

      <Introduction />
      <Introduction />
      <Introduction /> */}
      {/* <WorkExperience/> */}

    </div>
  )
}
