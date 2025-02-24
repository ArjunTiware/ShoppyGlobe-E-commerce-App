import React from "react";
import { useDispatch } from "react-redux";
import {
  addtocart,
  removefromcart,
  decreaseQuantity,
} from "../../Store/Cartslice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function handlePlusclick(item) {
    dispatch(addtocart(item));
  }

  function handleDelete(id) {
    dispatch(removefromcart(id));
  }
  function handleMinusClick(id) {
    dispatch(decreaseQuantity(id));
  }

  return (
    <>
      <div className="flex gap-2 shadow-md bg-white justify-around ">
        <div className="w-1/5   p-2">
          <img src={item.thumbnail} className="w-full" alt="" />
        </div>

        <div className="w-2/4 flex gap-4 flex-col  mt-3">
          <h1 className="font-medium text-justify">{item.description}</h1>

          <div className="flex gap-5">
            <p
              onClick={() => {
                handleDelete(item.id);
              }}
              className="self-start cursor-pointer p-2 text-red-600"
            >
              {" "}
              <i className="fa-solid fa-x"></i> Remove From Cart
            </p>
            <div className="w-fit border-2 p-1 border-yellow-300 self-center   ">
              <div className="flex justify-center ">
                <div
                  onClick={() => {
                    handleMinusClick(item.id);
                  }}
                  className={`px-2 bg-slate-300 ${
                    item.quantity > 1 ? "" : "hidden"
                  } cursor-pointer hover:bg-black hover:text-white`}
                >
                  -
                </div>
                <div
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                  className={`px-2 bg-slate-300 ${
                    item.quantity > 1 ? "hidden" : ""
                  } hover:bg-black cursor-pointer hover:text-white`}
                >
                  <i className="fa-solid fa-trash fa-xs"></i>
                </div>
                <div className="px-2">{item.quantity}</div>
                <div
                  onClick={() => {
                    handlePlusclick(item);
                  }}
                  className="px-2 bg-slate-300 hover:bg-black hover:text-white"
                >
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center   items-center">
          <h1 className="text-2xl  font-bold">{Math.floor(item.price)}$</h1>
        </div>
      </div>
    </>
  );
};

export default CartItem;
