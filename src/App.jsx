import LikeButton from "./components/LikeButton"
import UserCard from "./components/UserCard"


const App = () => {
  return (
    <div>
      <UserCard nombre="Matias Gabriel Casiba" edad={23} profesion="Fron End Developer" />
      <LikeButton />
    </div>
  )
}

export default App
