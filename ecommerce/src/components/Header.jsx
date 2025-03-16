import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { ShoppingCart, Menu, X } from "lucide-react";
import { selectCartItemsCount } from "../redux/selectors";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemsCount = useSelector(selectCartItemsCount);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            ShoppyGlobe
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/checkout"
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Checkout
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart
                className="text-gray-700 hover:text-primary transition-colors"
                size={24}
              />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mt-4 md:hidden flex flex-col space-y-4">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/checkout"
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Checkout
            </Link>
            <Link
              href="/cart"
              className="text-gray-700 hover:text-primary transition-colors flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingCart size={20} className="mr-2" />
              Cart ({cartItemsCount})
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
