import React from "react";
import { process_img, process_img2, shapes_5 } from "../../assets";
import { processSteps } from "../../constants";
import Button from "../ui/Button";

const Process = () => {
  return (
    <section className="py-20 relative">
      <img
        src={shapes_5}
        className="absolute -top-96 left-0 pointer-events-none -z-[1]"
        alt=""
      />
      <div className="container">
        <div className="row justify-center">
          <div className="lg:w-10/12 text-center">
            <h2 className="title font-bold text-black mb-2">
              From Rough Draft to
              <span className="text-primary"> Finished Book</span>
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum a
              temporibus deleniti reiciendis labore reprehenderit, provident
              quae molestias ex rem?
            </p>
          </div>
          <div className="mt-20">
            <div className="container">
              <div className="row items-start justify-center gap-x-10">
                <div className="lg:w-4/12 space-y-20 pr-0">
                  {processSteps.slice(0, 3).map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex flex-col pl-[74px] first:pl-[60px] relative even:-translate-x-14"
                      >
                        <span className="absolute left-0 text-6xl font-bold font-rajdhani text-primary leading-none top-0">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div key={idx}>
                          <h3 className="text-2xl text-black mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-neutral-700">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="lg:w-[23%] pt-12">
                  <img src={process_img} alt="" />
                </div>
                <div className="lg:w-4/12 space-y-20 pl-0 text-right">
                  {processSteps.slice(3).map((item, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex flex-col relative pr-[74px] even:translate-x-14"
                      >
                        <span className="absolute right-0 text-6xl font-bold font-rajdhani text-primary leading-none top-0">
                          {String(idx + 4).padStart(2, "0")}
                        </span>
                        <div key={idx}>
                          <h3 className="text-2xl text-black mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-neutral-700">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="my-20 flex items-center justify-center gap-4">
            <Button>Let's work together</Button>
            <Button secondary>Live Chat</Button>
          </div>
        </div>
      </div>

      <img
        src={process_img2}
        className="absolute -bottom-9 left-1/8 pointer-events-none z-[1]"
        alt=""
      />
    </section>
  );
};

export default Process;
