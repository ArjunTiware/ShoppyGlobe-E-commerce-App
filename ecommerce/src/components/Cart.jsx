import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { increaseQuantity, decreaseQuantity, removeItem } from '../redux/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    return total + (item.price * (item.quantity || 1));
  }, 0);

  // Debugging: Log cartItems to verify state updates
  console.log('Cart Items:', cartItems);
  console.log('Subtotal:', subtotal);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-600">
                  <th className="p-2">Product</th>
                  <th className="p-2">Price</th>
                  <th className="p-2">Quantity</th>
                  <th className="p-2">Total</th>
                  <th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={() => handleIncreaseQuantity(item.id)}
                    onDecrease={() => handleDecreaseQuantity(item.id)}
                    onRemove={() => handleRemoveItem(item.id)}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-6">
            <div>
              <p className="text-lg font-semibold text-gray-800">Subtotal</p>
              <p className="text-xl font-bold text-gray-800">${subtotal.toFixed(2)}</p>
            </div>
            <div className="space-x-4">
              <Link
                to="/"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center"
              >
                Continue Shopping
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;