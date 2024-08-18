'use client'
import { PhoneIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Image, { StaticImageData } from 'next/image'
import React, { useState } from 'react'
import { createPortal } from 'react-dom'

import linkedin from 'assets/images/linkedin.png'
import telegram from 'assets/images/telegram.png'
import whatsapp from 'assets/images/whatsapp.webp'
import phone from 'assets/images/socialMedias/phone.png'
import gmail from 'assets/images/gmail.png'
import github from 'assets/images/github.svg'
import ClickAwayListener from 'react-click-away-listener'


const ContactInfo = ({ icon, title, link }: { icon: StaticImageData, title: string, link: string }) => {
    return <a href={link} target='_blank' className='flex flex-row items-center gap-4 p-4 text-black justify-start hover:bg-gray-50 cursor-pointer'>
        <div className='w-6 aspect-square relative' >
            <Image src={icon.src} fill alt={title} className='object-contain' />
        </div>
        <span className='font-semibold'>{title}</span>
    </a>
}
export const ContactMeButton = () => {

    const [open, setOpen] = useState(false)

    if (typeof document != 'undefined')

        return (

            <>

                <button className='bg-light-primary dark:bg-dark-primary p-2 flex  flex-row dark:text-black text-white font-semibold rounded px-8 items-center gap-2 text-base lg:text-sm' onClick={() => setOpen(!open)}>
                    <span>Contact Me</span>
                    <PhoneIcon className='w-4 h-4' />
                </button>

                {createPortal(
                    <ClickAwayListener onClickAway={() => setOpen(false)}>
                        <div className={`fixed whitespace-nowrap flex left-1/2 -translate-x-1/2 flex-col z-20  p-2 bg-white rounded-lg transition-all duration-300 shadow-2xl   ${open ? ' top-1/2 -translate-y-1/2' : ' top-full '}`}>
                            <div className='flex flex-row items-center justify-between mb-1'>
                                <div></div>
                                <span className='font-bold text-sm text-black'>Contact Me</span>

                                <div className='rounded-[50%]  aspect-square hover:bg-gray-50 cursor-pointer p-1 box-border'>


                                    <XMarkIcon className='w-6' onClick={() => setOpen(false)} />
                                </div>



                            </div>

                            <ContactInfo title='Call (+98 937 431 7810)' icon={phone} link='tel:+989374317810' />
                            <ContactInfo title='Send Message In Telegram (@amkzdev)' icon={telegram} link='https://www.t.me/amkzdev' />
                            <ContactInfo title='Send Message In WhatsApp ' icon={whatsapp} link='https://wa.me/+989374317810' />
                            <ContactInfo title='View Linkedin Profile' icon={linkedin} link='https://www.linkedin.com/in/amkzdev' />
                            <ContactInfo title='Send Email' icon={gmail} link='mailto:amkz.dev@gmail' />



                        </div>
                    </ClickAwayListener>
                    , document.body)}
            </>
        )

    return <button className='bg-light-primary dark:bg-dark-primary p-2 flex  flex-row  font-semibold rounded px-8 items-center gap-2' onClick={() => setOpen(!open)}>
        <span>Contact Me</span>
        <PhoneIcon className='w-4 h-4' />
    </button>
}
