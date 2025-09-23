import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ProductCard from "./components/ProductCard.jsx";
import ListaInterativa from "./components/ListaInterativa.jsx"; // 👈 aqui
import "./App.css";

function App() {
    const product = [
        {id: 1, name: "Notebook", price: 3500, description: "Notebook com 16GB RAM e 512GB SSD"},
        {id: 2, name: "Smartphone", price: 2000, description: "Tela AMOLED e câmera tripla"},
        {id: 3, name: "Fone de ouvido", price: 300, description: "Bluetooth com cancelamento de ruido"},
        {id: 4, name: "Teclado", price: 450, description: "Teclado mecânico RGB para PC"}
    ];

    return (
        <div className="app-container">
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="content-area">
                    
                    {/* Cards dos produtos */}
                    {product.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            description={product.description}
                        />
                    ))}

                    {/* Sua lista interativa */}
                    <ListaInterativa /> 
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
