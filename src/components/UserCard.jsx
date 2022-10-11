import React from 'react'
import './styles/UserCard.css'

const UserCard = ({ user, setUpdateInfo, setFormIsClose, setDeleteUser, setDeleteTodo }) => {
  const handleEdit = () => {
    setUpdateInfo(user)
    setFormIsClose(false)
  }

  const handleDelete= () =>{
    setDeleteTodo(user)
    setDeleteUser(false)
  }

 // console.log(user)
  return (
    <article className='user'>
      <h2 className='user__name'>{`${user.first_name} ${user.last_name}`}</h2>
      <ul className='user__list'>
        <li className='user__item'><span className='user__span' >Email: </span>{user.email}</li>
        <li className='user__item'><span className='user__span'>Birthday: </span>
          <div className='user__item-container'>
            <i className="user__gift fa-solid fa-gift"></i>{user.birthday}
          </div>
        </li>
      </ul>
      <footer className='user__footer'>
        <button className='user__btn' onClick={handleDelete} >
          <i className="user__trash fa-solid fa-trash-can"></i>
        </button>

        <button className='user__btn' onClick={handleEdit}>
          <i className="user__edit fa-solid fa-pencil"></i>
        </button>

      </footer>
    </article>
  )
}

export default UserCard