import React, { useState } from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import Tailwind from "../assets/tailwind.png";
import ReactJS from "../assets/react.png";
import Github from "../assets/github.png";

function Skills() {
  const skills = [
    { name: Html, rate: "95%" },
    { name: Css, rate: "70%" },
    { name: Js, rate: "90%" },
    { name: Tailwind, rate: "80%" },
    { name: ReactJS, rate: "95%" },
    { name: Github, rate: "65%" },
  ];

  const [hoverMe, setHoverMe] = useState(false);

  return (
    <div id="skills" className="mt-52">
      <div>
        <h1 className="dark:text-white text-[#021F34] text-3xl text-center font-bold">
          Skills
        </h1>
        <div className="border-2 w-20 mx-auto mt-5 border-cyan-500"></div>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-20 gap-16 ">
        {skills.map((skill) => (
          <div key={skill.name} className="group">
            <div className="relative cursor-pointer group-hover:opacity-30">
              <img
                src={skill.name}
                alt={skill}
                className="w-28 h-28 rounded-full"
              />
            </div>
            <p className="relative left-8 bottom-[70px] font-bold text-2xl dark:text-white tect-[#021F34] invisible group-hover:visible cursor-pointer">
              {skill.rate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
