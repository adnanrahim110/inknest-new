import React from "react";
import { Link } from "react-router-dom";
import { shapes_5 } from "../../assets";
import { contactDetails } from "../../constants";
import Label from "../ui/Label";

const Form = () => {
  return (
    <section className="relative py-16 bg-primary-900 overflow-hidden">
      <img
        src={shapes_5}
        className="absolute -top-5 mix-blend-multiply opacity-70 h-[105%]"
        alt=""
      />
      <div className="container">
        <div className="row items-center justify-between">
          <div className="lg:w-1/2">
            <h2 className="text-[33px] mb-12 text-white">
              Fill out the form below and let your next great adventure take
              off!
            </h2>
            <form className="contactForm">
              <div className="flex flex-col gap-7 input_wrapper">
                <div className="relative">
                  <input type="text" name="name" className="peer" />
                  <Label htmlFor="name">Full Name</Label>
                </div>
                <div className="relative">
                  <input type="text" name="email" className="peer" />
                  <Label htmlFor="email">Email Address</Label>
                </div>
                <div className="relative">
                  <input type="tel" name="phone" className="peer" />
                  <Label htmlFor="phone">Phone Number</Label>
                </div>
                <div className="relative">
                  <textarea rows={5} name="message" className="peer" />
                  <Label htmlFor="message">Message</Label>
                </div>
              </div>
            </form>
          </div>
          <div className="lg:w-5/12">
            <div className="relative w-full overflow-hidden rounded-2xl">
              <div className="absolute size-52 rounded-full -left-10 animate-pulse -top-10 blur-2xl bg-amber-700 opacity-30" />
              <div className="absolute size-52 rounded-full -right-10 animate-pulse -bottom-10 blur-2xl bg-secondary-600 opacity-30" />
              <div className="bg-white/5 border border-white/20 backdrop-blur-xs rounded-2xl px-5 py-10 overflow-hidden">
                <h3 className="text-white text-5xl mb-5">Get In Touch</h3>
                <ul className="flex flex-col divide-y divide-white/50">
                  {contactDetails.map((item, idx) => {
                    const Icon = item.icon;
                    const Tag = item.href ? Link : "li";
                    return (
                      <li key={idx} className="py-5 last:pb-0">
                        <Tag
                          {...(item.href && { to: item.href })}
                          className="flex items-center gap-3"
                        >
                          <span className="p-3 bg-primary rounded-full">
                            <Icon className="text-3xl text-white" />
                          </span>
                          <div className="flex flex-col">
                            <span className="text-white font-semibold text-xl font-rajdhani uppercase">
                              {item.name}
                            </span>
                            <span className="text-white/60">{item.text}</span>
                          </div>
                        </Tag>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
