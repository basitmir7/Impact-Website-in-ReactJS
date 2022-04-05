import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carousel.css";
import person1 from "../../assets/person1.jpg";
import person2 from "../../assets/person2.jpg";
import person3 from "../../assets/person3.jpg";

const Carousel = () => {
  return (
    <div className="swiper-section py-5">
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        autoplay={{
          delay: 3000,
        }}
        loopFillGroupWithBlank={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper container carousel-main"
      >
        <SwiperSlide className="text-center">
          <div className="slide_container">
            <div className="pt-5 pb-4">
              <img
                className="slider-img border border-5 border-white shadow-sm"
                src={person1}
                alt=""
              />
            </div>
            <h6 className="fw-bold">Maria Jones</h6>
            <p>Customer</p>
            <p className="fst-italic quote">
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" text-center">
          <div className="slide_container">
            <div className="pt-5 pb-4">
              <img
                className="slider-img border border-5 border-white shadow-sm"
                src={person2}
                alt=""
              />
            </div>
            <h6 className="fw-bold">Maria Jones</h6>
            <p>Customer</p>
            <p className="fst-italic quote">
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-center">
          <div className="slide_container">
            <div className="pt-5 pb-4">
              <img
                className="slider-img border border-5 border-white shadow-sm"
                src={person3}
                alt=""
              />
            </div>

            <h6 className="fw-bold">Maria Jones</h6>
            <p>Customer</p>
            <p className="fst-italic quote pb-5">
              “Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.”
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
