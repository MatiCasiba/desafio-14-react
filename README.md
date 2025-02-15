* Nombre: Matias Casiba
* Link GitHub:
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
