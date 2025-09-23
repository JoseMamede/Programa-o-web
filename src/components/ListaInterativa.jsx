import { useState } from "react";

export default function ListaInterativa() {
  const [texto, setTexto] = useState(""); 
  const [itens, setItens] = useState([]); 

  const adicionarItem = () => {
    if (texto.trim() !== "") {
      setItens([...itens, texto]); 
      setTexto(""); 
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-2">Lista Interativa</h2>

  
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Digite algo..."
        className="border p-2 rounded w-full mb-2"
      />


      <button
        onClick={adicionarItem} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Adicionar
      </button>

      {itens.length > 0 && (
        <ul className="mt-4 list-disc pl-5">
          {itens.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
