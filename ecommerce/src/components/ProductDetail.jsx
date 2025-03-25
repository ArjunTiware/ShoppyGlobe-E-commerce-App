import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Failed to fetch product details');
      }
    };
    fetchProduct();
  }, [id]);

  if (error) return <div className="text-center p-4 text-red-500">{error}</div>;
  if (!product) return <div className="text-center p-4">Loading...</div>;

  return (
    <div className="p-6">
      <Link
        to="/"
        className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-4"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Products
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Product Images */}
        <div className="space-y-4">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-w-md object-contain rounded-lg shadow-md"
          />
          <div className="flex space-x-2">
            {product.images.slice(0, 1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.title} thumbnail ${index}`}
                className="w-16 h-16 object-contain border border-gray-300 rounded-lg"
              />
            ))}
          </div>
        </div>
        {/* Right: Product Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-gray-600">{product.category}</p>
          <div className="flex items-center space-x-2">
            <span className="text-yellow-500">★</span>
            <span className="text-gray-600">{product.rating}</span>
            <span className="text-gray-600">Brand: {product.brand || 'Glamour Beauty'}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price}
            </span>
            <span className="text-green-600">
              {product.discountPercentage}% off
            </span>
          </div>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-gray-600">Stock: {product.stock} units available</p>
          <button
            onClick={() => dispatch(addItem(product))}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;