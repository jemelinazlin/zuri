import React, { useState, useEffect } from 'react';

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load wishlist items from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlistItems(storedWishlist);
  }, []);

  // Remove item from wishlist
  const removeFromWishlist = (index) => {
    const updatedWishlist = wishlistItems.filter((_, i) => i !== index);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Update localStorage
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-8">Your Wishlist</h2>
      <div className="space-y-6">
        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        ) : (
          wishlistItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
              <div className="flex items-center space-x-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-gray-500">{item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromWishlist(index)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Wishlist;
