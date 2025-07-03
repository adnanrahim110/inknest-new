import React from "react";
import { buildings, globe, plane, rider } from "../../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="pt-[60px] size-full overflow-hidden">
      <div className="bg_grd min-h-[600px] flex items-center justify-center relative">
        <div className="container">
          <div className="row items-center justify-between">
            <div className="lg:w-[54%]">
              <div className="flex flex-col pt-7">
                <h1 className="text-white text-5xl font-bold mb-3">
                  <span className="text-secondary">Ink Nest Publishing </span>
                  Hassle-Free Amazon Book Publishing Services
                </h1>
                <p className="text-neutral-200">
                  Struggling to publish your book on Amazon? Let Ink Nest
                  Publishing make it effortless. At Ink Nest Publishing, the
                  goal is simple: to allow authors to bring their stories to
                  life while removing the stress and guesswork from the
                  publishing process. From formatting and cover design to
                  uploading and marketing guidance, every step is handled with
                  care and expertise.
                </p>
                <div className="self-start mt-8 -ml-0.5">
                  <Button secondary>Get Started</Button>
                </div>
              </div>
            </div>
            <div className="lg:w-5/12">
              <div className="relative size-[440px] flex items-center justify-center -ml-20">
                <img
                  src={buildings}
                  className="absolute inset-0 animate-spin [animation-duration:14s] z-[0]"
                  alt=""
                />
                <img
                  src={globe}
                  alt=""
                  className="animate-spin-reverse absolute top-0 left-0 h-full object-cover z-[1]"
                />
                <img
                  src={rider}
                  className="absolute top-2 rotate-3 left-1/2 -translate-x-1/2 w-40 -ml-2.5 z-[2] drop-shadow-[-3px_-1px_1px] drop-shadow-white/50"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <img
          src={plane}
          className="absolute w-[45%] right-0 bottom-0 drop-shadow-[-5px_-3px_5px] drop-shadow-black/40 z-[3]"
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
