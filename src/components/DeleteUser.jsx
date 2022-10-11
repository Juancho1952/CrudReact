import React, { useState } from 'react'
import './styles/DeleteUser.css'

const DeleteUser = ({ setDeleteUser, deleteUserById, setDeleteTodo, deleteTodo }) => {


  const handleDelete = () => {
    if (deleteTodo) {
      deleteUserById(deleteTodo.id)
      setDeleteUser(true)
    }
  }

  const handleClose = () => {
    setDeleteUser(true)
    setDeleteTodo(false)
  }

  return (
    <div className='delete__user'>
      <i className="delete__x fa-solid fa-xmark" onClick={handleClose}></i>
      <p className='delete__title'> Are you sure you want to remove {deleteTodo?.first_name} {deleteTodo?.last_name} ?</p>
      <article className='buttons_delete_and_cancel'>
        <button className='delete__btn' onClick={handleDelete}>OK</button>
        <button className='cancel__btn' onClick={handleClose}>Cancel</button>
      </article>
    </div>
  )
}

export default DeleteUser