import React from "react";
import { brands_1 } from "../../assets";

const Sec1 = () => {
  return (
    <section className="py-4 bg-secondary-500">
      <div className="container">
        <div className="row">
          <div className="lg:w-4/12">
            <img src={brands_1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec1;
