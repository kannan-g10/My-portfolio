import React from "react";

function MenuOverlay({ items }) {
  return (
    <div className="absolute left-0 h-full flex flex-col w-full backdrop-blur-lg mt-5">
      {items.map((item) => (
        <a
          key={item.id}
          href={item.flow}
          className="dark:text-white text-[#021F34] text-[24px] mb-6 mt-10 w-36 mx-auto hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer text-center"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}

export default MenuOverlay;
