import React, { useState } from "react";
import { use } from "react";
// import img from "../assets/Black and White Star Y2k Streetwear Logo.png"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let naviagte = useNavigate();

  const [value, setValue] = useState("");

  function handleClick() {
    naviagte(`/search/${value}`);
    setValue("");
  }
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  let cart = useSelector((state) => state.cart.item);
  let stock = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <>
      <nav className="bg-white flex z-50 justify-between border-b-2 fixed p-3 w-full">
        {/* nav logo */}
        <div className="text-white">
          <span className="font-bold text-orange-400">
            CART <sub className="font-semibold text-green-400">FLY</sub>{" "}
            <i className="fa-brands text-white fa-fly"></i>
          </span>
        </div>

        {/* Nav Search Bar */}

        <div className="flex ">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="search for products"
            className="border-1 w-60 rounded-l-md bg-gray-200 p-1 outline-none"
          />
          <div
            onClick={handleClick}
            className="p-1 inline-block hover:bg-gray-300 rounded-r-md bg-gray-200"
          >
            <i className="fa-solid text-xl text-red-500 fa-magnifying-glass "></i>
          </div>
        </div>

        {/* nav link list */}
        <ul className="flex text-black  ml-10 gap-3">
          <Link to={"/"}>
            <li className="font-semibold  text-xl hover:text-red-500">
              {" "}
              <i>Home</i>
            </li>
          </Link>

          <Link to={"/new/product"}>
            <li className="font-semibold  text-xl hover:text-red-500">
              {" "}
              <i>{isLoggedIn ? "add new product" : ""}</i>
            </li>
          </Link>

          <Link to={"/addresses"}>
            <li className="font-semibold  text-xl hover:text-red-500">
              {" "}
              <i>My address</i>
            </li>
          </Link>

          <li className="font-semibold  text-xl hover:text-red-500">
            {" "}
            <i>{user && user.username}</i>
          </li>
        </ul>

        {/* item cart */}

        <Link to={"/cart"}>
          <div className="  mr-5">
            <span
              className={`bg-orange-500 px-1 ${stock ? "inline" : "hidden"} text-sm rounded-full absolute top-1 right-7`}
            >
              {stock}
            </span>
            <i className="fa-solid fa-xl  fa-cart-shopping"></i>
          </div>
        </Link>
      </nav>
      <br /> <br /> <br />
    </>
  );
};

export default Navbar;
