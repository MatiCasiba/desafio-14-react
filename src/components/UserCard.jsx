
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