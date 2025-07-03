import React from "react";
import { contactDetails } from "../../constants";
import Signup from "../layouts/Signup";
import Button from "../ui/Button";

const Hero = ({
  title = "",
  text,
  points,
  bg,
  title_second,
  text_second,
  quote,
}) => {
  return (
    <section
      className="pt-[60px] relative bg-center bg-cover bg-no-repeat pb-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container">
        <div className="row items-start justify-between">
          <div className="lg:w-[59%] self-center">
            <div className="flex flex-col pt-10">
              <h2 className="text-5xl font-bold text-primary mb-5">{title}</h2>
              {Array.isArray(text) ? (
                text.map((para, idx) => (
                  <p
                    key={idx}
                    className="text-neutral-700 not-last:mb-5 font-medium"
                    dangerouslySetInnerHTML={{ __html: para }}
                  />
                ))
              ) : (
                <p
                  className="text-black mb-5 font-medium"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              )}
              {title_second && (
                <h2 className="text-3xl font-bold mb-5">{title_second}</h2>
              )}
              {text_second &&
                (Array.isArray(text_second) ? (
                  text_second.map((para, idx) => (
                    <p
                      key={idx}
                      className="text-neutral-700 not-last:mb-5"
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))
                ) : (
                  <p
                    className="text-black mb-5 font-medium"
                    dangerouslySetInnerHTML={{ __html: text_second }}
                  />
                ))}
              {quote && (
                <blockquote>
                  <p className="italic">"{quote}"</p>
                </blockquote>
              )}
              {points && (
                <ul className="text-neutral-900 flex flex-col gap-2">
                  {points.map((item, idx) => (
                    <li key={idx} className="pl-[26px] relative inline-block">
                      <span className="absolute flex items-center justify-center size-[18px] border-2 border-primary left-0 rounded-full top-[5px]">
                        <span className="size-1.5 rounded-full bg-primary block" />
                      </span>
                      {item.bold && <strong>{item.bold}</strong>}
                      {item.text}
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
          <div className="lg:w-[38%] 2xl:px-10">
            <Signup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
