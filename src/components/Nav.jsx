import React from "react";
import "../App.css";
import { useState } from "react";
import ButtonContact from "./ButtonContact";

function Nav() {
  let Links = [
    { name: "About", link: "/" },
    { name: "Services", link: "/" },
    { name: "Projects", link: "/" },
  ];
  let [open, setOpen] = useState(true);

  return (
    <nav className="p-5 md:flex md:items-center md:justify-between md:p-6">
      <div className="flex items-center justify-between ">
        <span className="cursor-pointer text-2xl lg:p-3 xl:p-5">
          <img src="images/logo.svg" alt="Logo" className="w-40" />
        </span>

        <span className="mx-2 block cursor-pointer text-3xl md:hidden">
          <img
            name="menu"
            src="images/icon-hamburger.svg"
            alt="Icono Hamburguesa"
            onClick={() => setOpen(!open)}
          />
        </span>
      </div>

      <ul
        className={`absolute mt-5 w-[21rem] bg-white pb-10 text-center md:relative md:mt-0 md:flex md:w-auto md:items-center md:bg-inherit md:pb-0 ${
          open ? "opacity-100" : "top-[-490px]"
        }  md:opacity-100`}
      >
        {Links.map((link) => (
          <li
            key={link.name}
            className="my-10 text-lg md:my-0 md:ml-8 lg:text-xl"
          >
            <a href={link.link} className="text-[#5A636C] md:text-white">
              {link.name}
            </a>
          </li>
        ))}
        <ButtonContact>CONTACT</ButtonContact>
      </ul>
    </nav>
  );
}

export default Nav;
