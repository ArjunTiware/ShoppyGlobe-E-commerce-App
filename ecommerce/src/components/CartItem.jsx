import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/cartSlice';

function CartItem({ item, quantity, onIncrease, onDecrease }) {
  const dispatch = useDispatch();

  return (
    <tr className="border-t">
      <td className="p-2 flex items-center space-x-4">
        <img src={item.thumbnail} alt={item.title} className="w-12 h-12 object-contain" />
        <span className="text-gray-800">{item.title}</span>
      </td>
      <td className="p-2 text-gray-800">${item.price}</td>
      <td className="p-2">
        <div className="flex items-center space-x-2">
          <button
            onClick={onDecrease}
            className="px-2 py-1 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={onIncrease}
            className="px-2 py-1 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            +
          </button>
        </div>
      </td>
      <td className="p-2 text-gray-800">${(item.price * quantity).toFixed(2)}</td>
      <td className="p-2">
        <button
          onClick={() => dispatch(removeItem(item.id))}
          className="text-red-500 hover:text-red-700"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
}

export default CartItem;