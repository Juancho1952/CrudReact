import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUsers.css'

const defaultValues = {
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    birthday: '',
}

const FormUsers = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormIsClose }) => {
    //console.log(updateInfo)
    const { handleSubmit, reset, register } = useForm()

    useEffect(() => {
        if (updateInfo) {
            reset(updateInfo)
        }
    }, [updateInfo])


//Analisis de oprimir el boton de create, para update or create
    const submit = data => {
        if (updateInfo) {
            //update
            updateUserById(updateInfo.id, data)
            setUpdateInfo()
        } else {
            //create
            createNewUser(data)
        }
        reset(defaultValues)
        setFormIsClose(true)
    }

const handlCloseForm = () => {
    setFormIsClose(true)
    setUpdateInfo()
    reset(defaultValues)
}

    return (
        <form className='form' onSubmit={handleSubmit(submit)}>
            <i onClick={handlCloseForm} className=" form__x fa-solid fa-xmark"></i>
            <h2 className='form__title'>{updateInfo ? 'Edit User' : 'New User'}</h2>
            <div className='form__div'>
                <label className='form__label' htmlFor="email">Email</label>
                <input className='form__input' placeholder='Enter your Email' type="email" id='email' {...register("email")} required="email"/>
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="password">Password</label>
                <input className='form__input' placeholder='Enter your Password' type="password" id="password" {...register("password")} required="password" />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="first_name">First Name</label>
                <input className='form__input' placeholder='Enter your First Name' type="text" id="first_name" {...register("first_name")} required="required" />
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="last_name">Last Name</label>
                <input className='form__input' placeholder='Enter your Last Name'type="text" id="last_name" {...register("last_name")} required="required"/>
            </div>
            <div className='form__div'>
                <label className='form__label' htmlFor="birthday">BirthDay</label>
                <input className='form__input' type="date" id="birthday" {...register("birthday")} required="date" />
            </div>
            <button className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
        </form>

    )
}

export default FormUsers