import { useState } from "react"

const Contador = ({inicioConteo, limite}) => {
  const [contador, setContador] = useState(inicioConteo)

  const incrementar = () =>{
    if (contador < limite){
        setContador(contador+1)
    }
  }  
  return (
    <div className="flex items-center justify-center">
        <button 
            className="cursor-pointer bg-gray-200 border shadow-2xl p-2 rounded-2xl tracking-widest" 
            onClick={incrementar}
            disabled={contador >= limite}
        >
            Incrementar
        </button>
        <p className="font-bold ml-3.5">: {contador}</p>
    </div>
  )
}

export default Contador