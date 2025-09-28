import React, { createContext, useState } from "react";

// Criamos o contexto
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Adicionar produto
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  // Remover produto (remove apenas a primeira ocorrência encontrada)
  const removeFromCart = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCart = [...cartItems];
      newCart.splice(index, 1);
      setCartItems(newCart);
    }
  };

  // Calcular total
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
