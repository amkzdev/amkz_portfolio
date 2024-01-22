import React from 'react'

import { SectionHeader } from 'components/common'
import { SkillItem } from './components/SkillItem'
import react from '@assets/images/techs/react.png'
import next from '@assets/images/techs/next.svg'
import ts from '@assets/images/techs/ts.png'
import js from '@assets/images/techs/js.png'
import tailwind from '@assets/images/techs/tailwind.png'
import mui from '@assets/images/techs/mui.png'
import node from '@assets/images/techs/node.png'
import rq from '@assets/images/techs/reactquery.png'

export const TechnicalSkills = () => {
  return (
    <div className='flex flex-col items-center gap-4 '>
        <SectionHeader title='Technical Skills' />
        <div className='flex flex-row gap-4 justify-evenly items-center flex-wrap w-full p-4' id='skills'>

            <SkillItem image={react} title='React JS' />
            <SkillItem image={next} title='Next JS' />
            <SkillItem image={ts} title='Typescript' />
            <SkillItem image={js} title='JavaScript' />
            <SkillItem image={rq} title='React Query' />
            <SkillItem image={tailwind} title='Tailwindcss' />
            <SkillItem image={mui} title='Material UI' />
            <SkillItem image={node} title='Node JS (Intro)' />
            {/* <SkillItem image={nestjs} title='Nest JS' /> */}

        </div>

        
    </div>
  )
}
