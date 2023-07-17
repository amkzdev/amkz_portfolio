'use client'
import React, { useEffect, useRef, useState } from 'react'
import lightLogo from 'assets/logos/yellow.png'
import Image from 'next/image'
import NextLink from 'next/link'
import { PhoneIcon } from '@heroicons/react/24/solid'
import { HamMenu } from './HamMenu'
import { menuItems } from '../data'
import { ContactMeButton } from '@/components/common'


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


    return <div className={'flex p-2 px-4 flex-row items-center  justify-between  top-0 transition-all  duration-300 fixed w-full max-w-[1366px] bg-content-black z-40 border-yellow-primary border-b '} >
        <div className='flex flex-row items-center gap-2 text-yellow-primary flex-1'>
            <div className='w-[35px] lg:w-[45px] aspect-square relative'>
                <Image alt='Amir Mahdi Keshan Zare Logo' src={lightLogo} fill />
            </div>
            <span className='text-lg font-semibold hidden lg:block'>Amir Mahdi Keshan Zare (AMKZ)</span>
            <span className='font-semibold text-sm block lg:hidden'>AMKZ Portfolio</span>
        </div>
        <div className='hidden lg:flex flex-row items-center justify-center gap-4 flex-1'>
            {menuItems.map((item, index) => <NextLink key={item.url} href={item.url} className='text-yellow-primary hover:text-primary-blue'>{item.name}</NextLink>)}
        </div>
        <HamMenu />
        {/* <button className='lg:hidden flex cursor-pointer'>
            <Bars3Icon className='w-8 h-8 text-yellow-primary' />

        </button> */}
        <div className='flex-1 flex flex-row justify-end fixed lg:static  left-1/2  bottom-4 -translate-x-1/2 lg:translate-x-0  lg:left-0'>


            <ContactMeButton />

            {/* <button className='bg-yellow-primary p-2 flex  flex-row  font-semibold rounded px-8 items-center gap-2'>
            <span>Contact Me</span>
            <PhoneIcon className='w-4 h-4'/>
        </button> */}
        </div>

    </div>
}
