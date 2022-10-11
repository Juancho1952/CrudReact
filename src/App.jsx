
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
import DeleteUser from './components/DeleteUser'

const baseURL = 'https://users-crud1.herokuapp.com'


function App() {

  const [users, setUsers] = useState()

  //Esto para pasar info desde UserCard hats el Form User
  const [updateInfo, setUpdateInfo] = useState()
  //console.log(updateInfo)
  const [formIsClose, setFormIsClose] = useState(true)
  //Eliminar desde la ventana Modal
  const [deleteUser, setDeleteUser] = useState(true)
  //Traer toda la información del boton eliminar
  const [deleteTodo, setDeleteTodo] = useState()

  // Este para hacer el GET de todos los Users
  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()

  }, [])

  //para crear un unuevo usaario

  const createNewUser = data => {
    const URL = `${baseURL}/users/`
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  //console.log(users)

  //Para eliminar un usuario especifico

  const deleteUserById = id => {
    const URL = `${baseURL}/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  //Para actualizar un usuario en especifico
  const updateUserById = (id, data) => {
    const URL = `${baseURL}/users/${id}/`
    axios.patch(URL, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
      })
      .catch(err => console.log(err))
  }

  const handleOpenForm = () => {
    setFormIsClose(false)
  }


  return (
    <div className="App">
      <div className='App__container-title'>
        <h1 className='App__title'>Users CRUD</h1>
        <button onClick={handleOpenForm} className='App__btn'>Create New User</button>
      </div>
      <div className={`delete__container ${deleteUser && 'delete__disable'}`}>
        <DeleteUser
          deleteTodo={deleteTodo}
          users={users}
          setFormIsClose={setFormIsClose}
          deleteUserById={deleteUserById}
          setDeleteUser={setDeleteUser}
          setDeleteTodo={setDeleteTodo}
        />
      </div>

      <div className={`form__container ${formIsClose && 'form__disable'}`}>
        <FormUsers
          createNewUser={createNewUser}
          updateInfo={updateInfo}
          updateUserById={updateUserById}
          setUpdateInfo={setUpdateInfo}
          setFormIsClose={setFormIsClose}
        />
      </div>
      <div className='users__container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              setUpdateInfo={setUpdateInfo}
              setFormIsClose={setFormIsClose}
              setDeleteUser={setDeleteUser}
              setDeleteTodo={setDeleteTodo}
            />
          ))
        }

      </div>

    </div>
  )
}

export default App
