import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../../common/InputText/InputText';
import './Register.css';
import { postRegistered } from '../../../services/apiCalls';
export const Register = () => {
    const [usuario, setUsuario]= useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        phone: '',
        nickname: ''
    })

    const navigate = useNavigate();

    const registerInputHandler = (e) => {
        setUsuario((prevState)=>({...prevState,
        [e.target.name] : e.target.value
        }))
    }

    const signMe = () => {

        postRegistered(usuario)
            .then(

                  newUser => {
                      console.log(newUser)
                    setTimeout(()=>{
                        navigate("/")
                    },750);

                    
                }
            )
            .catch(error => console.log(error));
    }

    return (
        <div className='registerDesign'>
            <p>Nombre</p>
            <InputText  type={'text'} name = {'name'} placeholder={'nombre'} functionHandler={registerInputHandler}/>
            <p>Apellido</p>
            <InputText  type={'text'} name = {'surname'} placeholder={'apellido'} functionHandler={registerInputHandler}/>
            <p>Email</p>
            <InputText type={'email'} name = {'email'} placeholder={'email'} functionHandler={registerInputHandler}/>
            <p>Contraseña</p>
            <InputText type={'password'} name = {'password'} placeholder={'contrasenya'} functionHandler={registerInputHandler}/>
            <p>Teléfono de contacto</p>
            <InputText type={'text'} name = {'phone'} placeholder={'telefono'} functionHandler={registerInputHandler}/>
            <p>Nombre de usuario</p>
            <InputText  type={'text'} name = {'nickname'} placeholder={'nombre de usuario'} functionHandler={registerInputHandler}/>
            <div className='loginButtonDesign' onClick={()=>signMe()}>Sign in</div>
        </div>
    );
};