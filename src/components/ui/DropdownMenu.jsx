import React, { useEffect, useState } from "react";

const DropdownMenu = ({ children, extraClasses = "", visible }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (visible) {
      setAnimate(false);
      const timer = setTimeout(() => setAnimate(true), 10);
      return () => clearTimeout(timer);
    }
  }, [visible]);

  return (
    <div
      className={`${extraClasses} absolute top-full -left-5 pt-2.5 transition-all duration-200 ease-out transform ${
        animate ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default DropdownMenu;
