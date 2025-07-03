import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { shapes_1, shapes_3, shapes_4, shapes_6 } from "../../assets";
import { reviews } from "../../constants";

const Reviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
              <AnimatePresence mode="wait">
                <motion.img
                  key={reviews[activeIndex].avatar}
                  src={reviews[activeIndex].avatar}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45 }}
                  className="rounded-full w-[360px] grayscale"
                  alt=""
                />
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.img
                  key={reviews[activeIndex].book}
                  src={reviews[activeIndex].book}
                  initial={{ opacity: 0, y: -16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45 }}
                  className="absolute right-9 -top-16 w-[230px]"
                  alt=""
                />
              </AnimatePresence>
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
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              >
                {reviews.map((review, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="flex flex-col gap-4">
                      <strong className="text-xl">{review.bold}</strong>
                      <p className="text-neutral-700">{review.comment}</p>
                      <div className="mt-5 font-bold text-primary text-xl pl-11 relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-9 before:h-0.5 before:bg-primary">
                        {review.author}
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
