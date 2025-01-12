import React from 'react';

const CategoryCard = ({ category, image, title, price, onAddToCart, onAddToWishlist }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-full h-64 object-cover mb-4" />
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
      <p className="text-lg text-gray-600 mb-4">{price}</p>

      {/* Buttons for adding to cart and wishlist */}
      <div className="flex justify-between">
        <button
          onClick={onAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <button
          onClick={onAddToWishlist}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
