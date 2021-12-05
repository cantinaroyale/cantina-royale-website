import React, { ComponentType, memo } from "react";
import { v4 as uuidv4 } from "uuid";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

interface Props<T> {
  slides: T[];
  component: ComponentType<T>;
}

function Slider<T>({ slides, component: Component }: Props<T>) {
  return (
    <Swiper
      slideToClickedSlide
      className="swiper"
      spaceBetween={50}
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

export default Slider;
