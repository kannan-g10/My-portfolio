import React, { useState } from "react";
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import MenuOverlay from "./MenuOverlay";
import { BsSun } from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";

function Header({ theme, handleThemeSwitch }) {
  const navbarLists = [
    { id: 1, title: "Home", flow: "home" },
    { id: 2, title: "About", flow: "about" },
    { id: 3, title: "Skills", flow: "skills" },
    { id: 4, title: "Contact", flow: "contact" },
  ];

  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-between shadow-2xl px-2 py-2 h-32">
      <div>
        <h2 className="text-[24px] dark:text-white text-[#021F34] font-bold">
          Kannan
          <span className="p-1 dark:text-orange-700 text-orange-500">
            Gurusamy
          </span>
        </h2>
      </div>
      <div className="hidden md:flex gap-4">
        {navbarLists.map((navbarList) => (
          <a
            key={navbarList.id}
            href={`#${navbarList.flow}`}
            className="dark:text-white sm:text-[#021F34] font-semibold text-[20px] w-24 py-2 text-center px-3 hover:border border-red-500 rounded-2xl cursor-pointer hover:shadow-md"
          >
            {navbarList.title}
          </a>
        ))}
        <h2 className="dark:text-white text-[#021F34] font-semibold hover:shadow-md py-2 text-[20px] px-3 border border-red-500 rounded-xl cursor-pointer hover:bg-gradient-to-r from-red-500 to-red-800">
          Hire Me
        </h2>
      </div>
      <div className="md:hidden">
        {!toggle ? (
          <HiBars3BottomRight
            className="dark:text-white text-[#021F34] text-[22px]"
            onClick={() => setToggle(!toggle)}
          />
        ) : (
          <HiOutlineXMark
            className="dark:text-white text-[#021F34] text-[22px]"
            onClick={() => setToggle(!toggle)}
          />
        )}
        {toggle && <MenuOverlay items={navbarLists} />}
      </div>
      <div>
        {theme === "dark" ? (
          <BsSun
            className="dark:text-white text-[#021F34] hover:shadow-xl my-3 cursor-pointer ring-2 rounded-xl border-2 border-[#021F34] p-1"
            size={30}
            onClick={handleThemeSwitch}
          />
        ) : (
          <BiSolidMoon
            className="dark:text-white text-[#021F34] hover:shadow-xl my-3 cursor-pointer ring-2 rounded-xl border-2 border-[#021F34] p-1"
            size={30}
            onClick={handleThemeSwitch}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
