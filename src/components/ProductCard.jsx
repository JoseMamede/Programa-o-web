import React, { useState } from "react";
import "./ProductCard.css";

function ProductCard({ name, price, description }) {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleRemove = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>Preço: R$ {price}</p>
      <p>{description}</p>

      <button onClick={handleAdd}>Add Carrinho</button>

      {quantity > 0 && (
        <>
          <button onClick={handleRemove}>Remover Item Carrinho</button>
          <p>Quantidade de Itens no Carrinho: {quantity}</p>
        </>
      )}
    </div>
  );
}

export default ProductCard;
