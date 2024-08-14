import React from 'react'

export const SectionHeader = ({title}:{title:string}) => {
  return (
    <div className='flex flex-row items-center gap-5 w-full'>
        <div className='bg-gray-500 flex-1 h-[1px]'></div>
        <span className='text-black dark:text-gray-300 text-lg'>{title}</span>
        <div className='bg-gray-500 flex-1 h-[1px]'></div>
    </div>
  )
}
