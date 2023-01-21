import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputText } from '../../../common/InputText/InputText';
import { postLogin } from '../../../services/apiCalls';
import { Decoder } from '../../../services/utiles';
import { useSelector, useDispatch } from "react-redux";
import { userData, login } from '../userSlice';
import './Login.css';

export const Login = () => {

    const dispatch = useDispatch();

    const datosReduxUsuario = useSelector(userData);

    const [credenciales, setCredenciales] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const InputHandler = (e) => {
        
        setCredenciales((prevState)=>({...prevState, 
            [e.target.name] : e.target.value
            
        }));;
    }

    const Logeame = () => {

        postLogin(credenciales)
            .then(
                resultado => {

                    let decodificado = Decoder(resultado.data.token);
                    let userPass = {
                        token : resultado,
                        user: decodificado._id,
                        name: resultado.data.user[0].name

                    }
                        
                    dispatch(login({userPass: userPass}));

                    setTimeout(()=>{
                        navigate("/")
                    },750);
                }
            )
            .catch(error => console.log(error));
    }
    
    useEffect(()=>{
        if(datosReduxUsuario.userPass.token !== ''){
            navigate("/");
        }
    },[])

    return (
        <div className='loginDesign'>
            
            <InputText 
                type={"email"} 
                name={"email"} 
                placeholder={"Escribe tu email"} 
                functionHandler={InputHandler}
            />
            <InputText 
                type={"password"} 
                name={"password"} 
                placeholder={"Escribe tu contraseña"} 
                functionHandler={InputHandler}
            />

            <div className='loginButtonDesign' onClick={()=>Logeame()}>LOGIN</div>
        </div>
    );
};