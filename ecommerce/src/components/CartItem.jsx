import React from "react";

function CartItem({ item, onRemove }) {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
}

export default CartItem;
