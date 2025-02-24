import { nanoid } from "@reduxjs/toolkit";
import React from "react";

const Reviews = ({ review }) => {
  let ratingg = review.rating;
  let star = new Array(ratingg).fill(true);
  let non_star = new Array(5 - ratingg).fill(false);

  return (
    <>
      <div className="p-4 shadow-xl hover:scale-105 hover:bg-slate-100 w-fit gap-2 flex flex-col items-center rounded-xl ">
        <h1 className="text-xl ">
          {" "}
          <i className="fa-solid fa-user"></i> {review.reviewerName}{" "}
        </h1>
        <p className="text-gray-600">{review.comment}</p>
        <div>
          {star.map((e, i) => (
            <span
              key={nanoid()}
              className="fa fa-star text-xs text-orange-400"
            ></span>
          ))}
          {non_star.map((e, i) => (
            <span key={nanoid()} className="fa fa-star text-xs "></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reviews;
