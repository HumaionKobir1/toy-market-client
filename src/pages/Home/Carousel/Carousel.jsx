// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./carousel.css";

// import required modules
import { Navigation } from "swiper";


const Carousel = () => {
  return (
    <div className="w-full md:w-5/6 mx-auto px-3 md:mt-16 mt-10">
      <h1 className="text-5xl text-center font-semibold">Our Testimonial</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper md:-mt-10 ">
        <SwiperSlide>
          <div className="text center">
            <div className="w-24 h-24 mx-auto">
            <img className="rounded-full" src="https://cdn.shopify.com/s/files/1/0623/7808/2524/files/testi2_80x80.png?v=1644832087" alt="" />
            </div>
            <h3 className="text-gray-700 text-xl mt-1 mb-1">Larry Kinda</h3>
            <p className="text-gray-600 text-sm">Developer</p>
            <p className="mt-4 md:w-9/12  mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis quasi blanditiis quas et consectetur voluptates, illum, cupiditate accusamus itaque sunt modi saepe similique eligendi! Cum ea recusandae aut? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, obcaecati!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text center">
              <div className="w-24 h-24 mx-auto">
              <img className="rounded-full" src="https://cdn.shopify.com/s/files/1/0623/7808/2524/files/testi1_80x80.png?v=1644832076" alt="" />
              </div>
              <h3 className="text-gray-700 text-xl mt-1 mb-1">Mr. Jhon Deo</h3>
              <p className="text-gray-600 text-sm">Developer</p>
              <p className="mt-4 md:w-9/12 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis quasi blanditiis quas et consectetur voluptates, illum, cupiditate accusamus itaque sunt modi saepe similique eligendi! Cum ea recusandae aut? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, obcaecati!</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text center">
              <div className="w-24 h-24 mx-auto">
              <img className="rounded-full" src="https://cdn.shopify.com/s/files/1/0623/7808/2524/files/testi3_80x80.png?v=1644832061" alt="" />
              </div>
              <h3 className="text-gray-700 text-xl mt-1 mb-1">Ms. Bella</h3>
              <p className="text-gray-600 text-sm">Developer</p>
              <p className="mt-4 md:w-9/12 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis quasi blanditiis quas et consectetur voluptates, illum, cupiditate accusamus itaque sunt modi saepe similique eligendi! Cum ea recusandae aut? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, obcaecati!</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;