import React from "react";

export default function ButtonContact(props) {
  return (
    <a
      className="font-fraunces mx-5 rounded-r-full rounded-l-full bg-[#FAD400] py-3 px-5 text-black md:bg-inherit md:text-white hover:md:bg-[#73cffd] lg:text-xl"
      href="#contacts"
    >
      {props.children}
    </a>
  );
}
