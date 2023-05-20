// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./galary.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const PhotoGalary = () => {
    return (
      <div className="w-full md:w-5/6 mx-auto px-3 bg-[#f5cfb7] ">
        <h1 className="text-4xl text-center font-semibold pt-5 text-slate-800">Toy Gallery</h1>
        <hr className="h-2 rounded-xl w-56 mx-auto bg-gray-700"/>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="https://img.freepik.com/premium-photo/robot-with-gun-is-standing-small-robot_782419-10062.jpg?size=626&ext=jpg&ga=GA1.1.1134145993.1684385584&semt=ais" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://m.media-amazon.com/images/I/71RXPezkALL._AC_SX466_.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img.freepik.com/free-photo/election-day-ballot-boxes_1048-3540.jpg?size=626&ext=jpg&ga=GA1.1.1134145993.1684385584&semt=ais" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img.freepik.com/premium-photo/futuristic-robo-dog-isolated-generative-ai_191095-1738.jpg?size=626&ext=jpg&ga=GA1.1.1134145993.1684385584&semt=ais" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://m.media-amazon.com/images/I/71dps4vR2jL._AC_SX679_.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img.freepik.com/free-photo/3d-rendering-biorobots-concept_23-2149524388.jpg?size=626&ext=jpg&ga=GA1.1.1134145993.1684385584&semt=ais" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://img.freepik.com/free-photo/3d-render-robots-jigsaw-pieces-solving-problems_1048-6048.jpg?size=626&ext=jpg&ga=GA1.1.1134145993.1684385584&semt=ais" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://img.freepik.com/premium-photo/sample-robot-dinosaur-from-robotic-constructor_185937-44.jpg?size=626&ext=jpg&ga=GA1.1.1134145993.1684385584&semt=ais" />
          </SwiperSlide>
          <SwiperSlide>
          <img src="https://img.freepik.com/premium-photo/robot-robot-are-sitting-table_782419-9769.jpg?size=626&ext=jpg&ga=GA1.1.1134145993.1684385584&semt=ais" />
          </SwiperSlide>
        </Swiper>
    </div>
    );
};

export default PhotoGalary;