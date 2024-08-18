// Import Swiper React components
'use client'
import { ProjectType } from '@/types';
import { Close } from '@mui/icons-material';
import clsx from 'clsx';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { Keyboard, Pagination } from 'swiper/modules';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

// Import Swiper styles

export const MobileSlider = ({ items , fullWidth}: { items: ProjectType['desktopShots'], fullWidth?:boolean }) => {

    const [open, setOpen] = useState<boolean>(false)

    const [swiper, setSwiper] = useState<SwiperClass>()


    const breakpoints = (state: boolean) => ({
        0: {
            slidesPerView: state ? 2.25 : 2.25
        },
        500: {
            slidesPerView: state ? 3.2 : 2.75
        },
        1200: {
            slidesPerView: state ? 3.5 :  (fullWidth ? 6.5 : 4.5)
        }

    })

    useEffect(() => {
        if (open)
            swiper?.keyboard.enable()
        else
            swiper?.keyboard.disable()
    }, [open])

    return (
        <div className={clsx(open ? 'fixed top-0 w-full h-full z-[500] r right-0 flex flex-col justify-center items-center backdrop-brightness-50 backdrop-blur-md p-[5%]' : 'w-full h-full')}  >

            {open && <Close className='absolute left-8 top-8 text-gray-300 w-8 h-8 cursor-pointer hover:text-red-500' onClick={() => setOpen(false)} sx={{ width: 30, height: 30 }} />}

            <Swiper
                dir='ltr'
                spaceBetween={10}
                breakpoints={breakpoints(open)}
                // slidesPerView={open ? 3.5 : 2.5}
                style={{ paddingBottom: '40px' }}
                className={clsx('rounded  dark:bg-inherit cursor-pointer w-full', open ? 'aspect-square lg:aspect-video ' : ' lg: h-full ')}
                modules={[Pagination , Keyboard]}
                pagination={{ enabled: true, clickable: true }}
                onClick={(e) => { setOpen(true) }}
                onInit={(e) => setSwiper(e)}
            >
                {items?.map(item => <SwiperSlide onClick={() => setOpen(true)} key={item.img.src} className='bg-gray-100  rounded h- fit flex flex-col items-center justify-center h-3/4'>
                    <div className='w-full h-fit   '>
                        <Image src={item.img.src} fill sizes='100vh' alt={item.description} loading='lazy' className='rounded-xl overflow-hidden object-contain  aspect-video' />
                    </div>
                </SwiperSlide>)}
            </Swiper>

        </div>
    );
};