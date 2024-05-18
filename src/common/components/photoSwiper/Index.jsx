import React, { useEffect } from 'react'
import indexStyle from './index.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function Index({ photos }) {

    useEffect(() => {
        console.log(photos);
    }, [photos])

  return (
    <div className={indexStyle['container']}>
        <Swiper
            slidesPerView={1} 
            grabCursor={true}
            pagination={{dynamicBullets: true,}} 
            modules={[Pagination]}
        >
            {
                photos.map((photo, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img 
                                className={indexStyle['photo']} 
                                src={photo} 
                                alt="post-photo" 
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
  )
}
