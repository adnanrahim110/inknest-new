import React from "react";
import { sec2_bg, sec2_shape } from "../../assets";

const SecTwo = ({ title = "", text, img }) => {
  return (
    <section
      className="pt-24 pb-16 bg-cover bg-no-repeat bg-center relative overflow-hidden rounded-bl-4xl"
      style={{ backgroundImage: `url(${sec2_bg})` }}
    >
      <div
        className="absolute w-[124px] h-[308px] top-0 left-0 bottom-0 m-auto animate-pulse pointer-events-none"
        style={{ backgroundImage: `url(${sec2_shape})` }}
      />
      <div className="container">
        <div className="row items-center justify-between">
          <div className="lg:w-1/2">
            <h3 className="text-[54px] text-white font-bold mb-7">{title}</h3>
            {Array.isArray(text) ? (
              text.map((para, idx) => (
                <p
                  key={idx}
                  className="text-neutral-300 not-last:mb-3"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))
            ) : (
              <p
                className="text-neutral-300"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            )}
          </div>
          <div className="lg:w-1/2 text-right relative">
            <div className="absolute h-[83%] left-1/2 -translate-x-1/2 -top-5 aspect-square border-[30px] rounded-full z-0 border-primary-200 opacity-10" />
            <img src={img} alt="" className="inline-block relative z-[1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecTwo;
