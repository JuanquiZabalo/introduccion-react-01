import { useState } from "react";

export default function Contador(){
    const [contador, setContador] = useState(0)

    function handleContador(){
        setContador(contador + 1)
    }

    return(
        <button onClick={handleContador}>
            Contador: {contador} 
        </button>
    )

}