import React, { memo } from "react";
import { v4 as uuidv4 } from "uuid";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

interface Props {
  slides: any[];
  component: any;
  show: boolean;
}

function Slider({ slides, component: Component, show }: Props) {
  return (
    <Swiper
      slideToClickedSlide
      className={` swiper`}
      spaceBetween={20}
      slidesPerView={5}
      loop
      centeredSlides
    >
      {slides.map((slide: any, index: number) => {
        return (
          <SwiperSlide key={uuidv4()}>
            <Component {...slide} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default memo(Slider);
