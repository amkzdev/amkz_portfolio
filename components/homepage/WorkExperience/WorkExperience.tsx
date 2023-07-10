import React from 'react'
import { ExperienceItem } from './components/ExperienceItem'

export const WorkExperience = () => {
    // console.log('Experince in Server / Client')
    return (
        <div className='bg-neutral-950 p-4 text-center'>
            <span className='  text-2xl text-gray-100'>Work Experience</span>

            <ExperienceItem  />
            <ExperienceItem  />
        </div>
    )
}
