import React from "react";
import PriceDetails from "../Components/Cart/PriceDetails";
import CartItem from "../Components/Cart/CartItem";
import { useSelector } from "react-redux";
import cartimg from "../assets/shopping-cart.png";
import { nanoid } from "@reduxjs/toolkit";

const Cart = () => {
  const cart = useSelector((state) => state.cart.item);
  if (!cart.length > 0) {
    return (
      <>
        <section className="flex justify-center flex-col items-center h-screen w-full">
          <img src={cartimg} className="h-80 w-80" alt="" />
          <h1 className="text-2xl font-bold"> Your Cart is Empty</h1>
        </section>
      </>
    );
  }
  let total_price = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);

  return (
    <>
      <br />
      <h1 className="text-2xl ml-32 font-semibold">
        SHOPING CART &nbsp;
        <i className="fa-solid text-3xl fa-bag-shopping"></i>
      </h1>

      <br />
      <section className="flex gap-4  container">
        {/* Cart Summary and Products */}
        <div className="w-3/4 flex p-2 h-[500px] outline-red-200 outline overflow-auto flex-col bg-slate-100 gap-6">
          {cart.map((e) => (
            <CartItem key={nanoid()} item={e} />
          ))}
        </div>

        {/* Price details */}
        <div className="w-1/4 flex h-fit sticky top-20 flex-col gap-3 p-3 shadow-xl rounded-xl  ">
          <PriceDetails total={total_price} cart={cart} />
        </div>
      </section>
    </>
  );
};

export default Cart;
