import { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");

  return (
    <>
      <h1>Formulario de cadastro</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
      />
      <p>Você digitou: {nome}</p>
    </>
  );
}

export default Formulario;
