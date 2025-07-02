import React, { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { stories } from "../../assets";
const Stories = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="relative py-20">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:w-8/12 text-center">
            <h2 className="title font-bold text-black mb-3">
              <span className="text-primary">Your Stories, </span> Our Expertise
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A in
              similique quidem fugit. Repellat fugiat in corporis eveniet error
              voluptas.
            </p>
          </div>
          <div>
            <div className="relative font-gentium text-center mt-14 mb-10 flex justify-center items-center gap-10">
              {[...Array(6)].map((_, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    onClick={() => swiperInstance?.slideTo(idx)}
                    key={idx}
                    className={`size-12 flex items-center justify-center cursor-pointer select-none rounded-full border-4 border-neutral-200 relative outline-none ${
                      isActive ? "border-primary" : "border-neutral-200"
                    } ${
                      idx !== 5
                        ? "before:absolute before:w-10 before:h-1 before:bg-neutral-200 before:left-[calc(100%+4px)]"
                        : ""
                    } transition-all duration-300 ease-in-out`}
                  >
                    <span>{String(idx + 1).padStart(2, "0")}</span>
                  </button>
                );
              })}
            </div>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              loop
              navigation
              onSwiper={setSwiperInstance}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {[...Array(6)].map((_, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex items-center justify-between gap-5 flex-wrap">
                    <div className="lg:w-5/12">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi similique unde deserunt mollitia nam dolore
                        voluptatum quisquam tempore totam ullam beatae
                        perferendis asperiores explicabo, quae iste voluptates!
                        Illum velit, non voluptas odio odit, asperiores fuga
                        quidem laborum, fugit culpa at.
                      </p>
                    </div>
                    <div className="relative lg:w-6/12 flex items-end justify-start">
                      <img src={stories} alt="" className="" />
                      <div className="absolute top-0 right-12 p-3 w-full max-w-[430px] -z-[1] h-full max-h-[310px] rounded-tl-2xl rounded-br-2xl animate-gradientMove">
                        <div className="bg-white size-full rounded-tl-md rounded-br-md" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
