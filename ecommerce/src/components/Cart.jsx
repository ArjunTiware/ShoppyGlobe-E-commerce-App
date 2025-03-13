import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { removeFromCart } from "../redux/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} onRemove={handleRemoveFromCart} />
      ))}
    </div>
  );
}

export default Cart;
