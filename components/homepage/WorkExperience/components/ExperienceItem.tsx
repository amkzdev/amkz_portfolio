'use client'
import { WorkExperinceType } from '@/types'
import { CalendarMonth, Factory, Info, EmojiEvents, Adb } from '@mui/icons-material'
import { createClass } from '@utils'
import React from 'react'


const classes = {
  container: createClass(['flex', 'flex-row', 'items-start', 'gap-2', 'lg:gap-4', 'rounded', 'bg-black', 'p-4', 'm-4', 'flex-wrap']),
  logo: createClass(['h-auto', 'max-w-full']),
  logoRow: createClass(['basis-1/12']),
  contentRow: createClass(['basis-10/12', 'flex', 'flex-col', 'items-start', 'w-full']),
  section: createClass(['col-span-3', 'lg:col-span-1', 'flex', 'flex-col', 'col-span-1', 'items-start', 'w-full', 'border-gray-700', 'border-[1px]', 'p-2', 'rounded']),
  sectionTitle: createClass(['text-gray-300', 'text-lg'])
}


export const ExperienceItem = () => {

  const temp: WorkExperinceType = {
    companyName: 'Tadbir Pardaz IT Group',
    position: 'Front End Developer',
    acheivements: ['sdfdsf', 'dsfsdfsd'],
    companyOverview: ['Lorem Ipson', 'oversvi'],
    duration: '1 Y , 6 Months',
    end_date: 'Mar 2023',
    industry: 'Stock And Financial Services',
    logo: 'data:image/png;base64,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',
    start_date: 'Oct 2021'
  }

  const { logo, companyName, position, start_date, end_date, duration, industry, companyOverview } = temp

  return (
    <div className={classes.container}>
      <div className={classes.logoRow}>
        <img className={classes.logo} src={logo} />
      </div>

      <div className={classes.contentRow}>
        <span className='text-2xl text-gray-100 font-bold leading-8'>{position}</span>
        <span className='text-lg text-gray-300 leading-10'>{companyName}</span>


        <div className='flex items-center justify-between w-3/4'>

          <div className='flex items-center flex-row my-1'>
            <CalendarMonth sx={{ color: 'GrayText', mr: 1 }} />
            <span className='text-base text-gray-400 leading-6'>{start_date}&nbsp;-&nbsp;</span>
            <span className='text-base text-gray-400 leading-6'>{end_date}</span>
            <span className='text-base text-gray-400 font-500'>&nbsp;({duration})</span>
          </div>

          <div className='flex flex-row items-center my-1'>
            <Factory sx={{ color: 'GrayText', mr: 1 }} />
            <span className='text-base text-gray-400 font-400'>{industry}</span>
          </div>

        </div>



      </div>

      <div className='grid grid-cols-3 gap-4 w-full'>


        <div className={classes.section}>
          <div className='flex flex-row items-center '>
            <Info color='primary' sx={{ mr: 1 }} />
            <span className={classes.sectionTitle} >About Company</span>
          </div>
          <div className='bg-gray-700 w-full h-[1px] my-2'></div>
          {companyOverview?.map(item => <p className='text-gray-400' style={{ listStyle: 'inside' }}>•&nbsp;{item}</p>)}

        </div>



        <div className={classes.section}>
          <div className='flex flex-row items-center'>
            <EmojiEvents color='success' sx={{ mr: 1 }} />
            <span className={classes.sectionTitle} >Achievements</span>
          </div>
          <div className='bg-gray-700 w-full h-[1px] my-2'></div>


        </div>

        <div className={classes.section}>
          <div className='flex flex-row items-center'>
            <Adb color='warning' sx={{ mr: 1 }} />
            <span className={classes.sectionTitle} >Challanges</span>
          </div>
          <div className='bg-gray-700 w-full h-[1px] my-2'></div>

        </div>


      </div>


    </div>
  )
}
