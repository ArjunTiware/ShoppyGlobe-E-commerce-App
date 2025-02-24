import React from "react";
import { Link } from "react-router-dom";

const GridCard = ({ item }) => {
  return (
    <>
      <div className=" h-80  w-64 border-2">
        <img src={item.src} className="h-full w-full" alt="" />
        <h1 className="text-white font-bold text-2xl relative text-center bottom-20 ">
          {item.category.toUpperCase()}
        </h1>
        <h1 className="text-white font-bold text-3xl relative  bottom-20 text-center">
          MIN . 40% OFF
        </h1>
      </div>
    </>
  );
};

export default GridCard;
