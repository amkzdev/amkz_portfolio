
import { Cover, Education, Projects, TechnicalSkills, WorkExperience } from '@components/homepage'
import { Metadata } from 'next'
import selfie from 'assets/logos/logoCircle.png'


export const metadata: Metadata = {
  title: 'Amir Mahdi Keshan Zare (AMKZ) Portfolio',
  description: 'This is Amir Mahdi Keshan Zare Offical Portfolio , I Am A Professional Full Stack Developer , Feel Free To Get In Touch With (amkz.dev@gmail.com)',
  authors: [{ name: 'Amir Mahdi Keshan Zare', url: 'amkz.dev@gmail.com' }],
  // openGraph: {
  //   type: 'profile',
  //   description: 'This is Amir Mahdi Keshan Zare Offical Portfolio , I Am A Professional Full Stack Developer , Feel Free To Get In Touch With (amkz.dev@gmail.com)',
  //   emails: ['amkz.dev@gmail.com'],
  //   firstName: 'Amir Mahdi',
  //   lastName: 'Keshan Zare',
  //   title: 'Amir Mahdi Keshan Zare (AMKZ) Portfolio',
  //   siteName: 'AMKZ Portfolio',
  //   images: [
  //     { url: selfie.src , type:'logo'}
  //   ],
    
  // },
  category:'Portfilo',
  creator:'Amir Mahdi Keshan zare',
  // metadataBase:{

  // }
  
}


export default function Home() {
  return (
    <div className='px-6 flex flex-col gap-8 py-8'>

      <Cover />
      <TechnicalSkills />
      <Projects />
      <WorkExperience/>
      <Education/>
    </div>
  )
}
