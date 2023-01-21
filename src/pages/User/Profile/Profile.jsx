import React, { useEffect } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { userData } from '../userSlice';

export const Profile = () => {

    const navigate = useNavigate();

    const userRDX = useSelector (userData);

    useEffect(()=>{
        if(userRDX.userPass.token === ''){
            navigate('/');
        };
    },[]);

    return(
        <div className='profileDesign'>
            {userRDX.userPass.name}
        </div>
    )
};