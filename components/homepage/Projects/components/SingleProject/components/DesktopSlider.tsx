// Import Swiper React components
'use client'
import { ProjectType } from '@/types';
import Image from 'next/image';
import { Swiper, SwiperClass, SwiperRef, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import { Close } from '@mui/icons-material';
// import Swiper from 'swiper';
// Import Swiper styles

export const DesktopSlider = ({ items, fullWidth }: { items: ProjectType['desktopShots'], fullWidth: boolean }) => {

    const [open, setOpen] = useState<boolean>(false)

    const [swiper, setSwiper] = useState<SwiperClass>()

    const breakpoints = (state: boolean) => ({

        300: {
            spaceBetween: 10,
            slidesPerView: 1.5
        },
        1080: {
            spaceBetween: 10,
            slidesPerView: fullWidth ? 3.5 : 2.5
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
                slidesPerGroup={2}
                breakpoints={breakpoints(open)}
                style={{ paddingBottom: '40px' }}
                className={clsx('rounded  dark:bg-inherit cursor-pointer w-full', open ? 'aspect-square lg:aspect-video ' : ' lg: h-full ')}
                modules={[Pagination, Keyboard]}
                pagination={{ enabled: true, clickable: true }}
                onClick={(e) => { setOpen(true) }}
                onInit={(e) => setSwiper(e)}
            >
                {items?.map(item => <SwiperSlide key={item.img.src} className='bg-gray-200 rounded border border-gray-200 '>
                    <div className='w-full h-full '>
                        <Image src={item.img} sizes='100vh' loading='lazy' fill alt={item.description} className='rounded object-scale-down lg:object-contain' />
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
};