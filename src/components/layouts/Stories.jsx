import React, { useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { stories } from "../../assets";

const story = [
  {
    title: "Dream Bold, Write Free",
    text: "No matter where you are in your journey—scribbling your first draft or polishing your final chapter—we’re here to turn your dream into a published reality. With Ink Nest, your words matter.",
  },
  {
    title: "Self-Publishing, Simplified",
    text: "We make self-publishing easy and empowering. Our team walks you through every step, helping you publish your book on Amazon and beyond without the overwhelm.",
  },
  {
    title: "Design That Attracts",
    text: "A great book needs a great first impression. From professional covers to beautiful formatting, our design team ensures your story looks as good as it reads.",
  },
  {
    title: "Voices That Are Heard",
    text: "Turn your book into an immersive experience with our audiobook creation and narration services. Reach new audiences with a voice that brings your story to life.",
  },
  {
    title: "Marketing That Converts",
    text: "Publishing is just the beginning. With our smart book marketing services, including Amazon book promotion, we help your story find the readers it deserves.",
  },
];

const Stories = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="relative py-20">
      <div className="container">
        <div className="row justify-center">
          <div className="lg:w-8/12 text-center">
            <h2 className="title font-bold text-black mb-3">
              <span className="text-primary">Where Your Story Finds Its </span>
              Wings
            </h2>
            <p>
              Looking to get the best out of your book? Let us help you along.
              At Ink Nest Publishing, we help you break free from the ordinary
              and bring your unique story to life with purpose and
              professionalism.
            </p>
          </div>
          <div>
            <div className="relative font-gentium text-center mt-14 mb-10 flex justify-center items-center gap-10">
              {story.map((_, idx) => {
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
              {story.map((str, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex items-center justify-between gap-5 flex-wrap">
                    <div className="lg:w-5/12">
                      <h2 className="text-4xl mb-5">{str.title}</h2>
                      <p>{str.text}</p>
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
