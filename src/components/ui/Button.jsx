import React from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { Link } from "react-router-dom";

const Button = ({
  children,
  onClick,
  type = "button",
  className,
  disabled,
  icon = RxArrowTopRight,
  iconClassName,
  to,
  secondary = false,
  dark = false,
  small = false,
}) => {
  const Tag = to ? Link : "button";
  const Icon = icon;
  return (
    <Tag
      {...(to
        ? { to: to }
        : { onClick: onClick, type: type, disabled: disabled })}
      className={`flex justify-center gap-2 items-center ${
        small
          ? "shadow-sm text-sm py-1.5 px-3"
          : "shadow-xl text-base px-4 py-2"
      } bg-gray-50 backdrop-blur-md lg:font-semibold border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full ${
        dark
          ? "before:left-0 hover:before:left-full text-gray-50 hover:text-black"
          : "before:-left-full hover:before:left-0  hover:text-gray-50"
      } before:rounded-full ${
        secondary ? "before:bg-secondary-600" : "before:bg-primary"
      } before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 overflow-hidden border-2 rounded-full group cursor-pointer ${className}`}
    >
      {children}
      <Icon
        className={`${
          small ? "size-6 p-1" : "size-8 p-2"
        } justify-end group-hover:rotate-45 ${
          dark
            ? "bg-gray-50 border-transparent group-hover:border-gray-700"
            : "group-hover:bg-gray-50 border-gray-700 group-hover:border-transparent"
        } ease-linear text-gray-700 duration-300 rounded-full border ${iconClassName}`}
      />
    </Tag>
  );
};

export default Button;
