function ProductItem({ product, onAddToCart }) {
  return (
    <div className="product-item">
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}