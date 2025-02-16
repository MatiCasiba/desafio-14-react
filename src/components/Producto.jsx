import { useState } from "react"

const Producto = ({nombre, descripcion}) => {
  const [isActive, setIsActive] = useState(true)

  const ocultar = () =>{
    setIsActive(!isActive)
  }

  return (
    <div className="my-10 max-w-sm m-auto shadow-lg p-5 border rounded-2xl">
        <h2 className="mb-2 font-bold text-2xl">{nombre}</h2>
        {
            isActive ? (<p>...</p>) : (<p>{descripcion}</p>)
        }
        <button
            className="cursor-pointer text-blue-400 p-1.5 hover:underline" 
            onClick={ocultar}
        >
            {isActive ? 'Ver más': 'Ver menos'} 
        </button>
        
    </div>
  )
}

export default Producto