import { useState } from "react";
function Contador(){
    const[numero, setNumero] = useState(0);
    
    function incrementar(){
        setNumero(numero + 1)
  
    };

    
    return(
        <div>
            <h2>Valor Atual:{numero}</h2>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={() => setNumero(numero - 1)}>Decrementar</button>
            <button onClick={() => setNumero(0)}>Resetar</button>
        </div>
    );
}

export default Contador;