import React from "react";
import { contactDetails } from "../../constants";
import Signup from "../layouts/Signup";
import Button from "../ui/Button";

const Hero = ({ title = "", text, points, bg }) => {
  return (
    <section
      className="pt-[60px] relative bg-center bg-cover bg-no-repeat pb-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="row items-center justify-between">
          <div className="lg:w-1/2">
            <div className="flex flex-col">
              <h2 className="text-[52px] font-bold text-primary mb-5">
                {title}
              </h2>
              {Array.isArray(text) ? (
                text.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-neutral-700 not-last:mb-5"
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))
              ) : (
                <p
                  className="text-neutral-700 mb-5"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}
              {points && (
                <ul className="text-neutral-700 flex flex-col gap-2">
                  {points.map((item, idx) => (
                    <li
                      key={idx}
                      className="pl-[26px] relative inline-block text-lg"
                    >
                      <span className="absolute flex items-center justify-center size-[18px] border-2 border-primary left-0 rounded-full top-[5px]">
                        <span className="size-1.5 rounded-full bg-primary block" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex items-center gap-4 mt-8">
                <Button small dark secondary>
                  Let's work together
                </Button>
                <Button small>{contactDetails[0].text}</Button>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 px-10">
            <Signup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
