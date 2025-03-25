import React from 'react';

function ProductItem({ product, onAddToCart }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-32 h-32 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 text-center truncate w-full">
        {product.title}
      </h3>
      <p className="text-gray-600">beauty</p>
      <div className="flex items-center space-x-2 my-2">
        <span className="text-xl font-bold text-gray-800">${product.price}</span>
        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="text-gray-600 ml-1">{product.rating}</span>
        </div>
      </div>
      <button
        onClick={onAddToCart}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductItem;