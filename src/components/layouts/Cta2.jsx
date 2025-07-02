import React from "react";
import { cta, shapes_7, shapes_8 } from "../../assets";
import Button from "../ui/Button";

const Cta2 = () => {
  return (
    <section className="relative bg-primary py-24">
      <div className="container">
        <div className="row items-stretch">
          <div className="lg:w-1/2">
            <div>
              <h2 className="text-[40px] text-white font-bold mb-5">
                Write Your Ideas into a Captivating Book with a Click
              </h2>
              <p className="text-neutral-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus aspernatur dolor corrupti asperiores temporibus quasi
                voluptatem illum atque distinctio cupiditate debitis fugiat quos
                perferendis deserunt explicabo, et laboriosam suscipit magnam!
              </p>
              <div className="flex items-center gap-3 mt-10">
                <Button>Start Today</Button>
                <Button secondary>Live Chat</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={shapes_8}
        className="absolute bottom-0 left-0 w-full opacity-20 -scale-x-100"
        alt=""
      />
      <img src={cta} className="absolute -top-5 right-0" alt="" />
      <img
        src={shapes_7}
        className="absolute top-1/5 left-[55%] animate-spin [animation-duration:3s] pointer-events-none"
        alt=""
      />
    </section>
  );
};

export default Cta2;
