import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  books_r1,
  reviews_m1,
  shapes_1,
  shapes_3,
  shapes_4,
  shapes_6,
} from "../../assets";

const Reviews = () => {
  return (
    <section className="pb-24 pt-40 bg-neutral-100 overflow-hidden">
      <img
        src={shapes_3}
        className="absolute h-[120%] -top-10 left-0 pointer-events-none z-0"
        alt=""
      />
      <div className="container">
        <div className="row items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={reviews_m1}
                className="rounded-full max-w-[360px] grayscale"
                alt=""
              />
              <img
                src={books_r1}
                className="absolute right-9 -top-16 max-w-[230px]"
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-[47%] pl-0">
            <h2 className="title font-semibold text-[44px] mb-8">
              What Our <span className="text-primary"> Clients Say </span>
            </h2>
            <div className="relative">
              <Swiper
                modules={[Autoplay]}
                autoplay={{ delay: 4000 }}
                loop
                slidesPerView={1}
                spaceBetween={30}
                className="reviews_slider"
              >
                {[...Array(3)].map((_, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col gap-4">
                      <strong className="text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Minus nostrum deleniti a officia quo id quaerat
                      </strong>
                      <p className="text-neutral-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos nesciunt hic in voluptates? Dolor, repudiandae
                        atque, delectus laboriosam reprehen de rit dignissimos,
                        vel dolores ratione sit quidem dolorem accusamus nec ess
                        itatibus rerum qui. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit. Officiis, aliquid!
                      </p>
                      <div className="mt-5 font-bold text-primary text-xl pl-11 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-9 before:h-0.5 before:bg-primary">
                        John Doe
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {[shapes_4, shapes_1, shapes_6].map((img, idx) => (
        <img
          key={idx}
          src={img}
          className={`absolute ${
            idx === 0
              ? "top-1/2 -translate-y-1/2 right-0"
              : idx === 1
              ? "right-1/12 bottom-2 max-w-20"
              : "right-[13%] top-[31%]"
          }`}
          alt=""
        />
      ))}
    </section>
  );
};

export default Reviews;
