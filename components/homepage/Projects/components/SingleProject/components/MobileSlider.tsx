// Import Swiper React components
'use client'
import { ProjectType } from '@/types';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

export const MobileSlider = ({ items }: { items: ProjectType['desktopShots'] }) => {
    return (
        <Swiper
            dir='ltr'
            spaceBetween={10}
            slidesPerView={2.5}
            style={{ padding: '4px' }}
            className='h-full rounded border border-gray-400 bg-gray-400 dark:bg-inherit '
        >
            {items?.map(item => <SwiperSlide key={item.img.src} className='bg-gray-200  rounded '>
                <div className='w-full h-fit'>
                    <Image src={item.img.src} fill alt={item.description} fetchPriority='high' className='rounded object-contain' />
                </div>
            </SwiperSlide>)}
        </Swiper>
    );
};