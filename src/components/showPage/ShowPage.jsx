import React, { useEffect, useState } from "react";
import UseFetchData from "../../Hooks/UseFetchData";
import Reviews from "./Reviews";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addtocart } from "../../Store/Cartslice";

const ShowPage = ({ id }) => {
  const [product, setProduct] = useState([]);

  let dispatch = useDispatch();
  console.log(id);

  let { data, loading, error } = UseFetchData(
    `http://localhost:8000/api/product/${id}`
  );
  useEffect(() => {
    if (data && data.data) {
      setProduct(data.data);
    }
  }, [data]);

  if (loading) {
    return (
      <section className="h-screen w-screen justify-center flex items-center">
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }
  if (error) {
    return <div>{error.msg}</div>;
  }

  if (!product) {
    return <div>No Data Available</div>;
  }

  let Price = Math.floor(product.price);
  let discount = Math.floor(product.discount);

  return (
    <>
      <section className="flex mt-4">
        <div className="w-2/5 sticky  h-fit top-20 ">
          <img src={product.thumbnail} alt="" className="h-[500px]" />
        </div>

        <div className="w-1/2  flex flex-col gap-3  justify-center">
          {/* Title and Category in div  */}
          <div className="flex gap-2 items-center">
            <h1 className="text-3xl font-semibold">{product.title}</h1>
            <p className="text-xl ">{product.rating}</p>
            <span className="fa fa-star text-xl text-orange-400"></span>
          </div>
          <p className="font-semibold text-gray-700">{product.brand}</p>
          <p className=" w-4/5">{product.description}</p>
          {/* Price and discount Information */}
          <div className="flex">
            <h1 className="text-bold text-2xl">{Math.floor(product.price)}$</h1>{" "}
            &nbsp;
            <span className=" text-lg line-through">
              {Math.floor((Price * 100) / (100 - discount))}$
            </span>{" "}
            &nbsp;
            <h1 className="text-lg font-medium text-green-500">
              {discount}% OFF
            </h1>
          </div>
          <p className="text-gray-600 font-thin">
            Free Delivery <i className="fa-solid fa-truck"></i>{" "}
          </p>
          <h1
            className={`${product.Availability == "In Stock" ? "text-green-500" : "text-red-500"} font-semibold`}
          >
            {product.Availability}
          </h1>
          <h1>{product.returnPolicy}</h1>
          <button
            onClick={() => dispatch(addtocart(data))}
            disabled={product.Availability === "Out of Stock"}
            className="bg-red-600 mt-2 text-white rounded-lg font-semibold h-10 w-40 disabled:hidden hover:bg-black p-2"
          >
            <i className="fa-solid fa-bag-shopping"></i> &nbsp; Add to Cart
          </button>
          {/* Extra Information */}
          {/* <ExtraInformation item={product}/> */}
          {/* Rating and reviews  */}
          <div className="flex justify-center gap-2 flex-wrap">
            <h1 className="text-center text-xl w-full">Rating And Reviews</h1>
            {product.reviews &&
              product.reviews.map((e) => <Reviews key={nanoid()} review={e} />)}
          </div>
          <br /> <br />
        </div>
      </section>
    </>
  );
};

export default ShowPage;
