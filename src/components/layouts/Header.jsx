import React, { useEffect, useState } from "react";
import { RxTriangleDown } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../../assets";
import { navigation } from "../../constants";
import Button from "../ui/Button";
import DropdownMenu from "../ui/DropdownMenu";

const Header = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 500);
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActiveItem = (item) => {
    if (item.link && location.pathname === item.link) return true;

    if (item.dropdown) {
      return item.dropdown.some((dropdownItem) => {
        if (location.pathname === dropdownItem.link) return true;
        return false;
      });
    }
    return false;
  };

  return (
    <header
      className={`z-[999] ${
        location.pathname === "/thankyou" ? "hidden" : ""
      } ${
        isAtTop
          ? "absolute bg-white"
          : isScrollingUp
          ? "fixed translate-y-0 bg-white"
          : "fixed -translate-y-full"
      } w-full h-[60px] flex items-center transition-all duration-200 ease-linear`}
    >
      <nav className="flex items-center h-full justify-between w-full relative px-3 py-1.5 border-b-2 border-b-secondary-600">
        <Link to="/">
          <img src={logo} alt="Ink Nest Publishing" className="max-w-40" />
        </Link>
        <ul className="flex items-center justify-center gap-4 font-rajdhani font-semibold uppercase text-[14.5px] xl:text-base">
          {navigation.map((item, idx) => {
            const isDropdownActive = item.dropdown && activeDropdown === idx;
            const Wrapper = item.link ? Link : "span";
            return (
              <li
                key={idx}
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  setActiveDropdown(idx);
                }}
                onMouseLeave={(e) => {
                  e.stopPropagation();
                  setActiveDropdown(null);
                }}
                className={`relative ${
                  isActiveItem(item)
                    ? "text-primary"
                    : "text-black hover:text-primary"
                }`}
              >
                <Wrapper
                  {...(item.link && { to: item.link })}
                  className="select-none flex items-center gap-1"
                >
                  <span>{item.title}</span>
                  {item.dropdown && (
                    <span
                      className={`transform transition-transform duration-300 ${
                        isDropdownActive ? "rotate-180" : ""
                      }`}
                    >
                      <RxTriangleDown />
                    </span>
                  )}
                </Wrapper>
                {item.dropdown && isDropdownActive && (
                  <DropdownMenu visible={isDropdownActive}>
                    <ul className="flex flex-col divide-y divide-neutral-300 overflow-hidden rounded-lg min-w-48 border border-black shadow-[0_0_20px_5px] shadow-black/20">
                      {item.dropdown.map((dropdownItem, idx) => (
                        <li
                          key={idx}
                          className={`${
                            location.pathname === dropdownItem.link
                              ? "bg-primary text-white"
                              : "bg-white text-black hover:bg-primary-50"
                          }`}
                        >
                          <Link
                            to={dropdownItem.link}
                            className="p-2 inline-block w-full whitespace-nowrap transition-all duration-200 ease-in-out"
                          >
                            {dropdownItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </DropdownMenu>
                )}
              </li>
            );
          })}
        </ul>
        <div>
          <Button small dark to="/contact">
            Contact us
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
