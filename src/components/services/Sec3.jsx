import React from "react";

const Sec3 = ({ title, text, card }) => {
  return (
    <section className="relative py-20">
      <div className="container">
        <div className="row justify-center gap-y-20">
          <div className="lg:w-9/12 text-center">
            <h2 className="title text-primary font-semibold mb-5">
              Refine, Revise, <span className="text-black">and</span> Engage
              Readers with Our Editing Excellence
            </h2>
            <p dangerouslySetInnerHTML={{ __html: text }} />
          </div>
          <div className="lg:w-10/12">
            <div className="grid w-full lg:grid-cols-2 gap-10 text-white">
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
                  } flex flex-col justify-center gap-y-4 p-10 relative`}
                >
                  <span></span>
                  <div className="flex items-center gap-4">
                    <img src={item.img} alt="" className="w-14 h-14" />
                    <h4 className="font-bold text-[26px]">{item.title}</h4>
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
