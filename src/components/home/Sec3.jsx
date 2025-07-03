import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  shapes_2,
  shapes_slider_1,
  shapes_slider_2,
  shapes_slider_3,
  shapes_slider_4,
  shapes_slider_5,
  shapes_slider_6,
} from "../../assets";
import { homeSec3 } from "../../constants";

const GwSlider = () => {
  return (
    <section className="py-20 relative">
      <img
        className="absolute right-0 top-0 h-full w-auto pointer-events-none -z-[1]"
        src={shapes_2}
      />
      <div className="container">
        <div className="row justify-center">
          <div className="lg:w-8/12 text-center">
            <h2 className="title mb-5">
              Complete{" "}
              <span className="text-primary font-semibold">
                {" "}
                Ghost Writing Solutions{" "}
              </span>{" "}
              , Built on Trust
            </h2>
            <p>
              Ink Nest Publishing, ghost writing isn’t just about producing a
              manuscript. It’s about creating something that sounds like you,
              feels like you, and truly represents your story. We also offer
              book editing, formatting, and optional book marketing services to
              support you beyond the writing stage. Whether you’re
              self-publishing or planning a broader launch, we’ll help you
              promote your book with confidence, ethically and creatively.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mt-10 px-0 -mx-10">
          <div className="relative w-full">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 4000 }}
              loop
              pagination={{ clickable: true }}
              slidesPerView={3}
              spaceBetween={50}
              centeredSlides={true}
              className="sec3_slider px-10!"
            >
              {homeSec3.map((card, idx) => {
                return (
                  <SwiperSlide key={idx} className="mt-20">
                    <div className={`relative`}>
                      <img
                        src={
                          idx === 0
                            ? shapes_slider_1
                            : idx === 2
                            ? shapes_slider_6
                            : shapes_slider_4
                        }
                        alt=""
                        className={`absolute pointer-events-none ${
                          idx === 0
                            ? "size-20 -top-[30px] -right-[30px] -z-[1]"
                            : idx === 2
                            ? "-right-7 -bottom-7 size-16 -z-[1]"
                            : "size-[33px] top-0 -right-2.5 z-[1]"
                        }`}
                      />
                      <img
                        src={
                          idx === 0
                            ? shapes_slider_2
                            : idx === 2
                            ? shapes_slider_5
                            : shapes_slider_3
                        }
                        alt=""
                        className={`absolute pointer-events-none ${
                          idx === 0
                            ? "size-[34px] left-[30px] -bottom-5 z-[1]"
                            : idx === 2
                            ? "top-1/2 -translate-y-1/2 z-[1] h-[61px] w-[35px] -left-4"
                            : "-left-5 -bottom-5 w-[60px] -z-[1]"
                        }`}
                      />
                      <div
                        className={`flex place-items-center py-10 pl-5 pr-3 bg-white/85 backdrop-blur-[2.3px] relative z-0`}
                      >
                        <span
                          className={`bg_hlf ${
                            idx === 0 || idx === 3
                              ? "bg-[#f85412]"
                              : idx === 1 || idx === 4
                              ? "bg-[#0d848d]"
                              : "bg-[#2e4557]"
                          }`}
                        />
                        <div className="w-[35%] relative z-[1]">
                          <img src={card.img} alt={card.title} />
                        </div>
                        <div className="flex flex-col w-3/5 pl-2">
                          <h5 className="text-lg font-bold capitalize leading-[1.2] mb-1">
                            {card.title}
                          </h5>
                          <p className="text-[13px]">{card.text}</p>
                          <Link
                            to={card.url}
                            className="flex items-center gap-[3px] text-sm mt-2 text-primary hover:text-primary-900 transition-all duration-300 ease-in-out font-medium group"
                          >
                            <span className="relative inline-block after:h-0 after:border-t-[1.35px] after:border-t-primary-900 after:absolute after:bottom-0 after:left-0 after:w-0 group-hover:after:w-full after:transition-all after:ease-linear after:duration-300">
                              Learn more
                            </span>
                            <span className="inline-flex text-[11px]">
                              <FaAngleRight className="transition-all duration-200 ease-in-out group-hover:translate-x-0.5" />
                              <FaAngleRight className="-translate-x-1.5 group-hover:-translate-x-1 transition-all duration-300 ease-in-out" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GwSlider;
