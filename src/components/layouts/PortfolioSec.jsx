import React, { useEffect, useState } from "react";
import { portfolio_img } from "../../assets";
import { portfolio } from "../../constants";

const PortfolioSec = ({ step }) => {
  const [activeCategory, setActiveCategory] = useState(
    step ? (step === true ? 0 : step) : 0
  );
  const [activeType, setActiveType] = useState(0);

  const activeItem = portfolio[activeCategory]?.content[activeType];
  return (
    <section className="relative">
      <div className="grid grid-cols-[1fr_12.5%]">
        <div className="grid grid-rows-[auto_1fr]">
          <header className="p-14 pb-10 pr-40 bg-primary-950 flex flex-col">
            <div className="row items-center">
              <div className="lg:w-5/12">
                <h2 className="text-white text-5xl font-semibold">
                  Sneak Peak In Our Previous Work
                </h2>
              </div>
              <div className="lg:w-7/12">
                <p className="text-white">
                  Explore our curated portfolio showcasing top-quality book
                  formatting, ghostwriting, Amazon publishing, custom
                  illustrations, and bestselling book covers. From debut authors
                  to seasoned storytellers, our work reflects creativity,
                  precision, and market-ready excellence. Discover how we’ve
                  helped authors publish globally, build strong personal brands,
                  and turn manuscripts into polished, sellable books.
                </p>
              </div>
              <div>
                <div className="pt-5 mt-5 border-t border-t-neutral-300/40">
                  <nav>
                    <ul className="flex items-center gap-10">
                      {portfolio.map((item, idx) => {
                        const isActive = idx === activeCategory;
                        return (
                          <li key={idx}>
                            <button
                              onClick={() => setActiveCategory(idx)}
                              className={`uppercase font-semibold font-rajdhani leading-[1.2] inline-block relative transition-all duration-200 ease-in-out after:absolute after:h-0.5 after:top-full after:left-0 after:transition-all after:duration-200 after:ease-linear ${
                                isActive
                                  ? "after:w-full after:bg-white text-white"
                                  : "text-neutral-100/95 after:w-0 after:bg-neutral-100/95 hover:after:w-full"
                              }`}
                            >
                              {item.title}
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </header>
          <div
            className={`px-40 pb-16 flex items-center justify-center bg-gradient-to-t from-secondary-700 via-primary to-primary-950`}
          >
            <div className="flex items-center gap-10 relative">
              <img
                src={portfolio_img}
                className="absolute z-0 top-1/2 -translate-y-1/2 -left-[104px] w-[300px]"
                alt=""
              />
              <img
                src={activeItem.img}
                alt={activeItem.title}
                className="relative z-[1]"
              />
              <div className="relative z-[1]">
                <h2 className="text-[38px] text-white mb-7">
                  {activeItem.title}
                </h2>
                {activeItem.text.map((p, i) => (
                  <p className="text-neutral-200 not-last:mb-3" key={i}>
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-[0_0_40px_10px] shadow-black/20">
          <ul className="grid grid-rows-4">
            {portfolio[activeCategory]?.content.map((item, idx) => {
              const isActive = idx === activeType;
              return (
                <li
                  key={idx}
                  className={`p-5 not-last:border-b border-b-neutral-300 odd:bg-neutral-200 relative ${
                    isActive
                      ? "before:absolute before:bottom-0 before:h-1 before:w-1/2 before:bg-primary before:left-1/2 before:-translate-x-1/2 before:transition-all before:duration-200 before:ease-in-out"
                      : ""
                  }`}
                >
                  <button
                    onClick={() => setActiveType(idx)}
                    className={`flex items-center justify-center`}
                  >
                    <img src={item.img} alt="" />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSec;
