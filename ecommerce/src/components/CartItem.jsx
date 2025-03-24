import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="cart-item">
      <h4>{item.title}</h4>
      <p>${item.price}</p>
      <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
    </div>
  );
}

export default CartItem;