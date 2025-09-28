import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ProductCard from "./components/ProductCard";
import ListaInterativa from "./components/ListaInterativa";
import { CartProvider } from "./components/CartContext"; // 👈 agora vem de components
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Notebook", price: 3500, description: "Notebook com 16GB RAM e 512GB SSD" },
    { id: 2, name: "Smartphone", price: 2000, description: "Tela AMOLED e câmera tripla" },
    { id: 3, name: "Fone de ouvido", price: 300, description: "Bluetooth com cancelamento de ruido" },
    { id: 4, name: "Teclado", price: 450, description: "Teclado mecânico RGB para PC" }
  ];

  return (
    <CartProvider>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Sidebar />
          <div className="content-area">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product} // 👈 passamos o objeto inteiro
              />
            ))}

            <ListaInterativa />
          </div>
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
