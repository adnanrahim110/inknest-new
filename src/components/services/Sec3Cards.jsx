import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../ui/Heading";

const Sec3Cards = ({ title, highlight, text, cards }) => {
  const [slideHeight, setSlideHeight] = useState(0);
  const refs = useRef([]);

  const measureTallest = () => {
    const tallest = refs.current.reduce(
      (h, el) => Math.max(h, el?.offsetHeight || 0),
      0
    );
    setSlideHeight(tallest);
  };

  useLayoutEffect(() => {
    measureTallest();
  }, [cards]);

  useEffect(() => {
    window.addEventListener("resize", measureTallest);
    const imgs = document.querySelectorAll("img");
    imgs.forEach((img) => img.addEventListener("load", measureTallest));
    return () => {
      window.removeEventListener("resize", measureTallest);
      imgs.forEach((img) => img.removeEventListener("load", measureTallest));
    };
  }, []);
  return (
    <section className="py-20 bg-neutral-200">
      <div className="container">
        <div className="row justify-center gap-y-20">
          <div className="lg:w-11/12 text-center">
            <Heading primary title={title} highlight={highlight} />
            <p>{text}</p>
          </div>
          <div>
            <Swiper
              modules={[Autoplay, Navigation]}
              navigation
              loop
              sl
              autoplay={{ delay: 3000 }}
              slidesPerView={3}
              spaceBetween={22}
            >
              {cards.map((card, idx) => (
                <SwiperSlide key={idx} className="relative p-2">
                  <div
                    ref={(el) => (refs.current[idx] = el)}
                    style={{ height: slideHeight || "auto" }}
                    className="relative flex flex-col h-full"
                  >
                    <span className="flex items-center p-1 bg-primary rounded-full absolute -top-1 text-white -left-1 border-4 border-white">
                      <FaCheck />
                    </span>
                    <div className="bg-white px-5 py-7 rounded-tl-4xl shadow-[0_0_20px] shadow-black/10 flex-1">
                      <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                      <p className="text-sm">{card.text}</p>
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

export default Sec3Cards;
