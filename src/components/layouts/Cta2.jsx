import React from "react";
import { cta, shapes_7, shapes_8 } from "../../assets";
import Button from "../ui/Button";

const Cta2 = ({ title, text, img }) => {
  return (
    <section className={`relative bg-primary ${img ? "py-20" : "py-24"}`}>
      <div className="container">
        <div className="row items-stretch">
          <div className="lg:w-1/2">
            <div>
              <h2 className="text-[40px] text-white font-bold mb-5">
                {title || "Ready to Publish Your Book Without the Hassle?"}
              </h2>
              <p className="text-neutral-200">
                {text ||
                  "Get expert help with book writing, editing, formatting, and global publishing. Whether it's fiction, nonfiction, or a memoir, we craft every book with precision and purpose. Our publishing services are built to help authors launch professionally on Amazon, Barnes & Noble, and more—without stress or confusion."}
              </p>
              <div className="flex items-center gap-3 mt-10">
                <Button>Start Today</Button>
                <Button secondary>Live Chat</Button>
              </div>
            </div>
          </div>
          {img && (
            <div className="lg:w-1/2">
              <img src={img} alt="" />
            </div>
          )}
        </div>
      </div>
      <img
        src={shapes_8}
        className="absolute bottom-0 left-0 w-full opacity-20 -scale-x-100"
        alt=""
      />
      {!img && (
        <>
          <img src={cta} className="absolute -top-5 right-0 z-[1]" alt="" />
          <img
            src={shapes_7}
            className="absolute top-1/5 left-[55%] animate-spin [animation-duration:3s] pointer-events-none"
            alt=""
          />
        </>
      )}
    </section>
  );
};

export default Cta2;
