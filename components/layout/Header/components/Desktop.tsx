'use client'
import React, { useEffect, useRef, useState } from 'react'
import darkLogo from 'assets/logos/yellow.png'
import lightLogo from 'assets/logos/blue.png'
import Image from 'next/image'
import NextLink from 'next/link'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { HamMenu } from './HamMenu'
import { menuItems } from '../data'
import { ContactMeButton } from '@/components/common'
import { ThemeChanger } from '@/components/common/ThemeChanger/ThemeChanger'


export const Desktop = () => {
    const [mode, setMode] = useState<'sticky' | 'normal' | undefined>()

    const headerRef = useRef<HTMLInputElement>()


    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });


    const isSticky = () => {
        const scrollTop = window.scrollY;
        scrollTop >= 10 ? setMode('sticky') : setMode('normal');
    };

    useEffect(() => isSticky(), [])


    return <div className={'flex p-2 px-4 flex-row items-center  justify-between  top-0 transition-all  duration-300 fixed w-full max-w-[1366px] bg-content-light dark:bg-content-dark z-40 border-light-primary dark:border-dark-primary border-b '} >
        <div className='flex flex-row items-center gap-2 text-light-primary dark:text-dark-primary flex-1'>
            <div className='w-[30px] lg:w-[40px] aspect-square relative'>
                <Image alt='Amir Mahdi Keshan Zare Logo' src={lightLogo} className=' dark:hidden' fill />
                <Image alt='Amir Mahdi Keshan Zare Logo' src={darkLogo} className='hidden dark:block' fill />
            </div>
            <span className='text-lg font-semibold hidden lg:block'>Amir Mahdi Keshan Zare (AMKZ)</span>
            <span className='text-base lg:text-sm font-bold block lg:hidden'>AMKZ Portfolio</span>
        </div>
        <div className='hidden lg:flex flex-row items-center justify-center gap-4 flex-1'>
            {menuItems.map((item, index) => <NextLink key={item.url} href={item.url} className='text-light-primary dark:text-dark-primary hover:text-primary-blue'>{item.name}</NextLink>)}
        </div>
        <div className='flex flex-row gap-4 items-center'>
            <div className='lg:hidden'><ThemeChanger /></div>
            <HamMenu />
        </div>
        {/* <button className='lg:hidden flex cursor-pointer'>
            <Bars3Icon className='w-8 h-8 text-light-primary dark:text-dark-primary' />

        </button> */}

        <div className='lg:flex flex-row gap-4 justify-end flex-1 hidden'>

            <div className='hidden lg:flex'> <ThemeChanger /></div>
            <div className=' flex flex-row gap</div>-2 justify-end fixed lg:static  left-1/2  bottom-4 -translate-x-1/2 lg:translate-x-0  lg:left-0'>

                <ContactMeButton />

                {/* <button className='bg-light-primary dark:bg-dark-primary p-2 flex  flex-row  font-semibold rounded px-8 items-center gap-2'>
            <span>Contact Me</span>
            <PhoneIcon className='w-4 h-4'/>
        </button> */}
            </div>
        </div>

    </div>
}
