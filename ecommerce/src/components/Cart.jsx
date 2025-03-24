function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}