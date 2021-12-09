import React, { ComponentType, memo, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import animations from "../../animations";

interface Props<T> {
  slides: T[];
  component: ComponentType<T>;
  show: boolean;
}

function Slider<T>({ slides, component: Component, show }: Props<T>) {
  const [loadSlider, setLoadSlider] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (show) {
        setLoadSlider(true);
      }
    }, 1000);
  }, [show]);
  return loadSlider ? (
    <Swiper
      slideToClickedSlide
      className={`${animations.zoomIn} swiper`}
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
  ) : null;
}

export default Slider;
