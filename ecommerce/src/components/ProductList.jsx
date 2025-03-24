import React, { useState } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cartSlice';

function ProductList() {
  const { products, loading, error } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={() => dispatch(addItem(product))}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;