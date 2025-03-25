import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { addItem, removeItem } from '../redux/cartSlice';

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncreaseQuantity = (item) => {
    dispatch(addItem(item));
  };

  const handleDecreaseQuantity = (item) => {
    const itemInCart = cartItems.filter((cartItem) => cartItem.id === item.id);
    if (itemInCart.length === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const subtotal = cartItems.reduce((total, item) => {
    const itemCount = cartItems.filter((cartItem) => cartItem.id === item.id).length;
    return total + item.price * itemCount;
  }, 0);

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
                {[...new Set(cartItems.map(item => item.id))].map((id) => {
                  const item = cartItems.find((cartItem) => cartItem.id === id);
                  const quantity = cartItems.filter((cartItem) => cartItem.id === id).length;
                  return (
                    <CartItem
                      key={item.id}
                      item={item}
                      quantity={quantity}
                      onIncrease={() => handleIncreaseQuantity(item)}
                      onDecrease={() => handleDecreaseQuantity(item)}
                    />
                  );
                })}
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
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Continue Shopping
              </Link>
              <Link
                to="/checkout"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;