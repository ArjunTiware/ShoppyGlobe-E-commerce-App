import { useState } from "react";
import { close, menu } from "../assets";
import { navLinks } from "../constants";

const Header = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <nav
      id="navbar"
      className="w-full flex justify-between items-center navbar"
    >
      <img
        src={logo}
        alt="logo"
        className="w[100px] h-[100px] animate__animated animate__fadeInUp"
      />

      <ul className="list-none mdII:flex hidden justify-center items-center flex-1 animate__animated animate__fadeInUp">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-lg ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-gray-600 hover:text-black`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="mdII:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[50px] h-[50px] cursor-pointer object-contain"
          onClick={() => settoggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 absolute top-[4.35rem] right-8 mx-4 my-2 px-5 bg-gray-800 rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col z-10 w-full justify-center items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-lg ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-gray-400 hover:text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="resume_button pr-2 mr-2">
        <a href="https://drive.google.com/file/d/1YmEveiCLduLqsaczIFs4faGGeiDWX1gd/view?usp=sharing" target="_blank">
          <button className=" font-semibold text-white ease-in-out duration-300 text-lg bg-slate-900 hover:bg-slate-600 px-4  py-1 rounded-full">
            RESUME <i class="fa-solid fa-download"></i>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Header;
