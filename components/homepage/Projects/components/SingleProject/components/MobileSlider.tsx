// Import Swiper React components
'use client'
import { ProjectType } from '@/types';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

export const MobileSlider = ({ items }: { items: ProjectType['desktopShots'] }) => {
    return (
        <Swiper
            dir='ltr'
            spaceBetween={10}
            slidesPerView={2.5}
            style={{paddingBottom:'40px' }}
            className='h-full rounded  dark:bg-inherit '
            modules={[Pagination]}
            pagination={{enabled:true , clickable:true}}
        >
            {items?.map(item => <SwiperSlide key={item.img.src} className='bg-gray-200  rounded '>
                <div className='w-full h-fit'>
                    <Image src={item.img.src} fill alt={item.description} fetchPriority='high' className='rounded object-contain' />
                </div>
            </SwiperSlide>)}
        </Swiper>
    );
};