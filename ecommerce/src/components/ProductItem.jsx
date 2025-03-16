import React from "react";
import { Link } from "react-router-dom";
// import Image from "next/image";
import { Image } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Button } from "../components/ui/button";
import { ShoppingCart } from "lucide-react";

function ProductItem({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail,
        quantity: 1,
      })
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link href={`/product/${product.id}`}>
        <div className="h-48 overflow-hidden relative">
          <Image
            src={product.thumbnail || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {product.title}
          </h2>
          <p className="text-sm text-gray-500 truncate">{product.category}</p>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-primary font-bold">${product.price}</span>
            <span className="text-sm text-gray-600">{product.rating}★</span>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <Button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default ProductItem;
