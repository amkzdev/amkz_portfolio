'use client'


import clsx from 'clsx'
import { useTheme } from 'next-themes'
import React from 'react'


// const ThemeButton = ({ isSelected, onClick, title, icon: Icon }: { isSelected: boolean, onClick: Function, icon: IconType, title: string }) => {

//     return <button onClick={() => onClick()} className={clsx([
//         'rounded-xl px-4 py-2.5 flex flex-row gap-4 items-center justify-center duration-300 transition-all',
//         isSelected ? 'bg-primary' : ''
//     ])}>
//         {isSelected && <span>{title}</span>}
//         <Icon className='w-6 h-6' />
//     </button>
// }


export const ThemeChanger = () => {

    const { theme, setTheme } = useTheme()

    return (

        <div className=' flex flex-row gap-2 rounded-xl'>
            <button onClick={()=>setTheme('light')} className={clsx('p-2 outline-none rounded-lg' ,  theme=='light' && 'border')}>Light</button>
            <button onClick={()=>setTheme('dark')} className={clsx('p-2 outline-none rounded-lg' ,  theme=='dark' && 'border')}>Dark</button>
        </div>
    )
}
