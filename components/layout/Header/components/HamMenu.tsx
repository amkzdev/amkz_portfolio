'use client'
import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { menuItems } from '../data'
import Link from 'next/link'
import ClickAwayListener from 'react-click-away-listener';

export const HamMenu = () => {

    const [state, setState] = useState(false)

    return (
        <ClickAwayListener onClickAway={() => setState(false)}>

            <div className='flex flex-row relative'>

                <button className='lg:hidden flex cursor-pointer relative' onClick={() => setState(!state)}>
                    <Bars3Icon className='w-8 h-8 text-light-primary dark:text-dark-primary' />
                </button>

                <div className={`flex flex-col lg:hidden gap-2  h-screen transition-all pt-2 min-w-[150px] duration-300 absolute top-full mt-2 -right-4 bg-content-light dark:bg-content-dark ${!state ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-1'}`}>
                    {menuItems.map((item, index) => <Link onClick={() => setState(false)} key={item.url} href={item.url} className='text-light-primary dark:text-dark-primary text-sm px-4 py-2  whitespace-nowrap flex flex-row gap-4 items-center'>
                        <span> <item.icon className='w-6 h-6' /></span>
                        <span>{item.name}</span>
                    </Link>)}
                </div>
            </div>
        </ClickAwayListener>
    )
}
