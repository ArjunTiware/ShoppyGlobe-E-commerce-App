import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <nav className="header">
      <Link to="/">ShoppyGlobe</Link>
      <div>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </div>
    </nav>
  );
}

export default Header;