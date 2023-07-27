import React from 'react'
import { SectionHeader } from '@/components/common'
import { SingleProject } from './components/SingleProject/SingleProject'
import { projects } from './data'

export const Projects = () => {
    return (
        <div className='flex flex-col gap-4' >

            <SectionHeader title='Featured Projects' />

            <div className='flex flex-col gap-4 lg:gap-6 [&>*:first-child]:border-none [&>*]:border-t lg:[&>*:not(:first-child)]:pt-6 [&>*:not(:first-child)]:pt-4  [&>*]:border-gray-600  w-full' id='projects'>

                {projects.map(project => <SingleProject {...project} />)}

            </div>

        </div>
    )
}
