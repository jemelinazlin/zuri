import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  // State to track the cart and wishlist items
  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  // Retrieve cart and wishlist data from localStorage or context
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCartCount(storedCart.length);
    setWishlistCount(storedWishlist.length);
  }, []);

  return (
    <div className="bg-gray-100 shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-xl font-bold text-gray-800">ZURI TRENDS</Link>
          <Link to="/" className="text-gray-600 hover:text-gray-800">HOME</Link>
        </div>

        {/* Catalog Dropdown */}
        <div className="relative inline-block group">
          <button className="text-gray-600 hover:text-gray-800">Catalog</button>
          <div className="absolute hidden bg-gray-700 text-white py-2 w-48 group-hover:block">
            <Link to="/catalog/dresses" className="block px-4 py-2 hover:bg-gray-600">Dresses</Link>
            <Link to="/catalog/pants" className="block px-4 py-2 hover:bg-gray-600">Pants</Link>
            <Link to="/catalog/shirts" className="block px-4 py-2 hover:bg-gray-600">Shirts</Link>
            <Link to="/catalog/jackets" className="block px-4 py-2 hover:bg-gray-600">Jackets</Link>
          </div>
        </div>

        {/* Cart and Wishlist Icons */}
        <div className="flex items-center space-x-6">
          <Link to="/wishlist" className="text-gray-600 hover:text-gray-800 relative">
            <span className="material-icons">Wishlist</span>
            {wishlistCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" className="text-gray-600 hover:text-gray-800 relative">
            <span className="material-icons">Cart</span>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Other Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/about" className="text-gray-600 hover:text-gray-800">ABOUT US</Link>
          <Link to="/contact" className="text-gray-600 hover:text-gray-800">CONTACT</Link>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
