import { useState } from "react";
import "./ListaInterativa.css"; // 👈 importa o CSS

export default function ListaInterativa() {
  const [texto, setTexto] = useState("");
  const [itens, setItens] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const adicionarOuEditarItem = () => {
    if (texto.trim() === "") return;

    if (editIndex !== null) {
      const novaLista = [...itens];
      novaLista[editIndex] = texto;
      setItens(novaLista);
      setEditIndex(null);
    } else {
      setItens([...itens, texto]);
    }
    setTexto("");
  };

  const excluirItem = (index) => {
    const novaLista = itens.filter((_, i) => i !== index);
    setItens(novaLista);
  };

  const editarItem = (index) => {
    setTexto(itens[index]);
    setEditIndex(index);
  };

  return (
    <div className="lista-container">
      <h2>Lista Interativa</h2>

      <div className="input-area">
        <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Digite algo..."
        />
        <button onClick={adicionarOuEditarItem}>
          {editIndex !== null ? "Salvar" : "Adicionar"}
        </button>
      </div>

      <ul className="lista-itens">
        {itens.map((item, index) => (
          <li key={index} className="lista-item">
            <span>{item}</span>
            <div className="botoes">
              <button onClick={() => editarItem(index)}>Editar</button>
              <button onClick={() => excluirItem(index)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
