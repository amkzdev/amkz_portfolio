import React from 'react'
import { SingleWorkExperince } from './components/SingleWorkExperince/SingleWorkExperince'
import { SectionHeader } from '@/components/common'
import { workExperiences } from './data'

export const WorkExperience = () => {
    // console.log('Experince in Server / Client')
    return (
        <div className=' flex flex-col gap-4' id='workexperince'>
            <SectionHeader title='Work Experience' />

            <div className='flex flex-col gap-4 lg:gap-6 [&>*:first-child]:border-none [&>*]:border-t lg:[&>*:not(:first-child)]:pt-6 [&>*:not(:first-child)]:pt-4  [&>*]:border-gray-600  w-full'>

                {workExperiences.map(item => <SingleWorkExperince {...item} />)}

            </div>


        </div>
    )
}
