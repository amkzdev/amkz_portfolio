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
            slidesPerView: state ? 1.5 : fullWidth ? 3.5 : 2.75
        }

    })



    useEffect(() => {
        if (open) {
            swiper?.keyboard.enable()
            updateBreakPoint(true)
        }
        else {
            swiper?.keyboard.disable()
            updateBreakPoint(false)
            //     swiper.
            //     // swiper.({

            //     //     300: {
            //     //         spaceBetween: 10,
            //     //         slidesPerView: 1.5
            //     //     },
            //     //     1080: {
            //     //         spaceBetween: 10,
            //     //         slidesPerView: fullWidth ? 3.5 : 2.5
            //     //     }

            //     // })
        }
    }, [open , swiper])

    useEffect(() => {
        updateBreakPoint(false)
    }, [swiper])

    const updateBreakPoint = (state:boolean) => {
        if (swiper) {
            swiper.params.breakpoints = breakpoints(state)
            // swiper.params.slidesPerView = state ? 1.5 :2.5

            swiper?.update()
        }
    }


    return (

        <div className={clsx(open ? 'fixed top-0 w-full h-full z-[500] r right-0 flex flex-col justify-center items-center backdrop-brightness-50 backdrop-blur-md p-[5%]' : 'w-full h-full')}  >

            {open && <Close className='absolute left-8 top-8 text-gray-300 w-8 h-8 cursor-pointer hover:text-red-500' onClick={() => setOpen(false)} sx={{ width: 30, height: 30 }} />}

            <Swiper
                // slidesPerGroup={2}
                // breakpoints={breakpoints(open)}
                style={{ paddingBottom: '40px' }}
                className={clsx('rounded  dark:bg-inherit cursor-pointer w-full', open ? 'aspec t-square lg:aspec t-video h-[30vh]  lg:h-[40vh]' : ' lg: h-full ')}
                modules={[Pagination, Keyboard]}
                pagination={{ enabled: true, clickable: true }}
                onClick={(e) => { setOpen(true) }}
                onInit={(e) => setSwiper(e)}
            >
                {items?.map(item => <SwiperSlide key={item.img.src} className='lg: bg-gray-200 rounded lg:border border-gray-200 '>
                    <div className='w-full h-full'>
                        <Image  src={item.img} sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw' loading='lazy' fill alt={item.description} className='rounded object-scale-down lg:object-contain ' />
                    </div>
                </SwiperSlide>)}
            </Swiper>


        </div>
    );
};