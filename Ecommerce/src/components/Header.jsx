import { useState } from "react";
import { close, logo, menu } from "../assets";
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

      <ul className="list-none mdII:flex flex justify-center items-center flex-1 animate__animated animate__fadeInUp">
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
      <div className="cart_button pr-2 mr-2">
          <button className=" font-semibold text-2xl">
            <i class="fa-solid fa-cart-shopping fa-bounce"></i>
          </button>
      </div>
    </nav>
  );
};

export default Header;
