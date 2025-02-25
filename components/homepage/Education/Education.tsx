import { SectionHeader } from '@/components/common'
import React from 'react'
import { SingleEducation } from './SingleEducation/SingleEducation'
import { educations } from './data'

export default function Education ()  {
    return (
        <div className=' flex flex-col gap-4' id='education'>
            <SectionHeader title='Education' />

            <div className='flex flex-col gap-4 lg:gap-6 [&>*:first-child]:border-none [&>*]:border-t lg:[&>*:not(:first-child)]:pt-6 [&>*:not(:first-child)]:pt-4  [&>*]:border-gray-600  w-full'>

                {educations.map(item => <SingleEducation {...item} />)}

            </div>


        </div>
    )
}
