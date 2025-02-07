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
import ws from '@assets/images/techs/websocket.png'
import zs from '@assets/images/techs/zustand.svg'

export const TechnicalSkills = () => {
  return (
    <div className='flex flex-col items-center gap-4 '>
        <SectionHeader title='Technical Skills' />
        <div className='grid grid-cols-2 lg:grid-cols-10 gap-6 justify-evenly items-center flex-wrap w-full lg:p-4' id='skills'>

            <SkillItem image={react} title='React JS' />
            <SkillItem image={next} title='Next JS' />
            <SkillItem image={ts} title='Typescript' />
            <SkillItem image={ws} title='Web Socket' />
            <SkillItem image={js} title='JavaScript' />
            <SkillItem image={rq} title='React Query' />
            <SkillItem image={tailwind} title='Tailwindcss' />
            <SkillItem image={zs} title='Zustand' />
            <SkillItem image={mui} title='Material UI' />
            <SkillItem image={node} title='Node JS' />
            {/* <SkillItem image={nestjs} title='Nest JS' /> */}

        </div>

        
    </div>
  )
}
