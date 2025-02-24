import React from "react";
import { ItemandPrice } from "./ItemandPrice";
import getPrice from "../../Helper/getPrice";
import { Link } from "react-router-dom";
const PriceDetails = ({ total, cart }) => {
  let coupon = total > 100 ? 10 : 0;
  let mrp = getPrice(cart);

  return (
    <>
      <h1 className="text-xl mb-2 font-semibold text-gray-600">
        Price Details
      </h1>

      <hr />

      <ItemandPrice price={`${mrp}$`} name={`Price(${cart.length} items)`} />
      <ItemandPrice price={`${Math.floor(mrp - total)}$`} name={"Discount"} />
      <ItemandPrice price={`Free `} name={"Delivery Charges"} />
      <ItemandPrice price={`${coupon}$`} name={"Coupons for you"} />
      <hr />
      <div className="flex justify-between">
        <h1 className="text-xl font-semibold">Total Amount</h1>
        <h1 className="text-xl font-semibold">{Math.floor(total) - coupon}$</h1>
      </div>
      <hr />

      <h1 className="text-green-500 text-lg">
        You will Save {Math.floor(mrp - total) + coupon}$ on this Order
      </h1>

      <Link to={"/checkout"}>
        <button className="self-end w-full bg-red-500 hover:bg-black font-semibold text-white p-2 px-3 rounded-lg">
          PROCEED TO CHECKOUT
        </button>
      </Link>
    </>
  );
};

export default PriceDetails;
