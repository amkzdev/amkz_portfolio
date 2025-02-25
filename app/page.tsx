
import { Cover } from '@components/homepage'
import { Metadata } from 'next'
import selfie from 'assets/images/selfie/new.jpg'
import dynamic from 'next/dynamic'


export const metadata: Metadata = {
  metadataBase: new URL('https://amkz.dev'),
  title: 'Amir Mahdi Keshan Zare (AMKZ) Portfolio',
  description: 'This is Amir Mahdi Keshan Zare Offical Portfolio ,I Am  A  Professional Front End Developer With 4 Years Of Experience , Feel Free To Get In Touch With (amkz.dev@gmail.com)',
  authors: [{ name: 'Amir Mahdi Keshan Zare', url: 'amkz.dev@gmail.com' }],
  openGraph: {
    type: 'profile',
    description: 'This is Amir Mahdi Keshan Zare Offical Portfolio ,I Am  A  Professional Front End Developer With 4 Years Of Experience , Feel Free To Get In Touch With (amkz.dev@gmail.com)',
    emails: ['amkz.dev@gmail.com'],
    firstName: 'Amir Mahdi',
    lastName: 'Keshan Zare',
    title: 'Amir Mahdi Keshan Zare (AMKZ) Portfolio',
    siteName: 'AMKZ Portfolio',
    images: [
      { url: './new.jpg', type: 'avatar' }
    ],

  },

  category: 'Portfilo',
  creator: 'Amir Mahdi Keshan zare',
  // robots:{}
  
  // metadataBase:{

  // }

}

const TechnicalSkills = dynamic(() => import('../components/homepage/TechnicalSkills/TechnicalSkills'))
const Projects = dynamic(() => import('../components/homepage/Projects/Projects')) 
const WorkExperience = dynamic(() => import('../components/homepage/WorkExperience/WorkExperience'))
const Education = dynamic(() => import('../components/homepage/Education/Education'))


export default function Home() {


  return (
    <div className='px-6 flex flex-col gap-8 py-8'>

      <Cover />
      <TechnicalSkills />
      <Projects />
      <WorkExperience />
      <Education />
    </div>
  )
}
