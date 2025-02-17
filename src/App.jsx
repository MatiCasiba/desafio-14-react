import Contador from "./components/Contador"
import LikeButton from "./components/LikeButton"
import Producto from "./components/Producto"
import UserCard from "./components/UserCard"


const App = () => {
  return (
    <div>
      <UserCard nombre="Matias Gabriel Casiba" edad={23} profesion="Fron End Developer" />
      <LikeButton />
      <Producto 
        nombre="Sony Playstation 5 Slim 1tb" 
        descripcion="La consola PS5 Slim libera nuevas posibilidades de juego. Experimenta una carga ultrarrápida con un SSD de velocidad ultra alta, una inmersión más profunda con soporte para retroalimentación háptica, disparadores adaptativos y audio 3D.2" 
      />
      <Contador inicioConteo={1} limite={10} />
    </div>
  )
}

export default App
