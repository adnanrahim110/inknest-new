import React from "react";
import Button from "../ui/Button";

const Signup = () => {
  return (
    <div className="bg-black/60 backdrop-blur-xs rounded-bl-[18%] py-12 2xl:py-16 px-10">
      <h2 className="text-[40px] 2xl:text-5xl font-bold mb-8 text-center text-white">
        Let's get started
      </h2>
      <form className="signup_form">
        <div className="flex flex-col gap-4 2xl:gap-5 items-center *:relative *:w-full  ">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className={`rounded-tl-[20px]`}
            />
          </div>
          <div>
            <input type="email" name="email" placeholder="Email Address" />
          </div>
          <div>
            <input type="tel" name="phone" placeholder="Phone Number" />
          </div>
          <div>
            <textarea
              name="message"
              rows={4}
              placeholder="Message"
              className={`rounded-br-[20px]`}
            />
          </div>
          <div className="flex justify-center">
            <Button dark>Send Message</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
