import React from "react";
import { services_fiction_sec2 } from "../../assets";

const Sec2New = ({ title, text, img }) => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="row items-center justify-between">
          <div className="lg:w-[40%] relative">
            <div className="relative w-full">
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 lg:w-[70%] h-1/2 bg-secondary-800 rounded-tr-3xl -z-[1]" />
              <img
                src={img || services_fiction_sec2}
                className="w-full"
                alt=""
              />
            </div>
          </div>
          <div className="lg:w-[55%]">
            <h2 className="text-[40px] font-bold text-primary mb-3">{title}</h2>
            {Array.isArray(text) ? (
              text.map((para, idx) => (
                <p
                  key={idx}
                  className="text-neutral-700 not-last:mb-5 font-medium"
                  dangerouslySetInnerHTML={{ __html: para }}
                />
              ))
            ) : (
              <p className="text-neutral-700 font-medium">{text}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec2New;
