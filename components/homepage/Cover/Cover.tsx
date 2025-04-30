import React from 'react'
import linkedin from 'assets/images/linkedin.png'
import telegram from 'assets/images/telegram.png'
import whatsapp from 'assets/images/whatsapp.webp'
import gmail from 'assets/images/gmail.png'
import github from 'assets/images/github.svg'
import selfie from 'assets/images/selfie/new.jpg'
import phone from 'assets/images/socialMedias/phone.png'
import Link from 'next/link'
import Image from 'next/image'



const SocialMedia = ({ link, icon, title }: { link: string, icon: typeof github, title: string }) => <Link target='_blank' href={link} className='w-8 lg:w-6 relative aspect-square'>
    <Image src={icon} fill alt={title} className='object-contain' />
</Link>

const TopItem = ({ icon: Icon, text, number }: { icon: any, text: string, number: number | string }) => {
    return <div className='border rounded-xl border-blue-1 dark:border-gray-400 text-blue-2 dark:text-gray-300 flex flex-row gap-2 justify-center items-center p-2 text-center'>
        {/* <Icon /> */}
        <div className='flex flex-row gap-2 items-center'>
            <span className='text-xl lg:text-2xl text-light-primary dark:text-dark-primary '>+{number}</span>
            <span className='text-base' >{text}</span>
        </div>

    </div>
}

export const Cover = () => {
    return (
        <div className='flex lg:flex-row flex-col justify-between items-center  gap-4'>

            <div className='flex flex-col justify-between gap-4 lg:gap-6 order-2 lg:order-1'>


                <div className='flex flex-col gap-4 items-center lg:items-start justify-between'>

                    <div className='flex flex-col gap-2 lg:gap-4'>

                        <div className='text-light-primary dark:text-dark-primary flex flex-row gap-2  items-center justify-center lg:justify-start lg:items-end'>
                            <span className='text-xl lg:text-3xl whitespace-nowrap font-semibold'>Amir Mahdi Keshan Zare</span>
                            <i className='text-sm lg:text-lg text-blue-1 dark:text-gray-400 '>(AMKZ)</i>
                        </div>

                        <span className='text-blue-2 dark:text-gray-200 text-lg lg:text-2xl text-center lg:text-left font-semibold'>Front End Developer</span>
                    </div>


                    <div className='flex flex-col lg:flex-row gap-2 items-stretch  rounded w-full lg:w-fit'>
                        <TopItem icon={() => { }} text='Years Of Experience' number={4} />
                        <TopItem icon={() => { }} text='Projects' number={15} />
                        <TopItem icon={() => { }} text='Contributes' number={'10K'} />
                        {/* <div>+3 Years Of Experience</div>
                        <div>+10 Projects</div>
                        <div>+10K Contributes</div> */}
                    </div>

                </div>

                <p className='text-blue-1 dark:text-gray-300 text-sm leading-6 text-center lg:text-left'>
                    Experienced  Front End Developer with a  demonstrated history of working in the information technology and services industry. Skilled in React, Next , Tailwindcss , Material UI , HTML, JavaScript, TypeScript, CSS, SASS, LESS, and JQuery.
                    I have an eye on design and make creative user interfaces.
                </p>

                <div className='flex flex-row items-center gap-6 justify-center lg:justify-start'>
                    <SocialMedia icon={phone} link='tel:+989374317810' title='amirmahdi-keshanzare-github' />
                    <SocialMedia icon={telegram} link='https://www.t.me/amkzdev' title='amirmahdi-keshanzare-telegram' />
                    <SocialMedia icon={whatsapp} link='https://wa.me/+989374317810' title='amirmahdi-keshanzare-whatapp' />
                    <SocialMedia icon={gmail} link='mailto:amkz.dev@gmail' title='amirmahdi-keshanzare-gmail' />
                    <SocialMedia icon={linkedin} link='https://www.linkedin.com/in/amkzdev/' title='amirmahdi-keshanzare-linkedin' />
                    <SocialMedia icon={github} link='https://www.github.com/amkzdev' title='amirmahdi-keshanzare-github' />
                    {/* <Link href={'https://www.linkedin.com/in/amkzdev/'} className='w-8 relative aspect-square'>
                        <Image src={linkedin} fill alt='amkz-linkedin' />
                    </Link> */}

                    {/* {[linkedin , github , telegram, whatsapp, gmail].map(item => <Link></Link>)} */}


                </div>

            </div>
            <div className='lg:w-[230px] w-[180px] aspect-square relative rounded-lg overflow-hidden shrink-0 order-1 lg:order-2'>

                <Image src={selfie} alt='amir-mahdi-keshan-zare (amkz)' className='object-cover' fill />
            </div>

        </div>
    )
}
