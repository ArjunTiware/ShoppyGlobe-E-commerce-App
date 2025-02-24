import React from "react";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Store/Cartslice";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  function handleClick() {
    console.log(document.cookie);
    if (isLoggedIn) {
      axios
        .post("http://localhost:8000/api/cart", item, { withCredentials: true })
        .then((res) => {
          console.log(res);
        });
    }
  }

  return (
    <>
      <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
        <Link className="flex justify-center" to="#">
          <img
            className="h-60 rounded-t-lg object-cover"
            src={item.thumbnail}
            alt="product image"
          />
        </Link>
        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">
          Sale
        </span>
        <div className="mt-4 px-5 pb-5">
          <a href="#">
            <h1 className="text-ellipsis font-semibold overflow-hidden whitespace-nowrap text-xl ">
              {item.title}
            </h1>
          </a>
          <div className="flex flex-col gap-2 justify-between">
            <p>
              <span className="text-2xl font-bold text-slate-900">$249</span>
              <span className="text-sm text-slate-900 line-through">$299</span>
            </p>
            <Link>
              <button
                href="#"
                onClick={handleClick}
                className="flex items-center rounded-md bg-slate-900 w-full px-5 py-2.5 text-center font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Add to cart &nbsp; <i className="fa-solid fa-cart-shopping"></i>{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
