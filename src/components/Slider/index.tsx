import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

interface Props {
  slides: any[];
  component: any;
  className?: string;
}
function Slider({ slides, component: Component, className }: Props) {
  return (
    <Swiper
      slideToClickedSlide
      className={className || "swiper"}
      spaceBetween={20}
      slidesPerView={5}
      loop
      centeredSlides
    >
      {slides.map((slide: any, index: number) => {
        return (
          <SwiperSlide key={index}>
            <Component {...slide} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default memo(Slider);
