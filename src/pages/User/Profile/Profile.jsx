import React, { useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { serieData } from '../../serieSlice';

export const Profile = () => {

    const navigate = useNavigate();

    const userRDX = useSelector (userData);
    const dataRDX = useSelector (serieData);


    useEffect(()=>{
        if(userRDX.userPass.token === ''){
            navigate('/');
        };
    },[]);

    return(
        <div className='profileDesign'>
            <div className='profileCard'>
                <header id="cabecera">Datos del usuario</header>
                <div>
                    <p>Nombre:</p>
                    {userRDX.userPass.name}
                </div>
                <div>
                    <p>Apellido:</p>
                    {userRDX.userPass.surname}
                </div>
                <div>
                    <p>Email:</p>
                    {userRDX.userPass.email}
                </div>
                <div>
                    <p>Teléfono de contacto:</p>
                    {userRDX.userPass.phone}
                </div>
                <div>
                    <p>Nombre de usuario:</p>
                    {userRDX.userPass.nickname}
                </div>
            </div>
            {/* <div className='profileCard'>
                <header id="cabecera">Serie Alquilada</header>
                <div>
                    {dataRDX.choosen.tittle}
                </div>
                
            </div> */}
            
        </div>
    )
};
