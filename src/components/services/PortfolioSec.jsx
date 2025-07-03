import React from "react";

const PortfolioSecService = ({ portfolio }) => {
  return (
    <section className="py-24 bg-secondary-700">
      <div className="container">
        <div className="row justify-center items-center gap-y-14">
          <div className="lg:w-4/12">
            <h2 className="text-white text-5xl">Our Recent Portfolio</h2>
          </div>
          <div className="lg:w-8/12">
            <p className="text-white">
              Behind every successful book release is a complex network of
              contributions. The same can be said for our body of work. It's
              been shaped by countless successful partnerships with clients
              across different industries and audiences.
            </p>
          </div>
          <div>
            <div className="grid lg:grid-cols-4 gap-10">
              {portfolio.map((img, idx) => (
                <div key={idx}>
                  <img src={img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSecService;
