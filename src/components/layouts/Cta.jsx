import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Cta = () => {
  return (
    <section className="relative py-20 bg-black">
      <div className="container">
        <div className="row justify-center gap-y-12">
          <div className="lg:w-8/12 text-center">
            <h2 className="title font-bold text-white mb-2">
              Support That Meets You Where You Write
            </h2>
            <p className="text-neutral-400">
              Helping You Tell Your Story, Your Way With the Right Tools and the
              Right Team
            </p>
          </div>
          <div>
            <div className="flex items-center flex-wrap mb-10">
              <div className="lg:w-1/2 flex justify-center py-5">
                <Button secondary>AI-Assisted</Button>
              </div>
              <div className="lg:w-1/2 flex justify-center py-5">
                <Button secondary>100% Human</Button>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr_auto_1fr_1fr] gap-5">
              {[
                {
                  title: "Quick Publishing Help",
                  text: "Writing fast? We’ll help shape your ideas into real stories anytime, anywhere.",
                },
                {
                  title: "Guided Services",
                  text: "Let’s do this together. Our team combines smart tech with real storytelling to build something readers will love.",
                },
                {
                  or: "or",
                },
                {
                  title: "Work With Real Writers",
                  text: "Don’t stress over outlines or rewrites. Our professional writers are here to take the weight off your shoulders.",
                },
                {
                  title: "Words That Connect",
                  text: "We don’t just write. We craft content that feels like you and speaks directly to your readers.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`${
                    item.or
                      ? "px-7"
                      : "bg-white rounded-tl-2xl rounded-br-2xl px-5 py-8"
                  } flex flex-col items-center justify-center h-full text-center relative`}
                >
                  {item.or ? (
                    <>
                      <div className="bg-secondary-800 rounded-full size-14 text-lg text-white flex place-items-center text-center relative z-[1]">
                        <span className="w-full relative">OR</span>
                      </div>
                      <span className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-neutral-700 z-0" />
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl text-primary mb-6">
                        {item.title}
                      </h3>
                      <p className="text-sm mb-5">{item.text}</p>
                      <Link
                        to="/"
                        className="flex items-center gap-[3px] text-sm mt-2 text-primary hover:text-primary-900 transition-all duration-300 ease-in-out font-medium group"
                      >
                        <span className="relative inline-block after:h-0 after:border-t-[1.35px] after:border-t-primary-900 after:absolute after:bottom-0 after:left-0 after:w-0 group-hover:after:w-full after:transition-all after:ease-linear after:duration-300">
                          Learn more
                        </span>
                        <span className="inline-flex text-[11px]">
                          <FaAngleRight className="transition-all duration-200 ease-in-out group-hover:translate-x-0.5" />
                          <FaAngleRight className="-translate-x-1.5 group-hover:-translate-x-1 transition-all duration-300 ease-in-out" />
                        </span>
                      </Link>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
