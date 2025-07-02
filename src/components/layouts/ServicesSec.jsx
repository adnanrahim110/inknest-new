import React from "react";
import { sec5_img, shapes_5 } from "../../assets";
import { exServices } from "../../constants";

const ServicesSec = () => {
  return (
    <section className="relative py-28">
      <img
        src={shapes_5}
        className="absolute -top-96 left-0 pointer-events-none -z-[1]"
        alt=""
      />
      <img
        src={sec5_img}
        className="absolute top-24 left-5 pointer-events-none -z-[1]"
        alt=""
      />
      <div className="container">
        <div className="row justify-center gap-y-20">
          <div className="lg:w-8/12 text-center">
            <h2 className="title font-bold text-primary mb-1">
              Write Your Book in Your Terms
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum a
              temporibus deleniti reiciendis labore reprehenderit, provident
              quae molestias ex rem?
            </p>
          </div>
          <div>
            <div className="grid lg:grid-cols-6">
              {exServices.map((item, idx) => (
                <div
                  key={idx}
                  className={`px-3 py-5 flex flex-col items-center text-center justify-center gap-7 ${
                    idx > 5 && idx % 2 !== 0
                      ? "bg-primary-100"
                      : idx <= 5 && idx % 2 === 0
                      ? "bg-primary-100"
                      : ""
                  }`}
                >
                  <img
                    src={item.img}
                    className="w-16 drop-shadow-[-2px_2px_5px] drop-shadow-white"
                    alt={item.title}
                  />
                  <h5 className="text-xl">{item.title}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSec;
