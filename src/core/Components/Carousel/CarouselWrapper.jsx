// import { Carousel } from "antd";
import React from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarouselWrapper({ carouselClassName, data }) {
  const renderCarouselItem = (data) => {
    console.log(data);
    return data.map((item, idx) => {
      return (
        <SwiperSlide
          className="w-full h-auto bg-center bg-no-repeat bg-cover"
          key={idx}
          style={{ backgroundImage: `url(${item.hinhAnh})` }}
        >
          {/* <img src={item.hinhAnh} alt="" className="w-full h-full" /> */}
        </SwiperSlide>
      );
    });
  };
  return (
    // <Carousel className={carouselClassName}>
    //   {renderCarouselItem(data)}
    // </Carousel>
    <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className={`w-full h-full ${carouselClassName}`}
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      {renderCarouselItem(data)}
    </Swiper>
  );
}
