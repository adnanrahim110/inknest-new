import React from "react";
import { Link } from "react-router-dom";
import { logo_w } from "../../assets";
import { navigation } from "../../constants";
import Anchor from "../ui/Anchor";

const Footer = () => {
  return (
    <footer className="bg-black pt-10">
      <div className="container">
        <div className="row justify-between divide-x divide-neutral-800">
          <div className="lg:w-[30%]">
            <div>
              <img
                src={logo_w}
                className="max-w-52 mb-5"
                alt="Ink Nest Publishing"
              />
              <p className="text-neutral-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                excepturi non sed corporis nulla distinctio fugiat expedita unde
                architecto saepe!
              </p>
            </div>
          </div>
          <div className="lg:w-1/5">
            <div className="flex flex-col">
              <h3 className="text-primary text-2xl font-bold mb-3">Services</h3>
              <ul className="flex flex-col gap-2">
                {navigation
                  .slice(1, 5)
                  .filter((item) => item.dropdown)
                  .map((item, idx) => {
                    return (
                      <li key={idx} className="not-last:mr-2">
                        <Anchor
                          to={item.link}
                          className="text-neutral-400 font-medium"
                        >
                          {item.title}
                        </Anchor>
                        {item.dropdown && (
                          <ul className="flex flex-col pl-4 relative before:absolute before:top-1.5 before:left-0.5 before:w-0 before:border-r before:border-r-neutral-500 before:h-[87%]">
                            {item.dropdown.map((dropdownItem, idx) => {
                              return (
                                <li key={idx} className="not-last:mr-2">
                                  <Anchor
                                    to={dropdownItem.link}
                                    className="text-neutral-500 font-rajdhani uppercase font-medium text-sm"
                                  >
                                    {dropdownItem.title}
                                  </Anchor>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/5">
            <h3 className="text-primary text-2xl font-bold mb-3">Services</h3>
            <div className="flex flex-col">
              <ul className="flex flex-col gap-1">
                {navigation
                  .filter((_, idx) => idx === 0 || idx === 2 || idx === 3)
                  .sort((a, b) => {
                    if (!a.dropdown && b.dropdown) return -1;
                    if (a.dropdown && !b.dropdown) return 1;
                  })
                  .map((item, idx) => {
                    return (
                      <li key={idx} className="not-last:mr-2">
                        <Anchor
                          to={item.link}
                          className="text-neutral-400/90 font-medium"
                        >
                          {item.title}
                        </Anchor>
                        {item.dropdown && (
                          <ul className="flex flex-col pl-4 relative before:absolute before:top-1.5 before:left-0.5 before:w-0 before:border-r before:border-r-neutral-500 before:h-[92%]">
                            {item.dropdown.map((dropdownItem, idx) => {
                              return (
                                <li key={idx} className="not-last:mr-2">
                                  <Anchor
                                    to={dropdownItem.link}
                                    className="text-neutral-500 font-rajdhani uppercase font-medium text-sm"
                                  >
                                    {dropdownItem.title}
                                  </Anchor>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/5">
            <div className="flex flex-col">
              <h3 className="text-primary text-2xl font-bold mb-3">
                Other Services
              </h3>

              <ul className="flex flex-col gap-1">
                {navigation[5].dropdown.map((item, idx) => {
                  return (
                    <li key={idx} className="not-last:mr-2">
                      <Anchor
                        to={item.link}
                        className="text-neutral-400 font-medium"
                      >
                        {item.title}
                      </Anchor>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="flex flex-col mt-7">
              <h3 className="text-primary text-2xl font-bold mb-3">
                Quick Links
              </h3>
              <ul className="flex items-center gap-2.5">
                {[
                  { title: "About", link: "/about-us" },
                  { title: "Contact", link: "/contact" },
                ].map((item, idx) => {
                  return (
                    <li key={idx} className="not-last:mr-2">
                      <Anchor to={item.link} className="text-neutral-400">
                        {item.title}
                      </Anchor>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t border-primary/40 mt-10 py-5 flex items-center">
            <p className="text-neutral-600 font-rajdhani uppercase font-medium text-sm">
              Copyright &copy; {new Date().getFullYear()} Ink Nest Publishing
              <span className="mx-2">|</span>
              All Rights Reserved
            </p>
            <span className="mx-10 w-24 inline-block bg-white/15 h-px" />
            <ul className="flex items-center divide-x divide-white/20">
              {[
                { title: "Privacy Policy", link: "/privacy-policy" },
                { title: "Terms & Conditions", link: "/terms-and-conditions" },
              ].map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className="leading-none not-last:pr-2 not-last:mr-2"
                  >
                    <Anchor
                      to={item.link}
                      className="text-neutral-600 font-rajdhani uppercase font-medium text-sm leading-none pb-px"
                    >
                      {item.title}
                    </Anchor>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
