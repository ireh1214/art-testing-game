import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/swiper-bundle.css";

// import required modules
import SwiperCore, { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  SwiperCore.use([Autoplay]);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        loop={true}
        autoplay={{ delay: 3500 }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src="img/test.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test2.png" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="img/test.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/test2.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
