import React from "react";
import { BsMouse2Fill } from "react-icons/bs";

import logo from "../assets/my-avatar.png";

function Hero() {
  return (
    <div
      id="home"
      className="h-[800px] grid grid-cols-1 md:grid-cols-2 dark:text-white text-[#021F34] mt-32"
    >
      <div className="m-10">
        <h1 className="font-bold text-6xl mx-10 my-7">I am Kannan G</h1>
        <h2 className="dark:text-[#98C0C6] text-slate-400 text-4xl mx-10 my-5">
          Frontend Developer
        </h2>
        <div className="mt-4 flex gap-2 mx-10 my-4">
          <button className="px-10 py-3 dark:bg-[#01162A] border dark:border-white border-[#021F34] font-bold rounded-md dark:hover:bg-[#0556F3] hover:bg-[#0556F3] dark:hover:text-white hover-text-[#021F34]">
            Resume
          </button>
          <button className="px-5 py-2 dark:bg-[#01162A] border dark:border-white border-[#021F34] font-bold rounded-md dark:hover:bg-[#0556F3] hover:bg-[#0556F3] dark:hover:text-white hover-text-[#021F34]">
            <BsMouse2Fill />
          </button>
        </div>
      </div>
      <div>
        <img src={logo} alt="Profile" className="m-auto " />
      </div>
    </div>
  );
}

export default Hero;
