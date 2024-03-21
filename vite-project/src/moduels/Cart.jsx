import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (book) => {
    setCart([...cart, book]); // Add the book to the cart
  };

  const cartCount = cart.length; // Calculate the cart count based on the cart array

  return { cartCount, handleAddToCart };
};

export default Cart;