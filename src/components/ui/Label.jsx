import React from "react";

const Label = ({ htmlFor, children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="absolute uppercase font-rajdhani font-medium left-0 top-0 text-white/60 transition-all duration-300 ease-in-out pointer-events-none peer-focus:-top-5 peer-focus:text-sm peer-focus:text-white peer-placeholder-shown:top-0 peer-placeholder-shown:text-base
  "
    >
      {children}
    </label>
  );
};

export default Label;
