import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

const Banner = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    fetch("slider.json")
      .then((res) => res.json())
      .then((data) => setSlider(data));
  }, []);
  
  return (
    <div className="mx-5 md:mx-0 md:pt-5 lg:pt-0">
      <Swiper
        className="lg:w-[80%] h-64 lg:h-[500px] md:h-[400px] mx-auto mt-5 md:mt-20"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={() => ""}
        onSwiper={() => ""}
      >
        {slider.map((s, idx) => (
          <SwiperSlide key={idx}>
            <img className="w-full h-full" src={s.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
