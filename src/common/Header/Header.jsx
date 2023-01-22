import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import Logo from './home.jpg';
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/User/userSlice";
import { find } from '../../pages/serieSlice';
import { InputText } from '../InputText/InputText';
import { getSearch } from '../../services/apiCalls';

export const Header = () => {


    const dispatch = useDispatch();

    const initial = {
        token: '',
        user: {}
    }


    const [search, setSearch] = useState([]);

    const datosReduxUsuario = useSelector(userData);

    useEffect(()=>{
        if(search !== ""){

            getSearch(search)
                .then(
                    resultado => {
                       
                         dispatch(find({series : resultado.data}))
                    }
                )
                .catch (error => console.log(error));
        }
    }, [search])

    const navigate = useNavigate();

    const logOff = ()=> {
        dispatch(logout ({userPass: initial}))
        navigate("/")
    }

    const handleSearch = (e)=>{
        setSearch(e.target.value);
    }

    return (
        <div className='headerDesign'>
            <div onClick={()=>navigate("/")} className='logoDesignHeader'><img className='homeAvatar' src={Logo} alt="Home"/></div>
            <div className='searchDesign'>
                <InputText type={"text"} id = "barraBusqueda" name={"search"} placeholder={"Qué quieres buscar?"} functionHandler={handleSearch}/>
            </div>

            <div className='headerLinksDesign'>

                {datosReduxUsuario.userPass.token !== "" ?

                    (<>
                        <div onClick = {()=>navigate("/profile")}className='linkDesign' >{datosReduxUsuario.userPass.nickname}</div>
                        
                        <div className='linkDesign' onClick={() => logOff()}>logout</div>
                    </>)


                    : (
                         <>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/login") }, 200)}>login</div>
                            <div className='linkDesign' onClick={() => setTimeout(() => { navigate("/register") }, 200)}>register</div>
                        </>
                    )
                }

            </div>
        </div>


    );


};