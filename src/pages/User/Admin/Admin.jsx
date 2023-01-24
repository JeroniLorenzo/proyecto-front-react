import React, { useState, useEffect } from 'react';
import './Admin.css';
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import { userData } from '../userSlice';
import { allUsersAdmin } from '../../../services/apiCalls';

export const Admin = () => {

    const navigate = useNavigate();


    const userRDX = useSelector(userData);

    const [allUsers, setAllUsers] = useState([]);

    useEffect(()=>{
        
         if(userRDX.userPass.rol !== 'admin'){
             navigate("/");
         }

    },[])

    useEffect(()=>{

        if(allUsers.length === 0){

            allUsersAdmin()
                .then(resultado => {

                    setAllUsers(resultado);
                })
                .catch(error => console.log(error));
        };

    },[allUsers]);

    return (
        <div className='adminDesign'>
            {allUsers.length > 0 &&
            
                allUsers.map(
                    user => {
                        return (
                            <div key={user.id}>{user.name} {user.surname}</div>
                        )
                    }
                )
            }

        </div>
    )
};