import React from 'react'
import { SectionHeader } from '@/components/common'
import { SingleProject } from './components/SingleProject/SingleProject'
import { projects } from './data'

export const Projects = () => {
    return (
        <div className='flex flex-col gap-4' id='projects'>

            <SectionHeader title='Featured Projects' />

            <div className='flex flex-col gap-4 w-full'>

                {projects.map(project => <SingleProject {...project} />)}

            </div>

        </div>
    )
}
