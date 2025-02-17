* Nombre: Matias Casiba
* Link GitHub: https://github.com/MatiCasiba/desafio-14-react
* Link Netlify:

# Desafio 14 - REACT

## UserCard
Se ha creado una tarjeta, esta es el componete UserCard.jsx que se encuentra dentro de src/components. En este archivo se estará creando el contenido de la tarjeta, con información a través de los props:

```sh
const UserCard = ({nombre, edad, profesion}) => {
  return (
    <div className="bg-amber-50 shadow-lg rounded-2xl p-6 m-auto my-1.5 max-w-sm border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-500 text-center mb-3.5">{nombre}</h2>
        <p className="text-gray-400 text-sm">Edad: {edad}</p>
        <p className="text-gray-400 text-x">{profesion}</p>
        
    </div>
  )
}

export default UserCard
```
* al momneto de usar las props, se encontrarán dentro de llaves {}, porque tengo que insertar expresiones del js dentro del jsx. 
* En el contenedor eh usado un color cremita, sombra, border-radius (que es el rounde-2xl), relleno, centré la tarjeta con el margin:auto, le dí espacio en el margen de arriba y le di un borde
* Verás que el h2 tiene diferente tamaño, grosor y color de letra de lo que son los dos elementos p, en los dos p notarás el mismo color pero diferente tamaño también
* Las props dentro de los elementos, las verás también en App.jsx, de esta manera lograremos mostrar la información a través de las props (en App.jsx me debo traer el componente UserCard.jsx para que funcione):
```sh
import UserCard from "./components/UserCard"


const App = () => {
  return (
    <div>
      <UserCard nombre="Matias Gabriel Casiba" edad={23} profesion="Fron End Developer" />
      
    </div>
  )
}

export default App

```

## LikeButton
Se creó un componente LikeButton, este es un botón y va a cambiar entre like y unlike cuando se haga click en el. Para poder lograr dicho objetivo, lo trabajé del siguiente modo:
```sh
import { useState } from "react";

const LikeButton = () => {
  const [isActive, setIsActive] = useState(true);

  const like = () => {
    setIsActive(!isActive); # false
  };

  return (
    <div className="text-center"> # centro el botón
      <button
        className={`p-2 rounded-md shadow-lg text-white font-bold border cursor-pointer 
          ${isActive ? "bg-blue-400 border-blue-800" : "bg-red-500 border-red-800"}`}
        onClick={like}
      >
        {isActive ? "Like" : "Unlike"}
      </button>
    </div>
  );
};

export default LikeButton;
```
* Para cumplir con lo pedido, como verás, trabajé con un renderizado condicional, con esto muestro contenido diferente dependiendo del estado o alguna condición
* Importe el useState
* isActive -> es el estado | setIsActive -> es la función que modifica el estado
* Lo que eh trabajado en este código es la modificación de bordes y color de fondo y el texto del botón, utilicé una condicional con tailwind, que es la que se va a encargar de modificar los colores, esa condicional se va a encontrar dentro del className:
```sh
      <button
        className={`p-2 rounded-md shadow-lg text-white font-bold border cursor-pointer
          ${isActive ? "bg-blue-400 border-blue-800" : "bg-red-500 border-red-800"}`}
        onClick={like}
        # el botón estará en azul y cuando se haga click en el, se cambiará al color rojo
      >
        {isActive ? "Like" : "Unlike"} # esto me sirve para cambiar el texto, si se encuentra en like, cuando se seleccione el boton, pasará a decir "Unlike"
      </button>
```

## Poducto
En este componente habrá un producto con su nombre y descripción, al principio no verás la descripción, pero cuando selecciones "ver más", verás la descripción del producto. Para poder lograr que funcione esto, utilicé un useState, te mostraré como lo eh hecho:
```sh
import { useState } from "react"

const Producto = ({nombre, descripcion}) => {
  const [isActive, setIsActive] = useState(true)

  const ocultar = () =>{
    setIsActive(!isActive) # false
  }

  return (
    <div className="my-10 max-w-sm m-auto shadow-lg p-5 border rounded-2xl">
        <h2 className="mb-2 font-bold text-2xl">{nombre}</h2>
        {
            isActive ? (<p>...</p>) : (<p>{descripcion}</p>)
            # primero no mostrará nada y cuando selecciones ver más, te mostrará la descripcion
        }
        <button
            className="cursor-pointer text-blue-400" 
            onClick={ocultar} # utilizo el evento para que pueda funcionar el ocultamiento de la descripción
        >
            {isActive ? 'Ver más': 'Ver menos'}
            # cambiará el texto del botón segun la accion que hagas, al inicio mostrará ver mas, pero cuando hagas click en el, se pondrá "ver menos"
        </button>
        
    </div>
  )
}

export default Producto
```
* Habrá dos props que se parasá su info en el App.jsx:
```sh
      <Producto 
        nombre="Sony Playstation 5 Slim 1tb" 
        descripcion="La consola PS5 Slim libera nuevas posibilidades de juego. Experimenta una carga ultrarrápida con un SSD de velocidad ultra alta, una inmersión más profunda con soporte para retroalimentación háptica, disparadores adaptativos y audio 3D.2" 
      />
```
Esta info lo contendrá las props que se encuentra entre llaves en el componente Producto.jsx, ejemplo: <h2>{nombre}</h2>
* Trabajé con el renderizado condicional para que funcione

### Estilo el boton
El boton de ver mas y ver menos, tendrá un decorado, habrá una linea debajo del texto cuando te pares sobre este:
```sh
        <button
            className="cursor-pointer text-blue-400 p-1.5 hover:underline" 
            onClick={ocultar}
        >
            {isActive ? 'Ver más': 'Ver menos'} 
        </button>
```
* hover:underline será el causante de este
* cursour-pointer -> cuando te pares sobre este boton, verás que se convierte en una pequeña mano señalando
* Una cosa a destacar, no verás un boton como los botones que conoces, sino que utilicé el elemento button, solamente verás el texto sin un recuadro
* p-1.5 -> es el relleno del elemento button

## Contador con límite personalizado
En este componente recibimos un límite máximo como prop, cuando se llega a ese límite, el botón de incrementar se deshabilita.
* Armado del componente Contador:
```sh
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
        Incrementar: {contador} # muestro el valor del contador
    </button>
  )
}

export default Contador
```
* en contador guardo el valor actual de contador, con el setContador voy a actualizar ese valor
* useState(inicioConteo) -> inicializo el contador con el valor que recibo el prop de este (será 1)
* en la función de incrementar, hago que si contador es menor que el limite, que incremente, osea que suma 1 al contador. Cuando el usuario llegue al límite, se dejará de contar
* disabled={contador >= limite} -> va a cumplir la función de deshabilitar el botón cuando se alcanza el límite del contador

### Props del componente en el App.jsx:
```sh
<Contador inicioConteo={1} limite={10} />
```