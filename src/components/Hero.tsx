import React from "react";
import image from "../images/headerimage-without-text.png.png";
const Hero = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-7 gap-[60px] ">
        <div className="col-span-3">
          <h1 className="font-bold text-5xl leading-[56px]">Take ideas from better to best</h1>
          <p className="font-normal text-lg text-[#050038B8] mt-5">
            Miro is your team's visual platform to connect, collaborate, and
            create — together.
          </p>
          <div>
            <input
              className="w-full h-[48px] rounded-[32px] border-[1px] ps-6 mt-10"
              type="email"
              name=""
              id=""
              placeholder="Enter your work email"
            />
            <button
              type="submit"
              className="w-full h-[48px] rounded-[32px] bg-[#4262FF] my-2 text-white"
            >
              Sign up free →
            </button>
          </div>

          <small className="text-sm font-normal text-[#05003866]">Collaborate with your team within minutes</small>
        </div>
        <div className="col-span-4 w-[640px] h-[463px] mb-20">
          <img className="sm:w-full" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
