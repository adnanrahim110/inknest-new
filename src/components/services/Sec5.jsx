import React from "react";
import { sec5_img, shapes_5 } from "../../assets";
import Button from "../ui/Button";

const Sec5 = ({ title, text, cards }) => {
  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      <img src={shapes_5} alt="" className="absolute left-0 -top-2/3" />
      <img src={sec5_img} alt="" className="absolute left-0 top-[13%]" />
      <div className="container">
        <div className="row gap-y-10 justify-center">
          <div className="w-10/12 text-center">
            <h2 className="text-[40px] mb-5">{title}</h2>
            <p>{text}</p>
          </div>
          <div className="lg:w-11/12 mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-5 backdrop-blur-xs bg-gradient-to-b from-primary-50/90 to-white shadow-[0_0_30px] shadow-black/5 px-5 py-8 rounded-tl-2xl rounded-br-2xl"
                >
                  <img src={card.img} className="size-10" alt={card.title} />
                  <h5 className="text-[15px]">{card.title}</h5>
                  <p className="text-[13px] text-neutral-500">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-5">
            <Button dark>Let's work together</Button>
            <Button secondary>Live Chat</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec5;
