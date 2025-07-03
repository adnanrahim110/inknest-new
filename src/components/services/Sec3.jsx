import React from "react";
import { book_element_01, cat, lamp } from "../../assets";
import Heading from "../ui/Heading";

const Sec3 = ({ title = "", highlight = "", text, card, img }) => {
  return (
    <section className={`relative ${img ? "pt-20 pb-40" : "py-20"}`}>
      {img && (
        <>
          <img
            src={book_element_01}
            className="absolute bottom-0 -left-12"
            alt=""
          />
          <img src={cat} className="absolute bottom-0 left-1/5" alt="" />
          <img
            src={lamp}
            className="absolute bottom-0 right-0 max-2xl:max-h-[180px]"
            alt=""
          />
        </>
      )}
      <div className="container">
        <div className="row justify-center items-center gap-y-20">
          <div className="lg:w-9/12 text-center">
            <Heading title={title} highlight={highlight} />
            <p dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          {img && (
            <div className="lg:w-5/12 2xl:-translate-x-5">
              <img src={img} alt="" />
            </div>
          )}
          <div className={img ? "lg:w-6/12 2xl:w-5/12" : "lg:w-10/12"}>
            <div
              className={`grid w-full lg:grid-cols-2 ${
                img ? "gap-5" : "gap-10"
              } text-white`}
            >
              {card.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    index === 0
                      ? "bg-secondary-700 rounded-tl-4xl"
                      : index === 1
                      ? "bg-amber-600 rounded-tr-4xl"
                      : index === 2
                      ? "bg-orange-600 rounded-bl-4xl"
                      : "bg-primary rounded-br-4xl"
                  } flex flex-col justify-center gap-y-4 ${
                    img ? "px-5 py-8" : "p-10"
                  } relative`}
                >
                  <span></span>
                  <div className="flex items-center gap-4">
                    {item.img && (
                      <img
                        src={item.img}
                        alt=""
                        className={img ? "size-9" : "size-14"}
                      />
                    )}
                    <h4
                      className={`font-bold ${
                        img ? "text-2xl" : "text-[26px]"
                      }`}
                    >
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec3;
