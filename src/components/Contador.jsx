import { useState } from "react"

const Contador = ({inicioConteo, limite}) => {
  const [contador, setContador] = useState(inicioConteo)

  const incrementar = () =>{
    if (contador < limite){
        setContador(contador+1)
    }
  }  
  return (
    <button 
        className="cursor-pointer" 
        onClick={incrementar}
        disabled={contador >= limite}
    >
        Incrementar: {contador}
    </button>
  )
}

export default Contador