import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "./Header.css";

function Header() {
  const { total } = useContext(CartContext);

  return (
    <header className="header">
      <h1>Minha Loja</h1>
      <div className="cart-info">
        Total: R$ {total.toFixed(2)}
      </div>
    </header>
  );
}

export default Header;
