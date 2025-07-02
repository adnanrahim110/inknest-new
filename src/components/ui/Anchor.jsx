import React from "react";
import { Link } from "react-router-dom";

const Anchor = ({ children, className, to }) => {
  return (
    <Link
      to={to}
      className={`${className} font-rajdhani uppercase font-medium hover:text-white inline-block relative before:absolute before:bottom-0 before:left-0 before:w-0 before:h-px before:bg-white before:transition-all before:duration-300 hover:before:w-full transition-all duration-300 ease-in-out`}
    >
      {children}
    </Link>
  );
};

export default Anchor;
