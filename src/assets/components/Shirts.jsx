import React, { useState, useEffect } from 'react';
import CategoryCard from '../components/CategoryCard';

const CatalogShirts = () => {
  // Sample data for categories of shirts
  const categories = [
    {
      category: 'Casual Tops',
      items: [
        { id: 1, src: 'https://i.pinimg.com/474x/66/b5/69/66b56916f5ef8582bd3c931f2ac27668.jpg', title: 'White Casual Top', price: 'KSh 800.00' },
        { id: 2, src: 'https://i.pinimg.com/474x/2c/0d/6a/2c0d6a2549adeba9b05c2911f73dd69d.jpg', title: 'Blue Casual Top', price: 'KSh 900.00' },
        { id: 3, src: 'https://i.pinimg.com/474x/c6/61/2f/c6612fa5c50a44190e7d870b42e1ae31.jpg', title: 'Black Casual Top', price: 'KSh 850.00' },
      ],
    },
    {
      category: 'Formal Tops',
      items: [
        { id: 4, src: 'https://i.pinimg.com/474x/03/ca/2c/03ca2c92a2b2aaede3cd381bf6666f6e.jpg', title: 'White Formal Shirt', price: 'KSh 1,200.00' },
        { id: 5, src: 'https://i.pinimg.com/474x/1f/aa/3a/1faa3aff24e0e651e964e44cd1cdb00d.jpg', title: 'Blue Formal Shirt', price: 'KSh 1,300.00' },
        { id: 6, src: 'https://i.pinimg.com/474x/d6/f8/98/d6f8989a3fcc5432d464cbeb388eec1d.jpg', title: 'Black Formal Shirt', price: 'KSh 1,250.00' },
      ],
    },
    {
      category: 'Casual Tops',
      items: [
        { id: 1, src: 'https://i.pinimg.com/474x/a4/2e/de/a42ede7267e51df780d7d8b3f4897fb3.jpg', title: 'White Casual Top', price: 'KSh 800.00' },
        { id: 2, src: 'https://i.pinimg.com/474x/b3/66/4c/b3664c69c3635b760fe0565d109dcd98.jpg', title: 'Blue Casual Top', price: 'KSh 900.00' },
        { id: 3, src: 'https://i.pinimg.com/474x/bc/a5/a4/bca5a418bba3b32dd35b120c0027acf7.jpg', title: 'Black Casual Top', price: 'KSh 850.00' },
      ],
    },
    {
      category: 'Formal Tops',
      items: [
        { id: 4, src: 'https://i.pinimg.com/474x/4e/cf/27/4ecf278abfdb91dfa7c7736602e350bf.jpg', title: 'White Formal Shirt', price: 'KSh 1,200.00' },
        { id: 5, src: 'https://i.pinimg.com/474x/44/e2/ab/44e2ab4710cdfabd7d9c9dd59f872c26.jpg', title: 'Blue Formal Shirt', price: 'KSh 1,300.00' },
        { id: 6, src: 'https://i.pinimg.com/474x/41/a4/31/41a431344b7cfdb639046c1f4ecbcace.jpg', title: 'Black Formal Shirt', price: 'KSh 1,250.00' },
      ],
    },
    // More categories...
  ];

  // State to manage the cart and wishlist
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load cart and wishlist from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setCart(storedCart);
    setWishlist(storedWishlist);
  }, []);

  // Function to add shirt to cart
  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Persist to localStorage
  };

  // Function to add shirt to wishlist
  const addToWishlist = (item) => {
    const updatedWishlist = [...wishlist, item];
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); // Persist to localStorage
  };

  return (
    <div className="bg-gray-50 p-6">
      <h3 className="text-3xl font-semibold text-center mb-8">Shirts Catalog</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {categories.map((category, index) => (
          <div key={index} className="w-full">
            <h4 className="text-2xl font-semibold text-center mb-4">{category.category}</h4>
            
            {/* List of shirts (using CategoryCard for each item) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {category.items.map((shirt) => (
                <CategoryCard
                  key={shirt.id}
                  title={shirt.title}
                  image={shirt.src}
                  price={shirt.price}
                  onAddToCart={() => addToCart(shirt)}
                  onAddToWishlist={() => addToWishlist(shirt)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatalogShirts;
