import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

interface Props{
    slides: any[];
    component: any;
}

function Slider({slides, component: Component}: Props) {
    return (
        <Swiper
        className='swiper'
        spaceBetween={50}
        slidesPerView={5}
        loop
        centeredSlides
      >
          {slides.map((slide: any, index: number) => {
              return  <SwiperSlide key = {index}>
                  <Component {...slide} />
              </SwiperSlide>
          })}
       
       
        ...
      </Swiper>
    )
}

export default Slider
