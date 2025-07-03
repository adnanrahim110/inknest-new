import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { faq } from "../../assets";
import { faqs } from "../../constants";

export default function Faqs({ questionare = faqs, img }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    if (idx !== openIndex) setOpenIndex(idx);
  };

  return (
    <section className={`${img ? "py-24" : "pt-20 pb-16"} relative`}>
      <img
        src={img || faq}
        className={`absolute z-[1] ${
          img
            ? "bottom-0 w-5/12 left-10"
            : "top-1/2 -translate-y-1/2 left-10 w-[38%]"
        }`}
        alt=""
      />
      <div className="container mx-auto">
        <div className="flex justify-end">
          <div className="lg:w-[54%]">
            <h2 className="text-primary text-[44px] mb-10">
              Frequently <span className="text-black">Asked</span> Questions
            </h2>
            <ul className="flex flex-col divide-y-2 divide-white">
              {questionare.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <li key={idx}>
                    <button
                      onClick={() => toggle(idx)}
                      className={`w-full text-left outline-none font-rajdhani flex justify-between items-center gap-4 p-4 cursor-pointer ${
                        isOpen ? "bg-primary text-white" : "bg-primary-100"
                      }`}
                    >
                      <span
                        className={`font-bold ${img ? "text-xl" : "text-base"}`}
                      >
                        {item.ques}
                      </span>
                      <span
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      >
                        <FaAngleDown />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key={`answer-${idx}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p
                            className={`p-4 bg-primary-50 ${
                              img ? "text-base" : "text-sm"
                            } text-neutral-600 leading-relaxed`}
                          >
                            {item.ans}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
