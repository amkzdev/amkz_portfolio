// Import Swiper React components
'use client'
import { ProjectType } from '@/types';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

export const DesktopSlider = ({ items, fullWidth }: { items: ProjectType['desktopShots'], fullWidth: boolean }) => {
    return (
        <Swiper
            breakpoints={{
                300: {
                    spaceBetween: 10,
                    slidesPerView: 1.5
                },
                1080: {
                    spaceBetween: 10,
                    slidesPerView: fullWidth ? 3.5 : 2.5
                }
            }}
            style={{ padding: '4px' }}
            className='h-full rounded border border-gray-400 bg-gray-400 dark:bg-inherit '
            // keyboard={{enabled:true , onlyInViewport:true }}
        

        >
            {items?.map(item => <SwiperSlide key={item.img.src} className='bg-gray-200 rounded '>
                <div className='w-full h-full '>
                    <Image src={item.img} fill alt={item.description} className='rounded object-scale-down lg:object-contain' />
                </div>
            </SwiperSlide>)}
        </Swiper>
    );
};