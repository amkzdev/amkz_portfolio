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


const SunIcon = (props:React.SVGProps<SVGSVGElement>) =><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  {...props} >
<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
</svg>

const MoonIcon = (props:React.SVGProps<SVGSVGElement>) =><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  {...props}>
<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
</svg>

export const ThemeChanger = () => {

    const { theme, setTheme } = useTheme()

    return (

        <div className=' flex flex-row gap-1  border border-gray-200 dark:border-gray-500 rounded-3xl scale-90 lg:scale-100'>
            <button onClick={()=>setTheme('light')} className={clsx('p-2 outline-none rounded-3xl ' ,  theme=='light' && 'bg-[#ff6b01] text-white')}><SunIcon className={clsx(' w-5 h-5' , )} /></button>
            <button onClick={()=>setTheme('dark')} className={clsx('p-2 outline-none rounded-3xl ' ,  theme=='dark' && ' bg-white text-black')}><MoonIcon className='  w-5 h-5'/></button>
        </div>
    )
}
