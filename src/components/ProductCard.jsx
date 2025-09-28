import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { addToCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Preço: R$ {product.price}</p>
      <button onClick={() => addToCart(product)}>Adicionar</button>
      <button onClick={() => removeFromCart(product)}>Remover</button>
    </div>
  );
}

export default ProductCard;
