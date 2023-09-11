import React from "react";
import about from "../assets/about-me.jpg";
import aboutI from "../assets/about-i.jpg";

function About() {
  return (
    <div id="about" className="sm:mt-20 md:mt-0">
      <div>
        <h1 className="dark:text-white text-[#021F34] text-3xl text-center font-bold">
          About Me
        </h1>
        <div className="border-2 w-20 mx-auto mt-5 border-cyan-500"></div>
      </div>
      <div className="mt-16 flex flex-col md:flex-row gap-28 mx-44">
        <img src={aboutI} alt="About Me" className="sm:h-32 md:h-72 " />
        <div className="dark:text-white p-2">
          <h2 className="font-bold text-4xl font-mono">Hello There</h2>
          <p className="mt-5 text-justify">
            I am Kannan G, from India!. I am passionate web developer and
            constantly learning and staying up-to-date with the latest
            technologies and best practices in the industry, and I am eager to
            bring my enthusiasm and dedication to any project or team I am a
            part of.
          </p>
          <div className="mt-5 flex flex-col md:flex-row">
            <div className="md:mr-14">
              <p className="text-[#00AAF2] font-bold">Name:</p>
              <p className="font-bold">Kannan G</p>
            </div>
            <div className="md:ml-12">
              <p className="text-[#00AAF2] font-bold">Email:</p>
              <p className="font-bold">gkannan271120@gmail.com</p>
            </div>
          </div>
          <div className="mt-5 flex flex-col md:flex-row">
            <div className="mr-14">
              <p className="text-[#00AAF2] font-bold">Phone:</p>
              <p className="font-bold">+91 8072344879</p>
            </div>
            <div className="">
              <p className="text-[#00AAF2] font-bold">Github:</p>
              <p className="font-bold">kannan-g10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
