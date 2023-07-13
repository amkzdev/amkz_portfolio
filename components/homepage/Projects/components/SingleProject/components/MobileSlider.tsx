// Import Swiper React components
'use client'
import { ProjectType } from '@/types';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

export const MobileSlider = ({ items }: { items: ProjectType['desktopShots'] }) => {
    return (
        <Swiper
            breakpoints={{
                300: {
                    spaceBetween:10,
                    slidesPerView:2
                } ,
                1080:{
                    spaceBetween:10,
                    slidesPerView:2
                }
            }}
            className='h-full'
        >
            {items?.map(item => <SwiperSlide  key={item.img.src} className='bg-gray-100 rounded'>
                <div className='w-fit h-fit'>
                    <Image src={item.img.src} fill alt={item.description} className='rounded object-contain' />
                </div>
            </SwiperSlide>)}
        </Swiper>
    );
};